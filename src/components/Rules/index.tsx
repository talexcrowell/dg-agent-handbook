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
import { useNavigate, useParams } from "react-router-dom";

export const Rules = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const { width } = useViewportSize();
  const navigate = useNavigate();
  const { tabValue } = useParams();

  useEffect(() => {
    if(!tabValue){
      navigate('/rules/how-to-play')
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={width > 600 ? 0 : 60}>
      <Grid.Col span={width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="how-to-play"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
        >
          {width > 600 ? (
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
                <Tabs.List>
                  <Stack>
                    <Tabs.Tab
                      value={"how-to-play"}
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
                      value={"training-video"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Training Video
                    </Tabs.Tab>
                  </Stack>
                </Tabs.List>
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
      {tabValue !== "training-video" && width > 992 && (
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
