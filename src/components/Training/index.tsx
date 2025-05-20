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
  NavLink,
} from "@mantine/core";
import { TrainingVideo } from "./pages/TrainingVideo";
import { useEffect, useRef, useState } from "react";
import {
  IconBook,
  IconBook2,
  IconList,
  IconNotebook,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";
import { Introduction } from "./pages/Introduction";
import { Basics } from "./pages/Basics";
import { BeingAnAgent } from "./pages/BeingAnAgent";
import { CombatSanityAndWillpower } from "./pages/CombatSanityAndWillpower";
import { AfterTheOperation } from "./pages/AfterTheOperation";

export const Training = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!tabValue) {
      navigate("/training/introduction");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={0}>
      <Grid.Col span={viewport.width > 992 ? 10 : 12} pb="0">
        <Tabs
          defaultValue="introduction"
          value={tabValue}
          onChange={(value) => navigate(`/training/${value}`)}
        >
          {/* {viewport.width > 600 ? ( */}
          <Tabs.List>
            <Tabs.Tab value="introduction">Introduction</Tabs.Tab>
            <Tabs.Tab value="basics">Basics</Tabs.Tab>
            <Tabs.Tab value="combat-sanity-and-willpower">
              Combat, Sanity, and Willpower
            </Tabs.Tab>
            <Tabs.Tab value="being-an-agent">Being an Agent</Tabs.Tab>
            <Tabs.Tab value="after-the-operation">After the Operation</Tabs.Tab>
          </Tabs.List>
          {/* ) : (
            <Affix position={{ bottom: 20, right: 20 }}>
              <Button
                leftSection={<IconNotebook />}
                variant="gradient"
                onClick={() => setMobileMenuOpen(true)}
              >
                Rules Section List
              </Button>
              <Modal
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                fullScreen
                title="Section List"
              >
                <Stack>
                  <NavLink
                    label="How to Play"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/how-to-play");
                    }}
                    active={location.pathname === "/rules/how-to-play"}
                  />
                  <NavLink
                    label="Combat"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/combat");
                    }}
                    active={location.pathname === "/rules/combat"}
                  />
                  <NavLink
                    label="Sanity"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/sanity");
                    }}
                    active={location.pathname === "/rules/sanity"}
                  />
                  <NavLink
                    label="Home"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/home");
                    }}
                    active={location.pathname === "/rules/home"}
                  />
                </Stack>
              </Modal>
            </Affix>
          )} */}
          <Tabs.Panel value="introduction">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <Introduction />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="basics">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <Basics />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="combat-sanity-and-willpower">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <CombatSanityAndWillpower />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="being-an-agent">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <BeingAnAgent />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="after-the-operation">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <AfterTheOperation />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "training-video" && viewport.width > 992 && (
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

export default Training;
