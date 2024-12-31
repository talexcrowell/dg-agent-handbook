import "./App.css";
import "@mantine/core/styles.css";
import { AppShell, Container } from "@mantine/core";
import { CreateAnAgent } from "./components/CreateAnAgent";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
