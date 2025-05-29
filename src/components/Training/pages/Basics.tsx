import {
  Anchor,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  List,
  ListItem,
  ScrollArea,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

export const Basics = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" id="basics" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Basics</Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor
              component={Link}
              to="/rules/how-to-play"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Play
            </Anchor>{" "}
            section in the Rules.
          </Text>
          <Text>
            The rules for Delta Green are very simple and the typical gameplay
            is straightforward:
          </Text>
          <List>
            <List.Item>The Handler describes the situation.</List.Item>
            <List.Item>An Agent says what they are doing.</List.Item>
            <List.Item>
              The Handler decides whether you succeed as well as what happens
              next.
            </List.Item>
          </List>
          <Text>
            The core of the rules revolve around the final step. Does the Agent
            succeed or not?
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Does It Require a Stat or a Skill?
          </Title>
          <Text>
            Based on the Agent's intended action, the Handler will determine if
            requires a stat, a skill, or just effort.
          </Text>
          <Text>
            <Text fw={700} span>
              Skill:
            </Text>{" "}
            If your Agent is trying to do something that only someone with a
            great deal of training could achieve, that requires a skill. The
            Handler decides which skills apply.
          </Text>
          <Text>
            <Text fw={700} span>
              Stat:
            </Text>{" "}
            If your Agent is trying to do something that doesn't require
            training, that may require not a skill but instead a certain score
            in a stat.
          </Text>
          <Title order={2} td="underline">
            Does It Require a Roll?
          </Title>
          <Text>
            This is ultimately up to the Handler. There are a variety of factors
            that can determine if a roll is necessary such as the environment,
            moments of crisis, or actions of NPCs.
          </Text>
          <Title order={2} td="underline">
            Roll Results
          </Title>
          <Text>
            If it is determined that the Agent has to roll, you will use a
            percentile die (1D100) or two identifiable 10-sided die (2D10) to
            get a result from 01 to 100. . From best to worst the possible
            results are:{" "}
            <Text fw={700} span c="green">
              Critical Success
            </Text>
            ,{" "}
            <Text fw={700} span c="green">
              Success
            </Text>
            ,{" "}
            <Text fw={700} span c="red">
              Failure
            </Text>
            , and{" "}
            <Text fw={700} span c="red">
              Fumble
            </Text>
            .
          </Text>
          <Text>
            <Text fw={700} span c="green">
              Critical Success:{" "}
            </Text>
            Result is a success and the numbers match or is equal to 01. This
            will succeed as "perfectly" as possible.
          </Text>
          <Text>
            <Text fw={700} span c="green">
              Success:{" "}
            </Text>
            Result is equal or less than the Agent's skill or stat.
          </Text>
          <Text>
            <Text fw={700} span c="red">
              Failure:{" "}
            </Text>
            Result is more than the Agent's skill or stat.
          </Text>
          <Text>
            <Text fw={700} span c="red">
              Fumble:{" "}
            </Text>
            Result is a failure and the numbers match or is equal to 00(100).
            The action fails and the Agent will suffer another detriment.
          </Text>
          <Title order={2} td="underline">
            Other Types of Rolls
          </Title>
          <Text>
            There are 3 other types of rolls: Opposed, Pursuit, and Luck
          </Text>
          <Text>
            <Text fw={700} span>
              Opposed Rolls:{" "}
            </Text>
            When two characters (player and/or NPC) are using skills in direct
            opposition of each other. Both sides roll and the better succeeding
            dice roll wins. If both fail, the result is up to the Handler.
          </Text>
          <Text>
            <Text fw={700} span>
              Pursuit Rolls:{" "}
            </Text>
            When one character wants to catch another, there's one or more
            opposed tests. Typically, one side will need two successes and wins
            cancel each other out mimicing the distance between pursuer and
            quarry.
          </Text>
          <Text>
            <Text fw={700} span>
              Luck Rolls:{" "}
            </Text>
            Sometimes it solely comes down to luck. Roll the dice with a 50%
            chance of success.
          </Text>
          <Divider />
          <Center>
            <Button
              rightSection={<IconArrowRight />}
              variant="outline"
              component={Link}
              to="/training/combat-sanity-and-willpower"
            >
              Proceed to "Combat, Sanity, and Willpower"
            </Button>
          </Center>
          <Space />
          <Space />
          <Space />
          <Space />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
