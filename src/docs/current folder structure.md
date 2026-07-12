

A TypeScript Next.js (App Router) web application for browsing/reading books — a frontend project bootstrapped with create-next-app and intended to run as a Next.js site (deployable on Vercel).

### Stack

* Language(s): TypeScript (primary), JavaScript, CSS  
* Framework / runtime: Next.js (App Router) \+ React (Node.js runtime)  
* Notable libraries / tooling (observable from repo layout and config files): Next.js, React, TypeScript, PostCSS (postcss.config.mjs), ESLint (eslint.config.mjs). The README also implies a Vercel-friendly deployment.

## How it's organized

Top-level entries:

* .gitignore  
* AGENTS.md  
* CLAUDE.md  
* README.md  
* eslint.config.mjs  
* next.config.ts  
* package-lock.json  
* package.json  
* postcss.config.mjs  
* public/ (static assets)  
* src/ (app source)  
* tsconfig.json

Annotated src/ tree (representative top-level structure):

Code

src/  
  app/                    Next.js App Router routes and global app files  
    api/                  serverless / API route handlers (server-side endpoints)  
    auth/                 auth-related route(s) or pages  
    books/                pages/routes for browsing or viewing books  
    dashboard/            authenticated user pages / dashboard  
    unauthorized/         page shown when user is unauthorized  
    favicon.ico           favicon used by the app  
    globals.css           global styles for the app  
    layout.tsx            app layout (shared layout wrapper)  
    page.tsx              root page component (home)  
  components/             React components grouped by feature  
    book-details/         components for a book detail view  
    browse-books/         components for listing/browsing books  
    home/                 home page specific components  
    layout/               shared layout pieces (header/footer, etc.)  
    shared/               UI pieces reused across features  
  interface/  
    postDetails.ts        TypeScript types/interfaces used by the app  
  lib/  
    auth-client.ts        client-side auth helper(s)  
    auth.ts               auth utilities (server/client helpers)  
  services/  
    core/                 core business logic / utilities  
    server/               server-side services used by API routes  
public/                   static assets (images, fonts, etc.)

How it fits together:

* The app uses Next.js App Router: pages and API endpoints live under src/app (page.tsx \+ route folders). Components in src/components are imported into the pages. Type definitions live in src/interface. Authentication helpers are in src/lib and services for server-side logic live in src/services. API routes under src/app/api likely call into services/server or services/core to implement back-end behavior.

