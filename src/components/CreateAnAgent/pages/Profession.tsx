import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  List,
  SegmentedControl,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import {
  additionalProfessions,
  professions,
  skillsMasterList,
} from "../../../data";
import styles from "../../../Element.module.css";

export const Profession: React.FC<{
  handleAgentProfession: (profession: any) => void;
}> = ({ handleAgentProfession }) => {
  const [selectedProfession, setSelectedProfession] = useState({});
  const [selectedSpecial, setSelectedSpecial] = useState("anthropology");
  const [skillDetails, setSkillDetails] = useState<{ [key: string]: any }>([]);
  const [optionalSkillDetails, setOptionalSkillDetails] = useState<{
    [key: string]: any;
  }>({});
  const [selectedOptionalSkills, setSelectedOptionalSkills] = useState<any[]>(
    []
  );
  const [confirmedProfession, setConfirmedProfession] = useState(false);
  const [professionsType, setProfessionsType] = useState("Standard");

  const handleSelectProfession = (profession: any) => {
    setSelectedProfession({ ...profession });
  };

  const confirmProfession = () => {
    selectedProfession.numberOfOptionalSkills > 0
      ? setConfirmedProfession(true)
      : handleAgentProfession(selectedProfession);
  };

  const handleDetail = (e, skill, index) => {
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
    skillDetails[index.toString()] = {
      type: e,
      name: skillName,
      id: skill.id,
      value: skill.value,
    };
  };

  const handleOptionalDetail = (e, skill, index) => {
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
    optionalSkillDetails[index.toString()] = {
      type: e,
      name: skillName,
      id: skill.id,
      value: skill.value,
    };
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

    let optionalAdditionalSkills = Object.keys(optionalSkillDetails).map(
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
      ...optionalAdditionalSkills,
    ].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

    handleAgentProfession({ ...newObj });
  };

  const professionCard = (profession) => (
    <Card withBorder ta="start">
      <Stack>
        <Text fw={700}>{profession.name}</Text>
        <Text fs="italic">{profession.description}</Text>
        <Group>
          <Text>
            Recommended Stats:{" "}
            {profession.recommendedStats.map((stat: string, i: number) =>
              i !== profession.recommendedStats.length - 1 ? stat + ", " : stat
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
                    .definition
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
                    skillsMasterList.filter((item) => item.id === skill.id)[0]
                      .definition
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
            intense pressures imag- inable and can handle any crisis.{" "}
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
          <Grid.Col span={5}>
            <Stack>
              <Group>
                <Title order={3}>Professions List</Title>
                <SegmentedControl
                  data={["Standard", "Additional"]}
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
              </Stack>
            </Stack>
          </Grid.Col>
          <Divider orientation="vertical" mx="sm" />
          <Grid.Col span={6}>
            <Stack>
              <Group>
                <Title order={3}>Profession Details</Title>
              </Group>
              <Stack>
                {selectedProfession?.name ? (
                  professionCard(selectedProfession)
                ) : (
                  <Card withBorder ta="start">
                    <Text c="dimmed">No Profession Selected...</Text>
                  </Card>
                )}{" "}
              </Stack>
            </Stack>
          </Grid.Col>
        </>
      ) : (
        <>
          {selectedProfession?.professionalSkills.filter(
            (skill) =>
              skill.id === "special" ||
              (isSkillChoice(skill) && skill.type === "")
          ).length > 0 && (
            <>
              <Grid.Col span={5}>
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
                        />
                      ))}
                  </Stack>
                )}
              </Grid.Col>
              <Divider mx="md" orientation="vertical" />
            </>
          )}
          <Grid.Col span={6}>
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
                    .map((skill) => (
                      <Group>
                        <Checkbox
                          value={skill.id}
                          label={`${skill.name} ${skill.value}%`}
                        />
                        {isSkillChoice(skill) &&
                          selectedOptionalSkills.includes(skill.id) && (
                            <TextInput placeholder="Enter Type Here..." />
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
                  selectedProfession?.professionalSkills.filter(
                    (skill) => isSkillChoice(skill) && skill.type === ""
                  ).length !== skillDetails.length
                }
                onClick={confirmAdditionalSkills}
                color={"green"}
              >
                Confirm {selectedProfession.numberOfOptionalSkills} Additional
                Professional Skill
                {selectedProfession.numberOfOptionalSkills > 1 ? "s" : ""}
              </Button>
              <Button bg="red" onClick={() => setConfirmedProfession(false)}>
                Change Profession
              </Button>
            </Stack>
          </Grid.Col>
        </>
      )}
    </Grid>
  );
};
