import {
  Checkbox,
  CheckboxGroup,
  Grid,
  Group,
  InputLabel,
  NumberInput,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";

export const Personal = () => {
  const [{ currentCharacter }] = useCharacterContext();

  let data = { ...currentCharacter };
  console.log(data);

  const tableStatHeaders = [
    "Statistic",
    "Score",
    "x5",
    "Distinguishing Features",
  ];

  const statLabelArr = [
    "Strength",
    "Constitution",
    "Dexterity",
    "Intelligence",
    "Power",
    "Charisma",
  ];

  const handleDistinguishingFeatures = (stat: string) => {
    let sample = distinguishingFeatures[stat].filter((feature: any) => {
      return (
        feature.rangeMin <= data.stats[stat] &&
        data.stats[stat] <= feature.rangeMax
      );
    })[0];
    return sample?.name ? sample.name : "...";
  };

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

  const tableAttributeHeaders = ["Attribute", "Maximum", "Current"];

  const derivedAttributesArr = [
    { label: "Hit Points (HP)", key: "hp" },
    { label: "Willpower Points (WP)", key: "wp" },
    { label: "Sanity Points (SAN)", key: "san" },
    { label: "Breaking Point (BP)", key: "bp" },
  ];

  const calculateAttribute = (attribute: string) => {
    const calculations = {
      hp: Math.ceil((data.stats.strength + data.stats.constitution) / 2),
      wp: data.stats.power,
      san: data.stats.power * 5,
      bp: data.stats.power * 5 - data.stats.power,
    };
    return calculations[attribute];
  };

  const tableBondHeaders = ["Bonds", "Score"];
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Group>
          <TextInput label="Name" flex={1} value={data?.name} />
          <TextInput label="Codename" flex={1} value={data?.codename} />
        </Group>
        <Group>
          <TextInput label="Profession" flex={1} value={data?.profession} />
          <TextInput label="Employer" flex={1} value={data?.employer} />
          <TextInput label="Nationality" flex={1} value={data?.nationality} />
        </Group>
        <Group>
          <TextInput label="Sex" w={100} value={data?.sex} />
          <TextInput label="Age" w={100} value={data?.age} />
          <TextInput
            label="Education and Occupational History"
            flex={1}
            value={data?.education}
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
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
                    <Table.Td>
                      <NumberInput
                        value={data?.stats[stat.toLowerCase()]}
                        min={3}
                        max={18}
                        clampBehavior="strict"
                        // onChange={(val) => handleChangeStat(val, stat)}
                        w={100}
                      />
                    </Table.Td>
                    <Table.Td>{data.stats[stat.toLowerCase()] * 5}</Table.Td>
                    <Table.Td>
                      {handleDistinguishingFeatures(stat.toLowerCase())}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
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
                    <Table.Td>
                      <NumberInput w={100} />
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableBondHeaders.map((header) => {
                  return (
                    <Table.Th>
                      <Table.Td>{header}</Table.Td>
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.bonds.map((bond) => {
                return (
                  <Table.Tr>
                    <Table.Td>
                      <Text w={275} ta="start">
                        {bond.name}
                      </Text>
                    </Table.Td>
                    <Table.Td>{<NumberInput value={bond.value} />}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Textarea
            label="Motivations and Mental Disorders"
            ta="start"
            rows={5}
          />
          <Stack>
            <InputLabel ta="start">
              Incidents of SAN Loss Without going Insane
            </InputLabel>
            <Group justify="space-between">
              <CheckboxGroup>
                <Group>
                  <InputLabel>Violence</InputLabel>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </Group>
              </CheckboxGroup>
              <CheckboxGroup>
                <Group>
                  <InputLabel>Helplessness</InputLabel>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </Group>
              </CheckboxGroup>
            </Group>
          </Stack>
          <Textarea label="Wounds and Ailments" ta="start" rows={5} />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
