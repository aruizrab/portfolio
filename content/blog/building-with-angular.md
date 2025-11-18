---
title: "Building with Angular 17"
description: "How I approach modern Angular apps with standalone components and clean architecture."
date: "2025-11-01"
tags:
  - Angular
  - Architecture
---

# Creating a Unity Framework for ScriptableObject Driven Development (SODD)

## Introduction

As the videogame side of my double degree in Computer Engineering and Video Game Design and Production, my thesis focused on building something both deeply technical and immediately useful to other developers: a Unity framework for ScriptableObject Driven Development (SODD).

The project had a dual purpose. On the one hand, it was an excuse to work through the full lifecycle of a software development project from end to end: from conception and requirements gathering to prioritisation, implementation, testing, documentation and automated releases. On the other, it aimed to fill a very concrete gap in the Unity ecosystem by providing a production-ready, standards-compliant, open-source framework that formalises and extends ScriptableObject-based architecture patterns.

The result is a Unity package that:

- Implements a complete SODD toolset (events, variables, collections, input integration, persistence, managers…).
- Follows Unity’s official package structure and conventions.
- Is distributed as an open-source project.
- Can be imported directly into any Unity project via the Package Manager.

## Motivation: Filling a Gap in the Unity Toolkit

Unity is widely used in both indie and professional environments, yet some of the best architectural practices around ScriptableObjects still live mostly in talks, blog posts and scattered gists. Ryan Hipple’s “Game Architecture with ScriptableObjects” and Richard Fine’s “Overthrowing the MonoBehaviour Tyranny…” are great conceptual references, but there was no cohesive, opinionated implementation that:

- Encapsulates these ideas into a reusable framework.
- Applies them consistently across events, data, input and persistence.
- Is documented and versioned like any serious software library.
- Integrates smoothly with modern workflows (CI/CD, GitHub, UPM).

My thesis set out to turn those patterns into a concrete Unity package that game teams can drop into a project and start using immediately.

## From Idea to Backlog: Requirements and Prioritisation

I approached the thesis like a real product.

First, I defined the core vision: a framework that makes Unity projects more modular, editable from the Inspector and easier to debug, using ScriptableObjects as the backbone of game architecture.

From there, I turned that vision into requirements and feature sets, then prioritised them using the MoSCoW method (Must / Should / Could / Won’t). “Must have” items formed the initial scope of the framework:

- Scriptable Events (typed events with payloads and listeners).
- Scriptable Variables (typed data containers with change notification).
- Scriptable Collections (runtime sets with add/remove notifications).
- Variable Observers (bridging variables to UnityEvents, typically UI).
- Variable persistence (Variable Repository).
- Input integration (Input Action Handlers).
- Control Scheme integration (Control Scheme Handler).
- A sample videogame to validate everything end-to-end.

“Should have” and “Could have” requirements extended these concepts to more data types and convenience tools. “Won’t have” items were explicitly documented, keeping the scope tight enough to deliver within the thesis timeframe while leaving natural room for future contributions.

Each requirement was then expressed as a User Story, with a Definition of Ready (DoR) and Definition of Done (DoD), ensuring that nothing entered development half-baked and nothing was considered finished without tests, documentation and integration.

## Agile Workflow: Issues, Branches, Pull Requests

The project followed an agile, incremental workflow, mirroring how a professional team would approach a library:

- Every User Story became a GitHub Issue.
- Each Issue spawned a feature branch off `develop`.
- Implementation, tests and documentation happened on that branch.
- Once complete, the branch was merged via a Pull Request.
- GitHub Actions validated the PR through automated Unity tests and builds.

In other words, every User Story flowed through the same path: Issue → branch → code + tests + docs → PR → CI → merge. This imposed discipline and traceability on the project and ensured the thesis wasn’t just an academic exercise but a realistic software delivery.

## Framework Design: ScriptableObject Driven Development in Practice

### Core Principles

The framework is built around three guiding principles:

- **Modularity** – systems should depend on data and events, not each other.
- **Editability** – designers should be able to tweak behaviour from the Inspector without touching code.
- **Debuggability** – state and events should be observable, loggable and easy to trace.

ScriptableObjects are the natural fit for these goals: they are asset-based, inspectable, serializable, reusable and independent of any particular scene.

### Scriptable Events

Scriptable Events encapsulate broadcast-style events as assets. There are typed variants for `void`, `bool`, `int`, `float`, `string`, `Vector2`, `Vector3`, `GameObject` and more.

At a high level, each event is:

- A `ScriptableObject` that holds a delegate and optional debug configuration.
- An asset that can be referenced anywhere in the project (scenes, prefabs, scripts).
- Loggable from the Inspector (payload, source, time) when debug mode is enabled.

Event Listeners are `MonoBehaviour` components that subscribe to a Scriptable Event and expose a UnityEvent. They bridge the asset-level event into scene-level behaviour, allowing designers to wire logic from the Inspector.

This decouples systems elegantly: for example, “player score increased” is a Scriptable Event; coins, enemies and UI elements all interact with that event instead of referencing each other.

### Scriptable Variables and Observers

Scriptable Variables are typed ScriptableObjects that encapsulate a value (`int`, `float`, `bool`, `string`, vectors, references, etc.) with:

- Inspector-editable default values.
- Optional read-only flag (guarding against runtime modification).
- Change notifications via C# delegates.
- Optional debug logging of every value change.

Variable Observers are components that listen to a specific Scriptable Variable and invoke a UnityEvent when the value changes. This is ideal for UI, where, for instance, a `Variable<int>` for “player score” can be bound to a text component without writing a custom script.

The combination of Scriptable Events and Variables yields a reactive, data-driven architecture where most glue logic is declarative and inspector-driven.

### Scriptable Collections

Scriptable Collections are ScriptableObjects that manage lists of items (GameObjects, Transforms, etc.) and expose `OnItemAdded` / `OnItemRemoved` notifications.

Typical use cases include:

- Runtime sets of enemies or interactables.
- Inventory-like systems (keys/doors, pickups, etc.).
- Any “who currently exists?” tracking that would otherwise require searching scenes.

Again, this centralises runtime state into reusable assets, making it trivial to share it across systems and to inspect what is going on at runtime.

### Input Integration and Control Schemes

The framework integrates tightly with Unity’s modern Input System:

- **Input Action Handlers** are ScriptableObjects that bind an `InputAction` to Scriptable Events. They listen to `started`, `performed` and `canceled` and forward the typed payload (e.g. `Vector2` movement) into the event system.
- **Control Scheme Handlers** detect which control scheme is currently active (keyboard/mouse vs gamepad) based on low-level input events and propagate that information through a `StringEvent` and/or `StringVariable`.

On top of that, I built **Passive ScriptableObjects**: ScriptableObjects that never appear in a scene but provide functionality purely as assets (e.g. Input Handlers, Control Scheme Handlers, icon providers, volume controllers). A utility in the framework scans the project for these and automatically creates scene-level references, ensuring they are loaded at runtime.

### Persistence: Variable Repository

Unity does not automatically persist changes to ScriptableObjects in builds across sessions. To address this, the framework includes a **Variable Repository**:

- A ScriptableObject listing variables that must be persisted (progress flags, settings…).
- Automatic serialization/deserialization of their values to disk.
- Inspector tools to load/save/reset and debug logs showing what was stored where.
- A small addition to Scriptable Variables to mark themselves as “persistent”, from which the repository can auto-populate its list.

This means the game state “remembers” unlocked levels, collected items and configuration simply by reacting to the resumed values of these variables on startup.

## CI/CD and Automation: GitHub Actions and Documentation

A major goal of the thesis was to become fully comfortable with CI/CD in the context of Unity and GitHub.

The repository uses GitHub Actions to automate the entire pipeline:

- **Branch protection and validation**: Pull Requests into `develop` and `main` trigger Unity CI that runs tests and builds to ensure the framework remains stable.
- **Automatic releases**: Merges into `main` trigger a workflow that:
  - Bumps the semantic version.
  - Generates a changelog.
  - Creates a GitHub Release with artifacts attached.
- **Documentation generation**: Another workflow runs DocFX against the XML doc comments in the C# code, generating a documentation website.
- **Static hosting**: The generated docs are published to GitHub Pages, providing an always-updated manual and API reference for the framework.

This means that writing proper doc comments in the codebase directly feeds into the public documentation, closing the loop between development and usage.

## Unity Package Standards and Open-Source Delivery

The framework is structured as a first-class Unity package:

- `package.json` with proper metadata and dependencies.
- `Runtime/`, `Editor/` and `Tests/` folders following Unity’s conventions.
- A clear `README`, `CHANGELOG` and `LICENSE` (MIT).
- Tests packaged with the project so users can run them in their own environments.

Because it follows Unity Package Manager conventions, the framework can be imported via a simple Git URL in UPM and updated like any other dependency. This was an explicit design requirement from the start: no copying scripts by hand, no custom installer, just standard tooling.

The project is fully open source and hosted on GitHub, inviting feedback, contributions and forked experiments from other Unity developers.

## Validating the Framework: Building *Ice Heat*

A framework is only as good as the problems it solves, so I validated it by building a small but complete sample game: **Ice Heat**, a 2D level-based platformer inspired by *Celeste*.

The game uses the SODD framework pervasively:

- Player movement, jump and dash use Scriptable Variables for parameters and runtime state, plus events for triggers.
- Water-state mechanics (ice, liquid, boiling) are driven by Scriptable Events and Variables to keep systems decoupled.
- Collectible coins and level unlocks use Scriptable Variables plus the Variable Repository for persistence.
- UI elements (HUD, level select, tutorial prompts, dynamic input icons) are wired via Variable Observers and Event Listeners instead of custom monolithic scripts.
- Audio is centralised in an Audio Repository + AudioManager, triggered entirely via StringEvents.
- Game flow (levels, quitting, time scaling) is controlled by ScriptableObject managers instead of scene-bound Singletons.

This sample project served as both a real-world stress test and a living example for future users of the framework, showing how to architect a game using SODD patterns.

## Conclusion

This thesis was more than a technical exploration of ScriptableObjects; it was a full-stack exercise in professional game-tool development:

- Conceiving and scoping a framework that fills a concrete gap in Unity’s toolkit.
- Modelling requirements, prioritising them and managing them as User Stories.
- Implementing a coherent architecture grounded in established patterns.
- Building tests, documentation and a sample game to validate the design.
- Setting up CI/CD pipelines with GitHub Actions for automated testing, releases and documentation generation.
- Packaging and publishing the result as an open-source Unity package that can be imported directly via the Package Manager.

On the videogame side of my double degree, it gave me the opportunity to treat a tool for game developers as a real product: designed, engineered, documented and delivered end-to-end, and ready for others to pick up and use in their own projects.


