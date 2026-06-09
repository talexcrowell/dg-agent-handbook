import {
  Divider,
  Grid,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Fundamentals = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" pt="sm" id="fundamentals">
      <Grid.Col span={12}>
        <Stack>
          <Stack gap="xs">
            <Title
              td="underline"
              id="fundamentals"
              style={{ scrollMarginTop: 80 }}
            >
              The Fundamentals
            </Title>
            <Text>
              The mission sounds simple: Save lives, neutralize unnatural
              threats, and conceal the threats so they can’t harm anyone again.
              In practice, it is never that simple. There are many types of
              Delta Green operations but they all share the following qualities.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="investigation-and-uncertainty"
              style={{ scrollMarginTop: 80 }}
            >
              Investigation and Uncertainty
            </Title>
            <Text>
              Delta Green is a call to action against forces of the unnatural.
              First, it is an investigation to discover the nature of a threat,
              searching for clues and interviewing witnesses and victims. If the
              threat is unnatural, the operation shifts to removing that threat
              with as little public notice as possible. Just like a real-world
              intelligence operation, a Delta Green op is fraught with
              uncertainty. Absolute clarity is never an option, but the mission
              must be completed.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="suspense-and-horror"
              style={{ scrollMarginTop: 80 }}
            >
              Suspense and Horror
            </Title>
            <Text>
              Approaching the unnatural—forces that defy physics and human
              comprehension—is never comfortable, especially if you’ve faced it
              before. You never get used to it. It can’t be understood in the
              conventional sense. The anticipation of uncovering the rotten core
              of an operation is both a lure and a poison. The horrors that
              surround the unnatural are beyond even the most hardened agents.
              Yet someone must confront them. Physical threats are only half the
              equation of a Delta Green op. The mental toll of confronting the
              impossible is real and crippling. Few agents last long.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="violence-and-moral-choices"
              style={{ scrollMarginTop: 80 }}
            >
              Violence and Moral Choices
            </Title>
            <Text>
              When the world falls away and the moment comes for violence, Delta
              Green agents can’t afford to hesitate. Emergencies require
              split-second calls of questionable morality that may haunt agents
              for the rest of their lives. Sacrificing one innocent life for the
              survival of humanity might be an easier transaction for some than
              for others. Sometimes violence is worse than useless because
              you’re up against something that transcends reality itself. It’s
              hard to tell the difference until the bullets are flying.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="sanity-and-comprehension"
              style={{ scrollMarginTop: 80 }}
            >
              Sanity and Comprehension
            </Title>
            <Text>
              Human existence is a struggle for understanding. The unnatural is
              that which the human brain cannot understand. The unnatural in all
              its forms is an abyss that consumes people whole, drawing them
              over the edge into insanity. It’s a trap that will never stop
              attracting us. Wise agents quickly learn to let understanding go,
              except for the few facts required to survive.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="keeping-secrets"
              style={{ scrollMarginTop: 80 }}
            >
              Keeping Secrets
            </Title>
            <Text>
              Even within the pressurized folds of Delta Green there are
              secrets. Agents must keep operations from their family, their
              jobs, and, worse, from other agents. There is safety in ignorance.
              Agents are truly alone in a world that’s not nearly as well
              understood as the rank and file of humanity believe it to be.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              id="personal-and-professional-consequences"
              style={{ scrollMarginTop: 80 }}
            >
              Personal and Professional Consequences
            </Title>
            <Text>
              The impact of these secrets can be devastating. Divorce, job loss,
              lawsuits, criminal prosecution, or worse. You are part of a
              conspiracy. You will be expected to break every law and personal
              code to perform the mission and, just as important, to cover it
              up. There is no quarter taken or given. If you are arrested or
              humiliated in the media, nobody from the group can help. And if
              you reveal the group’s secrets, no matter the circumstances, you
              become the operation.
            </Text>
          </Stack>
          {viewport.width > 760 &&
            Array.from({ length: 60 }, (_, i) => <Space />)}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
