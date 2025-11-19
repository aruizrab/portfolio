---
title: "SODD Framework: Game Architecture with Unity's ScriptableObjects."
description: "How a thesis project evolved a scrappy Heist Academy prototype into a full ScriptableObject Driven Development framework for Unity, complete with tooling, CI/CD, documentation and a sample game."
date: "2025-11-19"
tags:
  - Unity
  - SODD Framework
---

(*If you only want to check the framework's repo, [here it is](https://github.com/aruizrab/sodd-unity-framework).*)

# From Heist Academy to a Framework

[Heist Academy](./heist-academy) was the first time I really abused ScriptableObjects in Unity in the best possible way. Faced with a stealth game, one level, and effectively a one person programming department, I ended up building a small toolkit of Scriptable Events, variables and collections that let designers wire behaviour from the Inspector while I focused on architecture. At the time it felt like a survival trick. In hindsight it was the prototype of something more serious.

Ryan Hipple’s talk on ScriptableObject driven architectures had been sitting quietly in the back of my mind while I wired that game together. He spoke about modularity, editability and debuggability as first class engineering goals, not nice to haves. In Heist Academy I proved to myself that the pattern worked in a messy, deadline driven student project. The thesis that followed was the natural escalation: take those ideas, formalise them, and build a proper framework and workflow so that ScriptableObject Driven Development (SODD) could be a deliberate method rather than a desperate hack.

The result was the SODD Framework, an open source Unity package that implements a full ScriptableObject based architecture, ships with documentation, CI/CD, and a sample game, and tries to fill a gap that Unity never quite got round to addressing.

# The problem SODD tries to solve

Unity is a very capable engine, but the default path it encourages has some unfortunate side effects. Large projects tend to grow around MonoBehaviours glued into scenes, singletons that quietly become global state, and hidden dependencies that only reveal themselves when they break at three in the morning.

In practice you run into a familiar list of problems:

You have logic and data welded together into components that are hard to test in isolation. Shared state is shoved into static variables or singleton managers that outlive scenes in surprising ways. Designers need code changes to tweak basic values. Debugging becomes a matter of sprinkling `Debug.Log` and hoping for the best. Collaboration is painful, because a single scene or prefab file becomes a merge conflict magnet.

ScriptableObjects offer a way out: they can live outside scenes, persist changes between play sessions in the editor, and behave as modular assets rather than components. Hipple’s work showed how to use them as events, variables, and runtime sets. What was missing was a cohesive, well designed framework that:

* Encapsulates those patterns into reusable types.
* Makes them inspector friendly for designers.
* Bakes in logging and debuggability.
* Plays nicely with Unity’s newer Input System.
* Ships as a proper Unity package with tests, CI, docs and an example of real use.

That was the thesis goal: take the scattered ideas from Heist Academy and Hipple’s talk and turn them into a structured, documented, installable framework.

# From concept to plan: requirements, scope and workflow

Before writing any code I treated the framework as a real software product, not a student exercise. That meant starting with objectives and constraints rather than scripts.

At a high level I set three principal objectives. First, design and implement a Unity framework that makes ScriptableObject Driven Development practical, not merely academic. Second, produce proper documentation, both inline XML comments for API reference and a manual that shows how to use it. Third, prove the whole thing in anger by building a complete sample game entirely on top of the framework.

Around those objectives I defined requirements and prioritised them using the MoSCoW method. Scriptable Events for core data types, Scriptable Variables, Scriptable Collections and their matching listeners were “Must haves”. Input integration, variable repositories, value references and control scheme handling were “Should haves”. More exotic data types and syntactic sugar, like colour events or layered collections, were “Could haves” for a future version.

Every requirement became a user story in GitHub: “As a designer I want to raise a global event from a ScriptableObject so I can decouple systems”, “As a developer I want to persist Scriptable Variables across sessions so I can store game progress”, and so on. Each story had a Definition of Ready and Definition of Done, which sounds slightly corporate for a one person thesis, but forced me to think in terms of tests, documentation, CI passes and example usage instead of “it compiles, therefore it is fine”.

Git became the backbone of the project. There was a stable `main` branch for released versions, a `develop` branch for integrated features, and one feature branch per user story. Every feature moved from issue to branch to pull request to `develop`, and only then to `main` once the pipeline passed. It was essentially a miniature industrial workflow attached to a student project, with the advantage that nothing got “lost in the sauce” of an overgrown Unity project.

# Building the SODD Framework

Once the scaffolding was in place, the framework itself took shape around a few core ideas: Scriptable Events, Scriptable Variables, Scriptable Collections, observers and integration pieces for input and persistence. All of them share three design goals: modularity, editability and debuggability.

## Scriptable Events and Event Listeners

Scriptable Events are ScriptableObjects that encapsulate the idea of “something happened”. Under the hood each event wraps a C# delegate: methods subscribe with `AddListener`, unsubscribe with `RemoveListener`, and the event instance calls `Invoke` with a payload when needed. The base generic `Event<T>` is specialised into `VoidEvent`, `IntEvent`, `FloatEvent`, `StringEvent`, `Vector2Event`, `GameObjectEvent` and friends.

Custom inspectors expose a debug toggle and an inline “Invoke” button. In the editor you can set a payload, press a button, and see a nicely formatted log entry appear in the Console pointing back to the event asset. That satisfies the “I want to know who fired what” side of debugging without writing a single line of extra code.

Event Listeners sit on the scene side. A listener is a MonoBehaviour that subscribes to a Scriptable Event and forwards its payload into a `UnityEvent`. This might look redundant until you realise what it buys you: behaviour can now be wired entirely from the Inspector. Designers can say “when this Int Event fires, call this method on this component with the payload” without coupling any scripts to any particular event instance.

The result is an event system that is globally addressable through assets, locally configurable through listeners, easy to debug from the inspector, and does not rely on singletons.

## Scriptable Variables and Variable Observers

Scriptable Variables encapsulate a single piece of state as a ScriptableObject. The generic `Variable<T>` stores a value, exposes it through a `Value` property, and raises an internal “value changed” delegate whenever the value is modified. There is an optional read only flag for constants and a debug toggle that logs every change in the Console.

The pattern shines when paired with Variable Observers. An observer is a component that references a Scriptable Variable, subscribes to its change notifications, and exposes a `UnityEvent<T>` that runs whenever the value changes. A small optional initial check runs the event once on enable with the current value, which is ideal for UI elements.

In practice this allows you to centralise state in assets and fan it out into the scene. A player score, for instance, lives in a single `IntVariable`. The score manager increments it, the UI listens reactively and redraws, and any other system that cares about the score can subscribe without being aware of the others. No polling, no hard coded references, no god objects.

## Scriptable Collections

Scriptable Collections, conceptually related to Hipple’s runtime sets, track groups of things at runtime. The generic `Collection<T>` keeps a list of items, provides `Add`, `Remove` and `Contains` operations, and emits events when items are added or removed.

They solve the very common “who is currently in this group” question. Enemies currently alive, keys the player has collected, interactive objects in a room, all can be modelled as collections. In the sample game a `GameObjectCollection` acts as the player inventory: keys add themselves to it on collision, doors check it to decide whether to open, and the UI displays the current key count by listening to collection events. None of the scripts need to know about each other, only about the shared collection.

## Input Action Handlers and Control Scheme Handlers

Unity’s new Input System is powerful but verbose. Input Action Handlers bridge the gap between it and SODD. Each handler is a ScriptableObject that wraps a specific `InputActionReference` and fires Scriptable Events when the action starts, performs or cancels, passing along the relevant value.

This lets you treat input as simply another source of events. Movement sticks raise `Vector2Events`, buttons raise `BoolEvents` or `VoidEvents`, and gameplay scripts subscribe to those events rather than digging into input APIs directly. You gain device independence and keep game logic decoupled from the input system.

Control Scheme Handlers deal with a related problem: knowing which control scheme is currently active. They listen to generic input events, infer which control scheme in an `InputActionAsset` supports the device that just fired, and update a `StringVariable` or raise an event when the scheme changes. The sample game uses this to toggle cursors and to swap input icons in the UI, so prompts show keyboard keys or gamepad buttons depending on what the player is actually using.

## Persistence with Variable Repositories

One awkward property of ScriptableObjects is that their changes persist in the editor but not automatically in builds. For game state such as unlocked levels, collected items or audio settings you need a controlled persistence mechanism.

Variable Repositories fill that gap. A repository is a ScriptableObject that contains a list of Scriptable Variables marked as persistent. It saves their values to disk in a compact binary format and restores them when the game starts. A small base class, `PersistentScriptableObject`, provides a “persist this” toggle on variables, and the repository editor can scan the project for those flags and auto populate its list.

Once configured, you can simply enable “load on start” and “save on exit” and forget about it. All systems that already react to those variables will automatically reflect the restored state, so the game essentially rebuilds its own runtime state from a small set of assets.

## Passive ScriptableObjects

Some ScriptableObjects do not live in scenes at all but need to be active at runtime. Input Action Handlers, Control Scheme Handlers, Variable Repositories and certain managers fall into this category. Unity does not automatically load arbitrary ScriptableObjects, so I introduced the concept of Passive ScriptableObjects: assets that are not attached to GameObjects but should be present in memory.

Passive ScriptableObjects share a base class with a “reference in scenes” toggle. A small editor utility scans the project for toggled instances, generates a special GameObject per scene that holds references to them, and thereby forces Unity to include and initialise them at runtime. It is not the most glamorous piece of the framework, but it closes a practical gap and ensures that the more abstract systems actually run.

In retrospect, Unity’s Addressables package is a cleaner and more powerful way to address this general problem of referencing and loading assets on demand. Addressables give you a first class, official system for managing asset lifecycles across scenes and bundles. My Passive ScriptableObjects were essentially a bespoke workaround for a limitation that Addressables now solve far more elegantly.

# The sample game: Ice Heat

A framework is only as convincing as the things it can build. To demonstrate that SODD is not merely a collection of interesting abstractions, I built a small but fully playable 2D platformer called *Ice Heat* on top of it.

Ice Heat pays tribute to Celeste: tight platforming, a directional dash, and a core mechanic that interacts with the environment, in this case temperature waves that boil or freeze water. All core systems, from movement and dashing to level progression, collectibles, UI, audio and settings, were implemented using the framework’s Scriptable Events, Variables, Collections and managers.

Input is driven entirely through Input Action Handlers. Player movement reads a direction vector from a `Vector2Variable` that is updated by a handler. Jumping and dashing are invoked via events. The dash system listens to a `VoidEvent` fired when the player hits the dash button, reads the current direction, and updates runtime variables that define dash state. Temperature waves use a small orchestration of events and variables to select a direction, choose heating or cooling, trigger shader based effects and switch the state of water tiles.

On the content side I was fortunate not to be alone. The sample game only works because of my teammates from previous game jams. One is an outstanding artist who provided the character art and animations, the other a technical artist and shader wizard who made water shimmer, boil and freeze in a way that actually felt satisfying. Without them, Ice Heat would indeed be a collection of colourful rectangles pretending very hard to be game art.

Beyond showing the framework in action, the game acted as a stress test. Architecture that looks clean in a diagram sometimes falls apart as soon as designers ask for “one small exception”. Building a complete, shippable slice of game content forced the framework to prove itself in the uncomfortable intersection of deadlines, changing ideas and “we need this tonight”.

# CI, documentation and treating it as a real product

A key difference between this thesis and many academic projects is that the framework is not just “some scripts in a repo”. It is a proper Unity package, versioned, documented and shipped with automation.

The project follows Unity’s package layout, with separate `Runtime`, `Editor` and `Tests` folders, a `package.json` manifest and the usual `README`, `CHANGELOG` and `LICENSE`. The license is MIT, which keeps things simple and lets people use the framework in commercial and open source projects without legal gymnastics.

GitHub Actions handle the repetitive work. One workflow runs Unity tests and builds on every pull request, ensuring that broken changes do not sneak into `develop` or `main`. Another uses DocFX to generate documentation from XML comments and pushes it to GitHub Pages, so the API reference and manual are always in sync with the latest release. A release workflow uses semantic versioning, compiles the changelog and creates GitHub releases.

This process might look elaborate for a student framework, but it mattered for two reasons. First, it forced me to think about maintainability after the thesis submission, not just up to it. Second, it made the project feel like a real contribution to the Unity ecosystem rather than a one off experiment.

# What I took from the experience

Working on SODD was very different from Heist Academy, even though the core ideas are the same. Heist Academy was a sprint to make a single game work under pressure, with ScriptableObjects as my secret weapon to survive being effectively a one man engineering team. The framework was about stepping back, generalising the tricks that worked, and building a tool that other teams could adopt without inheriting my specific headaches.

Technically, I gained a much deeper appreciation for architecture that enforces good behaviour quietly. When you put state in Scriptable Variables, communicate through Scriptable Events, and lean on collections and repositories, it becomes harder to accidentally build a ball of mud. Systems are decoupled almost by default. Designers can tweak values and wire behaviours without asking for code changes. Debugging becomes a matter of watching events and variables in the inspector rather than hunting through a nest of singletons.

On the process side, treating the thesis as an end to end software project was as valuable as the technical work. Collecting requirements, prioritising them, working with user stories, enforcing a Definition of Done, building CI pipelines and shipping documentation are the sort of unglamorous elements that quietly distinguish hobby scripts from real tools. By the end, I felt less like “someone who writes Unity code” and more like “someone who can take a concept, architect it, implement it, package it and hand it to others”.

The outcome was not only satisfying from an engineering perspective. This project also earned me the highest possible grade in the course, my first honours distinction at university. It was a very concrete reminder that when I am genuinely passionate, interested and invested in what I am building, I do not really stop at “good enough”. I push until the result matches the picture in my head, and I only settle when it feels like something that could be shipped to real teams.

Finally, there is a particular satisfaction in seeing both halves of the work come together. On one side, the SODD Framework as a tidy package in a registry, with its documentation site, release notes and examples. On the other, Ice Heat running on screen, water freezing and boiling, dashes and jumps behaving exactly as scripted, all driven by that architecture. It is the same quiet feeling I had watching people play Heist Academy, only this time not just because a game worked, but because the tools underneath held up as well.

If there is a broader lesson, it is that investing in architecture and tooling pays off twice. Once when your own project becomes easier to reason about, and again when you discover that other people can stand on it to build their own work.

For anyone interested in the full academic write-up, the thesis document is publicly available on my university’s site:

https://videojocs.tecnocampus.cat/wp-content/uploads/sites/3/2024/07/Ruiz_Rabasseda_Creating_Unity_Framework.pdf
