import {
  ActionIcon,
  ActionIconGroup,
  Anchor,
  Button,
  ButtonGroup,
  Card,
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  Drawer,
  Grid,
  Group,
  InputLabel,
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
  additionalProfessions,
  defaultSkillValues,
  professions,
  skillsMasterList,
} from "../../../data";
import styles from "../../../Element.module.css";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { IconMinus, IconPlus, IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Profession: React.FC<{
  handleAgentProfession: (profession: any) => void;
  userAgent: any;
}> = ({ handleAgentProfession, userAgent }) => {
  const [selectedProfession, setSelectedProfession] = useState(
    [...professions, ...additionalProfessions].filter(
      (profession) => profession.name === userAgent.profession,
    )
      ? [...professions, ...additionalProfessions].filter(
          (profession) => profession.name === userAgent.profession,
        )[0]
      : {
          name: "",
          description: "",
          recommendedStats: [],
          professionalSkills: [],
          optionalSkills: [],
          numberOfOptionalSkills: 0,
          bonds: 0,
        },
  );
  const [selectedSpecial, setSelectedSpecial] = useState("anthropology");
  const [skillDetails, setSkillDetails] = useState<{ [key: string]: any }>([]);
  const [optionalSkillDetails, setOptionalSkillDetails] = useState<{
    [key: string]: any;
  }>([]);
  const [selectedOptionalSkills, setSelectedOptionalSkills] = useState<any[]>(
    [],
  );
  const [confirmedProfession, setConfirmedProfession] = useState(false);

  const [customProfessionName, setCustomProfessionName] = useState("");
  const [customBonds, setCustomBonds] = useState(3);
  const [customSkillChoices, setCustomSkillChoices] = useState([]);
  const [customSkillValues, setCustomSkillValues] = useState({});
  const [customSkillPoints, setCustomSkillPoints] = useState({
    max: 400,
    current: 400,
  });
  const [professionsType, setProfessionsType] = useState("Standard");

  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);

  const handleProfessionTypes = (val) => {
    if (professionsType === "Custom") {
      setSelectedProfession({});
    }
    setProfessionsType(val);
  };

  const handleSelectProfession = (profession: any) => {
    setOpened(true);
    setSelectedProfession({ ...profession });
  };

  const confirmProfession = () => {
    setOpened(false);
    selectedProfession.numberOfOptionalSkills > 0 ||
    selectedProfession.professionalSkills.filter(
      (item) => isSkillChoice(item) && item.type === "",
    ).length > 0
      ? setConfirmedProfession(true)
      : handleAgentProfession(selectedProfession);
  };

  const handleDetail = (e, skill, index) => {
    let newArr = [...skillDetails];
    let skillName;
    switch (skill.id) {
      case "craft":
        skillName = "Craft";
        break;
      case "foreignLanguage":
        skillName = "Foreign Language";
        break;
      case "militaryScience":
        skillName = "Military Science";
        break;
      case "pilot":
        skillName = "Pilot";
        break;
      case "science":
        skillName = "Science";
        break;
    }
    newArr[index.toString()] = {
      type: e,
      name: skillName,
      id: skill.id,
      value: skill.value,
    };
    setSkillDetails([...newArr]);
  };

  const handleOptionalDetail = (e, skill, index) => {
    let newArr = [...optionalSkillDetails];
    let skillName;
    switch (skill.id) {
      case "craft":
        skillName = "Craft";
        break;
      case "foreignLanguage":
        skillName = "Foreign Language";
        break;
      case "militaryScience":
        skillName = "Military Science";
        break;
      case "pilot":
        skillName = "Pilot";
        break;
      case "science":
        skillName = "Science";
        break;
    }
    newArr[index] = {
      type: e,
      name: skillName,
      id: skill.id,
      value: skill.value,
    };
    setOptionalSkillDetails([...newArr]);
  };

  const handleSetOptionalSkills = (skills) => {
    if (skills.length <= selectedProfession.numberOfOptionalSkills) {
      setSelectedOptionalSkills([...skills]);
      [...skills].map((skill, index) =>
        isSkillChoice({ id: skill })
          ? handleOptionalDetail(
              "",
              {
                id: skill,
                value: selectedProfession.optionalSkills.filter(
                  (optSkill) => optSkill.id === skill,
                )[0].value,
              },
              index,
            )
          : null,
      );
    }
  };

  const confirmAdditionalSkills = () => {
    // Copy Profession
    let newObj = { ...selectedProfession };
    // Create Array of Skills from Selected Optional Skill IDs Array
    let skillIdentities = selectedOptionalSkills
      .map(
        (professionSkill) =>
          selectedProfession.optionalSkills.filter(
            (optionalSkill) => optionalSkill.id === professionSkill,
          )[0],
      )
      .filter((skill) => !isSkillChoice(skill));

    // Handle "Additional" Skills (Crafts, Languages, Sciences, etc.)
    let additionalSkills = Object.keys(skillDetails).map(
      (item) => skillDetails[item],
    );

    let optionalAdditionalSkills = Object.keys(selectedOptionalSkills).map(
      (item) => optionalSkillDetails[item],
    );

    // Finalized and Organized Skills Object
    newObj.professionalSkills = [
      ...newObj.professionalSkills.map((skill) => {
        if (skill.id === "special") {
          return selectedSpecial == "anthropology"
            ? { id: "anthropology", name: "Anthropology", value: 50 }
            : { id: "archeology", name: "Archeology", value: 50 };
        } else {
          return skill;
        }
      }),
      ...skillIdentities,
      ...additionalSkills,
      ...optionalAdditionalSkills.filter((skill) => skill !== undefined),
    ].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    handleAgentProfession({ ...newObj });
  };

  const translateStat = (stat) => {
    switch (stat) {
      case "STR":
        return "Strength";
      case "CON":
        return "Constitution";
      case "POW":
        return "Power";
      case "INT":
        return "Intelligence";
      case "CHA":
        return "Charisma";
      case "DEX":
        return "Dexterity";
    }
  };

  const professionCard = (profession) => {
    if (profession?.name) {
      return (
        <Card withBorder ta="start">
          <Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Name</InputLabel>
              <Text fw={700}>{profession.name}</Text>
            </Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Description</InputLabel>
              <Text fs="italic">{profession.description}</Text>
            </Stack>
            <Group>
              <Stack gap="0" w="50%">
                <InputLabel c="dimmed">Recommended Stats</InputLabel>
                <Text>
                  {profession.recommendedStats.map((stat: string, i: number) =>
                    i !== profession.recommendedStats.length - 1
                      ? translateStat(stat) + ", "
                      : translateStat(stat),
                  )}
                </Text>
              </Stack>
              <Stack gap="0">
                <InputLabel c="dimmed">Bonds</InputLabel>
                <Text>{profession.bonds}</Text>
              </Stack>
            </Group>
            <Group align="top">
              <Stack gap="0">
                <InputLabel c="dimmed">Professional Skills:</InputLabel>
                <List spacing={"xs"}>
                  {profession.professionalSkills.map((skill) => (
                    <Tooltip
                      w={250}
                      label={
                        skillsMasterList.filter(
                          (item) => item.id === skill.id,
                        )[0]
                          ? skillsMasterList.filter(
                              (item) => item.id === skill.id,
                            )[0].definition
                          : ""
                      }
                      multiline
                      openDelay={500}
                    >
                      {isSkillChoice(skill) ? (
                        <List.Item className={styles.tooltippedElement}>
                          {skill.name} ({skill.type ? skill.type : "Choose One"}
                          ) {skill.value}%
                        </List.Item>
                      ) : (
                        <List.Item className={styles.tooltippedElement}>
                          {skill.name} {skill.value}%
                        </List.Item>
                      )}
                    </Tooltip>
                  ))}
                </List>
              </Stack>
              {profession.optionalSkills.length > 0 && (
                <Stack gap="0">
                  <InputLabel c="dimmed">
                    Choose {profession.numberOfOptionalSkills} of these skills:
                  </InputLabel>
                  <List spacing={"xs"}>
                    {profession.optionalSkills.map((skill) => (
                      <Tooltip
                        w={250}
                        label={
                          skillsMasterList.filter(
                            (item) => item.id === skill.id,
                          )[0].definition
                        }
                        multiline
                        openDelay={500}
                      >
                        {isSkillChoice(skill) ? (
                          <List.Item className={styles.tooltippedElement}>
                            {skill.name} (
                            {skill.type !== "" ? skill.type : "Choose One"}){" "}
                            {skill.value}%
                          </List.Item>
                        ) : (
                          <List.Item className={styles.tooltippedElement}>
                            {skill.name} {skill.value}%
                          </List.Item>
                        )}
                      </Tooltip>
                    ))}
                  </List>
                </Stack>
              )}
            </Group>
            <Button onClick={() => confirmProfession()} bg={"green"}>
              Confirm Profession
            </Button>
          </Stack>
        </Card>
      );
    }
  };

  const isSkillChoice = (skill) => {
    switch (skill.id) {
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

  const customProfessionSelectData = [
    ...skillsMasterList.map((item) => {
      return { label: item.name, value: item.id };
    }),
  ];

  const handleIncrementBond = () => {
    let newObj = { ...customSkillPoints };
    if (customBonds >= 1 && customBonds < 4) {
      setCustomBonds(customBonds + 1);
      setCustomSkillPoints({
        current: newObj.current - 50,
        max: newObj.max - 50,
      });
    }
  };
  const handleDecrementBond = () => {
    let newObj = { ...customSkillPoints };
    if (customBonds > 1 && customBonds <= 4) {
      setCustomBonds(customBonds - 1);
      setCustomSkillPoints({
        current: newObj.current + 50,
        max: newObj.max + 50,
      });
    }
  };

  const handleCustomAddSkill = (val) => {
    let newObj = { ...customSkillValues };
    if (val.length > customSkillChoices.length) {
      newObj[[...val][val.length - 1]] = 0;

      setCustomSkillValues({ ...newObj });
    } else {
      let removedSkill = Object.keys(customSkillValues).filter(
        (key) => !val.includes(key),
      );
      let removedSkillValue = customSkillValues[removedSkill];
      let difference = customSkillPoints.current + removedSkillValue;
      delete newObj[removedSkill];
      setCustomSkillPoints({ max: customSkillPoints.max, current: difference });
      setCustomSkillValues({ ...newObj });
    }
    setCustomSkillChoices([...val]);
  };

  const handleAddPoints = (skill) => {
    if (
      5 +
        (isSkillChoice({ id: skill })
          ? defaultSkillValues[skill][0].skill
          : defaultSkillValues[skill]) >
        60 ||
      5 < 0 ||
      customSkillPoints.current + (customSkillValues[skill] - 5) < 0
    ) {
      return;
    }

    let newObj = { ...customSkillValues };
    let pointObj = { ...customSkillPoints };
    let difference = newObj[skill] + 5;
    newObj[skill] = 5;
    setCustomSkillValues(newObj);
    setCustomSkillPoints({
      ...pointObj,
      current: pointObj.current + difference,
    });
  };
  const handleSubtractPoints = (skill) => {
    if (
      5 +
        (isSkillChoice({ id: skill })
          ? defaultSkillValues[skill][0].skill
          : defaultSkillValues[skill]) >
        60
    ) {
      return;
    }

    let newObj = { ...customSkillValues };
    let pointObj = { ...customSkillPoints };
    let difference = newObj[skill] - 5;
    newObj[skill] = 5;
    setCustomSkillValues(newObj);
    setCustomSkillPoints({
      ...pointObj,
      current: pointObj.current + difference,
    });
  };

  const handleCustomProfession = () => {
    let professionalSkills = customSkillChoices.map((skill) => {
      if (isSkillChoice({ id: skill })) {
        return {
          id: skill,
          name: skillKeyLabels(skill),
          value: customSkillValues[skill],
          type: "",
        };
      } else {
        return {
          id: skill,
          name: skillKeyLabels(skill),
          value: customSkillValues[skill] + defaultSkillValues[skill],
        };
      }
    });
    let newObj = {
      name: customProfessionName,
      professionalSkills: [...professionalSkills],
      bonds: customBonds,
      optionalSkills: [],
      numberOfOptionalSkills: 0,
    };
    setSelectedProfession({ ...newObj });

    newObj?.professionalSkills.filter(
      (item) => isSkillChoice(item) && item.type === "",
    ).length > 0
      ? setConfirmedProfession(true)
      : handleAgentProfession({ ...newObj });
  };

  const validateProfessionSkills = () => {
    return skillDetails.filter((skill) => skill.type === "").length > 0;
  };

  return (
    <Grid>
      <Grid.Col span={12}>
        <Stack ta="start">
          <Title>Profession</Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor
              component={Link}
              to="/training/professions/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professions
            </Anchor>{" "}
            list in Agent Professions.
          </Text>
        </Stack>
      </Grid.Col>
      {!confirmedProfession ? (
        <>
          <Grid.Col>
            <SegmentedControl
              data={["Standard", "Additional", "Custom"]}
              value={professionsType}
              onChange={handleProfessionTypes}
              fullWidth
            />
          </Grid.Col>
          <Grid.Col span={viewport.width > 600 ? 5 : 12}>
            <Stack>
              <Group>
                <Title order={3}>Professions List</Title>
              </Group>
              <Stack gap="0">
                {professionsType === "Standard" &&
                  professions.map((profession) => {
                    return (
                      <Card
                        withBorder
                        onClick={() => handleSelectProfession(profession)}
                        className={
                          styles.hoverElement +
                          " " +
                          (selectedProfession &&
                          selectedProfession.name === profession.name
                            ? styles.selectedElement
                            : "")
                        }
                      >
                        {profession.name}
                      </Card>
                    );
                  })}
                {professionsType === "Additional" &&
                  additionalProfessions.map((profession) => {
                    return (
                      <Card
                        withBorder
                        onClick={() => handleSelectProfession(profession)}
                        className={
                          styles.hoverElement +
                          " " +
                          (selectedProfession &&
                          selectedProfession.name === profession.name
                            ? styles.selectedElement
                            : "")
                        }
                      >
                        {profession.name}
                      </Card>
                    );
                  })}
                {professionsType === "Custom" && (
                  <Stack>
                    <Text fw={700}>Create a Custom Profession</Text>
                    <Text>
                      If none of the professions suit your Agent, use these
                      guidelines to build a new one.
                    </Text>
                    <Text>
                      For your professional skills, pick 10 professional skills
                      and divide 400 skill points between them. Add those points
                      to each skill’s starting level.
                    </Text>
                    <Text>
                      Professional skills should be 30% to 50%. No professional
                      skill may be higher than 60%.
                    </Text>
                    <Text>
                      For each additional bond (to a maximum of 4), the
                      professional skill points will reduce by 50. For each bond
                      removed (to a minimum of 1), the professional skill points
                      will increase by 50.
                    </Text>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Grid.Col>
          <Divider orientation="vertical" mx="sm" />
          {viewport.width > 600 && (
            <Grid.Col span={6}>
              <Stack>
                <Group>
                  <Title order={3}>Profession Details</Title>
                </Group>
                <ScrollArea h={"83vh"}>
                  <Stack>
                    {selectedProfession?.name &&
                      professionsType !== "Custom" &&
                      professionCard(selectedProfession)}
                    {professionsType !== "Custom" &&
                      !selectedProfession?.name && (
                        <Card withBorder ta="start">
                          <Text c="dimmed">No Profession Selected...</Text>
                        </Card>
                      )}
                    {professionsType === "Custom" && (
                      <Card withBorder ta="start">
                        <Stack>
                          <TextInput
                            label="Profession Name"
                            placeholder={"Enter profession name..."}
                            onChange={(e) =>
                              setCustomProfessionName(e.currentTarget.value)
                            }
                            value={customProfessionName}
                          />
                          <Stack gap="xs">
                            <InputLabel>Number of Bonds</InputLabel>
                            <Group justify="space-between" pl="sm">
                              <Text>{customBonds}</Text>
                              <ActionIconGroup>
                                <ActionIcon
                                  variant="outline"
                                  onClick={handleIncrementBond}
                                >
                                  <IconPlus />
                                </ActionIcon>
                                <ActionIcon
                                  variant="outline"
                                  onClick={handleDecrementBond}
                                >
                                  <IconMinus />
                                </ActionIcon>
                              </ActionIconGroup>
                            </Group>
                          </Stack>
                          <MultiSelect
                            label="Professional Skills"
                            placeholder={
                              customSkillChoices.length === 0 &&
                              "Select up to 10 professional skills..."
                            }
                            data={[...customProfessionSelectData].slice(
                              0,
                              customProfessionSelectData.length - 1,
                            )}
                            searchable
                            rightSection={<IconSearch />}
                            onChange={handleCustomAddSkill}
                            value={customSkillChoices}
                            maxValues={10}
                          />
                          <Table withTableBorder withColumnBorders>
                            <Table.Thead>
                              <Table.Tr>
                                <Table.Th>Skill</Table.Th>
                                <Table.Th>
                                  Adj ({customSkillPoints.current} points left)
                                </Table.Th>
                                <Table.Th>Rating</Table.Th>
                              </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                              {customSkillChoices.length > 0 ? (
                                customSkillChoices.map((skill) => {
                                  return (
                                    <Table.Tr>
                                      <Table.Td tt="capitalize">
                                        {skillKeyLabels(skill)} (
                                        {isSkillChoice({ id: skill })
                                          ? defaultSkillValues[skill][0].skill
                                          : defaultSkillValues[skill]}
                                        %)
                                      </Table.Td>
                                      <Table.Td>
                                        <Group justify="space-between" pl="sm">
                                          <Text>
                                            + {customSkillValues[skill]}%
                                          </Text>
                                          <ActionIconGroup>
                                            <ActionIcon
                                              variant="outline"
                                              onClick={() =>
                                                handleAddPoints(skill)
                                              }
                                            >
                                              <IconPlus />
                                            </ActionIcon>
                                            <ActionIcon
                                              variant="outline"
                                              onClick={() =>
                                                handleSubtractPoints(skill)
                                              }
                                            >
                                              <IconMinus />
                                            </ActionIcon>
                                          </ActionIconGroup>
                                        </Group>
                                      </Table.Td>
                                      <Table.Td ta="center">
                                        {customSkillValues[skill] +
                                          (isSkillChoice({ id: skill })
                                            ? defaultSkillValues[skill][0].skill
                                            : defaultSkillValues[skill])}
                                        %
                                      </Table.Td>
                                    </Table.Tr>
                                  );
                                })
                              ) : (
                                <Table.Tr>
                                  <Table.Td>
                                    <Text c="dimmed">
                                      Selected skills will appear here
                                    </Text>
                                  </Table.Td>
                                </Table.Tr>
                              )}
                            </Table.Tbody>
                          </Table>
                          <Button
                            color="green"
                            disabled={
                              !customProfessionName ||
                              customSkillPoints.current !== 0 ||
                              customSkillChoices.length !== 10
                            }
                            onClick={handleCustomProfession}
                          >
                            Confirm Custom Profession
                          </Button>
                        </Stack>
                      </Card>
                    )}
                  </Stack>
                </ScrollArea>
              </Stack>
            </Grid.Col>
          )}
        </>
      ) : (
        <>
          <Grid.Col span={12}>
            {selectedProfession?.professionalSkills.filter(
              (skill) => skill.id === "special",
            ).length > 0 && (
              <Stack mb="lg">
                <Title order={3}>Select Specialty</Title>
                <Select
                  data={[
                    { value: "anthropology", label: "Anthropology 50%" },
                    { value: "archeology", label: "Archeology 50%" },
                  ]}
                  defaultValue={selectedSpecial}
                  onChange={setSelectedSpecial}
                />
              </Stack>
            )}
            {selectedProfession?.professionalSkills.filter(
              (skill) => isSkillChoice(skill) && skill.type === "",
            ).length > 0 && (
              <Stack>
                <Title order={3}>Details of Professional Skills</Title>
                {selectedProfession?.professionalSkills
                  .filter((skill) => isSkillChoice(skill) && skill.type === "")
                  .map((skill, index) => (
                    <TextInput
                      tt="capitalize"
                      label={`${skill.name} (${skill.value}%)`}
                      onChange={(e) =>
                        handleDetail(e.target.value, skill, index)
                      }
                      required
                      maw={400}
                    />
                  ))}
                {selectedProfession.numberOfOptionalSkills > 0 && <Divider />}
              </Stack>
            )}
            {selectedProfession.numberOfOptionalSkills > 0 && (
              <Stack>
                <Title order={3}>
                  Select {selectedProfession.numberOfOptionalSkills} Additional
                  Professional Skill
                  {selectedProfession.numberOfOptionalSkills > 1 ? "s" : ""}
                </Title>
                <CheckboxGroup
                  value={selectedOptionalSkills}
                  onChange={handleSetOptionalSkills}
                >
                  <Table
                    withTableBorder
                    withRowBorders
                    withColumnBorders
                    highlightOnHover
                  >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Skill</Table.Th>
                        <Table.Th>Type</Table.Th>
                        <Table.Th>Value</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody ta="center">
                      {" "}
                      {selectedProfession.optionalSkills
                        .filter((skill) => skill.id !== selectedSpecial)
                        .map((skill, index) => (
                          <Table.Tr>
                            <Table.Td>
                              <Checkbox value={skill.id} label={skill.name} />
                            </Table.Td>
                            <Table.Td>
                              {isSkillChoice(skill) ? (
                                <TextInput
                                  placeholder="Enter Type Here..."
                                  onChange={(e) =>
                                    handleOptionalDetail(
                                      e.target.value,
                                      skill,
                                      selectedOptionalSkills.indexOf(skill.id),
                                    )
                                  }
                                />
                              ) : (
                                "-"
                              )}
                            </Table.Td>
                            <Table.Td>{skill.value}%</Table.Td>
                          </Table.Tr>
                        ))}
                    </Table.Tbody>
                  </Table>
                  {/* <Stack>
                    {selectedProfession.optionalSkills
                      .filter((skill) => skill.id !== selectedSpecial)
                      .map((skill, index) => (
                        <Group>
                          <Checkbox
                            value={skill.id}
                            label={`${skill.name} ${skill.value}%`}
                          />
                          {isSkillChoice(skill) &&
                            selectedOptionalSkills.includes(skill.id) && (
                              <TextInput
                                placeholder="Enter Type Here..."
                                onChange={(e) =>
                                  handleOptionalDetail(
                                    e.target.value,
                                    skill,
                                    selectedOptionalSkills.indexOf(skill.id)
                                  )
                                }
                              />
                            )}
                        </Group>
                      ))}
                  </Stack> */}
                </CheckboxGroup>
              </Stack>
            )}
          </Grid.Col>
          <Grid.Col>
            <Center>
              <Stack mt="lg" w={325}>
                <Button
                  disabled={
                    validateProfessionSkills() ||
                    selectedOptionalSkills.length !==
                      selectedProfession.numberOfOptionalSkills
                  }
                  onClick={confirmAdditionalSkills}
                  variant="outline"
                >
                  Confirm Professional Skills
                </Button>
                <Button
                  color="red"
                  variant="outline"
                  onClick={() => setConfirmedProfession(false)}
                >
                  Change Profession
                </Button>
              </Stack>
            </Center>
          </Grid.Col>
        </>
      )}
      {viewport.width < 600 && selectedProfession?.name !== "" && (
        <Drawer
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          size="fullscreen"
          title={<Title order={4}>{selectedProfession?.name}</Title>}
        >
          <Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Description</InputLabel>
              <Text fs="italic">{selectedProfession?.description}</Text>
            </Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Recommended Stats</InputLabel>
              <Text>
                {selectedProfession?.recommendedStats.map(
                  (stat: string, i: number) =>
                    i !== selectedProfession?.recommendedStats.length - 1
                      ? stat + ", "
                      : stat,
                )}
              </Text>
            </Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Bonds</InputLabel>
              <Text>{selectedProfession?.bonds}</Text>
            </Stack>
            <Group align="top">
              <Stack gap="0">
                <InputLabel c="dimmed">Professional Skills:</InputLabel>
                <List spacing={"xs"}>
                  {selectedProfession?.professionalSkills.map((skill) => (
                    <Tooltip
                      w={250}
                      label={
                        skillsMasterList.filter(
                          (item) => item.id === skill.id,
                        )[0]
                          ? skillsMasterList.filter(
                              (item) => item.id === skill.id,
                            )[0].definition
                          : ""
                      }
                      multiline
                      openDelay={500}
                    >
                      {isSkillChoice(skill) ? (
                        <List.Item className={styles.tooltippedElement}>
                          <Group justify="space-between">
                            <Text>
                              {skill.name} (
                              {skill.type ? skill.type : "Choose One"})
                            </Text>
                            <Text>{skill.value}%</Text>
                          </Group>
                        </List.Item>
                      ) : (
                        <List.Item className={styles.tooltippedElement}>
                          <Group justify="space-between">
                            <Text>{skill.name}</Text>{" "}
                            <Text>{skill.value}%</Text>
                          </Group>
                        </List.Item>
                      )}
                    </Tooltip>
                  ))}
                </List>
              </Stack>
              {selectedProfession?.optionalSkills.length > 0 && (
                <Stack gap="0">
                  <InputLabel c="dimmed">
                    Choose {selectedProfession?.numberOfOptionalSkills} of these
                    skills:
                  </InputLabel>
                  <List spacing={"xs"}>
                    {selectedProfession?.optionalSkills.map((skill) => (
                      <Tooltip
                        w={250}
                        label={
                          skillsMasterList.filter(
                            (item) => item.id === skill.id,
                          )[0].definition
                        }
                        multiline
                        openDelay={500}
                      >
                        {isSkillChoice(skill) ? (
                          <List.Item className={styles.tooltippedElement}>
                            <Group justify="space-between">
                              <Text>
                                {skill.name} (
                                {skill.type ? skill.type : "Choose One"})
                              </Text>
                              <Text>{skill.value}%</Text>
                            </Group>
                          </List.Item>
                        ) : (
                          <List.Item className={styles.tooltippedElement}>
                            <Group justify="space-between">
                              <Text>{skill.name}</Text>{" "}
                              <Text>{skill.value}%</Text>
                            </Group>
                          </List.Item>
                        )}
                      </Tooltip>
                    ))}
                  </List>
                </Stack>
              )}
            </Group>
            <Button onClick={() => confirmProfession()} bg={"green"}>
              Confirm Profession
            </Button>
          </Stack>
        </Drawer>
      )}
    </Grid>
  );
};
