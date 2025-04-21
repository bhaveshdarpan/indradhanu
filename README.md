# Indradhanu Website

This project was bootstrapped with React.

## Useful Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames are included in the hashes.\
Your app is ready to be deployed!

[//]: <> (Still needs modifications)

## Folder and File Naming Conventions in React Application

This section outlines the naming conventions and folder structure followed in this React application to maintain consistency, readability, and scalability.

### Folder Structure

#### 1. **src**

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

#### 2. **assets**

The `assets/` folder contains static resources such as images, fonts, or icons. It's recommended to categorize them based on their type.

```
src/assets/
├── images/
├── fonts/
└── icons/
```

- **Naming:** Files should be named in `kebab-case`, e.g., `logo-header.png`, `background-image.jpg`.

#### 3. **components**

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

#### 4. **pages**

The `pages/` folder contains components corresponding to entire views or pages in the app.

```
src/pages/
├── Home/
├── About/
└── Contact/
```

- **Naming:** Similar to components, each page should have its own folder and follow the `PascalCase` naming convention. The main page component file should match the folder name (e.g., `Home/Home.js`).
- **Test and Style Files:** Test and style files should be kept alongside the page component (e.g., `Home/Home.test.js`, `Home/Home.css`).

#### 5. **hooks**

The `hooks/` folder stores custom React hooks.

```
src/hooks/
├── useFetch.js
└── useAuth.js
```

- **Naming:** Hook files follow `camelCase`, starting with the `use` prefix to follow the convention (e.g., `useFetch.js`).

#### 6. **utils**

The `utils/` folder contains helper functions and utility files that can be used throughout the app.

```
src/utils/
├── formatDate.js
└── calculateDiscount.js
```

- **Naming:** Utility files use `camelCase` naming convention (e.g., `formatDate.js`).

#### 7. **services**

The `services/` folder contains API service calls and logic related to external data.

```
src/services/
├── authService.js
└── taskService.js
```

- **Naming:** Service files are named in `camelCase` (e.g., `authService.js`).

#### 8. **styles**

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
