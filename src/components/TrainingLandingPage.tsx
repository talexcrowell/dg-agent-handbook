import {
  Button,
  Card,
  Center,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useViewportContext } from "../contexts/ViewportContext";

export const TrainingLandingPage = () => {
  const [viewport] = useViewportContext();
  const items = [
    {
      title: "Training Guide",
      description:
        "Quick introduction into the game of Delta Green including the game system, the rules, and how to be an Agent for the Program.",
      url: "/training/introduction",
    },

    {
      title: "Stats and Skills",
      description:
        "Understand the deeper definitions and applications of an Agent's stats and skills. This can help shape an idea for a recruit for the Program.",
      url: "/training/stats-and-skills",
    },

    {
      title: "Professions",
      description:
        "Explore the variety of Agent professions and backgrounds that participate in the Program's operations.",
      url: "/training/professions",
    },

    {
      title: "Tradecraft",
      description:
        "Discover creative uses of your Agent's skills or services for all operations. It's always good to think outside the box.",
      url: "/training/tradecraft",
    },

    {
      title: "Glossary",
      description:
        "A comprehensive guide of terms for almost everything used by and associated with the Program.",
      url: "/training/glossary",
    },
  ];

  const DesktopCard = (item) => {
    return (
      <Card withBorder>
        <Group justify="space-between">
          <Stack gap="lg" w={'80%'}>
            <Title ta="center" order={2} ta="start">
              {item.title}
            </Title>
            <Text>{item.description}</Text>
          </Stack>
          <Button variant="outline" component={Link} to={item.url} size="xl" w={'15%'}>
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
      <Title>Training Directory</Title>
      <Divider />
      <Stack>
        {items.map((item) => {
          return viewport.width > 600 ? DesktopCard(item) : MobileCard(item);
        })}
      </Stack>
    </Stack>
  );
};
