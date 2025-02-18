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
    <Grid pb={viewport.width > 600 ? 0 : 60} pt={viewport.width > 600 ? 0 : 10}>
      <Grid.Col span={viewport.width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="how-to-play"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
        >
          {viewport.width > 600 ? (
            <Tabs.List>
              <Tabs.Tab value="how-to-play">How to Play</Tabs.Tab>
              <Tabs.Tab value="combat">Combat</Tabs.Tab>
              <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="training-video">Training Video</Tabs.Tab>
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
                  <NavLink
                    label="Training Video"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/rules/training-video");
                    }}
                    active={location.pathname === "/rules/training-video"}
                  />
                </Stack>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="how-to-play">
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
          <Tabs.Panel value="training-video">
            <TrainingVideo />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "training-video" && viewport.width > 992 && (
        <Grid.Col span={2}>
          <ScrollArea h={"95vh"}>
            <Group py="md">
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
