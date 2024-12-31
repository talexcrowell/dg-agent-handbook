import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
import {
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

export const Stats: React.FC<{
  handleAgentStats: (stats: any) => void;
}> = ({ handleAgentStats }) => {
  const [statType, setStatType] = useState("roll");
  const [stats, setStats] = useState<{ [key: string]: any }>({
    strength: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    power: 0,
    charisma: 0,
  });
  const [pointPool, setPointPool] = useState<number>(72);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    handleReset();
  }, [statType]);

  const tableStatHeaders = [
    "Statistic",
    "Score",
    "x5",
    "Distinguishing Features",
  ];

  const tableAttributeHeaders = ["Attribute", "Score"];

  const statLabelArr = [
    "Strength",
    "Constitution",
    "Dexterity",
    "Intelligence",
    "Power",
    "Charisma",
  ];

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
        <Group justify="space-between">
          <Text ta="center" w={"20%"}>
            {stats[stat]}
          </Text>
          {
            <Select
              placeholder="Swap with..."
              data={[
                ...statLabelArr.filter(
                  (label) => label.toLowerCase() !== stat.toLowerCase()
                ),
              ]}
              w={125}
              value={""}
              onChange={(_value, option) =>
                handleStatValueSwap(_value?.toLowerCase(), stat.toLowerCase())
              }
            />
          }
        </Group>
      );
    }
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
      newObj[stat.toLowerCase()] = sum;
    });
    setStats({ ...newObj });
  };

  const handleStatValueSwap = (newStat: any, currStat: any) => {
    let newObj = { ...stats };
    newObj[currStat] = stats[newStat];
    newObj[newStat] = stats[currStat];
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

  return (
    <Grid>
      <Grid.Col span={12} ta="start">
        <Title>Statistics</Title>
        <Stack>
          <Text>
            Every Agent has six core capabilities: Strength, Constitution,
            Dexterity, Intelligence, Power, and Charisma. When your Agent
            attempts a difficult action and no skill covers it, the Handler may
            ask you to roll a stat test for whatever stat is the closest fit.
          </Text>
          <Text>
            You can create your character's stats in few ways:
            <List>
              <List.Item>
                Roll Stats: For each stat roll 4D6, drop the lowest of the four
                dice, and add up the other three. Place the six rolls in
                whichever stats you like.
              </List.Item>
              <List.Item>
                Stat Pool: Divide 72 points among the six stats however you like
                with a minimum of 3 and a maximum of 18.
              </List.Item>
              <List.Item>
                Stat Sets: Pick one of the sets from a list and place each score
                to the desired stat.
              </List.Item>
            </List>
          </Text>
          <Text>
            Your Agent's derived attributes will be calculated from your
            statistics.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider size={"xl"} />
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
            <Button onClick={handleStatRoll}>Roll</Button>
          ) : (
            <Button onClick={handleReset}>Reset</Button>
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
      <Grid.Col span={8}>
        <Table withColumnBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              {tableStatHeaders.map((header) => {
                return (
                  <Table.Th>
                    <Table.Td>{header}</Table.Td>
                  </Table.Th>
                );
              })}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {statLabelArr.map((stat) => {
              return (
                <Table.Tr>
                  <Table.Td>{stat}</Table.Td>
                  <Table.Td>{scoreTableDetail(stat.toLowerCase())}</Table.Td>
                  <Table.Td>{stats[stat.toLowerCase()] * 5}</Table.Td>
                  <Table.Td>
                    {handleDistinguishingFeatures(stat.toLowerCase())}
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableAttributeHeaders.map((header) => {
                  return (
                    <Table.Th>
                      <Table.Td ta="center">{header}</Table.Td>
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {derivedAttributesArr.map((attribute) => {
                return (
                  <Table.Tr>
                    <Table.Td>{attribute.label}</Table.Td>
                    <Table.Td>{calculateAttribute(attribute.key)}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Button
            onClick={() => handleAgentStats({ ...stats })}
            disabled={Object.values(stats).includes(0)}
          >
            Confirm Statistics
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
