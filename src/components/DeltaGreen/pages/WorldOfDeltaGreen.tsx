import { Divider, Grid, ScrollArea, Space, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const WorldOfDeltaGreen = () => {
  const [viewport] = useViewportContext();
  return (
    <ScrollArea h={"95vh"}>
      <Grid
        ta="start"
        p={viewport.width > 600 ? "md" : 0}
        gutter={viewport.width > 600 ? "md" : "0"}
        id="the-world-of-delta-green"
      >
        <Grid.Col span={12}>
          <Stack>
            <Title td="underline">The World of Delta Green</Title>
            <Text>
              Delta Green is a covert group inside the United States federal
              government. Its mission is to investigate, contain, and conceal
              unnatural events, because the unnatural is real and it kills. The
              world of Delta Green is like our own, but beyond the edges of
              reality are powers that outstrip the human mind’s capacity for
              understanding. Sometimes those powers bleed through into our world
              and destroy everything they touch.
            </Text>
            <Text>
              Agents of Delta Green have limited knowledge of these forces. If
              you’re an Agent, it is likely you have experienced the unnatural
              at least once. This inciting event is probably what brought you to
              the attention of Delta Green in the first place. A few know more.
              They suffer that knowledge like a cancer of the mind.
            </Text>
            <Text>
              Sometimes it’s better to know just enough to get the job done, and
              nothing more. That’s the first rule of Delta Green.
            </Text>
            <Divider />
            <Title
              order={2}
              td="underline"
              id="the-unnatural-in-the-modern-era"
            >
              The Unnatural in the Modern Era
            </Title>
            <Text>
              In a world of smartphones and instantaneous communication, how can
              the secret of the unnatural ever be kept? The answer is simple.
            </Text>
            Often, it keeps itself secret.
            <Text>
              First, the genuinely unnatural is rare, and unnatural events that
              destroy more than a few human lives at a time are extremely rare.
            </Text>
            <Text>
              Second, the unnatural tends to consume those that are exposed to
              it, removing the vector in the process.
            </Text>
            <Text>
              Third, humanity is jaded and full of distrust. Science has
              effectively destroyed any belief in things beyond physics. “Proof”
              of the supernatural is met with mockery.
            </Text>
            <Text>
              Finally, a handful of government agencies around the world are
              aware of these threats and actively suppress knowledge of them.
            </Text>
            <Text>
              Taken together, these add up to the illusion of order that covers
              our haunted world.
            </Text>
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
          </Stack>
        </Grid.Col>
      </Grid>
    </ScrollArea>
  );
};
