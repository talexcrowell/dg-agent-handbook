import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CharacterProvider } from "./contexts/CharacterContext.tsx";
import { MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CreateAnAgent } from "./components/CreateAnAgent/index.tsx";
import { CharacterSheet } from "./components/CharacterSheet/index.tsx";
import { DeltaGreen } from "./components/DeltaGreen/index.tsx";
import { Rules } from "./components/Rules/index.tsx";
import { AgentRoster } from "./components/AgentRoster/index.tsx";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { EquipmentAndServices } from "./components/EquipmentAndServices/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DeltaGreen /> },
      { path: "/rules", element: <Rules /> },

      { path: "/agents", element: <AgentRoster /> },
      { path: "/agents/new", element: <CreateAnAgent /> },
      { path: "/agents/sheet/:codename", element: <CharacterSheet /> },
      {
        path: "/agents/equipment-and-services",
        element: <EquipmentAndServices />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CharacterProvider>
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </CharacterProvider>
);
