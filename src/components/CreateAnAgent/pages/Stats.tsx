import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
import {
  Anchor,
  Button,
  Card,
  Combobox,
  Divider,
  Grid,
  Group,
  InputBase,
  List,
  NativeSelect,
  NumberInput,
  SegmentedControl,
  Select,
  Stack,
  Table,
  TableTd,
  Text,
  Title,
  useCombobox,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { additionalProfessions, professions } from "../../../data";
import { Link } from "react-router-dom";

export const Stats: React.FC<{
  handleAgentStats: (stats: any) => void;
  userAgent: any;
}> = ({ handleAgentStats, userAgent }) => {
  const [statType, setStatType] = useState("roll");
  const [stats, setStats] = useState<{ [key: string]: any }>({
    strength: userAgent.stats.strength,
    constitution: userAgent.stats.constitution,
    dexterity: userAgent.stats.dexterity,
    intelligence: userAgent.stats.intelligence,
    power: userAgent.stats.power,
    charisma: userAgent.stats.charisma,
  });
  const [pointPool, setPointPool] = useState<number>(72);
  const [viewport] = useViewportContext();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    if (userAgent.stats.strength === 0) {
      handleReset();
    }
  }, [statType]);

  const tableStatHeaders =
    viewport.width > 600
      ? ["Statistic", "Score", "x5", "Distinguishing Features"]
      : ["Stat", "Score", "x5", "Features"];

  const tableAttributeHeaders = ["Attribute", "Score"];

  const statLabelArr =
    viewport.width > 600
      ? [
          "Strength",
          "Constitution",
          "Dexterity",
          "Intelligence",
          "Power",
          "Charisma",
        ]
      : ["STR", "CON", "DEX", "INT", "POW", "CHA"];

  const derivedAttributesArr = [
    { label: "Hit Points (HP)", key: "hp" },
    { label: "Willpower Points (WP)", key: "wp" },
    { label: "Sanity Points (SAN)", key: "san" },
    { label: "Breaking Point (BP)", key: "bp" },
  ];

  const distinguishingFeatures: { [key: string]: any } = {
    strength: [
      { rangeMin: 3, rangeMax: 4, name: "Feeble" },
      { rangeMin: 5, rangeMax: 8, name: "Weak" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Muscular" },
      { rangeMin: 17, rangeMax: 18, name: "Huge" },
    ],
    constitution: [
      { rangeMin: 3, rangeMax: 4, name: "Bedridden" },
      { rangeMin: 5, rangeMax: 8, name: "Sickly" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Perfect health" },
      { rangeMin: 17, rangeMax: 18, name: "Indefatigable" },
    ],
    dexterity: [
      { rangeMin: 3, rangeMax: 4, name: "Barely mobile" },
      { rangeMin: 5, rangeMax: 8, name: "Clumsy" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Nimble" },
      { rangeMin: 17, rangeMax: 18, name: "Acrobatic" },
    ],
    intelligence: [
      { rangeMin: 3, rangeMax: 4, name: "Imbecilic" },
      { rangeMin: 5, rangeMax: 8, name: "Slow" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Perceptive" },
      { rangeMin: 17, rangeMax: 18, name: "Brilliant" },
    ],
    power: [
      { rangeMin: 3, rangeMax: 4, name: "Spineless" },
      { rangeMin: 5, rangeMax: 8, name: "Nervous" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Strong-willed" },
      { rangeMin: 17, rangeMax: 18, name: "Indomitable" },
    ],
    charisma: [
      { rangeMin: 3, rangeMax: 4, name: "Unbearable" },
      { rangeMin: 5, rangeMax: 8, name: "Awkward" },
      { rangeMin: 9, rangeMax: 12, name: "Average" },
      { rangeMin: 13, rangeMax: 16, name: "Charming" },
      { rangeMin: 17, rangeMax: 18, name: "Magnetic" },
    ],
  };

  const calculateAttribute = (attribute: string) => {
    const calculations = {
      hp: Math.ceil((stats.strength + stats.constitution) / 2),
      wp: stats.power,
      san: stats.power * 5,
      bp: stats.power * 5 - stats.power,
    };
    return calculations[attribute];
  };

  const handleChangeStat = (value: number | string, stat: string) => {
    let newObj = { ...stats };
    newObj[stat] = value;
    let pointsLeft = pointPool - (value - stats[stat]);
    setPointPool(pointsLeft);
    setStats({ ...newObj });
  };

  const scoreTableDetail = (stat: string) => {
    if (statType === "pool") {
      return (
        <NumberInput
          value={stats[stat]}
          min={3}
          max={18}
          clampBehavior="strict"
          onChange={(val) => handleChangeStat(val, stat)}
          w={100}
        />
      );
    } else {
      return (
        <Stack align="center">
          <Text ta="center">{stats[stat]}</Text>
          {
            <Select
              placeholder="Swap Stat"
              data={[
                ...statLabelArr.filter((label) => {
                  console.log(handleMobileStats(label.toLowerCase()), stat);
                  return (
                    (viewport.width > 600
                      ? label.toLowerCase()
                      : handleMobileStats(label.toLowerCase())) !==
                    stat.toLowerCase()
                  );
                }),
              ]}
              w={110}
              value={""}
              onChange={(_value, option) =>
                handleStatValueSwap(_value?.toLowerCase(), stat.toLowerCase())
              }
            />
          }
        </Stack>
      );
    }
  };

  const handleMobileStats = (stat: string) => {
    let chosenStat;
    if (stat.length === 3) {
      switch (stat) {
        case "str":
          chosenStat = "strength";
          break;
        case "con":
          chosenStat = "constitution";
          break;
        case "dex":
          chosenStat = "dexterity";
          break;
        case "int":
          chosenStat = "intelligence";
          break;
        case "pow":
          chosenStat = "power";
          break;
        case "cha":
          chosenStat = "charisma";
          break;
      }
    }
    return chosenStat;
  };

  const handleDistinguishingFeatures = (stat: string) => {
    let sample = distinguishingFeatures[stat].filter((feature: any) => {
      return feature.rangeMin <= stats[stat] && stats[stat] <= feature.rangeMax;
    })[0];
    return sample?.name ? sample.name : "...";
  };

  const handleStatRoll = () => {
    let newObj = stats;
    statLabelArr.map((stat) => {
      let translatedStat =
        viewport.width > 600
          ? stat.toLowerCase()
          : handleMobileStats(stat.toLowerCase());
      let roll = new DiceRoll("4d6");
      let rollObj = roll.export(exportFormats.OBJECT);
      let sum = 0;
      let rollArr = [
        ...rollObj?.rolls[0].rolls.map((roll) => roll.initialValue),
      ]
        .sort((a, b) => {
          return b - a;
        })
        .slice(0, 3);
      rollArr.forEach((num) => {
        sum += num;
      });
      newObj[translatedStat.toLowerCase()] = sum;
    });
    setStats({ ...newObj });
  };

  const handleStatValueSwap = (newStat: any, currStat: any) => {
    let newObj = { ...stats };
    let currStatValue =
      newObj[viewport.width > 600 ? newStat : handleMobileStats(newStat)];
    let newStatValue = newObj[currStat];
    newObj[viewport.width > 600 ? newStat : handleMobileStats(newStat)] =
      newStatValue;
    newObj[currStat] = currStatValue;
    setStats({ ...newObj });
  };

  const handleChangeStatSet = (value: string) => {
    switch (value) {
      case "Well-rounded":
        setStats({
          strength: 13,
          constitution: 13,
          dexterity: 12,
          intelligence: 12,
          power: 11,
          charisma: 11,
        });
        break;
      case "Focused":
        setStats({
          strength: 15,
          constitution: 14,
          dexterity: 12,
          intelligence: 11,
          power: 10,
          charisma: 10,
        });
        break;
      case "Highly Focused":
        setStats({
          strength: 17,
          constitution: 14,
          dexterity: 12,
          intelligence: 10,
          power: 10,
          charisma: 9,
        });
        break;
    }
  };

  const handleReset = () => {
    let newObj = {
      strength: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      power: 0,
      charisma: 0,
    };
    setStats({ ...newObj });
    setPointPool(72);
  };

  const handleHighlight = (value: string) => {
    let professionalStats = [...professions, ...additionalProfessions].filter(
      (profession) => profession.name === userAgent.profession
    )[0]
      ? [...professions, ...additionalProfessions].filter(
          (profession) => profession.name === userAgent.profession
        )[0].recommendedStats
      : [];
    let chosenStat = value;
    switch (value) {
      case "Strength":
        chosenStat = "STR";
        break;
      case "Constitution":
        chosenStat = "CON";
        break;
      case "Dexterity":
        chosenStat = "DEX";
        break;
      case "Intelligence":
        chosenStat = "INT";
        break;
      case "Power":
        chosenStat = "POW";
        break;
      case "Charisma":
        chosenStat = "CHA";
        break;
      default:
        break;
    }
    return professionalStats.includes(chosenStat) ? "green" : "white";
  };

  return (
    <Grid>
      <Grid.Col span={12} ta="start">
        <Stack>
          <Title>Statistics</Title>
          <Text>
            Every Agent has six core capabilities: Strength, Constitution,
            Dexterity, Intelligence, Power, and Charisma.
          </Text>
          <Text>You can create your character's stats in few ways: </Text>
          <Text>
            <Text span fw={700}>
              {" "}
              Roll Stats:
            </Text>{" "}
            For each stat roll 4D6, drop the lowest of the four dice, and add up
            the other three. Place the six rolls in whichever stats you like.
          </Text>
          <Text>
            <Text span fw={700}>
              {" "}
              Stat Pool:
            </Text>{" "}
            Divide 72 points among the six stats however you like with a minimum
            of 3 and a maximum of 18.
          </Text>
          <Text>
            <Text span fw={700}>
              {" "}
              Stat Sets:
            </Text>{" "}
            Pick one of the sets from a list and place each score to the desired
            stat.
          </Text>
          <Text>
            Your Agent's derived attributes will be calculated from your
            statistics.
          </Text>
          <Text>
            For more information, you can read the{" "}
            <Anchor
              component={Link}
              to="/agents/professions/stats-and-skills"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stats
            </Anchor>{" "}
           and{" "}
            <Anchor
              component={Link}
              to="/agents/professions/stats-and-skills#attributes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Attributes
            </Anchor>{" "} sections
            in Agent Professions.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider />
      </Grid.Col>
      <Grid.Col span={12}>
        <Group>
          <SegmentedControl
            value={statType}
            data={[
              { label: "Roll", value: "roll" },
              { label: "Stat Pool", value: "pool" },
              { label: "Stat Sets", value: "sets" },
            ]}
            onChange={setStatType}
          />
          {statType === "pool" ? (
            <Text>{pointPool} Points remaining</Text>
          ) : statType === "sets" ? (
            <Select
              placeholder="Select a Stat Set..."
              data={["Well-rounded", "Focused", "Highly Focused"]}
              onChange={handleChangeStatSet}
            />
          ) : (
            <></>
          )}
          {statType === "roll" ? (
            <Group>
              <Button onClick={handleStatRoll}>Roll</Button>{" "}
              <Button onClick={handleReset} bg="red">
                Reset
              </Button>
            </Group>
          ) : (
            <Button onClick={handleReset} bg="red">
              Reset
            </Button>
          )}
        </Group>
      </Grid.Col>
      {statType === "sets" && (
        <Grid.Col span={12}>
          {" "}
          <Card withBorder>
            <Stack gap="xs">
              <Group>
                <Text fw={700}>Well-rounded:</Text>
                {[13, 13, 12, 12, 11, 11].map((roll) => (
                  <Text>{roll}</Text>
                ))}
              </Group>
              <Group>
                <Text fw={700}>Focused:</Text>
                {[15, 14, 12, 11, 10, 10].map((roll) => (
                  <Text>{roll}</Text>
                ))}
              </Group>
              <Group>
                <Text fw={700}> Highly Focused:</Text>
                {[17, 14, 12, 10, 10, 9].map((roll) => (
                  <Text>{roll}</Text>
                ))}
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      )}
      <Grid.Col span={viewport.width > 992 ? 6 : 12}>
        <Stack>
          <Title order={2}>Statistics</Title>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableStatHeaders.map((header) => {
                  return <Table.Th>{header}</Table.Th>;
                })}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {statLabelArr.map((stat) => {
                return (
                  <Table.Tr>
                    <Table.Td c={handleHighlight(stat)} fw={700}>
                      {stat}
                    </Table.Td>
                    <Table.Td>
                      {scoreTableDetail(
                        viewport.width > 600
                          ? stat.toLowerCase()
                          : handleMobileStats(stat.toLowerCase())
                      )}
                    </Table.Td>
                    <Table.Td ta="center">
                      {stats[
                        viewport.width > 600
                          ? stat.toLowerCase()
                          : handleMobileStats(stat.toLowerCase())
                      ] * 5}
                    </Table.Td>
                    <Table.Td ta="center">
                      {handleDistinguishingFeatures(
                        viewport.width > 600
                          ? stat.toLowerCase()
                          : handleMobileStats(stat.toLowerCase())
                      )}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Stack>
      </Grid.Col>
      <Grid.Col span={viewport.width > 992 ? 6 : 12}>
        <Stack>
          <Title order={2}>Derived Attributes</Title>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableAttributeHeaders.map((header) => {
                  return (
                    <Table.Th ta={header === "Score" ? "center" : ""}>
                      {header}
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {derivedAttributesArr.map((attribute) => {
                return (
                  <Table.Tr>
                    <Table.Td fw={700}>{attribute.label}</Table.Td>
                    <Table.Td ta="center">
                      {calculateAttribute(attribute.key)}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Button
            onClick={() => handleAgentStats({ ...stats })}
            disabled={Object.values(stats).includes(0)}
            color={"green"}
          >
            Confirm Statistics
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
