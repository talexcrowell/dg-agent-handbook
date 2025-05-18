import {
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

export const HowToPlay = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" id="how-to-play" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline" id="how-to-play">
            How to Play
          </Title>
          <Text>
            Delta Green is about cover-ups, insanity, and death. The world is a
            lie. Beneath it, things squirm, struggling to punch through and raze
            everything. Once you see the outline beneath reality, it cannot be
            unseen.
          </Text>
          <Text>Welcome to the truth.</Text>
          <Text>
            That’s what the dice are for: to stand for an indifferent universe
            where fear, courage and hope matter less than an atom in an ocean of
            stars. Still, you fight. For your family, your friends, your way of
            life. You fight to live one more day.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="using-skills">
            Using Skills
          </Title>
          <Text>
            Delta Green’s rules focus on skills. You decide what your Agent
            attempts to do; the Handler determines what skill to use. In a
            typical mission, Agents use many different skills.
          </Text>
          <Text>
            Sometimes using a skill requires a roll of dice. The most important
            rule is this: The Handler determines if, when, and what you roll. If
            the Handler says a roll isn’t needed, the skill rating itself
            determines success or failure.
          </Text>
          <Stack py="md">
            <Title order={3} id="resolving-a-test-without-dice">
              Resolving a Test Without Dice
            </Title>
            <Text>
              If the Handler decides you don’t need to roll, it comes down to
              what you’re trying to do and how high your Agent’s skill is. If
              the fact is common knowledge in your Agent’s profession, or can be
              found with a little research, he or she might be able to get it by
              just expending time and effort. If it requires special knowledge,
              your Agent may need a certain amount of a skill.
            </Text>
            <Text>
              If the Handler thinks a fact should be known by a history
              professor with at least 60% skill, then an Agent with History at
              60% or better knows the fact without rolling. Or perhaps an Agent
              with 40% can learn some clues but an Agent with 60% would learn
              more.
            </Text>
            <Text>
              Sometimes a combination of skills can overcome a lack in one. A
              clue that needs 60% History might be available if the Agent has
              both History and some other relevant skill at 40%.
            </Text>
            <Table withTableBorder withColumnBorders w={325}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>How Much Skill Does the Task Require?</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Text>Only a little training; a hobbyist</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text>20%</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text>Basic training or a college minor</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text>30%</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text>Years of experience or a college major</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text>40%</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text>Decades of experience or graduate degrees</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text>60%</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text>A lifetime’s mastery</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text>80%</Text>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Stack>
          <Title order={3} id="resolving-a-test-with-a-dice">
            Resolving a Test With Dice
          </Title>
          <Text>
            If the Handler tells you to roll a skill, it’s a skill test. The
            dice determine success or failure. Roll two ten-sided dice to get a
            number from 01 to 00 (1 to 100). Roll your skill test rating or
            lower to succeed. Rolling higher means failure.
          </Text>
          <Text>
            There are three criteria for rolling dice for a skill test:
          </Text>
          <List spacing={"xs"}>
            <ListItem>
              <Text fw={700}>Roll When It Is Difficult:</Text>{" "}
              <Text>
                A skill test means the Agent is attempting something difficult.
                After all, even an expert in a skill might have only a 60% or
                70% rating. A skill test is for a situation when an Agent lacks
                enough skill to succeed without a roll, or when even an expert
                might fail.
              </Text>
            </ListItem>
            <ListItem>
              <Text fw={700}>Roll When The Situation Is Unpredictable</Text>
              <Text>
                Having to roll means the situation is out of control. Randomness
                plays a major role. Surprising, possibly disastrous things can
                happen, no matter how skillful you are.
              </Text>
            </ListItem>
            <ListItem>
              <Text fw={700}>Roll When There Are Consequences</Text>
              <Text>
                Failing a skill roll means ugly things are going to happen.
                Maybe failing at the crisis is the punishment—or with a failed
                roll, your Agent succeeds but the consequences are severe. The
                fallout is up to the Handler.
              </Text>
            </ListItem>
          </List>
          <Text>
            If your Agent has a 0 in a skill, he or she can’t even attempt to
            use it. It requires specialized training or education that your
            Agent lacks.
          </Text>
          <Title order={3} id="using-a-stat">
            Using a Stat
          </Title>
          <Text>
            If your Agent tries to do something that anyone ought to be able to
            do—something that’s hard, but doesn’t require specific training like
            a skill—then the Handler might look to one of your Agent’s stats,
            for a stat test. A stat test is the relevant stat × 5. (So with STR
            11, a STR test is 55%.)
          </Text>
          <Text>
            Use STR if the challenge requires physical power, CON if it requires
            endurance, DEX if it requires agility, INT if it requires attention
            to detail, POW if it requires mental resilience, or CHA if it
            requires charm.
          </Text>
          <Text>
            The stat’s score itself may tell the Handler whether your Agent
            succeeds, without the need for a roll. Does it need someone with at
            least average Strength? Then your Agent needs a STR of 10 or more.
            If it needs someone with above-average Intelligence, your Agent must
            have an INT of at least 13. If only one person in a hundred would
            have enough stamina, your Agent needs a CON of 17 or 18.
          </Text>
          <Table withTableBorder withColumnBorders w={325}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>How Much Stat Does the Task Require?</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text>Anyone could do it</Text>
                </Table.Td>
                <Table.Td>
                  <Text>3-4</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>Nearly anyone could do it</Text>
                </Table.Td>
                <Table.Td>
                  <Text>5–8</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>An average person could do it</Text>
                </Table.Td>
                <Table.Td>
                  <Text>9–12</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>Only an unusually gifted person could do it</Text>
                </Table.Td>
                <Table.Td>
                  <Text>13–16</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>Only a prodigy could do it</Text>
                </Table.Td>
                <Table.Td>
                  <Text>17–18</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Title order={3} id="bonuses-and-penalties">
            Bonuses & Penalties
          </Title>
          <Text>
            If a bonus or penalty applies, it’s usually +10%/−10%, +20%/−20% or
            (rarely) +40%/−40%.
          </Text>
          <Table withTableBorder withColumnBorders w={325}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Bonus or Penalty</Table.Th>
                <Table.Th>Frequency</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text>+40%</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Rare</Text>
                </Table.Td>
                <Table.Td>
                  <Text>You almost shouldn’t even bother to roll.</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>+20%</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Uncommon</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Circumstances are distinctly in your favor.</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>None</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Most circumstances</Text>
                </Table.Td>
                <Table.Td>
                  <Text>The action is difficult and unpredictable.</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>-20%</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Uncommon</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Circumstances are distinctly worse than usual.</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text>-40%</Text>
                </Table.Td>
                <Table.Td>
                  <Text>Rare</Text>
                </Table.Td>
                <Table.Td>
                  <Text>You almost shouldn’t even bother to roll.</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Title order={3} id="group-rolls">
            Group Rolls
          </Title>
          <Text>
            If it’s a task where having more help is useful, use the highest
            skill among the team.
          </Text>
          <Text>
            If it’s a task where a crowd is a hindrance, use the lowest skill
            among the team.
          </Text>
          <Text>
            If it’s a task where you need to know whether every Agent succeeds
            or fails, each player rolls.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="success-and-failure">
            Success and Failure
          </Title>
          <Text>
            On any skill or stat test, there are only four possible outcomes.
            From best to worst they are: Critical Success, Success, Failure, and
            Fumble.
          </Text>
          <Title order={3} id="critical-success">
            Critical Success
          </Title>
          <Text>
            A critical success is a roll of 01 or any success where the dice
            match. A critical success automatically succeeds, and exceeds
            expectations. A critical is twice as good as an ordinary success.
            What twice as good means must be taken in context of the action.
          </Text>
          <Title order={3} id="success">
            Success
          </Title>
          <Text>
            A success is a roll equal to or less than the test chance. With a
            success, your Agent accomplishes what he or she set out to achieve.
          </Text>
          <Title order={3} id="failure">
            Failure
          </Title>
          <Text>
            A failure is a roll that’s higher than the test chance. Sometimes
            that means your Agent suffers harm.
          </Text>
          <Text>
            There may be times when a failed roll means an Agent achieves what
            he or she wanted—but it comes with an unpleasant complication.
          </Text>
          <Title order={3} id="fumble">
            Fumble
          </Title>
          <Text>
            A fumble is a roll of 00 (100) or any failure where the dice match.
            A fumbled roll fails, no matter how high your Agent’s chance of
            success, and has additional, catastrophic consequences.
          </Text>
          <Text>Here are some possible consequences:</Text>
          <List spacing={"xs"}>
            <List.Item>
              <Text fw={700}>Physical Strain</Text>
              <Text>Lose 1D6 HP or temporarily lose 1D4 STR, CON, or DEX.</Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>Emotional Burnout</Text>
              <Text>Lose 1D6 WP or temporarily lose 1D4 INT, POW, or CHA.</Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>Alienation</Text>
              <Text>
                Offend an important NPC. All CHA or Persuade tests with the NPC
                automatically fail until the end of the operation.
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>Exhaustion</Text>
              <Text>Immediately become exhausted.</Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>Distraction</Text>
              <Text>Suffer a −20% penalty to your next test.</Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>Confusion</Text>
              <Text>You make a major error and gain false information.</Text>
            </List.Item>
          </List>
          <Divider />
          <Title order={2} td="underline" id="luck-roll">
            The Luck Roll
          </Title>
          <Text>
            Events often come down to pure chance. If the Handler calls for a
            Luck roll, there’s a 50% chance that things go your Agent’s way.
            With a critical success or a fumble, your Agent’s luck is extra good
            or bad.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="time-required">
            Time Required
          </Title>
          <Text>
            In an operation, speed counts. The Handler determines how long it
            takes to perform a test.
          </Text>
          <Text>
            <Text fw={700}>Turns:</Text> It takes a few combat turns or, at
            most, sixty seconds. Combat, some skill tests, and most stat tests
            are resolved in turns.
          </Text>
          <Text>
            <Text fw={700}>Minutes:</Text> It takes a few minutes. You can’t do
            it in combat, but otherwise, your Agent can get through it rapidly.
            Many skill tests are resolved in minutes.
          </Text>
          <Text>
            <Text fw={700}>Hours:</Text> It takes hours. Your Agent can
            typically attempt two to four such tasks per day
          </Text>
          <Text>
            <Text fw={700}>Days:</Text> It takes a day or more. Some extended
            skill tests, requiring multiple rolls, take days.
          </Text>
          <Text>
            <Text fw={700}>Long-Term:</Text> Efforts that take place outside
            normal gameplay, like research and training, fit here. It could be a
            week, a month, or years. It’s up to the Handler.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="opposed-tests">
            Opposed Tests
          </Title>
          <Text>
            An opposed test happens when someone takes action to interfere with
            another’s action. By nature, opposed tests are very unlikely to
            succeed. Not only must your roll succeed, but you must overcome the
            opposition’s roll as well. If two characters’ skills oppose each
            other but neither needs to roll, the higher rating wins.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="pursuit">
            Pursuit
          </Title>
          <Text>
            A pursuit is a series of opposed tests. The most basic chase is a
            single test for each side, pursuer and quarry. If the quarry wins,
            he or she escapes and the chase ends. If the pursuer wins, he or she
            (or it) runs the quarry down and the chase ends. Usually that means
            combat.
          </Text>
          <Text>
            A more prolonged chase may require two wins by one side or the
            other. Wins cancel each other out. If the pursuer wins one but the
            quarry wins the next, that cancels out the pursuer’s win. Then, the
            quarry needs to win twice more to escape. An especially wide-open
            chase might require three wins to either catch up or escape.
          </Text>
          <Text>
            In each test, one side or the the other wins. If both fail their
            rolls, the lowest failure wins. A critical success with a chase test
            counts as two wins. A fumble counts as two failures thanks to a
            wreck or some other disastrous accident.
          </Text>
          <Text>
            Consider these factors when engaged in a Pursuit or being Pursued:
          </Text>
          <Text>
            <Text fw={700}>Which Skill Applies:</Text> A chase on foot requires
            Athletics; one in vehicles uses Drive, Pilot, or even Heavy
            Machinery; in the water, it uses Swim; on horseback, it uses Ride.
          </Text>
          <Text>
            <Text fw={700}>Aid and Advantanges:</Text> Coordinating with
            multiple pursuers (whether they’re in sight of each other or have
            constant radio contact), having air support in radio contact, or
            being substantially faster and/or more maneuverable grants a +20%
            bonus to each chase test, or +40% if the advantages are
            overwhelming.
          </Text>
          <Text>
            <Text fw={700}>Seeking an Edge:</Text> Instead of the usual roll to
            catch up or get away, pursuer or quarry may attempt to gain some
            advantage by testing a skill that applies to the situation, such as
            Alertness, Navigate, Stealth, Survival, or Tactics. If this test
            wins the contest, neither side gains a “win” but it grants a +20%
            bonus to that character’s next chase roll, or +40% with a critical
            success. Failure and fumbling have the usual effects.
          </Text>
          <Text>
            <Text fw={700}>Combat During a Chase:</Text> A passenger in a
            vehicle in a chase can shoot at the opposition before the pursuer
            and quarry roll to pursue and escape.Each contest in the chase is
            equivalent to one combat turn. If your Agent is the driver or is on
            foot, attacking instead of rolling to pursue or escape means the
            opponent’s roll to pursue or escape automatically wins.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="willpower-points">
            Willpower Points
          </Title>
          <Text>
            Willpower Points are mental fuel. Agents require Willpower Points to
            keep going despite exhaustion, to resist unwanted persuasion, to
            resist the effects of terror and mental disorders, and, on rare
            occasions, to resist or enact unnatural rituals.
          </Text>
          <Title order={3} id="exhaustion">
            Exhaustion
          </Title>
          <Text>
            An Agent who works too long or faces extreme danger and injury
            without resting becomes exhausted. When this comes into play is up
            to the Handler, but a good rule of thumb is that going a night
            without sleep or refusing to rest after losing SAN or Hit Points
            leads to exhaustion.
          </Text>
          <Text>
            An exhausted Agent loses 1D6 WP and, at the Handler’s discretion,
            may suffer a −10% or −20% penalty to all skills, stat tests, and SAN
            tests. The exhausted Agent loses another 1D6 WP after going another
            night without sleep or after working hard for too long. A full
            night’s sleep cures exhaustion.
          </Text>
          <Text>
            <Text fw={700}>Stimulants:</Text> Taking stimulants or chain-smoking
            removes the exhaustion penalty for 1D6 hours. Harder, illegal drugs
            offset it for 2D6 hours. During this time, your Agent can’t sleep.
            An Agent can take more stimulants to keep going, but every dose
            after the first costs 1D6 WP. Stimulants never restore WP. If your
            Agent gains a new disorder while using stimulants, the Handler has
            good reason to say the disorder takes the form of addiction to them.
          </Text>
          <Title order={3} id="sleeplessness">
            Sleeplessness
          </Title>
          <Text>
            The first time your Agent tries to sleep after suffering temporary
            insanity or gaining a new disorder, you must make a SAN test. If it
            fails, your Agent wakes in terror, losing the possibility of
            regaining any WP for 24 hours.
          </Text>
          <Text>
            <Text fw={700}>Sedatives:</Text> An Agent can drink heavily or take
            sleeping pills to sleep despite trauma. This gives a +20% bonus to
            the SAN test to get to sleep. If the test fails, the Agent gets no
            rest despite taking sedatives. In addition, the Agent is sick the
            next day, at a −20% penalty to all tests until he or she gets a full
            night’s rest. If your Agent gains a new disorder while using
            sedatives, the Handler has good reason to say the disorder takes the
            form of an addiction to them.
          </Text>
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
