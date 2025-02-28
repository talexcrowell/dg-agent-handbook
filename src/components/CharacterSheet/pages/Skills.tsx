import {
  Button,
  Checkbox,
  Grid,
  Group,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { defaultSkillValues, skillsMasterList } from "../../../data";
import styles from "../../../Element.module.css";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Fuse from "fuse.js";

export const Skills = ({
  currentCharacter,
  handleStandardRoll,
  inPerson,
  handleFailedTests,
}: any) => {
  const skillKeysArr = Object.keys(defaultSkillValues);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewport] = useViewportContext();

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

  const handleSearch = (val) => {
    setSearchTerm(val);
  };

  const fuse = new Fuse(skillKeysArr, {
    threshold: 0.45,
  });

  const filteredList = fuse.search(searchTerm).map((item) => {
    return { name: item.item };
  });

  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0} gutter="0">
      <Grid.Col span={12}>
        <Title order={4} ta="start" td="underline" mb="sm">
          Skills
        </Title>
      </Grid.Col>
      {viewport.width > 992 ? (
        <>
          <Grid.Col span={4}>
            <Table withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Skill Name</Table.Th>
                  <Table.Th>Score</Table.Th>
                </Table.Tr>
              </Table.Thead>
              {skillKeysArr.slice(0, 15).map((key) => {
                return (
                  <Table.Tr key={key}>
                    <Table.Td>
                      <Group>
                        <Checkbox
                          value={key}
                          checked={currentCharacter.failedTests.includes(key)}
                          onChange={(e) =>
                            e.currentTarget.checked
                              ? handleFailedTests([
                                  ...currentCharacter.failedTests,
                                  key,
                                ])
                              : handleFailedTests([
                                  ...currentCharacter.failedTests.filter(
                                    (test) => test !== key
                                  ),
                                ])
                          }
                        />
                        <Tooltip
                          w={250}
                          label={
                            skillsMasterList.filter(
                              (skill) => skill.id === key
                            )[0].definition
                          }
                          multiline
                          openDelay={500}
                        >
                          <Text
                            tt="capitalize"
                            ta="start"
                            className={styles.tooltippedElement}
                            size="sm"
                          >
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].label !== ""
                                ? `${skillKeyLabels(key)} (${
                                    currentCharacter.skills[key][0].label
                                  })`
                                : skillKeyLabels(key)
                              : skillKeyLabels(key)}{" "}
                          </Text>
                        </Tooltip>
                        <Text c="dimmed" size="sm">
                          ({isSkillChoice(key) ? 0 : defaultSkillValues[key]}
                          %)
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      {inPerson ? (
                        <Button
                          fullWidth
                          onClick={() => handleStandardRoll(key)}
                          variant="outline"
                          disabled={
                            (isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]) === 0
                          }
                        >
                          <Text ta="center" size="sm">
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]}
                            %
                          </Text>
                        </Button>
                      ) : (
                        <Text ta="center">
                          {isSkillChoice(key)
                            ? currentCharacter.skills[key][0].skill
                            : currentCharacter.skills[key]}
                          %
                        </Text>
                      )}
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
              {skillKeysArr.slice(15, 30).map((key) => {
                return (
                  <Table.Tr key={key}>
                    <Table.Td>
                      <Group>
                        <Checkbox
                          value={key}
                          checked={currentCharacter.failedTests.includes(key)}
                          onChange={(e) =>
                            e.currentTarget.checked
                              ? handleFailedTests([
                                  ...currentCharacter.failedTests,
                                  key,
                                ])
                              : handleFailedTests([
                                  ...currentCharacter.failedTests.filter(
                                    (test) => test !== key
                                  ),
                                ])
                          }
                        />
                        <Tooltip
                          w={250}
                          label={
                            skillsMasterList.filter(
                              (skill) => skill.id === key
                            )[0].definition
                          }
                          multiline
                          openDelay={500}
                        >
                          <Text
                            tt="capitalize"
                            ta="start"
                            className={styles.tooltippedElement}
                            size="sm"
                          >
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].label !== ""
                                ? `${skillKeyLabels(key)} (${
                                    currentCharacter.skills[key][0].label
                                  })`
                                : skillKeyLabels(key)
                              : skillKeyLabels(key)}{" "}
                          </Text>
                        </Tooltip>
                        <Text c="dimmed" size="sm">
                          ({isSkillChoice(key) ? 0 : defaultSkillValues[key]}
                          %)
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      {inPerson ? (
                        <Button
                          fullWidth
                          onClick={() => handleStandardRoll(key)}
                          variant="outline"
                          disabled={
                            (isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]) === 0
                          }
                        >
                          <Text ta="center" size="sm">
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]}
                            %
                          </Text>
                        </Button>
                      ) : (
                        <Text ta="center">
                          {isSkillChoice(key)
                            ? currentCharacter.skills[key][0].skill
                            : currentCharacter.skills[key]}
                          %
                        </Text>
                      )}
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
                  <Table.Tr key={key}>
                    <Table.Td>
                      <Group>
                        <Checkbox
                          value={key}
                          checked={currentCharacter.failedTests.includes(key)}
                          onChange={(e) =>
                            e.currentTarget.checked
                              ? handleFailedTests([
                                  ...currentCharacter.failedTests,
                                  key,
                                ])
                              : handleFailedTests([
                                  ...currentCharacter.failedTests.filter(
                                    (test) => test !== key
                                  ),
                                ])
                          }
                        />
                        <Tooltip
                          w={250}
                          label={
                            skillsMasterList.filter(
                              (skill) => skill.id === key
                            )[0].definition
                          }
                          multiline
                          openDelay={500}
                        >
                          <Text
                            tt="capitalize"
                            ta="start"
                            className={styles.tooltippedElement}
                            size="sm"
                          >
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].label !== ""
                                ? `${skillKeyLabels(key)} (${
                                    currentCharacter.skills[key][0].label
                                  })`
                                : skillKeyLabels(key)
                              : skillKeyLabels(key)}{" "}
                          </Text>
                        </Tooltip>
                        <Text c="dimmed" size="sm">
                          ({isSkillChoice(key) ? 0 : defaultSkillValues[key]}
                          %)
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      {inPerson ? (
                        <Button
                          fullWidth
                          onClick={() => handleStandardRoll(key)}
                          variant="outline"
                          disabled={
                            (isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]) === 0
                          }
                        >
                          <Text ta="center" size="sm">
                            {isSkillChoice(key)
                              ? currentCharacter.skills[key][0].skill
                              : currentCharacter.skills[key]}
                            %
                          </Text>
                        </Button>
                      ) : (
                        <Text ta="center">
                          {isSkillChoice(key)
                            ? currentCharacter.skills[key][0].skill
                            : currentCharacter.skills[key]}
                          %
                        </Text>
                      )}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table>
          </Grid.Col>
        </>
      ) : viewport.width > 600 ? (
        <>
          <Grid.Col span={12}>
            <TextInput
              placeholder="Search for a skill..."
              rightSection={<IconSearch />}
              mb="md"
              onChange={(e) => handleSearch(e.currentTarget.value)}
            />
          </Grid.Col>
          {searchTerm ? (
            <Grid.Col span={12}>
              <Table withTableBorder withColumnBorders>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Skill Name</Table.Th>
                    <Table.Th>Score</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                {filteredList.map((key) => {
                  return (
                    <Table.Tr key={key.name}>
                      <Table.Td>
                        <Group>
                          <Checkbox
                            value={key.name}
                            checked={currentCharacter.failedTests.includes(
                              key.name
                            )}
                            onChange={(e) =>
                              e.currentTarget.checked
                                ? handleFailedTests([
                                    ...currentCharacter.failedTests,
                                    key.name,
                                  ])
                                : handleFailedTests([
                                    ...currentCharacter.failedTests.filter(
                                      (test) => test !== key.name
                                    ),
                                  ])
                            }
                          />
                          <Tooltip
                            w={250}
                            label={
                              skillsMasterList.filter(
                                (skill) => skill.id === key.name
                              )[0].definition
                            }
                            multiline
                            openDelay={500}
                          >
                            <Text
                              tt="capitalize"
                              ta="start"
                              className={styles.tooltippedElement}
                              size="sm"
                            >
                              {isSkillChoice(key.name)
                                ? currentCharacter.skills[key.name][0].label !==
                                  ""
                                  ? `${skillKeyLabels(key.name)} (${
                                      currentCharacter.skills[key.name][0].label
                                    })`
                                  : skillKeyLabels(key.name)
                                : skillKeyLabels(key.name)}{" "}
                            </Text>
                          </Tooltip>
                          <Text c="dimmed" size="sm">
                            (
                            {isSkillChoice(key.name)
                              ? 0
                              : defaultSkillValues[key.name]}
                            %)
                          </Text>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        {inPerson ? (
                          <Button
                            fullWidth
                            onClick={() => handleStandardRoll(key)}
                            variant="outline"
                            disabled={
                              (isSkillChoice(key.name)
                                ? currentCharacter.skills[key.name][0].skill
                                : currentCharacter.skills[key.name]) === 0
                            }
                          >
                            <Text ta="center" size="sm">
                              {isSkillChoice(key.name)
                                ? currentCharacter.skills[key.name][0].skill
                                : currentCharacter.skills[key.name]}
                              %
                            </Text>
                          </Button>
                        ) : (
                          <Text ta="center">
                            {isSkillChoice(key.name)
                              ? currentCharacter.skills[key.name][0].skill
                              : currentCharacter.skills[key.name]}
                            %
                          </Text>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table>
            </Grid.Col>
          ) : (
            <>
              <Grid.Col span={6}>
                <Table withTableBorder withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Skill Name</Table.Th>
                      <Table.Th>Score</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {skillKeysArr.slice(0, skillKeysArr.length / 2).map((key) => {
                    return (
                      <Table.Tr key={key}>
                        <Table.Td>
                          <Group>
                            <Checkbox
                              value={key}
                              checked={currentCharacter.failedTests.includes(
                                key
                              )}
                              onChange={(e) =>
                                e.currentTarget.checked
                                  ? handleFailedTests([
                                      ...currentCharacter.failedTests,
                                      key,
                                    ])
                                  : handleFailedTests([
                                      ...currentCharacter.failedTests.filter(
                                        (test) => test !== key
                                      ),
                                    ])
                              }
                            />
                            <Tooltip
                              w={250}
                              label={
                                skillsMasterList.filter(
                                  (skill) => skill.id === key
                                )[0].definition
                              }
                              multiline
                              openDelay={500}
                            >
                              <Text
                                tt="capitalize"
                                ta="start"
                                className={styles.tooltippedElement}
                                size="sm"
                              >
                                {isSkillChoice(key)
                                  ? currentCharacter.skills[key][0].label !== ""
                                    ? `${skillKeyLabels(key)} (${
                                        currentCharacter.skills[key][0].label
                                      })`
                                    : skillKeyLabels(key)
                                  : skillKeyLabels(key)}{" "}
                              </Text>
                            </Tooltip>
                            <Text c="dimmed" size="sm">
                              (
                              {isSkillChoice(key) ? 0 : defaultSkillValues[key]}
                              %)
                            </Text>
                          </Group>
                        </Table.Td>
                        <Table.Td>
                          {inPerson ? (
                            <Button
                              fullWidth
                              onClick={() => handleStandardRoll(key)}
                              variant="outline"
                              disabled={
                                (isSkillChoice(key)
                                  ? currentCharacter.skills[key][0].skill
                                  : currentCharacter.skills[key]) === 0
                              }
                            >
                              <Text ta="center" size="sm">
                                {isSkillChoice(key)
                                  ? currentCharacter.skills[key][0].skill
                                  : currentCharacter.skills[key]}
                                %
                              </Text>
                            </Button>
                          ) : (
                            <Text ta="center">
                              {isSkillChoice(key)
                                ? currentCharacter.skills[key][0].skill
                                : currentCharacter.skills[key]}
                              %
                            </Text>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
                </Table>
              </Grid.Col>
              <Grid.Col span={6}>
                <Table withTableBorder withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Skill Name</Table.Th>
                      <Table.Th>Score</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {skillKeysArr
                    .slice(skillKeysArr.length / 2, skillKeysArr.length)
                    .map((key) => {
                      return (
                        <Table.Tr key={key}>
                          <Table.Td>
                            <Group>
                              <Checkbox
                                value={key}
                                checked={currentCharacter.failedTests.includes(
                                  key
                                )}
                                onChange={(e) =>
                                  e.currentTarget.checked
                                    ? handleFailedTests([
                                        ...currentCharacter.failedTests,
                                        key,
                                      ])
                                    : handleFailedTests([
                                        ...currentCharacter.failedTests.filter(
                                          (test) => test !== key
                                        ),
                                      ])
                                }
                              />
                              <Tooltip
                                w={250}
                                label={
                                  skillsMasterList.filter(
                                    (skill) => skill.id === key
                                  )[0].definition
                                }
                                multiline
                                openDelay={500}
                              >
                                <Text
                                  tt="capitalize"
                                  ta="start"
                                  className={styles.tooltippedElement}
                                  size="sm"
                                >
                                  {isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].label !==
                                      ""
                                      ? `${skillKeyLabels(key)} (${
                                          currentCharacter.skills[key][0].label
                                        })`
                                      : skillKeyLabels(key)
                                    : skillKeyLabels(key)}{" "}
                                </Text>
                              </Tooltip>
                              <Text c="dimmed" size="sm">
                                (
                                {isSkillChoice(key)
                                  ? 0
                                  : defaultSkillValues[key]}
                                %)
                              </Text>
                            </Group>
                          </Table.Td>
                          <Table.Td>
                            {inPerson ? (
                              <Button
                                fullWidth
                                onClick={() => handleStandardRoll(key)}
                                variant="outline"
                                disabled={
                                  (isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].skill
                                    : currentCharacter.skills[key]) === 0
                                }
                              >
                                <Text ta="center" size="sm">
                                  {isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].skill
                                    : currentCharacter.skills[key]}
                                  %
                                </Text>
                              </Button>
                            ) : (
                              <Text ta="center">
                                {isSkillChoice(key)
                                  ? currentCharacter.skills[key][0].skill
                                  : currentCharacter.skills[key]}
                                %
                              </Text>
                            )}
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table>
              </Grid.Col>
            </>
          )}
        </>
      ) : (
        <Grid.Col span={12}>
          <Stack>
            <TextInput
              placeholder="Search for a skill..."
              rightSection={<IconSearch />}
              onChange={(e) => handleSearch(e.currentTarget.value)}
            />
            <Table withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Skill Name (Base Rating)</Table.Th>
                  <Table.Th>Score</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {searchTerm
                  ? filteredList.map((key) => {
                      return (
                        <Table.Tr key={key.name}>
                          <Table.Td>
                            <Group>
                              <Checkbox
                                value={key.name}
                                checked={currentCharacter.failedTests.includes(
                                  key.name
                                )}
                                onChange={(e) =>
                                  e.currentTarget.checked
                                    ? handleFailedTests([
                                        ...currentCharacter.failedTests,
                                        key.name,
                                      ])
                                    : handleFailedTests([
                                        ...currentCharacter.failedTests.filter(
                                          (test) => test !== key.name
                                        ),
                                      ])
                                }
                              />
                              <Tooltip
                                w={250}
                                label={
                                  skillsMasterList.filter(
                                    (skill) => skill.id === key.name
                                  )[0].definition
                                }
                                multiline
                                openDelay={500}
                              >
                                <Text
                                  tt="capitalize"
                                  ta="start"
                                  className={styles.tooltippedElement}
                                  size="sm"
                                >
                                  {isSkillChoice(key.name)
                                    ? currentCharacter.skills[key.name][0]
                                        .label !== ""
                                      ? `${skillKeyLabels(key.name)} (${
                                          currentCharacter.skills[key.name][0]
                                            .label
                                        })`
                                      : skillKeyLabels(key.name)
                                    : skillKeyLabels(key.name)}{" "}
                                </Text>
                              </Tooltip>
                              <Text c="dimmed" size="sm">
                                (
                                {isSkillChoice(key.name)
                                  ? 0
                                  : defaultSkillValues[key.name]}
                                %)
                              </Text>
                            </Group>
                          </Table.Td>
                          <Table.Td>
                            {inPerson ? (
                              <Button
                                fullWidth
                                onClick={() => handleStandardRoll(key)}
                                variant="outline"
                                disabled={
                                  (isSkillChoice(key.name)
                                    ? currentCharacter.skills[key.name][0].skill
                                    : currentCharacter.skills[key.name]) === 0
                                }
                              >
                                <Text ta="center" size="sm">
                                  {isSkillChoice(key.name)
                                    ? currentCharacter.skills[key.name][0].skill
                                    : currentCharacter.skills[key.name]}
                                  %
                                </Text>
                              </Button>
                            ) : (
                              <Text ta="center">
                                {isSkillChoice(key.name)
                                  ? currentCharacter.skills[key.name][0].skill
                                  : currentCharacter.skills[key.name]}
                                %
                              </Text>
                            )}
                          </Table.Td>
                        </Table.Tr>
                      );
                    })
                  : skillKeysArr.map((key) => {
                      return (
                        <Table.Tr>
                          <Table.Td>
                            <Group>
                              <Checkbox
                                value={key}
                                checked={currentCharacter.failedTests.includes(
                                  key
                                )}
                                onChange={(e) =>
                                  e.currentTarget.checked
                                    ? handleFailedTests([
                                        ...currentCharacter.failedTests,
                                        key,
                                      ])
                                    : handleFailedTests([
                                        ...currentCharacter.failedTests.filter(
                                          (test) => test !== key
                                        ),
                                      ])
                                }
                              />
                              <Tooltip
                                w={250}
                                label={
                                  skillsMasterList.filter(
                                    (skill) => skill.id === key
                                  )[0].definition
                                }
                                multiline
                                openDelay={500}
                              >
                                <Text
                                  tt="capitalize"
                                  ta="start"
                                  className={styles.tooltippedElement}
                                  size="sm"
                                >
                                  {isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].label !==
                                      ""
                                      ? `${skillKeyLabels(key)} (${
                                          currentCharacter.skills[key][0].label
                                        })`
                                      : skillKeyLabels(key)
                                    : skillKeyLabels(key)}{" "}
                                </Text>
                              </Tooltip>
                              <Text c="dimmed">
                                (
                                {isSkillChoice(key)
                                  ? 0
                                  : defaultSkillValues[key]}
                                %)
                              </Text>
                            </Group>
                          </Table.Td>
                          <Table.Td>
                            {inPerson ? (
                              <Button
                                fullWidth
                                onClick={() => handleStandardRoll(key)}
                                variant="outline"
                                disabled={
                                  (isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].skill
                                    : currentCharacter.skills[key]) === 0
                                }
                              >
                                <Text ta="center" size="sm">
                                  {isSkillChoice(key)
                                    ? currentCharacter.skills[key][0].skill
                                    : currentCharacter.skills[key]}
                                  %
                                </Text>
                              </Button>
                            ) : (
                              <Text ta="center">
                                {isSkillChoice(key)
                                  ? currentCharacter.skills[key][0].skill
                                  : currentCharacter.skills[key]}
                                %
                              </Text>
                            )}
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
              </Table.Tbody>
            </Table>
          </Stack>
        </Grid.Col>
      )}
      <Grid.Col span={12}>
        <Title order={4} ta="start" my="sm" td="underline">
          Other Skills and Foreign Languages
        </Title>
      </Grid.Col>
      {
        <>
          <Grid.Col span={12}>
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
                              </Text>
                              <Text c="dimmed">
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
          <Grid.Col span={12}>
            <Table withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Special Training</Table.Th>
                  <Table.Th>Skill or Stat Used</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Text c="dimmed">NONE</Text>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Grid.Col>
        </>
      }
    </Grid>
  );
};
