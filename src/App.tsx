import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { Stats } from "./components/Stats";
import { Profession } from "./components/Profession";
import { OtherProfessionalSkills } from "./components/OtherProfessionalSkills";
import { CreateAnAgent } from "./components/CreateAnAgent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Container size="lg">
        <CreateAnAgent />
      </Container>
    </MantineProvider>
  );
}

export default App;
