import {
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  InputLabel,
  NumberInput,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";

export const Personal = () => {
  const [{ currentCharacter }] = useCharacterContext();

  let data = { ...currentCharacter };

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

  const calculateAttributesLabel = (attribute) =>
    [
      { label: "Hit Points (HP)", key: "hp" },
      { label: "Willpower Points (WP)", key: "wp" },
      { label: "Sanity Points (SAN)", key: "san" },
      { label: "Breaking Point (BP)", key: "bp" },
    ].filter((item) => item.key === attribute)[0].label;

  const tableBondHeaders = ["Bonds", "Score"];
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} ta="start" td="underline">
            Personal Data
          </Title>
          <Group ta="start">
            <TextInput label="Name" flex={1} value={data?.name} />
            <TextInput label="Codename" flex={1} value={data?.codename} />
          </Group>
          <Group ta="start">
            <TextInput label="Profession" flex={1} value={data?.profession} />
            <TextInput label="Employer" flex={1} value={data?.employer} />
            <TextInput label="Nationality" flex={1} value={data?.nationality} />
          </Group>
          <Group ta="start">
            <TextInput label="Sex" w={100} value={data?.sex} />
            <TextInput label="Age" w={100} value={data?.age} />
            <TextInput
              label="Education and Occupational History"
              flex={1}
              value={data?.education}
            />
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
          <Title order={4} ta="start" td="underline">
            Statistical Data
          </Title>
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
                    <Table.Td ta="center">{data.stats[stat.toLowerCase()] * 5}</Table.Td>
                    <Table.Td ta="center">
                      {handleDistinguishingFeatures(stat.toLowerCase())}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Title order={4} ta="start" td="underline">
            Attributes
          </Title>
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
              {Object.keys(data?.attributes).map((attribute) => {
                return (
                  <Table.Tr>
                    <Table.Td>{calculateAttributesLabel(attribute)}</Table.Td>
                    <Table.Td ta="center">{data?.attributes[attribute].max}</Table.Td>
                    <Table.Td >
                      <NumberInput
                        w={100}
                        value={data?.attributes[attribute].current}
                      />
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
          <Title order={4} ta="start" td="underline">
            Psychological Data
          </Title>
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
            value={data?.motivations}
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
          <Divider />
          <Title order={4} ta="start" td="underline">
            Injuries
          </Title>
          <Textarea label="Wounds and Ailments" ta="start" rows={5} />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
