---
title: "Building with Angular 17"
description: "How I approach modern Angular apps with standalone components and clean architecture."
date: "2025-11-01"
tags:
  - Angular
  - Architecture
---

# Building with Angular 17

Angular 17 introduced a streamlined developer experience with standalone components and a lighter CLI output. In this post I walk through the mental model I use when creating new features:

1. Start with the route structure and surface the story or journey a visitor should take.
2. Design composable, data-driven components instead of smart monoliths.
3. Extract UI data into focused models so the rendering layer stays declarative.

The rest of the article dives into schematics, environment-driven configuration, and quality-of-life tips for running a lean Angular workspace.
