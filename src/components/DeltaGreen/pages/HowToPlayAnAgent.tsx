import { Divider, Grid, ScrollArea, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const HowToPlayAnAgent = () => {
  const { width } = useViewportSize();
  return (
    <ScrollArea h={"95vh"}>
      <Grid
        ta="start"
        p={width > 600 ? "md" : 0}
        gutter={width > 600 ? "md" : "0"}
        id="how-to-play-an-agent"
      >
        <Grid.Col span={12}>
          <Stack>
            <Title td="underline">How to Play an Agent</Title>
            <Text>
              As a player, you speak in your Agent’s voice and work with your
              friends at the table to make sure it’s a game that everyone
              enjoys.
            </Text>
            <Divider />
            <Title order={2} td="underline">
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
            <Divider />
            <Title order={2} td="underline">
              Respond Quickly
            </Title>
            <Text>
              Don’t let the game bog down while you decide the best way out of a
              bad situation. Act on your Agent’s instincts. Keep the game
              moving.
            </Text>
            <Divider />
            <Title order={2} td="underline">
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
            <Divider />
            <Title order={2} td="underline">
              Respect the Mood
            </Title>
            <Text>
              Mood is everything! Enjoy the bleak humor that often comes from
              seeing the trouble that Agents fall into, but don’t let your
              eagerness to get a laugh ruin the chilling suspense of confronting
              cosmic terrors.
            </Text>
            <Divider />
            <Title order={2} td="underline">
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
            <Divider />
            <Title order={2} td="underline">
              Trust the Handler
            </Title>
            <Text>
              You’re both here for the same reason: a suspenseful, horrifying
              game of Delta Green.
            </Text>
            <Divider />
          </Stack>
        </Grid.Col>
      </Grid>
    </ScrollArea>
  );
};
