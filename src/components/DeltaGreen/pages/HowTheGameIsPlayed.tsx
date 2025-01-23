import { Divider, Grid, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const HowTheGameIsPlayed = () => {
  const { width } = useViewportSize();
  return (
    <Grid
      ta="start"
      p={width > 600 ? "md" : 0}
      gutter={width > 600 ? "md" : "0"}
      id="how-the-game-is-played"
    >
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">How The Game Is Played</Title>
          <Text>
            Delta Green is a tabletop roleplaying game, composed of players
            creating and taking the roles of Agents investigating an unnatural
            mystery. The game uses polyhedral dice, four-sided, six-sided,
            eight-sided, ten-sided, twelve-sided and twenty-sided: “1D8” means
            one eight-sided die, “2D4” means two four-sided dice, and so on.
            “Percentile dice” and “1D100” mean roll two ten-sided dice and
            designate one as the tens digit and the other as the ones digit to
            show a number between 01 and 00 (meaning 100).
          </Text>
          <Divider />
          <Title order={2}>Your Agent In the Game</Title>
          <Text>
            A player takes the role of a Delta Green Agent and describes how
            that Agent confronts unnatural horrors. What can your character do
            in a Delta Green mission? Agents’ abilities are measured with
            statistics that define broad capabilities, like Strength,
            Intelligence, or Charisma; and by skills that describe specific
            training, like Unarmed Combat, History, or Persuade.
          </Text>
          <Text>
            The higher the value of a statistic or a skill, the more effective
            it is. Often simply knowing your Agent has a specific skill tells
            the person running the game whether the Agent can accomplish a goal.
            When things are desperate and unpredictable, you roll dice— to see
            whether your Agent has the Strength to push open a locked door or
            can Persuade the axe-wielding maniac to let the Agent live.
          </Text>
          <Text>
            When things harm your Agent, we measure it in derived attributes:
            Hit Points, Willpower Points, and Sanity Points.
          </Text>
          <Text>
            We also measure the strength of your Agent’s relationships with the
            most important people in his or her life with Bonds, which keep your
            Agent sane, but deteriorate as your Agent suffers trauma.
          </Text>
          <Divider />
          <Title order={2}>The Handler</Title>
          <Text>
            One player does not play an Agent but takes the role of the Handler
            who controls the game. The Handler creates the mystery that the
            Agents investigate. The Handler takes the role of everyone in the
            game the Agents meet (called non-player characters or NPCs),
            describes the situations they find themselves in, and determines if
            dice are rolled, which dice are rolled, and why. The Handler is the
            narrator, director, and referee; he or she shapes the world and how
            the rules work so the players can explore and experience it.
          </Text>
          <Text>
            As a player, you describe your Agent’s decisions, choices, and
            reactions to the fictional world. The Handler is responsible for
            bringing that world to life, creating the secrets you’re trying to
            uncover, and ensuring the game’s mood and suspense through a
            thousand factors that you can’t know or control. In these rules,
            you’ll often see things like “The Handler decides.” The Handler’s
            word is law. His or her decisions are final.
          </Text>
          <Text>
            That requires a lot of trust between the players and their Handler.
            The Handler’s Guide is devoted to helping the Handler construct,
            build, and maintain that trust. The player’s job is just as
            challenging: to bring a Delta Green Agent to life in a world full of
            unnatural mysteries.
          </Text>
          <Text>
            A Delta Green game begins with the Handler asking the players to
            introduce their Agents. Describe what your Agent’s day-to-day life
            is like: work, friends, family, the mundane but critical things your
            Agent is willing to die for. The Handler’s next job is to intro-
            duce the operation: the events that will lead your Agent to confront
            unnatural horror.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
