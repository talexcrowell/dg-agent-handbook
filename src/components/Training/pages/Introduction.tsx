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
import { IconArrowForward, IconArrowRight } from "@tabler/icons-react";

export const Introduction = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" id="introduction" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Introduction</Title>
          <Text>
            Delta Green is a role-playing game about cosmic terror and deadly
            conspiracy. It’s about men and women making awful choices and doing
            terrible things to prevent far worse horrors: incursions of
            unnatural forces that infect and destroy humanity. It is a game
            about fear. About seeing the horrors to come and choosing to stand
            against them.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            The Role-Playing
          </Title>
          <Text>
            Delta Green is played with a group either in person or over voice
            chats. One person is the Handler, they're responsible for presenting
            and managing the game. The other players take the role of Agents of
            a secret organization called "Delta Green".
          </Text>
          <Text>
            After an introduction of the Operation ("Delta Green" term for the
            mystery) by the Handler, the gameplay loop is as follows:
          </Text>
          <List>
            <List.Item>
              The Handler describes a situation, scene, setting, etc.
            </List.Item>
            <List.Item>
              An Agent or Agents describe how their respective Agent would act
              and/or react and what their respective Agent says and does.
            </List.Item>
            <List.Item>
              The Handler determines if a dice roll is necessary based on the
              Agent's action. The results of the dice roll will influence what
              happens next.
            </List.Item>
            <List.Item>The Handler describes what happens next.</List.Item>
            <List.Item>Repeat.</List.Item>
          </List>
          <Text>
            The goal is to become so immersed in your Agent’s imagined
            experiences that the real world drops away and you can feel the
            horror.
          </Text>
          <Text>
            As the Handler and Agents continue this cooperative dialogue and the
            mystery of the Operation unravels, a narrative emerges. A narrative
            of horror, dread, secrets, and terrible consequences.
          </Text>
          <Text>That is Delta Green.</Text>
          <Divider />
          <Title order={2} td="underline">
            Ready to Play?
          </Title>
          <Text>
            The Handler will organize and prepare the game in the venue of their
            choice. They will act as a resource for the players for any major
            questions about the game.
          </Text>
          <Text>
            Although the Handler will help guide you through your first
            Operation, there are some tasks that can help improve and streamline
            the playing experience:
          </Text>
          <List>
            <List.Item>
              Be prepared. Ask the Handler what tools will be necessary to run
              the Operation. (Dice, Roll20, Discord, etc.)
            </List.Item>
            <List.Item>
              Discuss with the Handler about creating an Agent or choosing a
              pre-made Agent.
            </List.Item>
            <List.Item>Review your Agent's character sheet.</List.Item>
            <List.Item>Review Agent Etiquette.</List.Item>
            <List.Item>
              Review the basic rules and ask the Handler for any clarifications.
            </List.Item>
          </List>
          <Text>
            These tasks will save your group some time and help with immersion
            during the Operation.
          </Text>
          <Divider />
          <Center>
            <Button
              rightSection={<IconArrowRight />}
              variant="outline"
              component={Link}
              to='/training/basics'
            >
              Proceed to "Basics"
            </Button>
          </Center>
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
