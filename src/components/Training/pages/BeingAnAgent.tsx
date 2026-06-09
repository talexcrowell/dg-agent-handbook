import {
  Anchor,
  Button,
  Center,
  Divider,
  Grid,
  List,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

export const BeingAnAgent = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" pt="sm" id="being-an-agent">
      <Grid.Col span={12}>
        <Stack>
          <Stack gap="xs">
            <Title td="underline" style={{ scrollMarginTop: 80 }}>
              Being an Agent
            </Title>
            <Text>
              Delta Green revolves around Agents. These Agents are greatly
              detailed in their character sheets to help players bring them to
              life.
            </Text>
            <Text>
              Delta Green recruits a new prospect only after confirming that
              they can handle the work and the unconventional demands the group
              makes. They usually look to federal agents and special forces,
              adaptable professionals trained to cope with overwhelming stress
              and danger. Sometimes prospects are recruited from other fields,
              such as science, anthropology, or medicine.
            </Text>
            <Text>
              If the prospect has encountered the unnatural, all the better.
              Delta Green wants people who recognize the depth of the danger. If
              your first instinct is to go public with an unnatural discovery,
              it’s likely you are not a Delta Green recruit but a Delta Green
              mission.
            </Text>
            <Text>Agents’ main directives are:</Text>
            <List>
              <List.Item>Stop the unnatural.</List.Item>
              <List.Item>Save lives.</List.Item>
              <List.Item>Minimize exposure.</List.Item>
              <List.Item>
                Cover it up to save others from being exposed.
              </List.Item>
              <List.Item>Never reveal the existence of Delta Green.</List.Item>
            </List>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title td="underline" order={2} style={{ scrollMarginTop: 80 }}>
              Creating an Agent
            </Title>
            <Text>
              A new Delta Green Agent takes only a few minutes to create.
            </Text>
            <Text>
              You can use the{" "}
              <Anchor to="/agents/new" component={Link}>
                Create an Agent
              </Anchor>{" "}
              tool to guide you through the process and you can find all of your
              created Agents in your{" "}
              <Anchor to="/agents/roster" component={Link}>
                Agent Roster
              </Anchor>
              .
            </Text>
            <Text>Here are the steps for Character Creation:</Text>
            <List>
              <List.Item>
                Choose a{" "}
                <Anchor
                  component={Link}
                  to="/training/professions/profession-list"
                >
                  Profession
                </Anchor>
                .
              </List.Item>
              <List.Item>
                Determine{" "}
                <Anchor
                  component={Link}
                  to="/training/stats-and-skills#statistics"
                >
                  Statistics
                </Anchor>
                .
              </List.Item>
              <List.Item>
                Calculate Derived{" "}
                <Anchor
                  component={Link}
                  to="/training/stats-and-skills#attributes"
                >
                  Attributes
                </Anchor>
                .
              </List.Item>
              <List.Item>Name Bonds.</List.Item>
              <List.Item>Define Motivations.</List.Item>
              <List.Item>
                Determine Professional{" "}
                <Anchor component={Link} to="/training/stats-and-skills#skills">
                  Skills
                </Anchor>
                .
              </List.Item>
              <List.Item>
                Choose{" "}
                <Anchor
                  component={Link}
                  to="/training/professions/bonus-skill-package-list"
                >
                  Bonus Skills
                </Anchor>
                .
              </List.Item>
            </List>
            <Text>
              Talk with your Handler to ensure that your Agent works with the
              scenario they have planned.
            </Text>
            <Text>
              Review{" "}
              <Anchor component={Link} to="/training/tradecraft">
                Tradecraft
              </Anchor>{" "}
              and explore how to creatively use your skills during an Operation.
            </Text>
            <Text>
              A unspoken feature of Delta Green is the capability to utilize
              different Agents for different Operations. This means that you
              aren't committed to using only one Agent. You are encouraged to
              explore different character ideas in different operations and see
              what resonates with you.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title td="underline" order={2} style={{ scrollMarginTop: 80 }}>
              Agent Etiquette
            </Title>
            <Text>
              As a player, you speak in your Agent’s voice and work with your
              friends at the table to make sure it’s a game that everyone
              enjoys.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="describe-your-agent's-actions"
              style={{ scrollMarginTop: 80 }}
            >
              Describe Your Agent’s Actions
            </Title>
            <Text>
              First and foremost, listen to the Handler and react to what he or
              she says. The Handler is your window into your Agent’s world. Ask
              questions. Describe how your Agent reacts. The Handler says what
              happens next.
            </Text>
            <Text>
              Sometimes you want your Agent to do things that may not succeed.
              This is likely in a crisis or emergency when events spiral out of
              control. The Handler may ask you to roll dice. Roll well, and
              achieve what you wanted. Fail, and you don’t. Either way, the
              Handler takes that into account to describe what happens next.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="respond-quickly"
              style={{ scrollMarginTop: 80 }}
            >
              Respond Quickly
            </Title>
            <Text>
              Don’t let the game bog down while you decide the best way out of a
              bad situation. Act on your Agent’s instincts. Keep the game
              moving.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="speak-for-your-agent"
              style={{ scrollMarginTop: 80 }}
            >
              Speak for Your Agent
            </Title>
            <Text>
              One way to immerse yourself in a game like Delta Green is to speak
              in your Agent’s voice. Think like your Agent, take on mannerisms
              you’ve invented for your Agent, and imagine the horrors of the
              game from your Agent’s point of view. If things get too intense,
              take a break. But remember that you and the other players are here
              for a horror game.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="respect-the-mood"
              style={{ scrollMarginTop: 80 }}
            >
              Respect the Mood
            </Title>
            <Text>
              Mood is everything! Enjoy the bleak humor that often comes from
              seeing the trouble that Agents fall into, but don’t let your
              eagerness to get a laugh ruin the chilling suspense of confronting
              cosmic terrors.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="work-with-other-players"
              style={{ scrollMarginTop: 80 }}
            >
              Work With the Other Players
            </Title>
            <Text>
              As a role-playing game, Delta Green is social. How you behave at
              the table affects how everyone enjoys the game. The same social
              rules apply here as in any conversation.
            </Text>
            <Text>
              Don’t talk over other players and don’t try to keep all the
              attention. Offer ideas and suggestions, but don’t tell people
              they’re doing it wrong.
            </Text>
            <Text>
              Avoid arguments. If you disagree with another player’s decision or
              the Handler’s interpretation of the rules, let it slide. If you
              think it’s critical, talk to the Handler about it.
            </Text>
          </Stack>
          <Stack gap="xs">
            <Title
              order={3}
              id="trust-the-handler"
              style={{ scrollMarginTop: 80 }}
            >
              Trust the Handler
            </Title>
            <Text>
              You’re both here for the same reason: a suspenseful, horrifying
              game of Delta Green.
            </Text>
          </Stack>
          {viewport.width < 760 && Array.from({ length: 35 }, (_, i) => (
            <Space />
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
