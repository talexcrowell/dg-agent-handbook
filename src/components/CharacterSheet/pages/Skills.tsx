import {
  Checkbox,
  Grid,
  Group,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { defaultSkillValues } from "../../../data";
import { useCharacterContext } from "../../../contexts/CharacterContext";

export const Skills = () => {
  const skillKeysArr = Object.keys(defaultSkillValues);
  const [{ currentCharacter }] = useCharacterContext();

  const isSkillChoice = (skill) => {
    switch (skill) {
      case "art":
      case "craft":
      case "foreignLanguage":
      case "militaryScience":
      case "pilot":
      case "science":
        return true;
      default:
        return false;
    }
  };

  const skillKeyLabels = (key) => {
    switch (key) {
      case "computerScience":
        return "Computer Science";
      case "firstAid":
        return "First Aid";
      case "foreignLanguage":
        return "Foreign Language";
      case "heavyMachinery":
        return "Heavy Machinery";
      case "heavyWeapons":
        return "Heavy Weapons";
      case "humint":
        return "HUMINT";
      case "meleeWeapons":
        return "Melee Weapons";
      case "militaryScience":
        return "Military Science";
      case "sigint":
        return "SIGINT";
      case "unarmedCombat":
        return "Unarmed Combat";
      default:
        return key;
    }
  };

  const additionalSkills = skillKeysArr.filter((key) => {
    if (isSkillChoice(key) && currentCharacter.skills[key].length > 1) {
      return currentCharacter.skills[key].slice(
        1,
        currentCharacter.skills[key].length
      );
    }
  });

  return (
    <Grid p="md" gutter="0">
      <Grid.Col span={12}>
        <Title order={4} ta="start" td="underline" mb="sm">
          Skills
        </Title>
      </Grid.Col>
      <Grid.Col span={4}>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Skill Name</Table.Th>
              <Table.Th>Score</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {skillKeysArr.slice(0, 14).map((key) => {
            return (
              <Table.Tr>
                <Table.Td>
                  <Group>
                    <Checkbox />
                    <Text tt="capitalize" ta="start">
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].label !== ""
                          ? `${skillKeyLabels(key)} (${
                              currentCharacter.skills[key][0].label
                            })`
                          : skillKeyLabels(key)
                        : skillKeyLabels(key)}{" "}
                    </Text>
                    <Text c="dimmed">
                      (
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].skill
                        : defaultSkillValues[key]}
                      %)
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text>
                    {isSkillChoice(key)
                      ? currentCharacter.skills[key][0].skill
                      : currentCharacter.skills[key]}
                    %
                  </Text>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table>
      </Grid.Col>
      <Grid.Col span={4}>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Skill Name</Table.Th>
              <Table.Th>Score</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {skillKeysArr.slice(15, 29).map((key) => {
            return (
              <Table.Tr>
                <Table.Td>
                  <Group>
                    <Checkbox />
                    <Text tt="capitalize" ta="start">
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].label !== ""
                          ? `${skillKeyLabels(key)} (${
                              currentCharacter.skills[key][0].label
                            })`
                          : skillKeyLabels(key)
                        : skillKeyLabels(key)}{" "}
                    </Text>
                    <Text c="dimmed">
                      (
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].skill
                        : defaultSkillValues[key]}
                      %)
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text>
                    {isSkillChoice(key)
                      ? currentCharacter.skills[key][0].skill
                      : currentCharacter.skills[key]}
                    %
                  </Text>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table>
      </Grid.Col>
      <Grid.Col span={4}>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Skill Name</Table.Th>
              <Table.Th>Score</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {skillKeysArr.slice(30, skillKeysArr.length).map((key) => {
            return (
              <Table.Tr>
                <Table.Td>
                  <Group>
                    <Checkbox />
                    <Text tt="capitalize" ta="start">
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].label !== ""
                          ? `${skillKeyLabels(key)} (${
                              currentCharacter.skills[key][0].label
                            })`
                          : skillKeyLabels(key)
                        : skillKeyLabels(key)}{" "}
                    </Text>
                    <Text c="dimmed">
                      (
                      {isSkillChoice(key)
                        ? currentCharacter.skills[key][0].skill
                        : defaultSkillValues[key]}
                      %)
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text>
                    {isSkillChoice(key)
                      ? currentCharacter.skills[key][0].skill
                      : currentCharacter.skills[key]}
                    %
                  </Text>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table>
      </Grid.Col>
      <Grid.Col span={12}>
        <Title order={4} ta="start" my="sm" td='underline'>
          Other Skills and Foreign Languages
        </Title>
      </Grid.Col>
      <Grid.Col span={6}>
        {additionalSkills.length > 0 ? (
          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Skill Name</Table.Th>
                <Table.Th>Score</Table.Th>
              </Table.Tr>
            </Table.Thead>
            {additionalSkills.map((key, index) => {
              return currentCharacter.skills[key]
                .slice(1, currentCharacter.skills[key].length)
                .map((type) => {
                  return (
                    <Table.Tr>
                      <Table.Td>
                        <Group>
                          <Checkbox />
                          <Text tt="capitalize" ta="start">
                            {isSkillChoice(key)
                              ? type.label !== ""
                                ? `${skillKeyLabels(key)} (${type.label})`
                                : skillKeyLabels(key)
                              : skillKeyLabels(key)}{" "}
                            (
                            {isSkillChoice(key)
                              ? type.skill
                              : defaultSkillValues[key]}
                            %)
                          </Text>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Text>
                          {isSkillChoice(key)
                            ? type.skill
                            : currentCharacter.skills[key]}
                          %
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  );
                });
            })}
          </Table>
        ) : (
          <Text fs="italic" p="lg">
            None
          </Text>
        )}
      </Grid.Col>
      <Grid.Col span={6}>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Special Training</Table.Th>
              <Table.Th>Skill or Stat Used</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody></Table.Tbody>
        </Table>
      </Grid.Col>
    </Grid>
  );
};
