import "@mantine/core/styles.css";
import "@gfazioli/mantine-border-animate/styles.css";
import "@gfazioli/mantine-text-animate/styles.css";
import "@gfazioli/mantine-spinner/styles.css";
import "@mantine-bites/lightbox/styles.css";
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
      header={{
        height: width < 760 ? 55 : 45,
        collapsed:
          pathname === "/" || (pathname.includes("sheet") && width < 760),
      }}
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl" strategy="grid" px={width < 760 ? "md" : "lg"}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
