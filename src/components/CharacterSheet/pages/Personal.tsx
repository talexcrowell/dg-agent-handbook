import {
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Group,
  InputLabel,
  NumberInput,
  Rating,
  Stack,
  Switch,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";
import {
  IconBoxAlignTop,
  IconCheckbox,
  IconPencil,
  IconSquare,
} from "@tabler/icons-react";

export const Personal = ({
  currentCharacter,
  handleUpdateCharacter,
  handleStandardRoll,
  inPerson,
  IsPreview,
}: any) => {
  const [viewport] = useViewportContext();
  const [editPersonal, setEditPersonal] = useState<boolean>(false);
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

  const calculateStatusText = () => {
    let status = "Healthy";
    if (
      data?.attributes["wp"].current <= data?.attributes["wp"].max / 2 &&
      data?.attributes["wp"].current >= 3
    ) {
      status = "Tired";
    }
    if (
      data?.attributes["wp"].current < 3 &&
      data?.attributes["wp"].current > 0
    ) {
      status = "Emotional Breakdown";
    }
    if (data?.attributes["wp"].current === 0) {
      status = "Unconscious";
    }
    if (data?.attributes["bp"].current > data?.attributes["san"].current) {
      status = "Temporary Insanity";
    }
    if (
      data?.attributes["hp"].current <= data?.attributes["hp"].max / 2 &&
      data?.attributes["hp"].current >= 3
    ) {
      status = "Hurt";
    }
    if (
      data?.attributes["hp"].current < 3 &&
      data?.attributes["hp"].current > 0
    ) {
      status = "Fainting";
    }
    if (data?.attributes["hp"].current === 0) {
      status = "Dead";
    }
    return status;
  };
  const calculateStatusTextColor = (status: string) => {
    let color = "";
    switch (status) {
      case "Tired":
      case "Hurt":
        color = "yellow";
        break;
      case "Emotional Breakdown":
      case "Fainting":
        color = "orange";
        break;
      case "Unconscious":
      case "Temporary Insanity":
      case "Dead":
        color = "red";
        break;
    }
    return color;
  };

  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Group justify="space-between">
            <Title order={4} ta="start" td="underline">
              Personal Data
            </Title>
            {!IsPreview() && (
              <Switch
                thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
                size="md"
                checked={editPersonal}
                onChange={(e) => setEditPersonal(e.currentTarget.checked)}
              />
            )}
          </Group>
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
                    editPersonal
                      ? handleUpdateCharacter("name", e.currentTarget.value)
                      : ""
                  }
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
                  }
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
                    editPersonal
                      ? handleUpdateCharacter(
                          "profession",
                          e.currentTarget.value
                        )
                      : ""
                  }
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                    editPersonal
                      ? handleUpdateCharacter("employer", e.currentTarget.value)
                      : ""
                  }
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                    editPersonal
                      ? handleUpdateCharacter(
                          "education",
                          e.currentTarget.value
                        )
                      : ""
                  }
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
                  }
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
                  }
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
                  styles={
                    !editPersonal ? { input: { cursor: "not-allowed" } } : {}
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
            {!IsPreview() && (
              <Switch
                thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
                size="md"
                checked={editStats}
                onChange={(e) => setEditStats(e.currentTarget.checked)}
              />
            )}
          </Group>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableStatHeaders.map((header) => {
                  return (
                    <Table.Th ta="center" c="dimmed">
                      {header}
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
            {!IsPreview() && (
              <Switch
                thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
                size="md"
                checked={editAttributes}
                onChange={(e) => setEditAttributes(e.currentTarget.checked)}
              />
            )}
          </Group>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableAttributeHeaders.map((header) => {
                  return (
                    <Table.Th ta="center" c="dimmed">
                      {header}
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
              <Text fw={700} c="dimmed">
                Status
              </Text>
              <Text
                fw={600}
                c={calculateStatusTextColor(calculateStatusText())}
              >
                {calculateStatusText()}
              </Text>
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
            {!IsPreview() && (
              <Switch
                thumbIcon={<IconPencil color="black" size={12} stroke={3} />}
                size="md"
                checked={editPsych}
                onChange={(e) => setEditPsych(e.currentTarget.checked)}
              />
            )}
          </Group>
          <Table withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                {tableBondHeaders.map((header) => {
                  return (
                    <Table.Th ta="center" c="dimmed">
                      {header}
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
            label={
              <InputLabel c="dimmed">
                Motivations and Mental Disorders
              </InputLabel>
            }
            ta="start"
            rows={5}
            value={data?.motivations}
            onChange={(e) =>
              handleUpdateCharacter("motivations", e.currentTarget.value)
            }
            disabled={IsPreview()}
          />
          <Stack gap={"xs"}>
            <InputLabel ta="start" c="dimmed">
              Incidents of Sanity loss without going Insane
            </InputLabel>
            <Group justify="space-between">
              <Group>
                <InputLabel
                  onClick={() => handleUpdateCharacter("violence", 0)}
                  style={{ cursor: "pointer" }}
                >
                  Violence
                </InputLabel>
                <Rating
                  emptySymbol={<IconSquare size="24" />}
                  fullSymbol={<IconCheckbox size="24" />}
                  count={3}
                  value={data?.adaptation.violence}
                  onChange={(e) => handleUpdateCharacter("violence", e)}
                />
              </Group>
              <Group>
                <InputLabel
                  onClick={() => handleUpdateCharacter("helplessness", 0)}
                  style={{ cursor: "pointer" }}
                >
                  Helplessness
                </InputLabel>
                <Rating
                  emptySymbol={<IconSquare size="24" />}
                  fullSymbol={<IconCheckbox size="24" />}
                  count={3}
                  value={data?.adaptation.helplessness}
                  onChange={(e) => handleUpdateCharacter("helplessness", e)}
                />
              </Group>
            </Group>
          </Stack>
          <Divider />
          <Title order={4} ta="start" td="underline">
            Injuries
          </Title>
          <Textarea
            label={<InputLabel c="dimmed">Wounds and Ailments</InputLabel>}
            ta="start"
            rows={5}
            value={data?.wounds}
            onChange={(e) =>
              handleUpdateCharacter("wounds", e.currentTarget.value)
            }
            disabled={IsPreview()}
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
