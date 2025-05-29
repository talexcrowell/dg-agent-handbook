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
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";
import { TrainingVideo } from "./pages/TrainingVideo";
import { useEffect, useRef, useState } from "react";
import {
  IconBook,
  IconBook2,
  IconChevronRight,
  IconList,
  IconNotebook,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";

export const Rules = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!tabValue) {
      navigate("/rules/how-to-play");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={0}>
      <Grid.Col span={viewport.width > 992 ? 10 : 12} pb="0">
        <Tabs
          defaultValue="how-to-play"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
        >
          {viewport.width > 760 ? (
            <Tabs.List>
              <Tabs.Tab value="how-to-play">How to Play</Tabs.Tab>
              <Tabs.Tab value="combat">Combat</Tabs.Tab>
              <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
            </Tabs.List>
          ) : (
            <Affix position={{ bottom: 20, right: 20 }}>
              <Button
                leftSection={<IconNotebook />}
                variant="filled"
                onClick={() => setMobileMenuOpen(true)}
                tt="capitalize"
              >
                <Text size="sm" fw={500} truncate="end" maw={175}>
                  Rules /{" "}
                  {tabValue === "how-to-play" ? "How to Play" : tabValue}
                </Text>
              </Button>
              <Modal
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                fullScreen
                title={
                  <Group>
                    <IconBook />
                    <Text fw={700}>Rules</Text>
                  </Group>
                }
              >
                <Stack>
                  <NavLink
                    label="How to Play"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/how-to-play");
                    }}
                    active={location.pathname === "/rules/how-to-play"}
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    label="Combat"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/combat");
                    }}
                    active={location.pathname === "/rules/combat"}
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    label="Sanity"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/sanity");
                    }}
                    active={location.pathname === "/rules/sanity"}
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    label="Home"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/home");
                    }}
                    active={location.pathname === "/rules/home"}
                    rightSection={<IconChevronRight size={16} />}
                  />
                </Stack>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="how-to-play">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <HowToPlay />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="combat">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <Combat />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="sanity">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <Sanity />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="home">
            <ScrollArea h={"91vh"} scrollbars="y" offsetScrollbars="y">
              <Home />
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

export default Rules;
