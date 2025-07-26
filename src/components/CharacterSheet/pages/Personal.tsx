import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  InputLabel,
  NumberInput,
  Stack,
  Switch,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";
import { IconEdit, IconPencil } from "@tabler/icons-react";

export const Personal = ({
  currentCharacter,
  handleUpdateCharacter,
  handleStandardRoll,
  inPerson,
}: any) => {
  const [viewport] = useViewportContext();
  const [editStats, setEditStats] = useState<boolean>(false);
  const [editAttributes, setEditAttributes] = useState<boolean>(false);
  const [editPsych, setEditPsych] = useState<boolean>(false);

  let data = { ...currentCharacter };

  const tableStatHeaders =
    viewport.width > 760
      ? ["Statistic", "Score", "x5", "Features"]
      : ["Statistic", "Score", "x5"];

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
      { label: "Hit Points", key: "hp" },
      { label: "Willpower", key: "wp" },
      { label: "Sanity", key: "san" },
      { label: "Breaking Point", key: "bp" },
    ].filter((item) => item.key === attribute)[0].label;

  const tableBondHeaders = ["Bonds", "Score"];

  const calculateLowValues = (key: string) => {
    switch (key) {
      case "hp":
      case "wp":
        if (
          data?.attributes[key].current < 3 &&
          data?.attributes[key].current > 0
        ) {
          return "yellow";
        } else if (data?.attributes[key].current === 0) {
          return "red";
        } else {
          return "dark.0";
        }
    }
  };

  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} ta="start" td="underline">
            Personal Data
          </Title>
          {viewport.width > 760 ? (
            <>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Name
                    </Text>
                  }
                  flex={1}
                  value={data?.name}
                  onChange={(e) =>
                    handleUpdateCharacter("name", e.currentTarget.value)
                  }
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Codename
                    </Text>
                  }
                  flex={1}
                  value={data?.codename}
                  styles={{ input: { cursor: "not-allowed" } }}
                />
              </Group>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Profession
                    </Text>
                  }
                  flex={1}
                  value={data?.profession}
                  onChange={(e) =>
                    handleUpdateCharacter("profession", e.currentTarget.value)
                  }
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Employer
                    </Text>
                  }
                  flex={1}
                  value={data?.employer}
                  onChange={(e) =>
                    handleUpdateCharacter("employer", e.currentTarget.value)
                  }
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Nationality
                    </Text>
                  }
                  flex={1}
                  value={data?.nationality}
                  styles={{ input: { cursor: "not-allowed" } }}
                />
              </Group>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Sex
                    </Text>
                  }
                  w={100}
                  value={data?.sex}
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Age
                    </Text>
                  }
                  w={100}
                  value={data?.age}
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Education/Occupation History
                    </Text>
                  }
                  flex={1}
                  value={data?.education}
                  onChange={(e) =>
                    handleUpdateCharacter("education", e.currentTarget.value)
                  }
                />
              </Group>
            </>
          ) : (
            <>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Name
                    </Text>
                  }
                  flex={1}
                  value={data?.name}
                  onChange={(e) =>
                    handleUpdateCharacter("name", e.currentTarget.value)
                  }
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Codename
                    </Text>
                  }
                  flex={1}
                  value={data?.codename}
                  styles={{ input: { cursor: "not-allowed" } }}
                />
              </Group>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Profession
                    </Text>
                  }
                  flex={1}
                  value={data?.profession}
                  onChange={(e) =>
                    handleUpdateCharacter("profession", e.currentTarget.value)
                  }
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Employer
                    </Text>
                  }
                  flex={1}
                  value={data?.employer}
                  onChange={(e) =>
                    handleUpdateCharacter("employer", e.currentTarget.value)
                  }
                />
              </Group>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Nationality
                    </Text>
                  }
                  flex={1}
                  value={data?.nationality}
                  styles={{ input: { cursor: "not-allowed" } }}
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Education/Occupation History
                    </Text>
                  }
                  flex={1}
                  value={data?.education}
                  onChange={(e) =>
                    handleUpdateCharacter("education", e.currentTarget.value)
                  }
                />
              </Group>
              <Group ta="start">
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Sex
                    </Text>
                  }
                  flex={1}
                  value={data?.sex}
                />
                <TextInput
                  label={
                    <Text size="sm" truncate="end" c="dimmed">
                      Age
                    </Text>
                  }
                  flex={1}
                  value={data?.age}
                />
              </Group>
            </>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col span={viewport.width > 980 ? 6 : 12}>
        <Stack>
          <Group justify="space-between">
            <Title order={4} ta="start" td="underline">
              Statistical Data
            </Title>
            <Switch
              thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
              size="md"
              checked={editStats}
              onChange={(e) => setEditStats(e.currentTarget.checked)}
            />
          </Group>
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
                    <Table.Td>
                      {inPerson ? (
                        <Button
                          fullWidth
                          onClick={() => handleStandardRoll(stat.toLowerCase())}
                          variant="outline"
                        >
                          {stat}
                        </Button>
                      ) : (
                        stat
                      )}
                    </Table.Td>
                    <Table.Td ta="center">
                      {editStats ? (
                        <NumberInput
                          value={data?.stats[stat.toLowerCase()]}
                          min={3}
                          max={18}
                          clampBehavior="strict"
                          onChange={(val) =>
                            handleUpdateCharacter(
                              "stats",
                              val,
                              stat.toLowerCase()
                            )
                          }
                        />
                      ) : (
                        data?.stats[stat.toLowerCase()]
                      )}
                    </Table.Td>
                    <Table.Td ta="center">
                      {data.stats[stat.toLowerCase()] * 5}
                    </Table.Td>
                    {viewport.width > 760 && (
                      <Table.Td ta="center">
                        {handleDistinguishingFeatures(stat.toLowerCase())}
                      </Table.Td>
                    )}
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
          <Group justify="space-between">
            <Title order={4} ta="start" td="underline">
              Attributes
            </Title>
            <Switch
              thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
              size="md"
              checked={editAttributes}
              onChange={(e) => setEditAttributes(e.currentTarget.checked)}
            />
          </Group>
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
                    <Table.Td>
                      {attribute === "san" && inPerson ? (
                        <Button
                          size="sm"
                          variant="outline"
                          fullWidth
                          onClick={() => handleStandardRoll(attribute)}
                        >
                          <Text size="sm" fw={600} truncate="end">
                            {calculateAttributesLabel(attribute)}
                          </Text>
                        </Button>
                      ) : (
                        calculateAttributesLabel(attribute)
                      )}
                    </Table.Td>
                    <Table.Td ta="center">
                      {data?.attributes[attribute].max}
                    </Table.Td>
                    <Table.Td ta="center" c={calculateLowValues(attribute)}>
                      {editAttributes ? (
                        <NumberInput
                          value={data?.attributes[attribute].current}
                          max={data?.attributes[attribute].max}
                          min={0}
                          onChange={(val) =>
                            handleUpdateCharacter("attributes", val, attribute)
                          }
                        />
                      ) : (
                        data?.attributes[attribute].current
                      )}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
              <Table.Tr>
                <Table.Td>
                  {inPerson ? (
                    <Button
                      size="sm"
                      variant="outline"
                      fullWidth
                      onClick={() => handleStandardRoll("luck")}
                    >
                      <Text size="sm" fw={600} truncate="end">
                        Luck
                      </Text>
                    </Button>
                  ) : (
                    "Luck"
                  )}
                </Table.Td>
                <Table.Td>
                  <Text size="sm" ta="center">
                    50
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" ta="center">
                    50
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Card py="xs">
            <Group justify="space-between">
              <Text fw={700}>Status</Text>
              <Text>Healthy</Text>
            </Group>
          </Card>
        </Stack>
      </Grid.Col>
      <Grid.Col span={viewport.width > 980 ? 6 : 12}>
        <Stack>
          <Group justify="space-between">
            <Title order={4} ta="start" td="underline">
              Psychological Data
            </Title>{" "}
            <Switch
              thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
              size="md"
              checked={editPsych}
              onChange={(e) => setEditPsych(e.currentTarget.checked)}
            />
          </Group>
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
              {data.bonds.map((bond, index) => {
                return (
                  <Table.Tr>
                    <Table.Td>{bond.name}</Table.Td>
                    <Table.Td w={100} ta="center">
                      {editPsych ? (
                        <NumberInput
                          value={bond.value}
                          max={data?.stats.charisma}
                          min={0}
                          onChange={(val) =>
                            handleUpdateCharacter("bonds", val, index)
                          }
                        />
                      ) : (
                        bond.value
                      )}
                    </Table.Td>
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
            onChange={(e) =>
              handleUpdateCharacter("motivations", e.currentTarget.value)
            }
          />
          <Stack>
            <InputLabel ta="start">
              Incidents of SAN Loss Without going Insane
            </InputLabel>
            <Group justify="space-between">
              <Group>
                <InputLabel>Violence</InputLabel>
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </Group>
              <Group>
                <InputLabel>Helplessness</InputLabel>
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </Group>
            </Group>
          </Stack>
          <Divider />
          <Title order={4} ta="start" td="underline">
            Injuries
          </Title>
          <Textarea
            label="Wounds and Ailments"
            ta="start"
            rows={5}
            value={data?.wounds}
            onChange={(e) =>
              handleUpdateCharacter("wounds", e.currentTarget.value)
            }
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
