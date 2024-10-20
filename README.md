# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




[//]: <> (Still needs modifications)
# Folder and File Naming Conventions in React Application

This document outlines the naming conventions and folder structure followed in this React application to maintain consistency, readability, and scalability.

## Folder Structure

### 1. **src**
   The main application code is stored under the `src` directory. It typically contains the following subfolders:

   ```
   src/
   ├── assets/
   ├── components/
   ├── pages/
   ├── hooks/
   ├── utils/
   ├── services/
   ├── styles/
   └── App.js
   ```

### 2. **assets**
   The `assets/` folder contains static resources such as images, fonts, or icons. It's recommended to categorize them based on their type.

   ```
   src/assets/
   ├── images/
   ├── fonts/
   └── icons/
   ```

   - **Naming:** Files should be named in `kebab-case`, e.g., `logo-header.png`, `background-image.jpg`.

### 3. **components**
   The `components/` folder holds reusable React components that can be used across the app.

   ```
   src/components/
   ├── Button/
   ├── Navbar/
   ├── Footer/
   └── Card/
   ```

   - **Naming:** Each component has its own folder, with the name following `PascalCase`. The component's file name should match the folder name (e.g., `Navbar/Navbar.js`).
   - **Test and Style Files:** Any associated styles or tests should reside in the same folder:
     ```
     src/components/Navbar/
     ├── Navbar.js
     ├── Navbar.test.js
     └── Navbar.css
     ```

### 4. **pages**
   The `pages/` folder contains components corresponding to entire views or pages in the app.

   ```
   src/pages/
   ├── Home/
   ├── About/
   └── Contact/
   ```

   - **Naming:** Similar to components, each page should have its own folder and follow the `PascalCase` naming convention. The main page component file should match the folder name (e.g., `Home/Home.js`).
   - **Test and Style Files:** Test and style files should be kept alongside the page component (e.g., `Home/Home.test.js`, `Home/Home.css`).

### 5. **hooks**
   The `hooks/` folder stores custom React hooks.

   ```
   src/hooks/
   ├── useFetch.js
   └── useAuth.js
   ```

   - **Naming:** Hook files follow `camelCase`, starting with the `use` prefix to follow the convention (e.g., `useFetch.js`).

### 6. **utils**
   The `utils/` folder contains helper functions and utility files that can be used throughout the app.

   ```
   src/utils/
   ├── formatDate.js
   └── calculateDiscount.js
   ```

   - **Naming:** Utility files use `camelCase` naming convention (e.g., `formatDate.js`).

### 7. **services**
   The `services/` folder contains API service calls and logic related to external data.

   ```
   src/services/
   ├── authService.js
   └── taskService.js
   ```

   - **Naming:** Service files are named in `camelCase` (e.g., `authService.js`).

### 8. **styles**
   The `styles/` folder stores global styles, variables, and mixins for the app.

   ```
   src/styles/
   ├── variables.css
   └── global.css
   ```

   - **Naming:** Use `kebab-case` for CSS files (e.g., `global.css`, `variables.css`).

## File Naming Conventions

### 1. **Component Files:**
   - **Naming Convention:** Use `PascalCase` for all component files. Example:
     - `Button.js`
     - `Navbar.js`
   - Each component should be in its own folder with the same name.

### 2. **Style Files:**
   - **Naming Convention:** Use `PascalCase.css` or `.module.css` if using CSS modules.
     - Example: `Button.css` or `Button.module.css`.

### 3. **Test Files:**
   - **Naming Convention:** Use `PascalCase.test.js` or `PascalCase.spec.js` for test files corresponding to components or pages.
     - Example: `Button.test.js`, `Navbar.test.js`.

### 4. **Hooks, Utils, and Services:**
   - **Naming Convention:** Use `camelCase` for hook, utility, and service files. Example:
     - `useFetch.js`
     - `calculateDiscount.js`
     - `authService.js`

## General Naming Guidelines

1. **PascalCase** for component and page folder and file names.
2. **camelCase** for hooks, utils, and service files.
3. **kebab-case** for asset file names (e.g., images, fonts).
4. **Consistency** is key: Always follow the same naming convention across your codebase for readability and maintainability.

---

By following these conventions, the codebase will remain organized, consistent, and easy to maintain as the project grows.
