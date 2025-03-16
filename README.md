🚀 React Project Management Dashboard

🧠 Goal

This project is designed as a learning-focused, production-grade React application to help you learn and implement all important frontend concepts expected from a FAANG-level SDE3 engineer.

🎯 Objectives

Learn React concepts the right way — no copy-paste, pure understanding-first approach

Build a reusable, scalable architecture from day one

Gain real-world experience with auth, APIs, routing, role-based access, and more

✅ Features

🔐 Authentication Flow

Login page (Public Route)

Token-based Authentication

Auth Context with persistent login

Logout flow

Role-based routing (upcoming)

🔒 Private App Area (After Login)

Dashboard page

Projects page (List of all projects)

Project Details page (Detailed view of a project)

📂 Routing Setup

Public Routes: /login, etc.

Private Routes: /dashboard, /project, /project/:id

Fallback NotFound page

Route protection using Context

🧱 Component Design (Atomic Design)

Atoms

Molecules

Organisms

Designed for reusability and future NPM packaging

🎨 Layouts

Shared AppLayout for private pages

Sidebar + Header structure

🌐 API Integration Plan

Dummy JSON / Promises initially

Later switch to real Node.js backend service

JWT Auth

Database Integration

User Role Management

🏗 Folder Structure Highlights

src/
├─ components/atoms
├─ components/molecules
├─ components/organisms
├─ pages
├─ routes (PublicRoutes, PrivateRoutes, AppRoutes)
├─ layouts (AppLayout)
├─ hooks, utils, services, store

🛠 Developer Experience

Path aliasing with @/

Barrel exports

Scalable codebase

TailwindCSS styling

🔮 Future Scope

Team & Role management

Task module with comments

Real-time data updates

Analytics dashboard

Dark/Light Theme support

Migrate to Next.js if needed
