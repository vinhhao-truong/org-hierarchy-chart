# Organizational Hierarchy Chart

This is a single-page web application displaying a non-binary organizational hierarchy chart. Technology used in development includes [Next.js](https://nextjs.org), [Redux Toolkit](https://redux-toolkit.js.org/), [Material Ui](https://mui.com/material-ui/) and other libraries (check out `package.json` for more detail).

- Project Demo: [https://org-hierarchy-chart.vercel.app/](https://org-hierarchy-chart.vercel.app/)
- Project Source Code: [https://github.com/vinhhao-truong/org-hierarchy-chart](https://github.com/vinhhao-truong/org-hierarchy-chart)

## Getting Started

**Prerequisite:** In other to run the code properly, a package manager (npm / yarn / pnpm / bun) and a git CLI must be installed on the local system.

1. There are two options to download the project:

- Download the ZIP file directly from GitHub and extract to a folder.
- Run `git clone https://github.com/vinhhao-truong/org-hierarchy-chart.git` in the terminal.

2. Open the downloaded/extracted folder.
3. Open the terminal and locate to the folder directory.
4. Install all required packages with commands:

```bash
npm init
# or
yarn
# or
pnpm install
# or
bun install
```

5. Run the developer server with commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Highlights

1. Each item (node) is linked to gether through "Subordinates" and "Supervisors", and is clickable to navigate to another nodes.
2. Search bar can filter and directly navigate user to the highlighted employee on select.
3. There is a simple "Under Construction" page for any unavailable pages.

## Possible Further Improvement

1. The search bar can be sticky on top (mobile) and on top right (desktop) when the user scrolls down and the hero section is out of screen.

2. A page of employee data in detail.
