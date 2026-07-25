import {
  Card,
  Divider,
  Drawer,
  Grid,
  InputLabel,
  List,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { skillPackages, skillsMasterList } from "../../../data";
import { useState } from "react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import styles from "../../../Element.module.css";

export const BonusSkillPackagesList = () => {
  const [selectedPackage, setSelectedPackage] = useState({});
  const [opened, setOpened] = useState(false);
  const [viewport] = useViewportContext();
  const handleSelectSkillPackage = (skillPackage: any) => {
    setOpened(true);
    setSelectedPackage({ ...skillPackage });
  };
  return (
    <>
      <Grid
        p={viewport.width > 760 ? "md" : 0}
        gutter={viewport.width > 760 ? "md" : "0"}
      >
        <Grid.Col span={viewport.width > 760 ? 5 : 12} pb="0">
          <Stack>
            <Title order={3}>Bonus Skill Package List</Title>
            <ScrollArea h={viewport.height - 175}>
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
              <Space />
              <Space />
              <Space />
              <Space />
            </ScrollArea>
          </Stack>
        </Grid.Col>
        <Divider orientation="vertical" mx="md" />
        {viewport.width > 760 && (
          <Grid.Col span={6}>
            <Stack>
              <Title order={3}>Bonus Skill Package Details</Title>
              {selectedPackage?.name && (
                <Card withBorder ta="start">
                  <Stack>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Name:</InputLabel>
                      <Text>{selectedPackage.name}</Text>
                    </Stack>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Skill Set:</InputLabel>
                      <List spacing={"xs"}>
                        {selectedPackage?.professionalSkills.map((skill) => (
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
                    </Stack>
                  </Stack>
                </Card>
              )}
              {!selectedPackage?.name && (
                <Card withBorder ta="start">
                  <Text c="dimmed">No Profession Selected...</Text>
                </Card>
              )}
            </Stack>
          </Grid.Col>
        )}
      </Grid>
      {viewport.width < 760 && selectedPackage?.name && (
        <Drawer
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          size="fullsize"
          title="Bonus Skill Package Details"
        >
          <Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Name:</InputLabel>
              <Text>{selectedPackage?.name}</Text>
            </Stack>
            <Stack gap="0">
              <InputLabel c="dimmed">Skill Set:</InputLabel>
              <List spacing={"xs"}>
                {selectedPackage?.professionalSkills.map((skill) => (
                  <Tooltip
                    w={250}
                    label={
                      skillsMasterList.filter((item) => item.id === skill.id)[0]
                        .definition
                    }
                    multiline
                    openDelay={500}
                    className={styles.tooltippedElement}
                  >
                    <List.Item>{skill.name}</List.Item>
                  </Tooltip>
                ))}
                {selectedPackage?.personalSpecialty && (
                  <List.Item>
                    And any {selectedPackage?.personalSpecialty} other
                    {selectedPackage?.personalSpecialty > 1 && "s"} as{" "}
                    {selectedPackage?.personalSpecialty > 1
                      ? "personal specialties"
                      : "a personal specialty"}
                    .
                  </List.Item>
                )}
              </List>
            </Stack>
          </Stack>
        </Drawer>
      )}
    </>
  );
};
