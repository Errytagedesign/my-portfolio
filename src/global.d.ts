// Next ships types for `*.module.css` but not for plain side-effect CSS
// imports (e.g. `import "./globals.css"`), which the App Router relies on.
declare module "*.css";
