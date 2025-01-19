import {
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Group,
  Input,
  List,
  MultiSelect,
  NumberInput,
  ScrollArea,
  SegmentedControl,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import {
  defaultSkillValues,
  skillPackages,
  skillsMasterList,
} from "../../../data";
import styles from "../../../Element.module.css";

export const OtherProfessionalSkills: React.FC<{
  handleAgentOtherSkills: (newSkills: any) => void;
  handleAgentSkillPackage: (selectedPackage: any) => void;
  userAgent: any;
}> = ({ handleAgentOtherSkills, handleAgentSkillPackage, userAgent }) => {
  const [statSystem, setStatSystem] = useState("custom");
  const [count, setCount] = useState(8);
  const [selectedPackage, setSelectedPackage] = useState();
  const [confirmedPackage, setConfirmedPackage] = useState(false);
  const [skillChoices, setSkillChoices] = useState<any>([]);
  const [special, setSpecial] = useState({});
  const [personalSpecialties, setPersonalSpecialties] = useState<string[]>([]);

  const handleSelectSkillPackage = (skillPackage: any) => {
    setSelectedPackage({ ...skillPackage });
  };

  const handleSelectSkill = (skill) => {
    if (skillChoices.length >= skill.length) {
      setCount(count + 1);
      setSkillChoices([
        ...skillChoices.filter((choice: any) => skill.includes(choice.name)),
      ]);
    } else {
      setCount(count - 1);
      isSkillChoice(skill[skill.length - 1])
        ? setSkillChoices([
            ...skillChoices,
            {
              name: skill[skill.length - 1],
              label: userAgent.skills[skill[skill.length - 1]][0].label
                ? userAgent.skills[skill[skill.length - 1]][0].label
                : "",
              value: 20,
            },
          ])
        : setSkillChoices([
            ...skillChoices,
            { name: skill[skill.length - 1], value: 20 },
          ]);
    }
  };

  const handleSelectAdditionalSkill = (skill) => {
    if (skillChoices.length > skill.length) {
      setCount(count + 1);
      setSkillChoices([
        ...skillChoices.filter((choice: any) => skill.includes(choice.name)),
      ]);
    } else {
      setCount(count - 1);
      const split = skill[skill.length - 1].split(".");
      setSkillChoices([
        ...skillChoices,
        {
          name: skill[skill.length - 1],
          id: split[0],
          label: split[1],
          value: 20,
        },
      ]);
    }
  };

  const skillKeysArr = Object.keys(defaultSkillValues);

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

  const handleSkillChoiceLabel = (value, key) => {
    const findSkillChoice = skillChoices.filter(
      (skill) => skill.name === key
    )[0];
    findSkillChoice.label = value.target.value;
    setSkillChoices([
      ...skillChoices.filter((skill) => skill.name !== key),
      { ...findSkillChoice },
    ]);
  };

  const handleAdjustSkillRating = (value, key) => {
    if (
      value +
        (isSkillChoice(key)
          ? userAgent.skills[key][0].skill
          : userAgent.skills[key]) >
      80
    ) {
      return;
    } else {
      let difference =
        (skillChoices.filter((skill) => skill.name === key)[0].value - value) /
        20;
      setCount(count + difference);
      const findSkillChoice = skillChoices.filter(
        (skill) => skill.name === key
      )[0];
      findSkillChoice.value = value;
      setSkillChoices([
        ...skillChoices.filter((skill) => skill.name !== key),
        { ...findSkillChoice },
      ]);
    }
  };

  const handleAdjustAdditionalSkillRating = (value, key, type) => {
    if (
      value +
        userAgent.skills[key].filter((skill) => skill.label === type)[0].skill >
      80
    ) {
      return;
    } else {
      let difference =
        (skillChoices.filter((skill) => skill.label === type)[0].value -
          value) /
        20;
      setCount(count + difference);
      const findSkillChoice = skillChoices.filter(
        (skill) => skill.label === type
      )[0];
      findSkillChoice.value = value;
      setSkillChoices([
        ...skillChoices.filter((skill) => skill.label !== type),
        { ...findSkillChoice },
      ]);
    }
  };

  const handleSkillTypeForSkillPackage = (index, string) => {
    let newArr = [...selectedPackage.professionalSkills];
    newArr[index].type = string;
    setSelectedPackage({ ...selectedPackage, professionalSkills: newArr });
  };

  const handleSpecialChoiceForSkillPackage = (value, option) => {
    setSpecial({ id: option.value, name: option.label });
  };

  const additionalSkills = skillKeysArr.filter((key) => {
    if (isSkillChoice(key) && userAgent.skills[key].length > 1) {
      return userAgent.skills[key].slice(1, userAgent.skills[key].length);
    }
  });

  const handleSpecialChoiceAndSpecialties = () => {
    let newArr = [...selectedPackage.professionalSkills];
    if (special.name) {
      newArr = [...selectedPackage.professionalSkills].filter(
        (item) => item.id !== "special"
      );
      newArr = [...newArr, { ...special }];
    }
    if (personalSpecialties.length > 0) {
      let personalArr = personalSpecialties.map((item) => {
        return {
          id: item,
          name: String(item).charAt(0).toUpperCase() + String(item).slice(1),
        };
      });
      newArr = [...newArr, ...personalArr];
    }

    handleAgentSkillPackage({
      ...selectedPackage,
      professionalSkills: [...newArr],
    });
  };

  return (
    <Grid>
      <Grid.Col>
        <Stack ta="start">
          <Title>Skills</Title>
          <Text>
            Your Agent also gets Bonus Skill Points. Pick eight skills (except
            Unnatural) and increase each of them by 20 points. This allows your
            Agent to specialize in certain professional skills or to learn a
            little about skills not included in his or her profession.{" "}
          </Text>
          <Text>
            You can even boost a single skill more than once, adding +20 each
            time. However, no skill can start higher than 80%.
          </Text>
          <Text>
            You can also pick a Bonus Skill Package to save time choosing bonus
            skills.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider size={"xl"} />
      </Grid.Col>
      <Grid.Col span={12}>
        <SegmentedControl
          data={[
            { label: "Custom", value: "custom" },
            { label: "Packages", value: "packages" },
          ]}
          onChange={setStatSystem}
          disabled={confirmedPackage}
        />
      </Grid.Col>
      {!confirmedPackage ? (
        statSystem === "custom" ? (
          <>
            <Grid.Col span={12} ta="center">
              <Text>Select {count} more skills to boost</Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <List ta="start" listStyleType="none">
                <Checkbox.Group
                  value={[...skillChoices.map((skill) => skill.name)]}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr.slice(0, 15).map((key) => (
                      <List.Item>
                        <Checkbox
                          label={
                            <Tooltip
                              w={250}
                              label={
                                skillsMasterList.filter(
                                  (item) => item.id === key
                                )[0].definition
                              }
                              multiline
                              openDelay={500}
                              className={styles.tooltippedElement}
                            >
                              <Text tt="capitalize">
                                {isSkillChoice(key)
                                  ? userAgent.skills[key][0].label !== ""
                                    ? `${skillKeyLabels(key)} (${
                                        userAgent.skills[key][0].label
                                      })`
                                    : skillKeyLabels(key)
                                  : skillKeyLabels(key)}{" "}
                                (
                                {isSkillChoice(key)
                                  ? userAgent.skills[key][0].skill
                                  : userAgent.skills[key]}
                                %)
                              </Text>
                            </Tooltip>
                          }
                          value={key}
                        />
                        {skillChoices
                          .map((skill) => skill.name)
                          .includes(key) && (
                          <Stack gap={0}>
                            <NumberInput
                              min={20}
                              max={80}
                              step={20}
                              defaultValue={20}
                              value={
                                skillChoices.filter((skill) =>
                                  isSkillChoice(skill)
                                    ? skill.name === key &&
                                      skill.type === userAgent[key][0].type
                                    : skill.name === key
                                )[0].value
                              }
                              prefix="+ "
                              suffix="%"
                              onKeyDown={() => false}
                              onChange={(val) =>
                                handleAdjustSkillRating(val, key)
                              }
                            />
                            {isSkillChoice(key) &&
                              !userAgent.skills[key][0].label && (
                                <TextInput
                                  label="Type"
                                  onChange={(val) =>
                                    handleSkillChoiceLabel(val, key)
                                  }
                                />
                              )}
                          </Stack>
                        )}
                      </List.Item>
                    ))}
                  </Stack>
                </Checkbox.Group>
              </List>
            </Grid.Col>
            <Grid.Col span={3}>
              {" "}
              <List ta="start" listStyleType="none">
                <Checkbox.Group
                  value={[...skillChoices.map((skill) => skill.name)]}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr.slice(15, 30).map((key) => (
                      <List.Item>
                        <Checkbox
                          label={
                            <Tooltip
                              w={250}
                              label={
                                skillsMasterList.filter(
                                  (item) => item.id === key
                                )[0].definition
                              }
                              multiline
                              openDelay={500}
                              className={styles.tooltippedElement}
                            >
                              <Text tt="capitalize">
                                {isSkillChoice(key)
                                  ? userAgent.skills[key][0].label !== ""
                                    ? `${skillKeyLabels(key)} (${
                                        userAgent.skills[key][0].label
                                      })`
                                    : skillKeyLabels(key)
                                  : skillKeyLabels(key)}{" "}
                                (
                                {isSkillChoice(key)
                                  ? userAgent.skills[key][0].skill
                                  : userAgent.skills[key]}
                                %)
                              </Text>
                            </Tooltip>
                          }
                          value={key}
                        />
                        {skillChoices
                          .map((skill) => skill.name)
                          .includes(key) && (
                          <Stack>
                            <NumberInput
                              min={20}
                              max={80}
                              step={20}
                              defaultValue={20}
                              value={
                                skillChoices.filter(
                                  (skill) => skill.name === key
                                )[0].value
                              }
                              prefix="+ "
                              suffix="%"
                              onKeyDown={() => false}
                              onChange={(val) =>
                                handleAdjustSkillRating(val, key)
                              }
                            />
                            {isSkillChoice(key) &&
                              !userAgent.skills[key][0].label && (
                                <TextInput
                                  label="Type"
                                  onChange={(val) =>
                                    handleSkillChoiceLabel(val, key)
                                  }
                                />
                              )}
                          </Stack>
                        )}
                      </List.Item>
                    ))}
                  </Stack>
                </Checkbox.Group>
              </List>
            </Grid.Col>
            <Grid.Col span={3}>
              <List ta="start" listStyleType="none">
                <Checkbox.Group
                  value={[...skillChoices.map((skill) => skill.name)]}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr
                      .slice(30, skillKeysArr.length - 1)
                      .map((key) => (
                        <List.Item>
                          <Checkbox
                            label={
                              <Tooltip
                                w={250}
                                label={
                                  skillsMasterList.filter(
                                    (item) => item.id === key
                                  )[0].definition
                                }
                                multiline
                                openDelay={500}
                                className={styles.tooltippedElement}
                              >
                                <Text tt="capitalize">
                                  {isSkillChoice(key)
                                    ? userAgent.skills[key][0].label !== ""
                                      ? `${skillKeyLabels(key)} (${
                                          userAgent.skills[key][0].label
                                        })`
                                      : skillKeyLabels(key)
                                    : skillKeyLabels(key)}{" "}
                                  (
                                  {isSkillChoice(key)
                                    ? userAgent.skills[key][0].skill
                                    : userAgent.skills[key]}
                                  %)
                                </Text>
                              </Tooltip>
                            }
                            onKeyDown={() => false}
                            value={key}
                          />
                          {skillChoices
                            .map((skill) => skill.name)
                            .includes(key) && (
                            <Stack>
                              <NumberInput
                                min={20}
                                max={80}
                                step={20}
                                defaultValue={20}
                                value={
                                  skillChoices.filter(
                                    (skill) => skill.name === key
                                  )[0].value
                                }
                                prefix="+ "
                                suffix="%"
                                onChange={(val) =>
                                  handleAdjustSkillRating(val, key)
                                }
                              />
                              {isSkillChoice(key) &&
                                !userAgent.skills[key][0].label && (
                                  <TextInput
                                    label="Type"
                                    onChange={(val) =>
                                      handleSkillChoiceLabel(val, key)
                                    }
                                  />
                                )}
                            </Stack>
                          )}
                        </List.Item>
                      ))}
                  </Stack>
                </Checkbox.Group>
              </List>
            </Grid.Col>
            <Grid.Col span={3}>
              {additionalSkills.length > 0 && (
                <List ta="start" listStyleType="none">
                  <Checkbox.Group
                    value={[...skillChoices.map((skill) => skill.name)]}
                    onChange={handleSelectAdditionalSkill}
                  >
                    <Stack>
                      <Text>Additional Skills:</Text>
                      {additionalSkills.map((addSkill) =>
                        userAgent.skills[addSkill]
                          .slice(1, userAgent.skills[addSkill].length)
                          .map((item) => (
                            <List.Item>
                              <Checkbox
                                label={
                                  <Text tt="capitalize">
                                    {skillKeyLabels(addSkill)} ({item.label}) ({item.skill}
                                    %)
                                  </Text>
                                }
                                value={`${addSkill}.${item.label}`}
                              />
                              {skillChoices
                                .map((skill) => skill.name)
                                .includes(`${addSkill}.${item.label}`) && (
                                <NumberInput
                                  min={20}
                                  max={80}
                                  step={20}
                                  defaultValue={20}
                                  value={
                                    skillChoices.filter(
                                      (skill) =>
                                        skill.name ===
                                        `${addSkill}.${item.label}`
                                    )[0].value
                                  }
                                  prefix="+ "
                                  suffix="%"
                                  onKeyDown={() => false}
                                  onChange={(val) =>
                                    handleAdjustAdditionalSkillRating(
                                      val,
                                      addSkill,
                                      item.label
                                    )
                                  }
                                />
                              )}
                            </List.Item>
                          ))
                      )}
                    </Stack>
                  </Checkbox.Group>
                </List>
              )}
            </Grid.Col>
            <Grid.Col span={12}>
              <Button
                onClick={() => handleAgentOtherSkills(skillChoices)}
                disabled={count !== 0}
                color={"green"}
                fullWidth
              >
                Confirm Bonus Skills
              </Button>
            </Grid.Col>
          </>
        ) : (
          <>
            <Grid.Col span={5}>
              <Stack>
                <Title order={3}>Bonus Skill Package List</Title>
                <ScrollArea h={625}>
                  {skillPackages.map((skillPackage) => {
                    return (
                      <Card
                        withBorder
                        onClick={() => handleSelectSkillPackage(skillPackage)}
                        className={
                          styles.hoverElement +
                          " " +
                          (selectedPackage &&
                          skillPackage.name === selectedPackage.name
                            ? styles.selectedElement
                            : "")
                        }
                      >
                        {skillPackage.name}
                      </Card>
                    );
                  })}
                </ScrollArea>
              </Stack>
            </Grid.Col>
            <Divider orientation="vertical" mx="md" />
            <Grid.Col span={6}>
              <Stack>
                <Title order={3}>Bonus Skill Package Details</Title>
                {selectedPackage && (
                  <Card withBorder ta="start">
                    <Stack>
                      <Title order={3}>{selectedPackage.name}</Title>
                      <List spacing={"xs"}>
                        <Text fw={700} td={"underline"}>
                          These skills get +20%:
                        </Text>
                        {selectedPackage.professionalSkills.map((skill) => (
                          <Tooltip
                            w={250}
                            label={
                              skillsMasterList.filter(
                                (item) => item.id === skill.id
                              )[0].definition
                            }
                            multiline
                            openDelay={500}
                            className={styles.tooltippedElement}
                          >
                            <List.Item>{skill.name}</List.Item>
                          </Tooltip>
                        ))}
                        {selectedPackage.personalSpecialty && (
                          <List.Item>
                            And any {selectedPackage.personalSpecialty} other
                            {selectedPackage.personalSpecialty > 1 &&
                              "s"} as{" "}
                            {selectedPackage.personalSpecialty > 1
                              ? "personal specialties"
                              : "a personal specialty"}
                            .
                          </List.Item>
                        )}
                      </List>
                      <Button
                        onClick={() => setConfirmedPackage(true)}
                        color={"green"}
                      >
                        Confirm Bonus Skills
                      </Button>
                    </Stack>
                  </Card>
                )}
              </Stack>
            </Grid.Col>
          </>
        )
      ) : (
        <>
          <Grid.Col span={12} ta="start">
            <Stack>
              <Title order={2} td="underline">
                Selected Bonus Skill Package
              </Title>
              <Title order={3}>{selectedPackage.name}</Title>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Table withColumnBorders withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th ta="center">Current</Table.Th>
                  <Table.Th ta="center">Bonus</Table.Th>
                  <Table.Th ta="center">Result</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {selectedPackage.professionalSkills
                  .filter((skill) => skill.id !== "special")
                  .map((skill, index) => {
                    return isSkillChoice(skill.id) ? (
                      <Table.Tr justify="start" align="middle">
                        <Tooltip
                          w={250}
                          label={
                            skillsMasterList.filter(
                              (item) => item.id === skill.id
                            )[0].definition
                          }
                          multiline
                          openDelay={500}
                          className={styles.tooltippedElement}
                        >
                          <Table.Td>
                            <Group>
                              {skill.name}
                              <TextInput
                                onChange={(e) =>
                                  handleSkillTypeForSkillPackage(
                                    index,
                                    e.target.value
                                  )
                                }
                                placeholder="Enter type here..."
                              />
                            </Group>
                          </Table.Td>
                        </Tooltip>
                        <Table.Td>0%</Table.Td>
                        <Table.Td>+20%</Table.Td>
                        <Table.Td>20%</Table.Td>
                      </Table.Tr>
                    ) : (
                      <Table.Tr align="middle">
                        <Tooltip
                          w={250}
                          label={
                            skillsMasterList.filter(
                              (item) => item.id === skill.id
                            )[0].definition
                          }
                          multiline
                          openDelay={500}
                          className={styles.tooltippedElement}
                        >
                          <Table.Td ta="start">{skill.name}</Table.Td>
                        </Tooltip>
                        <Table.Td>{userAgent.skills[skill.id]}%</Table.Td>
                        <Table.Td>+20%</Table.Td>
                        <Table.Td>{userAgent.skills[skill.id] + 20}%</Table.Td>
                      </Table.Tr>
                    );
                  })}
                {selectedPackage.professionalSkills.filter(
                  (skill) => skill.id === "special"
                ).length > 0 && (
                  <Table.Tr align="middle">
                    <Table.Td>
                      <Select
                        placeholder={
                          selectedPackage.professionalSkills.filter(
                            (skill) => skill.id === "special"
                          )[0].name
                        }
                        data={
                          selectedPackage.professionalSkills.filter(
                            (skill) => skill.id === "special"
                          )[0].name === "Anthropology or Archeology"
                            ? [
                                {
                                  value: "anthropology",
                                  label: "Anthropology",
                                },
                                { value: "archeology", label: "Archeology" },
                              ]
                            : [
                                { value: "accounting", label: "Accounting" },
                                { value: "forensics", label: "Forensics" },
                                { value: "law", label: "Law" },
                                { value: "pharmacy", label: "Pharmacy" },
                              ]
                        }
                        onChange={(v, o) =>
                          handleSpecialChoiceForSkillPackage(v, o)
                        }
                      />
                    </Table.Td>
                    <Table.Td>{userAgent.skills[special.id]}%</Table.Td>
                    <Table.Td>+20%</Table.Td>
                    <Table.Td>{userAgent.skills[special.id] + 20}%</Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
            {selectedPackage.personalSpecialty && <Divider my="sm" />}
            {selectedPackage.personalSpecialty > 0 && (
              <Stack ta="start">
                <Title order={3}>Personal Specialties</Title>
                <Text>
                  You can select {selectedPackage.personalSpecialty} skill
                  {selectedPackage.personalSpecialty > 1 && "s"} as{" "}
                  {selectedPackage.personalSpecialty > 1
                    ? "personal specialties."
                    : "a personal specialty."}
                </Text>
                {
                  <MultiSelect
                    data={[
                      ...skillsMasterList
                        .filter((item) => !isSkillChoice(item.id))
                        .map((skill) => {
                          return { label: skill.name, value: skill.id };
                        }),
                    ]}
                    onChange={setPersonalSpecialties}
                    value={personalSpecialties}
                    maxValues={selectedPackage.personalSpecialty}
                  />
                }
              </Stack>
            )}
          </Grid.Col>
          <Grid.Col span={12}>
            <Group justify="start">
              <Button
                color="red"
                onClick={() => setConfirmedPackage(!confirmedPackage)}
              >
                Change Package
              </Button>
              <Button
                onClick={handleSpecialChoiceAndSpecialties}
                color={"green"}
              >
                Confirm Package Details
              </Button>
            </Group>
          </Grid.Col>
        </>
      )}
    </Grid>
  );
};
