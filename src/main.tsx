import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CharacterProvider } from "./contexts/CharacterContext.tsx";
import { MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CreateAnAgent } from "./components/CreateAnAgent/index.tsx";
import { CharacterSheet } from "./components/CharacterSheet/index.tsx";
import { DeltaGreen } from "./components/DeltaGreen/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DeltaGreen /> },

      { path: "/agents/new", element: <CreateAnAgent /> },
      // { path: "/agents/roster", element: < /> },
      { path: "/agents/:codename", element: <CharacterSheet /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterProvider>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </CharacterProvider>
  </React.StrictMode>
);
