import {
  Anchor,
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

export const AfterTheOperation = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" id="after-the-operation" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">After the Operation</Title>
          <Text>
            If your Agent survives and completes the Operation, you are
            generally awarded Sanity points and your Agent is released to return
            back to their normal lives. However, sometimes your Agent's actions
            in the Operation will leak into their personal lives and affect
            their loved ones.
          </Text>
          <Text>
            If you continue to play this Agent, you will be able to craft their
            narrative during their time with Delta Green. You can improve your
            Agent's skills that they failed to attempt during the previous
            Operation by 1D4. You can also participate in a "Home" scene to
            detail what your Agent does in-between Operations.
          </Text>
          <Text>That's a story for you and your Handler to tell.</Text>
          <Text>
            You are also welcome to "retire" your Agent if they didn't seem like
            a great fit for you. Delta Green can always use new Agents.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Home
          </Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor
              component={Link}
              to="/rules/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </Anchor>{" "}
            section in the Rules.
          </Text>
          <Text>
            Some scenes focus on Agents’ lives between operations. Use them to
            explore the things that are important to your Agent and the costs of
            involvement in Delta Green.
          </Text>
          <Text>
            Typically, “home” scenes occur between missions and reflect months
            or even years of time, but the Handler decides when and whether one
            is appropriate. During this time you can engage in Personal Pursuits
            to improve your Agent (at a cost to one of your Bonds).
          </Text>
          <List>
            <Text fw={700}>These Personal Pursuits are:</Text>
            <List.Item>Fulfill Resposibilities</List.Item>
            <List.Item>Back to Nature</List.Item>
            <List.Item>Establish a New Bond</List.Item>
            <List.Item>Go to Therapy</List.Item>
            <List.Item>Improve Skills or Stats</List.Item>
            <List.Item>Personal Motivation</List.Item>
            <List.Item>Special Training</List.Item>
            <List.Item>Stay On the Case</List.Item>
            <List.Item>Study the Unnatural</List.Item>
          </List>
          <Text>
            Recklessness in Operations can cause consequences such as being
            fired from your day job or being arrested/prosecuted.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
