## Built With

This is one platform portal.<br/>

This project was built using these technologies.

- Next.js
- Ant Design
- Zustand
- React query
- React hook form
- Tailwind

## Features

**📖 Multi-Page MainLayout**

**🎨 Styled with Tailwind**

**🫶 Friendly**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

### Setup husky with commitlint and pre-commit hook

1. `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

2. `npx husky add .husky/pre-commit 'npx lint-staged'`


## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Git Contribution submission specification

- Reference [git commit](https://aibolik.com/blog/git-commit-messages) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

    - `feat` Some feature development
    - `fix` Bug fix
    - `style` The code style is related and does not affect the running result
    - `perf` Optimization/performance improvement
    - `refactor` Changes those do not fix a bug or implement a feature. Simple refactoring
    - `revert` Undo edit
    - `docs` Changes in documentation
    - `chore` Any other changes, not affecting code

- If you commit code on SourceTree, you get an error: `Can't find node in PATH, trying to find a node binary on your system`
- Please run `echo "export PATH=\"$(dirname $(which node)):\$PATH\"" > ~/.huskyrc` on your terminal.

### Show your support

Give a ⭐ if you like this website!