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
          <Stack gap="xs">
            <Title td="underline" style={{ scrollMarginTop: 80 }}>
              After the Operation
            </Title>
            <Text>
              If your Agent survives and completes the Operation, you are
              generally awarded Sanity points and your Agent is released to
              return back to their normal lives. However, sometimes your Agent's
              actions in the Operation will leak into their personal lives and
              affect their loved ones.
            </Text>
            <Text>
              If you continue to play this Agent, you will be able to craft
              their narrative during their time with Delta Green. You can
              improve your Agent's skills that they failed to attempt during the
              previous Operation ("rolling failures") and participate in a Home
              scene to detail what your Agent does in-between Operations. That's
              a story for you and your Handler to tell.
            </Text>
            <Text>
              You are also welcome to "retire" your Agent if they didn't seem
              like a great fit for you. Delta Green can always use new Agents.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title order={2} td="underline" style={{ scrollMarginTop: 80 }}>
              Rolling Failures
            </Title>
            <Text>
              In Delta Green, Agents learn through failure and can improve
              skills that failed during the previous Operation. These "failed"
              skills should be marked with a check on the character sheet when
              the skill test fails anytime during gameplay. Even if there are
              multiple failures from using the same skill test, each skill can
              only be checked once.
            </Text>
            <Text>
              For each skill is checked, you will roll a 1D4 and add the result
              to the respective skill score. For example:
            </Text>
            <Text fs="italic">
              Agent COLTON checks his character sheet and notes that they failed
              at{" "}
              <Text inherit span fw={700}>
                Athletics (50%), Firearms (40%), and Search (30%)
              </Text>{" "}
              during the previous operation. Agent COLTON rolls a 1D4 for each
              skill resulting in{" "}
              <Text inherit span fw={700}>
                3, 4, and 1
              </Text>
              . Those values are added to the respective skill resulting in
              Agent COLTON's skills to be{" "}
              <Text inherit span fw={700}>
                Athletics (50 + 3 = 53%), Firearms (40 + 4 = 44%), and Search
                (30 + 1 = 31%)
              </Text>
              .
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title order={2} td="underline" style={{ scrollMarginTop: 80 }}>
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
              explore the things that are important to your Agent and the costs
              of involvement in Delta Green.
            </Text>
            <Text>
              Typically, “home” scenes occur between missions and reflect months
              or even years of time, but the Handler decides when and whether
              one is appropriate. During this time you can engage in Personal
              Pursuits to improve your Agent (at a cost to one of your Bonds).
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
          {viewport.width > 760 &&
            Array.from({ length: 60 }, (_, i) => <Space />)}
      </Grid.Col>
    </Grid>
  );
};
