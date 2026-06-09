import {
  Anchor,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";

export const Directory = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid mt='sm'>
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
      <Grid.Col span={viewport.width >= 700 ? 4 : 12}>
        <Stack>
          <Stack gap="xs">
            <Title order={2}>Getting Started</Title>
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
          </Stack>
          <Stack gap="xs">
            <Title order={2}>Tools</Title>
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
          </Stack>
          <Stack gap="xs">
            <Title order={2}>External Resources</Title>
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
          </Stack>
        </Stack>
      </Grid.Col>
      <Grid.Col span={viewport.width >= 700 ? 8 : 12}>
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
      </Grid.Col>
    </Grid>
  );
};

export default Directory;
