# React Query Example

A modern, high-performance React application demonstrating best practices for asynchronous state management, server state synchronization, and a clean frontend architecture.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5-FF4154?logo=react-query)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)

---

## 🚀 Project Overview

This project serves as a comprehensive example of how to implement **TanStack Query (React Query)** in a real-world scenario. It focuses on solving common frontend challenges such as data fetching, caching, optimistic updates (or manual invalidation), and maintaining a synchronized UI with a REST API.

Built with a focus on developer experience and scalability, the application handles a simple User Management system (List, Create, Delete) using a robust architecture that separates concerns between UI, Business Logic, and Data Access.

## 📸 Preview

> [!TIP]
> Add a GIF or screenshot of the application here to showcase the UI and interactions.
> Recommended size: 800x450px.

---

## 🛠️ Tech Stack

- **Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **State Management:** [TanStack Query v5](https://tanstack.com/query/latest) (Server State)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Tooling:** [Vite](https://vitejs.dev/) & [Biome](https://biomejs.dev/) (Linting/Formatting)
- **API Mocking:** [JSON Server](https://github.com/typicode/json-server)

---

## 🏗️ Architecture & Folder Structure

The project follows a modular architecture designed for maintainability and clear separation of responsibilities:

```text
src/
├── components/      # UI components (Shadcn) and feature-specific components
├── hooks/           # Custom React Query hooks (Domain-driven)
│   └── users/       # Hooks for User management (useUsers, useCreateUser, etc.)
├── http/            # API interaction layer (Raw Axios calls)
│   └── users/       # API requests for User resources
├── services/        # Service configurations (Axios instances, etc.)
├── lib/             # Utility functions and shared helpers
└── app.tsx          # Main application entry and Provider setup
```

### Key Technical Decisions

1.  **Custom Hooks for Server State:** Every API interaction is wrapped in a custom hook. This keeps components clean and ensures that React Query logic (keys, invalidation, mutations) is centralized.
2.  **HTTP Layer Separation:** We separate the raw `axios` calls (`src/http`) from the React Query hooks (`src/hooks`). This makes the API logic testable in isolation and easy to swap if needed.
3.  **Automatic Invalidation:** Upon successful mutations (Create/Delete), we use `queryClient.invalidateQueries` to ensure the UI remains in sync with the server data without manual state management.
4.  **Modern Tooling:** Using **Biome** for extremely fast linting and formatting, and **Vite 8** for an optimized build pipeline.

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/) (recommended)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-query-example.git
    cd react-query-example
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Running Locally

This project requires both the frontend and the mock API to be running.

1.  **Start the Mock API:**
    ```bash
    pnpm server
    ```
    *This starts `json-server` on `http://localhost:3000`.*

2.  **Start the Development Server:**
    ```bash
    pnpm dev
    ```
    *Open [http://localhost:5173](http://localhost:5173) in your browser.*

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite dev server |
| `pnpm server` | Runs the mock JSON Server API |
| `pnpm build` | Builds the project for production |
| `pnpm check` | Runs Biome linting and formatting checks |
| `pnpm format:write`| Automatically formats the codebase with Biome |
| `pnpm preview` | Previews the production build locally |

---

## 💡 Future Improvements

- [ ] Implement **Optimistic Updates** for a snappier User Creation experience.
- [ ] Add **Pagination** and **Filtering** using React Query's `keepPreviousData`.
- [ ] Add **Unit/Integration Tests** with Vitest and React Testing Library.
- [ ] Implement **Zod** for schema validation of API responses.
- [ ] Add **Dark Mode** support using `next-themes`.

---

## 👤 Author

**Victor Badaró**
- GitHub: [@victorbadaro](https://github.com/victorbadaro)
- LinkedIn: [Victor Badaró](https://linkedin.com/in/victor-badaró)

---

*This project was created for educational purposes to demonstrate the power of React Query in modern web development.*
