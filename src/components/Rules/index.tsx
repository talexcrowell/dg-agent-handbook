import { Grid, ScrollArea, Stack, Tabs, Text, Title } from "@mantine/core";
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";

export const Rules = () => {
  return (
    <Tabs defaultValue="game" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="game">How to Play</Tabs.Tab>
        <Tabs.Tab value="combat">Combat</Tabs.Tab>
        <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
        <Tabs.Tab value="home">Home</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="game">
        <ScrollArea h={"95vh"}>
          <HowToPlay />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="combat">
        <ScrollArea h={"95vh"}>
          <Combat />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="sanity">
        <ScrollArea h={"95vh"}>
          <Sanity />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="home">
        <ScrollArea h={"95vh"}>
          <Home />
        </ScrollArea>
      </Tabs.Panel>
    </Tabs>
  );
};
