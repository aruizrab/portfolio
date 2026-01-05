- [x] Verify that the copilot-instructions.md file in the .github directory is created.
	- Completed: generated initial instructions file.

- [x] Clarify Project Requirements
	- Completed: user specified Angular portfolio with markdown blog and GitHub Pages deployment.

- [x] Scaffold the Project
  - Completed: ran `npx @angular/cli@17 new portfolio --directory . --routing --style=scss --skip-git --standalone`.

- [x] Customize the Project
  - Completed: built landing/sections, markdown blog pipeline, styles, and blog tooling.

- [x] Install Required Extensions
  - Completed: no extra extensions requested.

- [x] Compile the Project
  - Completed: `npm run build` (triggers blog generation) succeeded.

- [x] Create and Run Task
	- Completed: confirmed existing npm start/test VS Code tasks remain accurate for this workspace.

- [x] Launch the Project
	- Completed: started `npm start` through the VS Code task (served on the auto-selected local port).

- [x] Ensure Documentation is Complete
	- Completed: README.md and this file are current; removed all helper comments for clarity.

## SEO & Optimization Implemented
- **Meta Tags:** Added description, keywords, author, Open Graph (Facebook), and Twitter Card tags in `index.html`.
- **Structured Data:** Added JSON-LD for `Person` schema in `index.html`.
- **Robots.txt:** Created `src/robots.txt` to allow indexing.
- **Sitemap:** Created `src/sitemap.xml` listing all pages and blog posts.
- **AI Agent Optimization:** Created `src/llms.txt` to provide context for AI agents.
- **Lazy Loading:** Implemented lazy loading for all routes and images.
- **Accessibility:** Added ARIA labels to navigation and theme toggle; ensured semantic HTML.
- **Analytics:** Integrated Google Analytics 4 (GA4).
- **Performance:** Configured `angular.json` to include optimization assets.
- **Testing:** Added unit and integration tests for all services and components.

## Execution Guidelines
PROGRESS TRACKING:
- If any tools are available to manage the above todo list, use it to track progress through this checklist.
- After completing each step, mark it complete and add a summary.
- Read current todo list status before starting each new step.

COMMUNICATION RULES:
- Avoid verbose explanations or printing full command outputs.
- If a step is skipped, state that briefly (e.g. "No extensions needed").
- Do not explain project structure unless asked.
- Keep explanations concise and focused.

DEVELOPMENT RULES:
- Use '.' as the working directory unless user specifies otherwise.
- Avoid adding media or external links unless explicitly requested.
- Use placeholders only with a note that they should be replaced.
- Use VS Code API tool only for VS Code extension projects.
- Once the project is created, it is already opened in Visual Studio Code—do not suggest commands to open this project in Visual Studio again.
- If the project setup information has additional rules, follow them strictly.

FOLDER CREATION RULES:
- Always use the current directory as the project root.
- If you are running any terminal commands, use the '.' argument to ensure that the current working directory is used ALWAYS.
- Do not create a new folder unless the user explicitly requests it besides a .vscode folder for a tasks.json file.
- If any of the scaffolding commands mention that the folder name is not correct, let the user know to create a new folder with the correct name and then reopen it again in vscode.

EXTENSION INSTALLATION RULES:
- Only install extension specified by the get_project_setup_info tool. DO NOT INSTALL any other extensions.

PROJECT CONTENT RULES:
- If the user has not specified project details, assume they want a "Hello World" project as a starting point.
- Avoid adding links of any type (URLs, files, folders, etc.) or integrations that are not explicitly required.
- Avoid generating images, videos, or any other media files unless explicitly requested.
- If you need to use any media assets as placeholders, let the user know that these are placeholders and should be replaced with the actual assets later.
- Ensure all generated components serve a clear purpose within the user's requested workflow.
- If a feature is assumed but not confirmed, prompt the user for clarification before including it.
- If you are working on a VS Code extension, use the VS Code API tool with a query to find relevant VS Code API references and samples related to that query.

TASK COMPLETION RULES:
- Your task is complete when:
  - Project is successfully scaffolded and compiled without errors
  - copilot-instructions.md file in the .github directory exists in the project
  - README.md file exists and is up to date
  - User is provided with clear instructions to debug/launch the project

Before starting a new task in the above plan, update progress in the plan.
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
