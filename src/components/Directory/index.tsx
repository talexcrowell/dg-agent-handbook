import {
  Accordion,
  Anchor,
  Button,
  Card,
  Center,
  Grid,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../contexts/ViewportContext";
import {
  IconNetwork,
  IconPlayerPlayFilled,
  IconTools,
  IconUserQuestion,
} from "@tabler/icons-react";
import { Lightbox } from "@mantine-bites/lightbox";
import { useState } from "react";

export const Directory = () => {
  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);

  return (
    <Grid mt="sm">
      <Grid.Col>
        <Stack>
          <Title>Agent Handbook Directory</Title>
          <Text>
            This Handbook is a cornerstone of operational success for Agents in
            the field. Packed with essential guidance, tactical knowledge, and
            the operational protocols needed to survive and confront the
            unknown, it is an indispensable resource for Agents navigating the
            complexities of covert operations and dealing with the eldritch
            horrors that threaten humanity. The digitization of this handbook
            ensures that Agents can access this critical information anytime and
            anywhere, enhancing their ability to stay prepared, adapt to new
            challenges, and make informed decisions regardless of location or
            mission complexity. This accessibility helps Agents remain
            successful in the face of ever-evolving unnatural threats and
            reinforces the continuous commitment to protecting humanity.
          </Text>
        </Stack>
      </Grid.Col>
      {/* <Grid.Col span={viewport.width >= 700 ? 6 : 12}>
        <Stack>
          <Title order={2}>Onboarding</Title>
          <Stack gap="0">
            <iframe
              width={viewport.width >= 600 ? 500 : 360}
              height={viewport.width >= 600 ? 315 : 198}
              src="https://www.youtube.com/embed/Albop3XB8-o"
            ></iframe>
            <Text size="sm" c="dimmed">
              All credit for this video belongs to{" "}
              <Anchor
                href={"https://www.youtube.com/@TheNubiS"}
                target="_blank"
                rel="noopener noreferrer"
              >
                @TheNubiS
              </Anchor>
              .
            </Text>
          </Stack>
        </Stack>
      </Grid.Col> */}
      <Grid.Col span={12}>
        <Center>
          <Stack>
            <Card
              w={viewport.width >= 600 ? 500 : 360}
              h={viewport.width >= 600 ? 315 : 198}
              withBorder
            >
              <Stack gap="md">
                <Center>
                  <Image
                    src="https://i.imgur.com/M6abaUa.png"
                    h="auto"
                    w={150}
                  />
                </Center>
                <Text ta="center" size="xl">
                  Delta Green Onboarding Video
                </Text>
                <Center>
                  <Button
                    variant="outline"
                    leftSection={<IconPlayerPlayFilled />}
                    w="200"
                    onClick={() => setOpened(true)}
                  >
                    Watch
                  </Button>
                </Center>
                <Text size="sm" c="dimmed" ta="center">
                  All credit for this video belongs to{" "}
                  <Anchor
                    href={"https://www.youtube.com/@TheNubiS"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @TheNubiS
                  </Anchor>
                  .
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Center>
        <Accordion transitionDuration={500}>
          <Accordion.Item value="getting-started">
            <Accordion.Control icon={<IconUserQuestion />}>
              <Text size="xl">Getting Started</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <List>
                <List.Item>
                  <Anchor href="/#/delta-green/welcome">
                    Welcome to Delta Green
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/training/introduction">
                    Training for New Players
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/rules/how-to-play">How to Play</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/training/tradecraft">Tradecraft</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/training/glossary">Glossary</Anchor>
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="agent-tools">
            <Accordion.Control icon={<IconTools />}>
              <Text size="xl">Agent Tools</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <List>
                <List.Item>
                  <Anchor href="/#/agents/new">Create An Agent</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/agents/roster">Agent Roster</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="/#/equipment-and-services/search">
                    Equipment Search
                  </Anchor>
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="external-resources">
            <Accordion.Control icon={<IconNetwork />}>
              <Text size="xl">External Resources</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <List>
                <List.Item>
                  <Anchor
                    href="https://www.delta-green.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Delta Green Site (Support the Creators!)
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor
                    href="http://fairfieldproject.wikidot.com/shotgun-scenarios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shotgun Scenarios (Handlers Only)
                  </Anchor>
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Lightbox.Root
          opened={opened}
          onClose={() => setOpened(false)}
          initialSlide={0}
          withZoom={false}
          withFullscreen={false}
        >
          <Lightbox.Toolbar />
          <Lightbox.Slides>
            <Lightbox.Slide key="0">
              <div
                style={{
                  width: "100%",
                  maxWidth: 1080,
                  aspectRatio: "16 / 9",
                }}
              >
                <iframe
                  title={"Delta Green Onboarding Video"}
                  width={"100%"}
                  height={"100%"}
                  src="https://www.youtube.com/embed/Albop3XB8-o?autoplay=1"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              <Lightbox.Caption>
                <Text size="sm" c="dimmed" ta="center">
                  All credit for this video belongs to{" "}
                  <Anchor
                    href={"https://www.youtube.com/@TheNubiS"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @TheNubiS
                  </Anchor>
                </Text>
              </Lightbox.Caption>
            </Lightbox.Slide>
          </Lightbox.Slides>
        </Lightbox.Root>
      </Grid.Col>
    </Grid>
  );
};

export default Directory;
