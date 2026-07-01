import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { CharacterProvider } from "./contexts/CharacterContext.tsx";
import { ViewportProvider } from "./contexts/ViewportContext.tsx";
import { MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import App from "./App.tsx";
import { AgentsLandingPage } from "./components/AgentsLandingPage.tsx";
import { TrainingLandingPage } from "./components/TrainingLandingPage.tsx";

const LandingPage = lazy(() => import("./components/LandingPage.tsx"));
const FormattedLoader = lazy(() => import("./components/FormattedLoader.tsx"));
const Directory = lazy(() => import("./components/Directory/index.tsx"));
const DeltaGreen = lazy(() => import("./components/DeltaGreen/index.tsx"));
const Rules = lazy(() => import("./components/Rules/index.tsx"));
const EquipmentAndServices = lazy(
  () => import("./components/EquipmentAndServices/index.tsx"),
);
const CharacterSheet = lazy(
  () => import("./components/CharacterSheet/index.tsx"),
);
const CreateAnAgent = lazy(
  () => import("./components/CreateAnAgent/index.tsx"),
);
const AgentRoster = lazy(() => import("./components/AgentRoster/index.tsx"));
const Tradecraft = lazy(() => import("./components/Tradecraft/index.tsx"));
const Glossary = lazy(() => import("./components/Glossary/index.tsx"));
const StatsAndSkills = lazy(
  () => import("./components/StatsAndSkills/index.tsx"),
);
const AgentProfessions = lazy(
  () => import("./components/AgentProfessions/index.tsx"),
);
const Training = lazy(() => import("./components/Training/index.tsx"));
const Error = lazy(() => import("./Error.tsx"));

const router = createHashRouter([
  {
    path: "/",
    ErrorBoundary: Error,
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/directory",
        element: <Directory />,
      },
      {
        path: "/delta-green",
        element: <Navigate to="/delta-green/welcome" />,
      },
      {
        path: "/delta-green/:tabValue",
        element: <DeltaGreen />,
      },
      { path: "/rules", element: <Navigate to="/rules/how-to-play" /> },
      {
        path: "/rules/:tabValue",
        element: <Rules />,
      },
      {
        path: "/equipment-and-services",
        element: <Navigate to="/equipment-and-services/overview" />,
      },
      {
        path: "/equipment-and-services/:tabValue",
        element: <EquipmentAndServices />,
      },
      { path: "/training", element: <TrainingLandingPage /> },
      {
        path: "/training/:tabValue",
        element: <Training />,
      },
      {
        path: "/training/stats-and-skills",
        element: <StatsAndSkills />,
      },
      {
        path: "/training/professions",
        element: <AgentProfessions />,
      },
      {
        path: "/training/professions/:tabValue",
        element: <AgentProfessions />,
      },
      {
        path: "/training/tradecraft",
        element: <Tradecraft />,
      },
      {
        path: "/training/glossary",
        element: <Glossary />,
      },
      { path: "/agents", element: <AgentsLandingPage /> },
      { path: "/agents/roster", element: <AgentRoster /> },
      {
        path: "/agents/new",
        element: <CreateAnAgent />,
      },
      {
        path: "/agents/sheet/:codename",
        element: <CharacterSheet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ViewportProvider>
    <CharacterProvider>
      <MantineProvider defaultColorScheme="dark">
        <Notifications />
        <Suspense fallback={<FormattedLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </MantineProvider>
    </CharacterProvider>
  </ViewportProvider>,
);
