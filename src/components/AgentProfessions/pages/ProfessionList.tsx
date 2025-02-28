import {
  Card,
  Divider,
  Drawer,
  Grid,
  Group,
  InputLabel,
  List,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  additionalProfessions,
  professions,
  skillsMasterList,
} from "../../../data";
import { useState } from "react";
import styles from "../../../Element.module.css";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const ProfessionList = () => {
  const [selectedProfession, setSelectedProfession] = useState({});
  const [professionsType, setProfessionsType] = useState("Standard");
  const [opened, setOpened] = useState(false);
  const [viewport] = useViewportContext();

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

  const professionCard = (profession) => {
    if (profession.name) {
      return viewport.width > 600 ? (
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
            <Stack gap="0">
              <InputLabel c="dimmed">Recommended Stats</InputLabel>
              <Text>
                {profession.recommendedStats.map((stat: string, i: number) =>
                  i !== profession.recommendedStats.length - 1
                    ? stat + ", "
                    : stat
                )}
              </Text>
            </Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Bonds</InputLabel>
              <Text>{profession.bonds}</Text>
            </Stack>
            <Group align="top">
              <Stack gap="0">
                <InputLabel c="dimmed">Professional Skills:</InputLabel>
                <List spacing={"xs"}>
                  {profession.professionalSkills.map((skill) => (
                    <Tooltip
                      w={250}
                      label={
                        skillsMasterList.filter(
                          (item) => item.id === skill.id
                        )[0]
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
                </Stack>
              )}
            </Group>
          </Stack>
        </Card>
      ) : (
        <Stack>
          <Stack gap="0">
            <InputLabel c="dimmed">Name</InputLabel>
            <Text fw={700}>{profession.name}</Text>
          </Stack>
          <Stack gap="0">
            <InputLabel c="dimmed">Description</InputLabel>
            <Text fs="italic">{profession.description}</Text>
          </Stack>
          <Stack gap="0">
            <InputLabel c="dimmed">Recommended Stats</InputLabel>
            <Text>
              {profession.recommendedStats.map((stat: string, i: number) =>
                i !== profession.recommendedStats.length - 1
                  ? stat + ", "
                  : stat
              )}
            </Text>
          </Stack>
          <Stack gap="0">
            <InputLabel c="dimmed">Bonds</InputLabel>
            <Text>{profession.bonds}</Text>
          </Stack>
          <Group align="top">
            <Stack gap="0">
              <InputLabel c="dimmed">Professional Skills:</InputLabel>
              <List spacing={"xs"}>
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
              </Stack>
            )}
          </Group>
        </Stack>
      );
    }
  };

  return (
    <>
      <Grid
        p={viewport.width > 760 ? "md" : 0}
        gutter={viewport.width > 760 ? "md" : "0"}
      >
        <Grid.Col
          span={viewport.width > 760 && professionsType !== "Custom" ? 5 : 12}
        >
          <Stack>
            <Group>
              <Title order={3}>Professions List</Title>
              <SegmentedControl
                data={["Standard", "Additional", "Custom"]}
                value={professionsType}
                onChange={handleProfessionTypes}
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
                  <Title order={3}>Creating a Custom Profession</Title>
                  <Text>
                    If none of the professions suit your Agent, use these
                    guidelines to create a new one.
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
                    professional skill points by 50. For each bond removed (to a
                    minimum of 1), add 50 professional skill points.
                  </Text>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Grid.Col>
        {viewport.width > 760 && professionsType !== "Custom" && (
          <Divider orientation="vertical" mx="md" />
        )}
        {viewport.width > 760 && professionsType !== "Custom" && (
          <Grid.Col span={6}>
            {" "}
            <Stack>
              <Group>
                <Title order={3}>Profession Details</Title>
              </Group>
              <ScrollArea h="84vh">
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
                </Stack>
              </ScrollArea>
            </Stack>
          </Grid.Col>
        )}
      </Grid>
      {viewport.width < 760 && selectedProfession?.name !== "" && (
        <Drawer
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          size="fullsize"
          title='Profession Details'
        >
          {professionCard(selectedProfession)}
        </Drawer>
      )}
    </>
  );
};
