---
title: "Shipping with GitHub Pages"
description: "Notes on automating Angular deployments directly from GitHub Actions."
date: "2025-10-12"
tags:
  - DevOps
  - GitHub Pages
---

# Shipping with GitHub Pages

GitHub Actions is a reliable way to keep a portfolio site live. I keep the workflow simple:

- Install dependencies with a clean `npm ci`.
- Run the blog index generator to capture any new markdown posts.
- Build the Angular app with a base href that matches the GitHub Pages site.
- Upload the dist folder as a Pages artifact and let the `deploy-pages` action finish the job.

This workflow provides full logs for each release while keeping configuration inside the repository.
