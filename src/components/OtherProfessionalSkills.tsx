import {
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Group,
  List,
  NumberInput,
  ScrollArea,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { defaultSkillValues, skillPackages } from "../data";

export const OtherProfessionalSkills: React.FC<{
  handleProgressValue: (value: number) => void;
  userAgent: any;
}> = ({ handleProgressValue, userAgent }) => {
  const [statSystem, setStatSystem] = useState("custom");
  const [count, setCount] = useState(8);
  const [selectedPackage, setSelectedPackage] = useState();
  const [confirmedPackage, setConfirmedPackage] = useState(false);
  const [skillChoices, setSkillChoices] = useState([]);
  const [skillBoosts, setSkillBoosts] = useState({});

  const handleSelectSkillPackage = (skillPackage: any) => {
    setSelectedPackage({ ...skillPackage });
  };

  const handleSelectSkill = (skill) => {
    if (skillChoices.length > skill.length) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setSkillChoices([...skill]);
  };

  // const handleSelectSkillBoost = (value, index) => {
  //   if(value > skillBoosts[index.toString()]){

  //   } else if(value < skillBoosts[[index.toString()]){

  //   }
  // };

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

  const additionalSkills = skillKeysArr.filter((key) => {
    if (isSkillChoice(key) && userAgent.skills[key].length > 1) {
      return userAgent.skills[key].slice(1, userAgent.skills[key].length);
    }
  });

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
        />
      </Grid.Col>
      {!confirmedPackage ? (
        statSystem === "custom" ? (
          <>
            <Grid.Col span={12}>
              <Text>Select {count} more skills to boost</Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <List ta="start" listStyleType="none">
                <Checkbox.Group
                  value={skillChoices}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr.slice(0, 14).map((key) => (
                      <List.Item>
                        <Checkbox
                          label={
                            <Text tt="capitalize">
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].label !== ""
                                  ? userAgent.skills[key][0].label
                                  : skillKeyLabels(key)
                                : skillKeyLabels(key)}{" "}
                              (
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].skill
                                : userAgent.skills[key]}
                              %)
                            </Text>
                          }
                          value={key}
                        />
                        {skillChoices.includes(key) && (
                          <Select
                            data={[
                              { label: "+20%", value: "20" },
                              { label: "+40%", value: "40" },
                              { label: "+60%", value: "60" },
                              { label: "+80%", value: "80" },
                            ]}
                            defaultValue={"20"}
                          />
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
                  value={skillChoices}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr.slice(15, 29).map((key) => (
                      <List.Item>
                        <Checkbox
                          label={
                            <Text tt="capitalize">
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].label !== ""
                                  ? userAgent.skills[key][0].label
                                  : skillKeyLabels(key)
                                : skillKeyLabels(key)}{" "}
                              (
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].skill
                                : userAgent.skills[key]}
                              %)
                            </Text>
                          }
                          value={key}
                        />
                        {skillChoices.includes(key) && (
                          <Select
                            data={["+20%", "+40%", "+60%", "+80%"]}
                            defaultValue={"+20%"}
                          />
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
                  value={skillChoices}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    {skillKeysArr.slice(30, skillKeysArr.length).map((key) => (
                      <List.Item>
                        <Checkbox
                          label={
                            <Text tt="capitalize">
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].label !== ""
                                  ? userAgent.skills[key][0].label
                                  : skillKeyLabels(key)
                                : skillKeyLabels(key)}{" "}
                              (
                              {isSkillChoice(key)
                                ? userAgent.skills[key][0].skill
                                : userAgent.skills[key]}
                              %)
                            </Text>
                          }
                          value={key}
                        />
                        {skillChoices.includes(key) && (
                          <Select
                            data={["+20%", "+40%", "+60%", "+80%"]}
                            defaultValue={"+20%"}
                          />
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
                  value={skillChoices}
                  onChange={handleSelectSkill}
                >
                  <Stack>
                    <Text>Additional Skills:</Text>
                    {additionalSkills.map((skill) =>
                      userAgent.skills[skill]
                        .slice(1, userAgent.skills[skill].length)
                        .map((item) => (
                          <List.Item>
                            <Checkbox
                              label={
                                <Text tt="capitalize">
                                  {item.label} ({item.skill}
                                  %)
                                </Text>
                              }
                              value={item.label}
                            />
                            {skillChoices.includes(item.label) && (
                              <Select
                                data={["+20%", "+40%", "+60%", "+80%"]}
                                defaultValue={"+20%"}
                              />
                            )}
                          </List.Item>
                        ))
                    )}
                  </Stack>
                </Checkbox.Group>
              </List>
            </Grid.Col>
            <Grid.Col span={12}>
              <Button>Confirm Bonus Skills</Button>
            </Grid.Col>
          </>
        ) : (
          <>
            <Grid.Col span={5}>
              <ScrollArea h={625}>
                {skillPackages.map((skillPackage) => {
                  return (
                    <Card
                      withBorder
                      onClick={() => handleSelectSkillPackage(skillPackage)}
                    >
                      {skillPackage.name}
                    </Card>
                  );
                })}
              </ScrollArea>
            </Grid.Col>
            <Grid.Col span={7}>
              <Stack>
                {selectedPackage && (
                  <Card withBorder ta="start">
                    <Stack>
                      <Text fw={700}>{selectedPackage.name}</Text>
                      <List>
                        <Text td="underline">Professional Skills:</Text>
                        {selectedPackage.professionalSkills.map((skill) => (
                          <List.Item>{skill.name}</List.Item>
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
                      <Button onClick={() => setConfirmedPackage(true)}>
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
        <Grid.Col span={9}>
          {selectedPackage.professionalSkills.filter((skill) =>
            isSkillChoice(skill)
          ).length > 0 && (
            <Stack>
              <Text>Details of Professional Skills</Text>
              {selectedPackage.professionalSkills
                .filter((skill) => isSkillChoice(skill))
                .map((skill, index) => (
                  <TextInput
                    label={skill.name}
                    onChange={(e) => handleDetail(e.target.value, skill, index)}
                  />
                ))}
            </Stack>
          )}
        </Grid.Col>
      )}
    </Grid>
  );
};
