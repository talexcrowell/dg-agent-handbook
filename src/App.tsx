import "@mantine/core/styles.css";
import { AppShell, Container } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
function App() {
  const { height } = useViewportSize();
  return (
    <AppShell padding="sm">
      <AppShell.Header h={40}>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main pt={50} pb={0} h={'100vh'}>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
