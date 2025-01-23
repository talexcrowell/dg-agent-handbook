import {
  Affix,
  Button,
  Grid,
  Group,
  Modal,
  ScrollArea,
  Stack,
  TableOfContents,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { Overview } from "./pages/Overview";
import { WorldOfDeltaGreen } from "./pages/WorldOfDeltaGreen";
import { WhatIsDeltaGreen } from "./pages/WhatIsDeltaGreen";
import { Fundamentals } from "./pages/Fundamentals";
import { HowTheGameIsPlayed } from "./pages/HowTheGameIsPlayed";
import { HowToPlayAnAgent } from "./pages/HowToPlayAnAgent";
import { IconList, IconNotebook } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useViewportSize } from "@mantine/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const DeltaGreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const { width } = useViewportSize();
  const navigate = useNavigate();
  const { tabValue } = useParams();

  useEffect(() => {
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={width > 600 ? 0 : 60}>
      <Grid.Col span={width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/delta-green/${value}`)}
        >
          {width > 600 ? (
            <Tabs.List>
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
              <Tabs.Tab value="world">The World of Delta Green</Tabs.Tab>
              <Tabs.Tab value="what-is-delta-green">
                What is Delta Green?
              </Tabs.Tab>
              <Tabs.Tab value="fundamentals">The Fundamentals</Tabs.Tab>
              <Tabs.Tab value="how-the-game-is-played">
                How the Game is Played
              </Tabs.Tab>
              <Tabs.Tab value="how-to-play-an-agent">
                How to Play an Agent
              </Tabs.Tab>
            </Tabs.List>
          ) : (
            <Affix position={{ bottom: 20, right: 20 }}>
              <Button
                leftSection={<IconNotebook />}
                variant="gradient"
                onClick={() => setMobileMenuOpen(true)}
              >
                Section List
              </Button>
              <Modal
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                fullScreen
                title="Section List"
              >
                <Tabs.List>
                  <Stack>
                    <Tabs.Tab
                      value="overview"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Overview
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="world"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The World of Delta Green
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="what-is-delta-green"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      What is Delta Green?
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="fundamentals"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Fundamentals
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="how-the-game-is-played"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How the Game is Played
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="how-to-play-an-agent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How to Play an Agent
                    </Tabs.Tab>
                  </Stack>
                </Tabs.List>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="overview">
            <ScrollArea>
              <Overview />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="world">
            <ScrollArea>
              <WorldOfDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="what-is-delta-green">
            <ScrollArea>
              <WhatIsDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="fundamentals">
            <ScrollArea>
              <Fundamentals />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="how-the-game-is-played">
            <ScrollArea>
              <HowTheGameIsPlayed />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="how-to-play-an-agent">
            <ScrollArea>
              <HowToPlayAnAgent />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "overview" && width > 992 && (
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
                selector: `#${tabValue} :is(h1, h2, h3, h4, h5, h6)`,
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
