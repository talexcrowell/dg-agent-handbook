import {
  Grid,
  ScrollArea,
  Stack,
  Tabs,
  Text,
  Title,
  TableOfContents,
  Group,
  Divider,
} from "@mantine/core";
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";
import { TrainingVideo } from "./pages/TrainingVideo";
import { useEffect, useRef, useState } from "react";
import { IconList } from "@tabler/icons-react";

export const Rules = () => {
  const [activeTab, setActiveTab] = useState<string | null>("game");
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    reinitializeRef.current();
  }, [activeTab]);

  return (
    <Grid>
      <Grid.Col span={10}>
        <Tabs
          defaultValue="game"
          orientation="vertical"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab value="game">How to Play</Tabs.Tab>
            <Tabs.Tab value="combat">Combat</Tabs.Tab>
            <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab value="training">Training Video</Tabs.Tab>
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
          <Tabs.Panel value="training">
            <TrainingVideo />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {activeTab !== "training" && (
        <Grid.Col span={2}>
          <ScrollArea h={"95vh"}>
            <Group py="md">
              <IconList />
              <Text>Table of Contents</Text>
            </Group>
            <TableOfContents
              variant="light"
              color="blue"
              size="sm"
              radius="sm"
              reinitializeRef={reinitializeRef}
              scrollSpyOptions={{
                selector: `#${activeTab} :is(h1, h2, h3, h4, h5, h6)`,
              }}
              getControlProps={({ data }) => ({
                onClick: () => data.getNode().scrollIntoView(),
                children: data.value,
              })}
            />
          </ScrollArea>
        </Grid.Col>
      )}
    </Grid>
  );
};
