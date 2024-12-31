import { Grid, Stack, Tabs, Text, Title } from "@mantine/core";
import { Overview } from "./pages/Overview";
import { WorldOfDeltaGreen } from "./pages/WorldOfDeltaGreen";
import { WhatIsDeltaGreen } from "./pages/WhatIsDeltaGreen";
import { Fundamentals } from "./pages/Fundamentals";
import { HowTheGameIsPlayed } from "./pages/HowTheGameIsPlayed";
import { HowToPlayAnAgent } from "./pages/HowToPlayAnAgent";

export const DeltaGreen = () => {
  return (
    <Tabs defaultValue="overview" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="world">The World of Delta Green</Tabs.Tab>
        <Tabs.Tab value="what">What is Delta Green?</Tabs.Tab>
        <Tabs.Tab value="fundamentals">The Fundamentals</Tabs.Tab>
        <Tabs.Tab value="game">How the Game is Played</Tabs.Tab>
        <Tabs.Tab value="agent">How to Play an Agent</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">
        <Overview />
      </Tabs.Panel>
      <Tabs.Panel value="world">
        <WorldOfDeltaGreen />
      </Tabs.Panel>
      <Tabs.Panel value="what">
        <WhatIsDeltaGreen />
      </Tabs.Panel>
      <Tabs.Panel value="fundamentals">
        <Fundamentals />
      </Tabs.Panel>
      <Tabs.Panel value="game">
        <HowTheGameIsPlayed />
      </Tabs.Panel>
      <Tabs.Panel value="agent">
        <HowToPlayAnAgent />
      </Tabs.Panel>
    </Tabs>
  );
};
