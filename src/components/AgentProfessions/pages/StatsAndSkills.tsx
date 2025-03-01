import { Divider, Grid, List, Space, Stack, Table, Text, Title } from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { skillsMasterList } from "../../../data";

export const StatsAndSkills = () => {
  const [viewport] = useViewportContext();

  const masterStatList = [
    {
      id: "strength",
      name: "Strength",
      definition: "Physical power, size, and musculature.",
    },
    {
      id: "constitution",
      name: "Constitution",
      definition: "Health and physical resilience.",
    },
    {
      id: "dexterity",
      name: "Dexterity",
      definition: "Agility, coordination, and nimbleness.",
    },
    {
      id: "intelligence",
      name: "Intelligence",
      definition:
        "How well an Agent notices, remembers, and connects things. Along with profession, it indicates education and overall brilliance.",
    },
    {
      id: "power",
      name: "Power",
      definition: "Force of personality, motivation, and psychic resilience.",
    },
    {
      id: "charisma",
      name: "Charisma",
      definition:
        "Charm, leadership, and personal appeal. May indicate physical attractiveness.",
    },
  ];

  const masterAttributeList = [
    {
      id: "hp",
      name: "Hit Points",
      calculation:
        "Hit Points equal STR plus CON, divided by two and rounded up.",
      definition:
        "Hit Points represent how much damage your Agent can sustain. When the Agent is injured, subtract the damage from HP. At 2 HP, your Agent falls unconscious. At 0 HP, your Agent dies. Hit Points are regained through rest and medical attention.",
    },
    {
      id: "wp",
      name: "Willpower Points",
      calculation: "Willpower Points equal POW.",
      definition:
        "Willpower Points represent mental fortitude. They fall when your Agent attempts to suppress the symptoms of mental illness, becomes exhausted, attempts to resist persuasion, suffers emotional burnout, or tries to fuel unnatural phe- nomena. At 2 WP, your Agent has a temporary emo- tional collapse. At 0 WP, your Agent falls unconscious. Willpower Points are regained with rest.",
    },
    {
      id: "san",
      name: "Sanity Points",
      calculation: "Sanity Points equal POW×5.",
      definition:
        "Sanity Points represent mental health: how much mental trauma, or exposure to the unnatural your Agent can endure before going insane. In moments of mental trauma your Agent must make a Sanity test by rolling SAN or lower on 1D100. If that fails, your Agent loses SAN. Sanity Points are regained through psychiatric care or by overcoming unnatural threats. At 0 Sanity Points, your Agent goes irretrievably insane and becomes an NPC permanently under the control of the Handler.",
    },
    {
      id: "bp",
      name: "Breaking Point",
      calculation: "An Agent’s Breaking Point equals starting SAN minus POW.",
      definition:
        "The Breaking Point is the point at which loss of SAN triggers a long-term mental disorder. The instant the Agent’s SAN reaches the Breaking Point, he or she gains a disorder. Reset the Breaking Point to equal the new SAN score minus POW.",
    },
  ];

  return (
    <Grid
      p={viewport.width > 600 ? "md" : 0}
      gutter={viewport.width > 600 ? "md" : "0"}
      id="stats-and-skills"
    >
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline" order={2} id="statistics">
            Statistics
          </Title>
          <Text>
            Every Agent has six core capabilities: Strength, Constitution,
            Dexterity, Intelligence, Power, and Charisma. Each statistic (stat)
            has a test score equal to the stat × 5: STR×5, INT×5, POW×5, etc.
            This means roll five times the stat or less on percentile dice
            (1D100) to succeed. When your Agent attempts a difficult action and
            no skill covers it, the Handler may ask you to roll a stat test for
            whatever stat is the closest fit.
          </Text>
          <Title order={3}>Distinguishing Features</Title>
          <Text>
            A stat below 9 or above 12 is exceptional. Spare a word or two to
            describe stats outside the average. These help give your Agent
            personality.
          </Text>
          <Title td="underline" order={2} id="statistic-definitions">
            Statistic Definitions
          </Title>
          <Table withTableBorder withColumnBorders highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Statistic</Table.Th>
                <Table.Th>Definition</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {masterStatList.map((stat) => {
                return (
                  <Table.Tr>
                    <Table.Td>{stat.name}</Table.Td>
                    <Table.Td>{stat.definition}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} id="attributes">
            Attributes
          </Title>
          <Text>
            The derived attributes—Hit Points, Willpower Points, Sanity Points,
            and Breaking Point—represent your Agent’s physical and mental
            toughness.
          </Text>
          <Title td="underline" order={2} id="attribute-definitions">
            Attribute Definitions
          </Title>
          <Table withTableBorder withColumnBorders highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Attribute</Table.Th>
                <Table.Th>Calculation</Table.Th>
                <Table.Th>Definition</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {masterAttributeList.map((attribute) => {
                return (
                  <Table.Tr>
                    <Table.Td>{attribute.name}</Table.Td>
                    <Table.Td>{attribute.calculation}</Table.Td>
                    <Table.Td>{attribute.definition}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} id="skills">
            Skills
          </Title>
          <Text>
            A skill represents expertise gained with intensive training or
            study. Roll your Agent’s skill or lower on 1D100 to use the skill
            under dire circumstances. Making a skill roll means doing something
            that would leave untrained people lost. Anyone can attempt a DEX×5
            test to keep from falling over in a out-of-control aircraft; only
            someone who’s been trained in the Pilot skill can fly the airplane
            away from the grasping, howling thing tearing at its hull.
          </Text>
          <Title order={3} id="base-rating">
            Base Rating
          </Title>
          <Text>
            Every skill lists its base rating. If it has a base rating of 1% or
            greater, anyone can attempt it. A skill at 0% can’t be used at all.
            No skill can be higher than 99%.
          </Text>
          <Title order={3} id="how-skills-work">
            How Skills Work
          </Title>
          <Text>
            When your Agent uses a skill, sometimes you roll dice and sometimes
            you don’t.
          </Text>
          <Text>
            <Text fw={700}>Using a Skill without a Roll:</Text>
            When circumstances are calm and controlled, you don’t roll dice to
            have your Agent use a skill; the Handler just needs to know how high
            your Agent’s rating is. Landing an airplane when things are calm
            simply requires a certain amount in the Pilot skill. Using a skill
            without rolling means randomness is not a factor. It’s about having
            the right skill, looking in the right place, and asking the right
            questions.
          </Text>
          <Text>
            <Text fw={700}>Using a Skill with a Roll:</Text>
            Roll skill dice when the outcome is in doubt. That usually means
            there’s a crisis, the circumstances are not under your Agent’s
            control, or your Agent is not expert enough to succeed without a
            roll.
          </Text>
          <Title order={3} id="common-knowledge">
            Common Knowledge
          </Title>
          <Text>
            Most Agents took a few science classes in school. Any Agent can sing
            badly or draw a crooked sketch. Skills represents deep, specialized
            training or education. Calling on common knowledge, whether it’s
            common to everyone or just everyone in the Agent’s occupation, may
            require an INT×5 test or having a certain level of INT. Charming
            someone with unskilled art is usually a CHA or DEX test. Other
            efforts use other stats. The Handler decides whether a task requires
            the general ability of a stat or the specialization of a skill.
          </Text>
          <Title order={3} id="using-libraries">
            Using Libraries
          </Title>
          <Text>
            There’s no designated skill for library use. Whether your Agent is
            sifting through microfilm or a database, look to the particular
            skill that’s involved in the research: History, Science, Medicine,
            etc. Some research may not need a skill (combing recent news
            archives, for instance), only a certain amount of INT and time.
          </Text>
          <Title order={3} id="improving-skills">
            Improving Skills
          </Title>
          <Text>
            We learn from failure. If your Agent has at least 1% in a skill (any
            except Unnatural), it can improve when your Agents attempts to use
            it and fails.
          </Text>
          <Text>
            On the character sheet, next to every skill except Unnatural, there
            is a check box. When your Agent tries to use a skill and fails, mark
            that skill’s box. At the end of each session, add 1D4 percentage
            points to every skill that has a check next to it. Then erase the
            check.
          </Text>
          <Text>
            Gaining an entirely new skill requires extensive training.
          </Text>
          <Text>
            <Text fw={700}>Failing without Rolling:</Text>
            If your Agent attempts a challenging task that requires a certain
            level of skill but not a roll, and fails because the task requires
            more skill than your Agent has, put a check in the box.
          </Text>
          <Title order={3} id="special-training">
            Special Training
          </Title>
          <Text>
            Some specialized knowledge requires extensive training but not a
            dedicated skill rating. This often means at least 10 to 20 hours of
            instruction and practice. With special training, your Agent can use
            an existing stat or skill in a new way. It may allow use of one
            function of a skill without mastering the skill itself.
          </Text>
          <Text>
            The penalty for using a skill without required special training is
            up to the Handler. It may mean there’s no chance at all; or it may
            have a reduced chance, require a stat test, or incur some other
            drawback.
          </Text>
          <Text>
            An Agent might start the game with special training. A Special
            Forces soldier knows how to use hand grenades; a SWAT team member
            knows how to use tear gas; an Agent with any amount of Craft
            (Locksmithing) skill knows how to use lockpicks.
          </Text>
          <Stack gap="0">
            <Text fw={700}>Examples of Special Training:</Text>
            <List>
              <List.Item>Parachuting (Athletics or DEX)</List.Item>
              <List.Item>Skiing (Athletics)</List.Item>
              <List.Item>SCUBA gear (Swim)</List.Item>
              <List.Item>Space suit operation (INT)</List.Item>
              <List.Item>An exotic hand weapon (Melee Weapons)</List.Item>
              <List.Item>An exotic pistol or rifle (Firearms)</List.Item>
              <List.Item>Hand grenades (Athletics)</List.Item>
              <List.Item>Deep knowledge of a subculture (INT)</List.Item>
              <List.Item>Another country’s criminal codes (Law)</List.Item>
              <List.Item>Lockpicks (DEX)</List.Item>
              <List.Item>Electronic security systems (INT)</List.Item>
              <List.Item>
                Inside knowledge of a conspiracy (Criminology)
              </List.Item>
              <List.Item>
                Fluency in a rare dialect (Foreign Language)
              </List.Item>
              <List.Item>Black markets (Criminology or CHA)</List.Item>
            </List>
          </Stack>
          <Title order={3} id="skill-(types)">
            Skill (Types)
          </Title>
          <Text>
            Art, Craft, Foreign Language, Military Science, Pilot, and Science
            skills are named with types. The skills are deliberately vague and
            are not meant to be restrictive. If a skill type seems close to
            what’s required, we encourage the Handler to let it apply.
          </Text>
          <Title td="underline" order={2} id="skill-definitions">
            Skill Definitions
          </Title>
          <Table withTableBorder withColumnBorders highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Skill</Table.Th>
                <Table.Th>Definition</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {skillsMasterList.map((skill) => {
                return (
                  <Table.Tr>
                    <Table.Td>{skill.name}</Table.Td>
                    <Table.Td>{skill.definition}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
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
