---
title: "Heist Academy: Learning Game Development the Hard Way"
description: "A retrospective on Heist Academy, a university stealth-puzzle project that became a crash course in 3D game development, teamwork, and surviving 3 a.m. Discord calls."
date: "2025-11-19"
tags:
  - Game Development
  - Unity
---

Back in my college days of 2022, during a subject simply called “Videogame Development”, I found myself thrown into a three–month sprint that tried to compress the full lifecycle of professional game development into one trimester. The setup was deceptively simple: eight–person teams, one big 3D project, industry professionals as teachers, and a very real deadline. The result was Heist Academy, a stealth and puzzle game about pretending to steal things in a fake environment so convincingly staged that it almost felt real, especially when you failed spectacularly.

This is a look back at how Heist Academy went from a vague idea to a fully playable prototype, how a relaxed classroom exercise turned into a genuine stress test, and how the project quietly seeded the architecture that would later become the basis for my SODD Framework.

## The Course: Three Months to Simulate a Studio

The subject was designed to mimic a stripped–down version of a real studio. Our teachers were not just academics but working professionals: one programmer, one designer, and one artist. Each of them walked us through their slice of the pipeline, from concept and design to production, iteration, and polish. It was a miniature studio simulation with training wheels that, in practice, felt like they forgot the “training wheels” part.

Teams of eight were formed and, very quickly, those eight people became close friends, reluctant co–managers, and occasional mortal enemies. It was the first time many of us faced a project of that size with a fixed delivery date, expectations, and standards that were not negotiable. There was no “good enough for a class exercise”. The bar was set at “you should not be ashamed to show this to a professional”.

The only formal constraint was that the game had to be 3D. That sounds generous until you realise how much production that implies when you have three months, a handful of students, and no asset store budget.

## From Vague Brainstorming to a Fake Heist School

The early phase was classic student chaos: lots of brainstorming sessions, lots of wild concepts, and very little that actually stuck. We spent weeks proposing ideas, poking holes in them, and abandoning them. The whiteboards looked impressive. The Git repository did not.

Eventually an amusing concept anchored itself. What if we made a stealth game about breaking into a place and stealing a relic, but revealed that everything was fake, staged, and designed as a training ground? Basically a heist show, but the cameras are grading you.

That was the birth of Heist Academy. The player is an apprentice thief, and each level is an exam. You navigate a staged environment, sneak past guards and cameras, grab the main relic (plus optional secondary ones), and escape. At the end you receive a grade from 0 to 10 that depends on how well you behaved like a professional thief rather than a noisy tourist.

## Designing the Core Experience

We wanted Heist Academy to feel like a blend of stealth, puzzle solving, and system exploitation. The fantasy was not just “avoid being seen”, but “learn the rules of the simulated world so well that you can bend them”.

The scoring system became the spine of the experience. At the end of each level, your grade was calculated based on several factors: time spent, number of relics collected, how many times you were seen by guards, how often you were heard, camera detections, and how many times the alarm was triggered. Every mistake had a cost, and every clever trick nudged you closer to a perfect 10.

Guards patrolled along defined paths. They reacted to both sight and sound. Footsteps could attract attention if you were careless. Breaking objects would trigger investigations. If a guard caught a glimpse of you at a distance, they would come over and investigate. If they saw you clearly from close range, the alarm would sound and all nearby guards would converge on you. The level turns from slow, tense stealth to chaotic escape attempt in an instant.

To balance the panic, we added hiding spots like lockers, giving players a way to escape once things escalated. We also leaned into sound as an offensive tool, not just a liability. Throwing a bottle across the room to divert a guard from his post became one of the most satisfying tricks in the game. Watching an AI guard obediently chase a noise into a corner never stopped being enjoyable.

Cameras added a second layer of tension. They had a visible field of view, and loitering inside it for too long would trigger the alarm. Part of the puzzle was not just avoiding the cones of vision but finding ways to disable cameras altogether. Combine this with guards whose patrol routes needed to be timed precisely, locked doors that required key hunting, and you get a compact but surprisingly rich stealth playground.

In the end we only had time to ship one full level. That single level, however, was designed to squeeze every drop of juice out of the mechanics. Once you learned the “optimal route”, executing it felt extremely satisfying, the way a good stealth level should. It was essentially a time–attack exam in how well you had internalised the systems.

## The Team: Eight Roles, Five Workhorses, and One Cube

On paper, the team composition looked balanced: three programmers, two artists, two designers, and one producer. In practice, the project quickly exposed the mismatch between that neat structure and the brutal reality of 3D production in three months.

The art department was overwhelmed almost immediately. The volume of work was massive: player model, guards, animations for both, environmental props, level architecture, set dressing, and all the little things that make a 3D space feel alive instead of empty. It did not take long before one of our most versatile programmers stepped in and essentially defected to the art team. Our producer also started doing part–time art work just to keep the pipeline moving.

This left me and one other programmer to handle the entire code base.

Theoretically.

The other programmer, let us say, did not share my enthusiasm for either performance or productivity. His main contribution was a camera control script that, once I tested it, dropped the frame rate to around twenty FPS. The implementation was almost avant–garde: on every frame, it spawned a cube, made it invisible, parented the camera to this cube, and then moved the cube to the player’s position. Every single frame. My GPU was not amused. To this day I have questions.

While he focused on that and on sharing memes about the Johnny Depp and Amber Heard trial, I quietly became the entire technical department.

## Wearing Every Technical Hat

With programming effectively reduced to one active developer, I took ownership of all technical aspects of Heist Academy. That included UI navigation, menus, settings, music and sound management, player movement and controls, camera behaviour (the non–cube–based kind), enemy AI, collectibles, interactive objects, level triggers, and score tracking. If it moved, blinked, clicked, or played a sound, there was a good chance I had written the code.

Paradoxically, this was both exhausting and deeply satisfying. There was no room to hide and no one else to blame. Every new idea from design needed to be evaluated, scoped, and implemented, often in very short cycles. We would discuss something in the afternoon and I would push a working prototype that night.

The project forced me to think structurally: I could not afford a pile of hard–coded one–off scripts. I needed a flexible architecture that allowed designers and artists to wire things together without calling me every two minutes to ask for a bespoke script.

This is where Heist Academy quietly became more than just a student project.

## Early Seeds of the SODD Framework

At the time, I was already fascinated by Ryan Hipple’s ideas on ScriptableObject–based architecture in Unity. Heist Academy became my testbed for those concepts. I started building a small toolkit inside the project: Scriptable events and listeners, data collections, and decoupled game state containers that could be driven through assets instead of direct references.

The game’s architecture was built around these ScriptableObject–driven pieces. Instead of wiring everything through tightly coupled references, I used events and assets as the glue. Designers could tweak behaviours, connect interactions, and configure responses without needing to dive into the codebase. It was not yet a formal framework, but the skeleton was already visible.

The impact on development speed was immediate. New mechanics could be plugged into existing systems with far less friction. Designers could experiment with patrol routes, triggers, scoring modifiers, and interactions using assets rather than begging for new scripts. It was the first concrete proof that this architecture was not just elegant in theory but practical in a real, moderately complex project.

A year later, when I proposed my thesis based on formalising this approach into what would become the SODD Framework, my tutor remarked that I seemed suspiciously confident it would work. I could not quite explain why at the time. Looking back, the answer was simple: Heist Academy had already proven it in the field.

## Crunch, Chaos, and 3 a.m. Discord

The last weeks of the project were a blur of deadlines, late nights, and “just one more build”. We sprinted hard to hit the submission date. There were bugs that mysteriously appeared only in release builds, features that seemed cursed, and the traditional last–minute “why is the menu broken again” moments.

Amid the pressure, something like fellowship formed. We were all in the same overloaded boat. If the project failed, we all went down together. That shared risk created a particular kind of bond that you can only forge by collectively staring at a broken build at 3 a.m. on Discord while someone’s microphone crackles and everyone laughs at jokes that would not be even remotely funny in daylight.

Those moments are priceless. They are also slightly unhealthy, but that is another discussion.

At the same time, the project was a very effective X–ray of character. When things got serious, it became painfully obvious who was willing to put in the work and who was content to coast. Out of eight people, five carried the project over the finish line. The remaining three were the sort of personalities I naïvely assumed would never make it into real workplaces because “surely nobody hires people like that”. Experience has since corrected that assumption.

## What I Took From Heist Academy

Heist Academy was technically a university project, but it felt far closer to a small studio production compressed into three months. It was a crash course in scope management, pipeline design, technical ownership, and the reality that roles on paper do not always match contributions in practice.

On the technical side, it solidified several things for me. It showed that investing in architecture early pays off massively when the project scales and the team grows. It proved that ScriptableObject–based patterns can give designers real control without sacrificing maintainability. It also forced me to become comfortable with taking full responsibility for a codebase and making decisions quickly under pressure.

On the human side, it taught me how much a project depends on the people who show up when things are difficult rather than when they are fun. It showed the value of cross–disciplinary flexibility, with people switching roles to keep the project alive. It also taught me to appreciate the quiet heroes of production: the ones who do their work, help others, and complain only in private chat.

Most importantly, Heist Academy reminded me why I enjoy building games and tools in the first place. It is that moment when everything finally clicks, the level flows, the AI behaves as intended, and you watch a player sneak through a space you built, thinking they are the clever one. Even more powerful is seeing your friends, your partner, and your family sit down to play, watching tense and ridiculous situations unfold, hearing everyone laugh, shout, and lean forward because something you wrote at 2 a.m. is actually moving on screen and reacting to them. When you realise that their fun exists because you pushed through those late nights of coding, debugging, and refactoring, it makes every hour of exhaustion feel not just justified, but absolutely worth it.

For anyone curious to try the result of this carefully controlled chaos, Heist Academy is available here:  
https://trashy-games.itch.io/heist-academy
