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
import {
  IconChevronRight,
  IconList,
  IconNotebook,
  IconWorld,
} from "@tabler/icons-react";
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
      navigate("/delta-green/welcome");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid>
      <Grid.Col span={viewport.width > 992 ? 10 : 12} py="0">
        <Tabs
          defaultValue="welcome"
          value={tabValue}
          onChange={(value) => navigate(`/delta-green/${value}`)}
          keepMounted={false}
        >
          {viewport.width > 760 && (
            <Tabs.List>
              <Tabs.Tab value="welcome">Welcome</Tabs.Tab>
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
            </Tabs.List>
          )}
          <Tabs.Panel value="welcome">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <Overview />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="the-world-of-delta-green">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <WorldOfDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="what-is-delta-green">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <WhatIsDeltaGreen />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="fundamentals">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <Fundamentals />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="how-the-game-is-played">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <HowTheGameIsPlayed />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "welcome" && viewport.width > 992 && (
        <Grid.Col span={2} py="0">
          <ScrollArea h={"93vh"}>
            <Group py="xs" align="middle">
              <IconList />
              <Text>Table of Contents</Text>
            </Group>
            <Divider />
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

export default DeltaGreen;
