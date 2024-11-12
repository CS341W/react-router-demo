# react-router-demo

This example project demonstrates a number of the finest features of React Router. For example:

- The NavLink component allows automatic styling for active <a> tag elements
- Nested routes provide a kind of layout-view functionality; they require use of the imported Outlet hook/component within the parent component
- Use dynamic segments by prefixing the key with a colon (e.g., /:userId) in the route setup; use the useParams() hook to retrieve the value in the handler
- The useNavigate() and useLocation() hooks support React's URL spoofing and provide greater programmatic control for internal hyperlinks

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
