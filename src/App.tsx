import "@mantine/core/styles.css";
import "@gfazioli/mantine-border-animate/styles.css";
import "@gfazioli/mantine-text-animate/styles.css";
import "@gfazioli/mantine-spinner/styles.css";
import "@mantine-bites/lightbox/styles.css";
import { AppShell, Burger, Container, Group, Text, Title } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { IconMenu2 } from "@tabler/icons-react";
import { SearchBar } from "./components/Navbar/SearchBar";

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
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      header={{
        height: 60,
        collapsed:
          pathname === "/" || (pathname.includes("sheet") && width < 760),
      }}
      navbar={{
        width: 275,
        breakpoint: "sm",
        collapsed: {
          mobile: !mobileOpened,
          desktop: pathname === "/" || !desktopOpened,
        },
      }}
    >
      <AppShell.Header>
        <Header
          desktopOpened={desktopOpened}
          mobileOpened={mobileOpened}
          toggleDesktop={toggleDesktop}
          toggleMobile={toggleMobile}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="xl" strategy="grid" px={width < 760 ? "md" : "lg"}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
