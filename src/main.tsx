import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CharacterProvider } from "./contexts/CharacterContext.tsx";
import { Loader, MantineProvider } from "@mantine/core";
import {
  createHashRouter,
  RouterProvider,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";

import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { ViewportProvider } from "./contexts/ViewportContext.tsx";
import { FormattedLoader } from "./components/FormattedLoader.tsx";
import { AgentProfessions } from "./components/AgentProfessions/index.tsx";

const LandingPage = lazy(() => import("./components/LandingPage.tsx"));
const Directory = lazy(() => import("./components/Directory/index.tsx"));
const DeltaGreen = lazy(() => import("./components/DeltaGreen/index.tsx"));
const Rules = lazy(() => import("./components/Rules/index.tsx"));
const EquipmentAndServices = lazy(
  () => import("./components/EquipmentAndServices/index.tsx")
);
const CharacterSheet = lazy(
  () => import("./components/CharacterSheet/index.tsx")
);
const CreateAnAgent = lazy(
  () => import("./components/CreateAnAgent/index.tsx")
);
const AgentRoster = lazy(() => import("./components/AgentRoster/index.tsx"));
const Tradecraft = lazy(() => import("./components/Tradecraft/index.tsx"));
const Glossary = lazy(() => import("./components/Glossary/index.tsx"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/directory",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <Directory />
          </Suspense>
        ),
      },

      {
        path: "/delta-green",
        element: <Navigate to="/delta-green/overview" />,
      },
      {
        path: "/delta-green/:tabValue",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <DeltaGreen />
          </Suspense>
        ),
      },

      { path: "/rules", element: <Navigate to="/rules/how-to-play" /> },
      {
        path: "/rules/:tabValue",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <Rules />
          </Suspense>
        ),
      },

      {
        path: "/equipment-and-services",
        element: <Navigate to="/equipment-and-services/overview" />,
      },
      {
        path: "/equipment-and-services/:tabValue",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <EquipmentAndServices />
          </Suspense>
        ),
      },

      { path: "/agents", element: <Navigate to="/agents/roster" /> },
      { path: "/agents/roster", element: <AgentRoster /> },
      {
        path: "/agents/new",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <CreateAnAgent />
          </Suspense>
        ),
      },
      {
        path: "/agents/sheet/:codename",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <CharacterSheet />
          </Suspense>
        ),
      },
      {
        path: "/agents/professions",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <AgentProfessions />
          </Suspense>
        ),
      },
      {
        path: "/agents/professions/:tabValue",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <AgentProfessions />
          </Suspense>
        ),
      },
      {
        path: "/agents/tradecraft",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <Tradecraft />
          </Suspense>
        ),
      },
      {
        path: "/agents/glossary",
        element: (
          <Suspense fallback={<FormattedLoader />}>
            <Glossary />
          </Suspense>
        ),
      },
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
