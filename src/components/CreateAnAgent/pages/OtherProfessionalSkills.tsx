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
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { defaultSkillValues, skillPackages, skillsMasterList } from "../../../data";

export const OtherProfessionalSkills: React.FC<{
  handleAgentOtherSkills: (newSkills: any) => void;
  userAgent: any;
}> = ({ handleAgentOtherSkills, userAgent }) => {
  const [statSystem, setStatSystem] = useState("custom");
  const [count, setCount] = useState(8);
  const [selectedPackage, setSelectedPackage] = useState();
  const [confirmedPackage, setConfirmedPackage] = useState(false);
  const [skillChoices, setSkillChoices] = useState<any>([]);

  const handleSelectSkillPackage = (skillPackage: any) => {
    setSelectedPackage({ ...skillPackage });
  };

  const handleSelectSkill = (skill) => {
    if (skillChoices.length > skill.length) {
      setCount(count + 1);
      setSkillChoices([
        ...skillChoices.filter((choice: any) => skill.includes(choice.name)),
      ]);
    } else {
      setCount(count - 1);
      isSkillChoice(skill[skill.length - 1])
        ? setSkillChoices([
            ...skillChoices,
            { name: skill[skill.length - 1], label: "", value: 20 },
          ])
        : setSkillChoices([
            ...skillChoices,
            { name: skill[skill.length - 1], value: 20 },
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
          disabled={confirmedPackage}
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
                  value={[...skillChoices.map((skill) => skill.name)]}
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
                            {isSkillChoice(key) && (
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
                            {isSkillChoice(key) && <TextInput />}
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
                            onKeyDown={() => false}
                            value={key}
                          />
                          {skillChoices
                            .map((skill) => skill.name)
                            .includes(key) && (
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
                              {skillChoices
                                .map((skill) => skill.name)
                                .includes(item.label) && (
                                <NumberInput
                                  min={20}
                                  max={80}
                                  step={20}
                                  defaultValue={20}
                                  value={
                                    skillChoices.filter(
                                      (skill) => skill.name === item.label
                                    )[0].value
                                  }
                                  prefix="+ "
                                  suffix="%"
                                  onKeyDown={() => false}
                                  onChange={(val) =>
                                    handleAdjustSkillRating(val, item.label)
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
              <Button onClick={() => handleAgentOtherSkills(skillChoices)} disabled={count !== 0}>
                Confirm Bonus Skills
              </Button>
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
        <>
          <Grid.Col span={12} ta="start">
            <Title order={2}>{selectedPackage.name}</Title>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack ta="start">
              <Text fw={700}>All of these skills will be boosted by 20%: </Text>
              {selectedPackage.professionalSkills
                .filter((skill) => skill.id !== "special")
                .map((skill) => {
                  return isSkillChoice(skill.id) ? (
                    <Group>
                      <Text>{skill.name}</Text>
                      <Input />
                    </Group>
                  ) : (
                    <Text>{skill.name}</Text>
                  );
                })}
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
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
                      ...skillsMasterList.map((skill) => {
                        return { label: skill.name, value: skill.id };
                      }),
                    ]}
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
              <Button onClick={() => handleProgressValue(4)}>
                Confirm Package Details
              </Button>
            </Group>
          </Grid.Col>
        </>
      )}
    </Grid>
  );
};
