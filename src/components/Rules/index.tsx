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
  Affix,
  Button,
  Modal,
} from "@mantine/core";
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";
import { TrainingVideo } from "./pages/TrainingVideo";
import { useEffect, useRef, useState } from "react";
import { IconList, IconNotebook } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

export const Rules = () => {
  const [activeTab, setActiveTab] = useState<string | null>("game");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const { width } = useViewportSize();

  useEffect(() => {
    reinitializeRef.current();
  }, [activeTab]);

  return (
    <Grid>
      <Grid.Col span={width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="game"
          orientation="vertical"
          value={activeTab}
          onChange={setActiveTab}
        >
          {width > 600 ? (
            <Tabs.List>
              <Tabs.Tab value="game">How to Play</Tabs.Tab>
              <Tabs.Tab value="combat">Combat</Tabs.Tab>
              <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="training">Training Video</Tabs.Tab>
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
                      value={"game"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How to Play
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"combat"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Combat
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"sanity"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sanity
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"home"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"training"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Training Video
                    </Tabs.Tab>
                  </Stack>
                </Tabs.List>
              </Modal>
            </Affix>
          )}
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
      {activeTab !== "training" && width > 992 && (
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
