import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  List,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { additionalProfessions, professions } from "../../../data";

export const Profession: React.FC<{
  handleAgentProfession: (profession: any) => void;
}> = ({ handleAgentProfession }) => {
  const [selectedProfession, setSelectedProfession] = useState({});
  const [selectedSpecial, setSelectedSpecial] = useState("anthropology");
  const [skillDetails, setSkillDetails] = useState<{ [key: string]: any }>({});
  const [optionalSkillDetails, setOptionalSkillDetails] = useState<{
    [key: string]: any;
  }>({});
  const [selectedOptionalSkills, setSelectedOptionalSkills] = useState<any[]>(
    []
  );
  const [confirmedProfession, setConfirmedProfession] = useState(false);

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
    console.log(optionalSkillDetails);
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
    console.log(additionalSkills);

    let optionalAdditionalSkills = Object.keys(optionalSkillDetails).map(
      (item) => optionalSkillDetails[item]
    );
    console.log(optionalAdditionalSkills);

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
          <List>
            <Text td="underline">Professional Skills:</Text>
            {profession.professionalSkills.map((skill) =>
              isSkillChoice(skill) ? (
                <List.Item>
                  {skill.name} ({skill.type ? skill.type : "Choose One"}){" "}
                  {skill.value}%
                </List.Item>
              ) : (
                <List.Item>
                  {skill.name} {skill.value}%
                </List.Item>
              )
            )}
          </List>
          {profession.optionalSkills.length > 0 && (
            <List>
              <Text td="underline">
                Choose {profession.numberOfOptionalSkills} of these:
              </Text>
              {profession.optionalSkills.map((skill) =>
                isSkillChoice(skill) ? (
                  <List.Item>
                    {skill.name} (
                    {skill.type !== "" ? skill.type : "Choose One"}){" "}
                    {skill.value}%
                  </List.Item>
                ) : (
                  <List.Item>
                    {skill.name} {skill.value}%
                  </List.Item>
                )
              )}
            </List>
          )}
        </Group>
        <Text fs="italic">Bonds: {profession.bonds}</Text>
        <Button onClick={() => confirmProfession()}>Confirm Profession</Button>
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
            {professions.map((profession) => {
              return (
                <Card
                  withBorder
                  onClick={() => handleSelectProfession(profession)}
                >
                  {profession.name}
                </Card>
              );
            })}
            {additionalProfessions.map((profession) => {
              return (
                <Card
                  withBorder
                  onClick={() => handleSelectProfession(profession)}
                >
                  {profession.name}
                </Card>
              );
            })}
          </Grid.Col>
          <Grid.Col span={7}>
            <Stack>
              {selectedProfession?.name ? (
                professionCard(selectedProfession)
              ) : (
                <Card withBorder ta="start"></Card>
              )}{" "}
            </Stack>
          </Grid.Col>
        </>
      ) : (
        <Grid.Col span={9}>
          <Stack ta="start">
            {selectedProfession?.professionalSkills.filter(
              (skill) => skill.id === "special"
            ).length > 0 && (
              <Stack>
                <Text>Select Specialty</Text>
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
                <Text>Details of Professional Skills</Text>
                {selectedProfession?.professionalSkills
                  .filter((skill) => isSkillChoice(skill))
                  .map((skill, index) => (
                    <TextInput
                      label={skill.name}
                      onChange={(e) =>
                        handleDetail(e.target.value, skill, index)
                      }
                    />
                  ))}
              </Stack>
            )}
            <Stack>
              <Text>
                Select {selectedProfession.numberOfOptionalSkills} Additional
                Professional Skill
                {selectedProfession.numberOfOptionalSkills > 1 ? "s" : ""} to
                add to your Agent's Skill Set.
              </Text>
              <CheckboxGroup
                value={selectedOptionalSkills}
                onChange={handleSetOptionalSkills}
              >
                <Stack>
                  {selectedProfession.optionalSkills
                    .filter((skill) => skill.id !== selectedSpecial)
                    .map((skill) => (
                      <Checkbox
                        value={skill.id}
                        label={`${skill.name} ${skill.value}%`}
                      />
                    ))}
                </Stack>
              </CheckboxGroup>
            </Stack>
            {selectedOptionalSkills
              .map((skillId) => {
                return selectedProfession.optionalSkills.filter(
                  (skill) => skill.id === skillId
                )[0];
              })
              .filter((skill) => isSkillChoice(skill)).length > 0 && (
              <>
                <Text>Details of Professional Skills</Text>
                {selectedOptionalSkills
                  .map((skillId) => {
                    return selectedProfession.optionalSkills.filter(
                      (skill) => skill.id === skillId
                    )[0];
                  })
                  .filter((skill) => isSkillChoice(skill))
                  .map((skill, index) => (
                    <TextInput
                      label={skill.name}
                      onChange={(e) =>
                        handleOptionalDetail(e.target.value, skill, index)
                      }
                    />
                  ))}
              </>
            )}
            <Button
              disabled={
                selectedOptionalSkills.length !==
                selectedProfession.numberOfOptionalSkills
              }
              onClick={confirmAdditionalSkills}
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
      )}
    </Grid>
  );
};
