# AI Development Rules for HOSS Application

This document provides guidelines for the AI developer to follow when working on this project. Adhering to these rules ensures code consistency, maintainability, and adherence to the established architecture.

## Tech Stack Overview

The application is built on a modern, lightweight, and efficient technology stack. Here are the key components:

-   **Framework**: A React application built with TypeScript for type safety and improved developer experience.
-   **Build Tool**: Vite is used for its fast development server and optimized build process.
-   **Styling**: Tailwind CSS is the exclusive utility-first CSS framework for all styling. The app supports both light and dark modes, managed through a custom `ThemeContext`.
-   **Routing**: Client-side routing is handled by `react-router-dom`. All routes are centrally managed in `src/App.tsx`.
-   **UI Components**: The project uses a set of custom-built, reusable components located in `src/components`. These are styled directly with Tailwind CSS.
-   **Icons**: `lucide-react` is the designated library for all icons to ensure a consistent and clean visual style.
-   **State Management**: State is managed using React's built-in hooks (`useState`, `useEffect`) and the Context API for simple global state (e.g., theme).
-   **Backend Services**: The `@supabase/supabase-js` library is included and should be used if any backend features like authentication or a database are required.

## Library Usage Rules

To maintain consistency, please follow these specific rules for using libraries and implementing features.

### 1. Styling
-   **ALWAYS** use Tailwind CSS for styling.
-   **DO NOT** write custom CSS in `.css` files or use inline `style` attributes unless it's for a dynamic value that cannot be achieved with Tailwind classes.
-   Utilize the existing theme context in `src/contexts/ThemeContext.tsx` for dark mode compatibility.

### 2. UI Components
-   **REUSE** components from the `src/components` directory whenever possible.
-   **CREATE** new components in their own file within `src/components`. Keep them small, focused, and reusable.
-   **DO NOT** use any external component libraries like Material-UI or Ant Design. The project relies on its custom-built component set.

### 3. Icons
-   **ONLY** use icons from the `lucide-react` package.
-   **DO NOT** import SVGs directly or install any other icon libraries.

### 4. Routing & Navigation
-   Define all page routes within the `<Routes>` component in `src/App.tsx`.
-   Use the `<Link>` or `<NavLink>` components from `react-router-dom` for all internal navigation to enable client-side routing.

### 5. State Management
-   For local component state, use the `useState` and `useReducer` hooks.
-   For global state that needs to be shared (e.g., user session, theme), use the React Context API. Create new contexts in the `src/contexts` directory.
-   **AVOID** adding complex state management libraries like Redux or Zustand unless the application's complexity absolutely requires it.

### 6. Forms
-   For simple forms, manage state using controlled components with the `useState` hook, as seen in `src/pages/Contact.tsx` and `src/pages/Demo.tsx`.
-   **DO NOT** add form libraries like Formik or React Hook Form unless form complexity becomes unmanageable with the current approach.

### 7. Data Fetching & Backend
-   For client-side data fetching from external APIs, use the browser's native `fetch` API.
-   If backend services like authentication, database, or storage are needed, use the pre-installed `@supabase/supabase-js` client.