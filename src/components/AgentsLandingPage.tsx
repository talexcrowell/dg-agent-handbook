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
import { useViewportContext } from "../contexts/ViewportContext";

export const AgentsLandingPage = () => {
  const [{ currentCharacter }, actions] = useCharacterContext();
  const [viewport] = useViewportContext();
  const items = [
    {
      title: "Personnel File",
      description:
        "View your current Agent's file including their stats, skills, equipment, and their personal information. There are additional tools provided to help keep your Agent's profile stay up-to-date throughout operations.",
      url: `/agents/sheet/${currentCharacter.codename}`,
    },
    {
      title: "Agent Roster",
      description:
        "View the roster of Agents that you have recruited into the Program and other Agents on standby for last minute recruitment for an operation. Agent profiles stored on other devices can be imported here.",
      url: "/agents/roster",
    },
    {
      title: "Create an Agent",
      description:
        "Engage in a short guided process to create an Agent file for the Program's Agent Roster. The process will quantify the recruit's abilities and experience to create an fully interactable record of this Agent's tenure with the Program.",
      url: "/agents/new",
    },
  ];

  const DesktopCard = (item) => {
    return (
      <Card withBorder>
        <Group justify="space-between">
          <Stack gap="lg" w={"80%"}>
            <Title ta="center" order={2} ta="start">
              {item.title}
            </Title>
            <Text>{item.description}</Text>
          </Stack>
          <Button
            variant="outline"
            component={Link}
            to={item.url}
            size="xl"
            w={"15%"}
          >
            View
          </Button>
        </Group>
      </Card>
    );
  };

  const MobileCard = (item) => {
    return (
      <Card withBorder>
        <Stack gap="lg">
          <Title ta="center" order={2}>
            {item.title}
          </Title>
          <Text>{item.description}</Text>
          <Button variant="outline" component={Link} to={item.url}>
            View
          </Button>
        </Stack>
      </Card>
    );
  };

  return (
    <Stack mt="sm">
      <Title>Agents Directory</Title>
      <Divider />
      <Stack>
        {items.map((item) => {
          return viewport.width > 600 ? DesktopCard(item) : MobileCard(item);
        })}
      </Stack>
    </Stack>
  );
};
