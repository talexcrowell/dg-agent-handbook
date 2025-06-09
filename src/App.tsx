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
    <AppShell padding="sm">
      {pathname !== "/" && (!pathname.includes("sheet") || width > 760) && (
        <AppShell.Header h={width > 760 ? 45 : 55}>
          <Navbar />
        </AppShell.Header>
      )}
      <AppShell.Main
        pt={width > 760 ? 45 : !pathname.includes("sheet") ? 55 : 5}
        pb="0"
      >
        <Container size="xl" px={width > 760 ? "md" : "0"}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
