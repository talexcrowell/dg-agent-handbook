import {
  Flex,
  Grid,
  Image,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Overview = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid pt="sm">
      <Grid.Col span={12}>
        <Stack ta="start">
          <Title>Welcome to Delta Green</Title>
          <Text>
            Players come to Delta Green for all kinds of reasons. They’re eager
            to solve a mystery, kill a villain, or destroy a monster. These
            outcomes are never simple. Sometimes even seeing the threat in a
            Delta Green operation is enough to annihilate a group of Agents.
          </Text>
          <Text>So consider this overview a warning.</Text>
          <Text>
            Delta Green is about fear. It may seem to be about other things from
            time to time. About manipulation. About power. About control. It has
            all these things, but that’s not what it’s about.
          </Text>
          <Text>It lies.</Text>
          <Text>
            Delta Green is about an agent, alone and off the record, breaking
            into an old woman’s house in Brooklyn because, for a split-second,
            she cast the shadow of a hunched, monstrous thing with jaws like a
            jackal.
          </Text>
          <Text>
            Delta Green is about two women who pulled off the heist of the Mayan
            Codex from the American Museum of Natural History—an operation six
            months in the planning—only to burn it in a pyre of gasoline and
            wood in an abandoned field, mourning their lost teammates who it
            drove to madness.
          </Text>
          <Text>
            Delta Green is about watching from the Blackhawk jumpseat as
            something bigger than the forest snatches your strike team’s
            helicopters from the air like flies.
          </Text>
          <Text>Delta Green is not about guns. </Text>
          <Text>Delta Green is not about a bug hunt.</Text>
          <Text>Delta Green is not about understanding. </Text>
          <Text>Delta Green is about the end.</Text>
          <Text>
            The end of everything. Your family, everyone you know, your country,
            all life on Earth. It’s about the end of everything and your place
            in it. Because you’ll end, too. That’s what the fear is about.
            That’s what the game is about.
          </Text>
          <Text>
            It’s not about winning and it’s not about advancement and it’s not
            about the best weapon or the most clever plan. Delta Green is about
            the end of everything—and how much of it you’ll live to see.
          </Text>
          <Text> Welcome.</Text>
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
