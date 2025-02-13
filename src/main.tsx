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
import { Directory } from "./components/Directory/index.tsx";
import { ViewportProvider } from "./contexts/ViewportContext.tsx";
import { LandingPage } from "./components/LandingPage.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/directory", element: <Directory /> },

      { path: "/delta-green", element: <DeltaGreen /> },
      { path: "/delta-green/:tabValue", element: <DeltaGreen /> },

      { path: "/rules", element: <Rules /> },
      { path: "/rules/:tabValue", element: <Rules /> },

      {
        path: "/equipment-and-services",
        element: <EquipmentAndServices />,
      },
      {
        path: "/equipment-and-services/:tabValue",
        element: <EquipmentAndServices />,
      },

      { path: "/agents", element: <AgentRoster /> },
      { path: "/agents/new", element: <CreateAnAgent /> },
      { path: "/agents/sheet/:codename", element: <CharacterSheet /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ViewportProvider>
    <CharacterProvider>
      <MantineProvider defaultColorScheme="dark">
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </CharacterProvider>
  </ViewportProvider>
);
