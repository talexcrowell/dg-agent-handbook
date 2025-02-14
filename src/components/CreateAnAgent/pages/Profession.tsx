import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Drawer,
  Grid,
  Group,
  List,
  MultiSelect,
  NumberInput,
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
import { IconSearch } from "@tabler/icons-react";

export const Profession: React.FC<{
  handleAgentProfession: (profession: any) => void;
}> = ({ handleAgentProfession }) => {
  const [selectedProfession, setSelectedProfession] = useState({});
  const [selectedSpecial, setSelectedSpecial] = useState("anthropology");
  const [skillDetails, setSkillDetails] = useState<{ [key: string]: any }>([]);
  const [optionalSkillDetails, setOptionalSkillDetails] = useState<{
    [key: string]: any;
  }>([]);
  const [selectedOptionalSkills, setSelectedOptionalSkills] = useState<any[]>(
    []
  );
  const [confirmedProfession, setConfirmedProfession] = useState(false);

  const [customProfessionName, setCustomProfessionName] = useState("");
  const [customBonds, setCustomBonds] = useState(3);
  const [customSkillChoices, setCustomSkillChoices] = useState([]);
  const [customSkillValues, setCustomSkillValues] = useState({});
  const [customSkillPoints, setCustomSkillPoints] = useState(400);
  const [professionsType, setProfessionsType] = useState("Standard");

  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);

  const handleSelectProfession = (profession: any) => {
    setOpened(true);
    setSelectedProfession({ ...profession });
  };

  const confirmProfession = () => {
    setOpened(false);
    selectedProfession.numberOfOptionalSkills > 0 ||
    selectedProfession.professionalSkills.filter(
      (item) => isSkillChoice(item) && item.type === ""
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
    newArr[index.toString()] = {
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
            (optionalSkill) => optionalSkill.id === professionSkill
          )[0]
      )
      .filter((skill) => !isSkillChoice(skill));

    // Handle "Additional" Skills (Crafts, Languages, Sciences, etc.)
    let additionalSkills = Object.keys(skillDetails).map(
      (item) => skillDetails[item]
    );

    let optionalAdditionalSkills = Object.keys(selectedOptionalSkills).map(
      (item) => optionalSkillDetails[item]
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

  const professionCard = (profession) => {
    if (profession.name) {
      return (
        <Card withBorder ta="start">
          <Stack>
            <Text fw={700}>{profession.name}</Text>
            <Text fs="italic">{profession.description}</Text>
            <Group>
              <Text>
                Recommended Stats:{" "}
                {profession.recommendedStats.map((stat: string, i: number) =>
                  i !== profession.recommendedStats.length - 1
                    ? stat + ", "
                    : stat
                )}
              </Text>
            </Group>
            <Group align="top">
              <List spacing={"xs"}>
                <Text td="underline">Professional Skills:</Text>
                {profession.professionalSkills.map((skill) => (
                  <Tooltip
                    w={250}
                    label={
                      skillsMasterList.filter((item) => item.id === skill.id)[0]
                        ? skillsMasterList.filter(
                            (item) => item.id === skill.id
                          )[0].definition
                        : ""
                    }
                    multiline
                    openDelay={500}
                  >
                    {isSkillChoice(skill) ? (
                      <List.Item className={styles.tooltippedElement}>
                        {skill.name} ({skill.type ? skill.type : "Choose One"}){" "}
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
              {profession.optionalSkills.length > 0 && (
                <List spacing={"xs"}>
                  <Text td="underline">
                    Choose {profession.numberOfOptionalSkills} of these:
                  </Text>
                  {profession.optionalSkills.map((skill) => (
                    <Tooltip
                      w={250}
                      label={
                        skillsMasterList.filter(
                          (item) => item.id === skill.id
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
              )}
            </Group>
            <Text fs="italic">Bonds: {profession.bonds}</Text>
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

  const customProfessionSelectData = [
    ...skillsMasterList.map((item) => {
      return { label: item.name, value: item.id };
    }),
  ];

  const handleAddPoints = (skill, val) => {
    let difference = customSkillPoints - val;
    let newObj = { ...customSkillValues };
    newObj[skill] = newObj[skill] + val;
    setCustomSkillValues({ ...newObj });
    setCustomSkillPoints(difference);
  };

  const handleCustomBondChange = (val) => {
    if ((customBonds === 1 && val === 1) || (customBonds === 4 && val === 4)) {
      return;
    } else {
      customBonds > val
        ? setCustomSkillPoints(customSkillPoints + 50)
        : setCustomSkillPoints(customSkillPoints - 50);
      setCustomBonds(val);
    }
  };

  const handleCustomAddSkill = (val) => {
    let newObj = { ...customSkillValues };
    if (val.length > customSkillChoices.length) {
      newObj[[...val][val.length - 1]] =
        defaultSkillValues[[...val][val.length - 1]];
      setCustomSkillValues({ ...newObj });
    } else {
      let removedSkill = Object.keys(customSkillValues).filter(
        (key) => !val.includes(key)
      );
      delete newObj[removedSkill];
      setCustomSkillValues({ ...newObj });
    }
    setCustomSkillChoices([...val]);
  };
  return (
    <Grid>
      <Grid.Col span={12}>
        <Stack ta="start">
          <Title>Profession</Title>
          <Text>
            A profession says a lot about an Agent. It grants a “kit” of
            appropriate skills. Many Delta Green Agents are federal special
            agents and special-forces operators. Special agents are highly
            educated investigators trained in interviewing, weighing evidence,
            and self-defense; special operators have stood up to the most
            intense pressures imaginable and can handle any crisis.{" "}
          </Text>
          <Text>
            But academics are necessary, too: computer and engineering experts,
            historians, anthropologists, physicians, scientists. Someone from
            nearly any profession might stumble into a Delta Green operation and
            prove crucial.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider size={"xl"} />
      </Grid.Col>
      {!confirmedProfession ? (
        <>
          <Grid.Col span={viewport.width > 600 ? 5 : 12}>
            <Stack>
              <Group>
                <Title order={3}>Professions List</Title>
                <SegmentedControl
                  data={["Standard", "Additional", "Custom"]}
                  value={professionsType}
                  onChange={setProfessionsType}
                />
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
                      For each additional bond (to a maximum of 4), reduce
                      professional skill points by 50. For each bond removed (to
                      a minimum of 1), add 50 professional skill points.
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
                        <NumberInput
                          max={4}
                          min={1}
                          label={"Bonds"}
                          value={customBonds}
                          onChange={handleCustomBondChange}
                          clampBehavior="strict"
                        />
                        <MultiSelect
                          label="Professional Skills"
                          placeholder={
                            customSkillChoices.length === 0 &&
                            "Select up to 10 profession skills..."
                          }
                          data={[...customProfessionSelectData]}
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
                                Adj ({customSkillPoints} points left)
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
                                      {skill} (
                                      {isSkillChoice({ id: skill })
                                        ? defaultSkillValues[skill][0].skill
                                        : defaultSkillValues[skill]}
                                      %)
                                    </Table.Td>
                                    <Table.Td>
                                      <NumberInput
                                        prefix="+ "
                                        suffix="%"
                                        value={
                                          customSkillValues[skill] -
                                          defaultSkillValues[skill]
                                        }
                                        onChange={(e) =>
                                          handleAddPoints(skill, e)
                                        }
                                      />
                                    </Table.Td>
                                    <Table.Td ta="center">
                                      {isSkillChoice({ id: skill })
                                        ? customSkillValues[skill][0].skill
                                        : customSkillValues[skill]}
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
                      </Stack>
                    </Card>
                  )}
                </Stack>
              </Stack>
            </Grid.Col>
          )}
        </>
      ) : (
        <>
          {selectedProfession?.professionalSkills.filter(
            (skill) =>
              skill.id === "special" ||
              (isSkillChoice(skill) && skill.type === "")
          ).length > 0 && (
            <>
              <Grid.Col span={viewport.width > 600 ? 5 : 12}>
                {selectedProfession?.professionalSkills.filter(
                  (skill) => skill.id === "special"
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
                  (skill) => isSkillChoice(skill) && skill.type === ""
                ).length > 0 && (
                  <Stack>
                    <Title order={3}>Details of Professional Skills</Title>
                    {selectedProfession?.professionalSkills
                      .filter((skill) => isSkillChoice(skill))
                      .map((skill, index) => (
                        <TextInput
                          label={`${skill.name} (${skill.value}%)`}
                          onChange={(e) =>
                            handleDetail(e.target.value, skill, index)
                          }
                          required
                        />
                      ))}
                  </Stack>
                )}
              </Grid.Col>
              <Divider mx="md" orientation="vertical" />
            </>
          )}
          <Grid.Col span={viewport.width > 600 ? 6 : 12}>
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
                <Stack>
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
                                  index
                                )
                              }
                            />
                          )}
                      </Group>
                    ))}
                </Stack>
              </CheckboxGroup>
            </Stack>
            <Stack mt="lg">
              <Button
                disabled={
                  selectedOptionalSkills.length !==
                    selectedProfession.numberOfOptionalSkills ||
                  skillDetails.filter((skill) => skill.type === "").length > 0
                }
                onClick={confirmAdditionalSkills}
                color={"green"}
              >
                Confirm Professional Skills
              </Button>
              <Button bg="red" onClick={() => setConfirmedProfession(false)}>
                Change Profession
              </Button>
            </Stack>
          </Grid.Col>
        </>
      )}
      {viewport.width < 600 && selectedProfession.name !== "" && (
        <Drawer
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          size="xl"
        >
          {professionCard(selectedProfession)}
        </Drawer>
      )}
    </Grid>
  );
};
