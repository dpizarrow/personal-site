import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@/routes/about.tsx";
import Contact from "@/routes/contact.tsx";
import Skills from "@/routes/skills.tsx";
import Home from "@/routes/home.tsx";

import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/skills", element: <Skills /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
