import {
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useCharacterContext } from "../contexts/CharacterContext";
import { Link, NavLink } from "react-router-dom";

export const AgentsLandingPage = () => {
  const [{ currentCharacter }, actions] = useCharacterContext();

  return (
    <Stack mt="sm">
      <Title>Agents Directory</Title>
      <Divider />
      <Group justify="space-evenly">
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Personnel File
            </Title>
            <Text>
              View your current Agent's file including their stats, skills,
              equipment, and their personal information. There are additional
              tools provided to help keep your Agent's profile stay up-to-date
              throughout operations.
            </Text>
            <Button
              variant="outline"
              component={Link}
              to={`/agents/sheet/${currentCharacter.codename}`}
              disabled={!currentCharacter.codename}
            >
              View
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Agent Roster
            </Title>{" "}
            <Text>
              View the roster of Agents that you have recruited into the Program
              and other Agents on standby for last minute recruitment for an
              operation. Agent profiles stored on other devices can be imported
              here.
            </Text>
            <Button variant="outline" component={Link} to="/agents/roster">
              View
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Create an Agent
            </Title>
            <Text>
              Engage in a short guided process to create an Agent file for the
              Program's Agent Roster. The process will quantify the recruit's
              abilities and experience to create an fully interactable record of
              this Agent's tenure with the Program.
            </Text>
            <Button variant="outline" component={Link} to="/agents/new">
              Start
            </Button>
          </Stack>
        </Card>
      </Group>
    </Stack>
  );
};
