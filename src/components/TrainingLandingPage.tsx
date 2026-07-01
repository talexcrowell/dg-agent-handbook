import {
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const TrainingLandingPage = () => {
  return (
    <Stack mt="sm">
      <Title>Training Directory</Title>
      <Divider />
      <Group justify="space-evenly" align="top">
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Training Guide
            </Title>
            <Text>
              Quick introduction into the game of Delta Green including the game
              system, the rules, and how to be an Agent for the Program.
            </Text>
            <Button
              variant="outline"
              component={Link}
              to="/training/introduction"
            >
              View Guide
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Stats and Skills
            </Title>
            <Text>
              Understand the deeper definitions and applications of an Agent's
              stats and skills. This can help shape an idea for a recruit for
              the Program.
            </Text>
            <Button
              variant="outline"
              component={Link}
              to="/training/stats-and-skills"
            >
              View Stats and Skills
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Professions
            </Title>
            <Text>
              Explore the variety of Agent professions and backgrounds that
              participate in the Program's operations.
            </Text>
            <Button
              variant="outline"
              component={Link}
              to="/training/professions"
            >
              View Professions
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Tradecraft
            </Title>
            <Text>
              Discover creative uses of your Agent's skills or services for all
              operations. It's always good to think outside the box.
            </Text>
            <Button
              variant="outline"
              component={Link}
              to="/training/tradecraft"
            >
              View Tradecraft
            </Button>
          </Stack>
        </Card>
        <Card withBorder w={325}>
          <Stack gap="lg">
            <Title ta="center" order={2}>
              Glossary
            </Title>
            <Text>
              A comprehensive guide of terms for almost everything used by and
              associated with the Program.
            </Text>
            <Button variant="outline" component={Link} to="/training/glossary">
              View Glossary
            </Button>
          </Stack>
        </Card>
      </Group>
    </Stack>
  );
};
