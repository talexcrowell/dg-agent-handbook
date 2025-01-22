import "@mantine/core/styles.css";
import { AppShell, Container } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
function App() {
  const { width } = useViewportSize();
  return (
    <AppShell padding="sm">
      <AppShell.Header h={ width > 992 ? 45 : 55}>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main pt={width > 992 ? 45 : 55} pb={0}>
        <Container size="xl" px={width > 600 ? 'md' : '0'}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
