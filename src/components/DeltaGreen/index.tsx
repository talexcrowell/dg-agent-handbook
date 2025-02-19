import {
  Affix,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  NavLink,
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";
import styles from "../../Element.module.css";

export const DeltaGreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!tabValue) {
      navigate("/delta-green/overview");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={viewport.width > 600 ? 0 : 60} pt={viewport.width > 600 ? 0 : 10}>
      <Grid.Col span={viewport.width > 992 ? 10 : 12} pb="0">
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/delta-green/${value}`)}
        >
          {viewport.width > 600 ? (
            <Tabs.List>
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
              <Tabs.Tab value="the-world-of-delta-green">
                The World of Delta Green
              </Tabs.Tab>
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
                <Stack>
                  <NavLink
                    label="Overview"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/overview");
                    }}
                    active={location.pathname === "/delta-green/overview"}
                  />
                  <NavLink
                    label="The World of Delta Green"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/the-world-of-delta-green");
                    }}
                    active={
                      location.pathname ===
                      "/delta-green/the-world-of-delta-green"
                    }
                  />
                  <NavLink
                    label=" What is Delta Green?"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/what-is-delta-green");
                    }}
                    active={
                      location.pathname === "/delta-green/what-is-delta-green"
                    }
                  />
                  <NavLink
                    label="The Fundamentals"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/fundamentals");
                    }}
                    active={location.pathname === "/delta-green/fundamentals"}
                  />
                  <NavLink
                    label="How the Game is Played"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/how-the-game-is-played");
                    }}
                    active={
                      location.pathname ===
                      "/delta-green/how-the-game-is-played"
                    }
                  />
                  <NavLink
                    label="How to Play an Agent"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/delta-green/how-to-play-an-agent");
                    }}
                    active={
                      location.pathname === "/delta-green/how-to-play-an-agent"
                    }
                  />
                </Stack>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="overview">
            <ScrollArea h={"93vh"}>
              <Overview />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="the-world-of-delta-green">
            <ScrollArea h={"93vh"}>
              <WorldOfDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="what-is-delta-green">
            <ScrollArea>
              <WhatIsDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="fundamentals">
            <ScrollArea h={"93vh"}>
              <Fundamentals />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="how-the-game-is-played">
            <ScrollArea h={"93vh"}>
              <HowTheGameIsPlayed />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="how-to-play-an-agent">
            <ScrollArea h={"93vh"}>
              <HowToPlayAnAgent />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "overview" && viewport.width > 992 && (
        <Grid.Col span={2} pb={0}>
          <ScrollArea h={"93vh"}>
            <Group py="xs">
              <IconList />
              <Text>Table of Contents</Text>
            </Group>
            <Divider />
            <TableOfContents
              variant="none"
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

export default DeltaGreen;
