import "@mantine/core/styles.css";
import { AppShell, Container } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
import { useEffect } from "react";

function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const { width } = useViewportSize();
  return (
    <AppShell
      padding="xs"
      header={{
        height: width > 760 ? 45 : 55,
        collapsed:
          pathname === "/" || (pathname.includes("sheet") && width < 760),
      }}
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl" strategy="grid">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
