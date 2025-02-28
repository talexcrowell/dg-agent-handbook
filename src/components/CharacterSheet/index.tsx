import {
  ActionIcon,
  Button,
  Card,
  Center,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  InputLabel,
  Loader,
  Modal,
  NumberInput,
  ScrollArea,
  Stack,
  Table,
  Tabs,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { Personal } from "./pages/Personal";
import { Skills } from "./pages/Skills";
import { Equipment } from "./pages/Equipment";
import { Notes } from "./pages/Notes";
import {
  IconArrowLeft,
  IconBackpack,
  IconFile,
  IconHistory,
  IconList,
  IconNotes,
  IconSettings,
  IconTrash,
  IconUser,
  IconVs,
  IconX,
} from "@tabler/icons-react";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { useEffect, useState } from "react";
import { Settings } from "./pages/Settings";
import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
import { notifications } from "@mantine/notifications";

export const CharacterSheet: React.FC = () => {
  const [viewport] = useViewportContext();
  const [{ currentCharacter, savedCharacters }, actions] =
    useCharacterContext();
  const [character, setCharacter] = useState({});

  // Settings
  const [inPerson, setInPerson] = useState(false);

  // Rolls
  const [value, setValue] = useState([]);
  const [rollType, setRollType] = useState("");
  const [showRollLog, setShowRollLog] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  // Fill potential missing fields
  useEffect(() => {
    let newObj = { ...currentCharacter };
    if (!currentCharacter.equipment) {
      newObj.equipment = [];
    }
    if (!currentCharacter.unnaturalExperiences) {
      newObj.unnaturalExperiences = "";
    }
    if (!currentCharacter.lifeDevelopments) {
      newObj.lifeDevelopments = "";
    }
    if (!currentCharacter.wounds) {
      newObj.wounds = "";
    }
    if (!currentCharacter.otherGear) {
      newObj.otherGear = "";
    }
    if (!currentCharacter.rollLog) {
      newObj.rollLog = [];
    }
    if (!currentCharacter.failedTests) {
      newObj.failedTests = [];
    }
    setCharacter({ ...newObj });
  }, [currentCharacter]);

  const handleUpdateCharacter = (
    key: string,
    val: any,
    secondaryKey?: string
  ) => {
    let characterObj = { ...character };
    switch (key) {
      case "stats":
        characterObj[key][secondaryKey] = val;
        break;
      case "attributes":
        characterObj[key][secondaryKey].current = val;
        break;
      case "bonds":
        characterObj[key][secondaryKey].value = val;
        break;
      case "equipment":
        characterObj[key] = [...characterObj[key], { ...val }];
        break;
      case "equipmentDelete":
        let newArr = characterObj.equipment.filter(
          (item) => item.name !== val.name
        );
        characterObj.equipment = [...newArr];
        break;
      case "failedTests":
        characterObj[key] = [...val];
        break;
      default:
        characterObj[key] = val;
        break;
    }
    setCharacter({ ...characterObj });
    actions.updateCharacters({ ...characterObj });
    localStorage.setItem(
      "currentCharacter",
      JSON.stringify({ ...characterObj })
    );
    localStorage.setItem(
      "savedCharacters",
      JSON.stringify([
        ...savedCharacters.filter((item) => item.id !== characterObj.id),
        { ...characterObj },
      ])
    );
  };

  const handleInPerson = () => {
    if (!inPerson) {
      notifications.show({
        color: "green",
        title: "In Person Mode Activated!",
        message: "Rolling enabled on your character sheet.",
        position: viewport.width > 760 ? "bottom-center" : "top-center",
      });
    } else {
      notifications.show({
        color: "green",
        title: "In Person Mode Deactivated!",
        message: "Rolling disabled on your character sheet.",
        position: viewport.width > 760 ? "bottom-center" : "top-center",
      });
    }
    setInPerson(!inPerson);
  };

  const handleStandardRoll = (skill) => {
    let characterObj = {
      ...character,
    };
    setRollType(skill);

    let playerValue =
      skill === "luck"
        ? 50
        : skill === "san"
        ? character.attributes[skill].current
        : isStat(skill)
        ? character.stats[skill] * 5
        : isSkillChoice(skill)
        ? character.skills[skill][0].skill
        : character.skills[skill];

    let roll: any = new DiceRoll("2d10");
    let rollObj = roll.export(exportFormats.OBJECT);
    let diceRoll = rollObj.rolls[0].rolls.map((item) => {
      if (item.calculationValue === 10) {
        return 0;
      } else {
        return item.calculationValue;
      }
    });

    setValue([...diceRoll]);

    let newRollLog = [
      ...character.rollLog,
      {
        rolledValue: parseInt(diceRoll.join("")),
        skill,
        date: new Date().getTime(),
      },
    ];

    if (
      !isStat(skill) &&
      (skill !== "san" || skill !== "luck") &&
      parseInt(diceRoll.join("")) > playerValue &&
      !characterObj.failedTests.includes(skill)
    ) {
      characterObj.failedTests = [...character.failedTests, skill];
    }

    characterObj.rollLog = [...newRollLog];
    setCharacter({ ...characterObj });
    actions.updateCharacters({ ...characterObj });
    localStorage.setItem(
      "currentCharacter",
      JSON.stringify({ ...characterObj })
    );
    localStorage.setItem(
      "savedCharacters",
      JSON.stringify([
        ...savedCharacters.filter((item) => item.id !== characterObj.id),
        { ...characterObj },
      ])
    );
    toggle();
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

  const isStat = (stat) => {
    switch (stat) {
      case "strength":
      case "constitution":
      case "dexterity":
      case "intelligence":
      case "power":
      case "charisma":
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
      case "san":
        return "Sanity";
      default:
        return key;
    }
  };

  const calculateCurrentRollLanguage = () => {
    let userValue =
      rollType == "luck"
        ? 50
        : rollType == "san"
        ? character.attributes[rollType].current
        : isStat(rollType)
        ? character.stats[rollType] * 5
        : isSkillChoice(rollType)
        ? character.skills[rollType][0].skill
        : character.skills[rollType];
    if (userValue >= parseInt(value.join(""))) {
      if (value[0] === value[1] || parseInt(value.join("")) === 1) {
        return "CRITICAL SUCCESS";
      }
      return "SUCCESS";
    } else {
      if (value[0] === value[1] || parseInt(value.join("")) === 0) {
        return "FUMBLE";
      }
      return "FAILURE";
    }
  };

  const calculateRollLogEntryLanguage = (item) => {
    let userValue =
      item.skill == "luck"
        ? 50
        : item.skill === "san"
        ? character.attributes[item.skill].current
        : isStat(rollType)
        ? character.stats[item.skill] * 5
        : isSkillChoice(item.skill)
        ? character.skills[item.skill][0].skill
        : character.skills[item.skill];

    if (userValue >= item.rolledValue) {
      if (item.rolledValue.toString()[0] === item.rolledValue.toString()[1]) {
        return "CRITICAL SUCCESS";
      }
      return "SUCCESS";
    } else {
      if (item.rolledValue.toString()[0] === item.rolledValue.toString()[1]) {
        return "FUMBLE";
      }
      return "FAILURE";
    }
  };

  const toggleRollLog = () => {
    toggle();
    setTimeout(() => {
      setShowRollLog(!showRollLog);
    }, 3);
  };

  const handleRollLog = () => {
    setShowRollLog(!showRollLog);
    toggle();
  };

  const handleDeleteRollLog = () => {
    handleUpdateCharacter("rollLog", []);
  };

  const handleDateStamp = (time) => {
    let newTime = new Date(time);
    return `${newTime.getHours()}:${
      newTime.getMinutes() < 10
        ? "0" + newTime.getMinutes()
        : newTime.getMinutes()
    }:${
      newTime.getSeconds() < 10
        ? "0" + newTime.getSeconds()
        : newTime.getSeconds()
    }`;
  };

  const handleFailedTests = (val) => {
    handleUpdateCharacter("failedTests", [...val]);
  };

  if (!character?.name) {
    return (
      <Center h={"70vh"}>
        <Stack>
          <Flex justify="center">
            <Loader color="#696969" size={"xl"} />
          </Flex>
          <Text c="dimmed">Loading agent information...</Text>
        </Stack>
      </Center>
    );
  } else {
    return (
      <Tabs
        orientation={viewport.width > 760 ? "vertical" : "horizontal"}
        variant="outline"
        defaultValue="all"
        inverted={viewport.width < 760}
      >
        {viewport.width > 760 && (
          <Tabs.List
            justify={viewport.width > 760 ? "flex-start" : "space-between"}
          >
            <Tabs.Tab value="all" leftSection={<IconFile />}>
              {viewport.width > 600 && "All"}
            </Tabs.Tab>
            <Tabs.Tab value="personal" leftSection={<IconUser />}>
              {viewport.width > 600 && "Personal"}
            </Tabs.Tab>
            <Tabs.Tab value="skills" leftSection={<IconList />}>
              {viewport.width > 600 && "Skills"}
            </Tabs.Tab>
            <Tabs.Tab value="equipment" leftSection={<IconBackpack />}>
              {viewport.width > 600 && "Equipment"}
            </Tabs.Tab>
            <Tabs.Tab value="notes" leftSection={<IconNotes />}>
              {viewport.width > 600 && "Notes"}
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings />}>
              {viewport.width > 600 && "Settings"}
            </Tabs.Tab>
          </Tabs.List>
        )}
        <Tabs.Panel value="all">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
            />
            <Divider />
            <Skills
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
              handleFailedTests={handleFailedTests}
            />
            <Divider />
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
            <Divider />
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="personal">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="skills">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Skills
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
              handleFailedTests={handleFailedTests}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="equipment">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="notes">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="equipment-notes">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"} scrollbars="y">
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
            <Divider />
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <ScrollArea h={viewport.width > 760 ? "92vh" : "85vh"}>
            <Settings
              currentCharacter={character}
              handleInPerson={handleInPerson}
              inPerson={inPerson}
              toggleRollLog={handleRollLog}
              handleFailedTests={handleFailedTests}
            />
          </ScrollArea>
        </Tabs.Panel>
        {viewport.width <= 760 && (
          <Tabs.List
            justify={viewport.width > 760 ? "flex-start" : "space-between"}
          >
            <Tabs.Tab value="all" leftSection={<IconFile />}>
              {viewport.width > 760 && "All"}
            </Tabs.Tab>
            <Tabs.Tab value="personal" leftSection={<IconUser />}>
              {viewport.width > 760 && "Personal"}
            </Tabs.Tab>
            <Tabs.Tab value="skills" leftSection={<IconList />}>
              {viewport.width > 760 && "Skills"}
            </Tabs.Tab>
            <Tabs.Tab value="equipment-notes" leftSection={<IconNotes />}>
              {viewport.width > 760 && "Notes"}
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings />}>
              {viewport.width > 760 && "Settings"}
            </Tabs.Tab>
          </Tabs.List>
        )}
        {viewport.width <= 760 ? (
          <Drawer
            opened={opened}
            withCloseButton={false}
            onClose={close}
            size={showRollLog ? "fullsize" : "sm"}
            position="bottom"
          >
            {showRollLog ? (
              <Stack justify="space-between" h={"93vh"}>
                <Stack>
                  <Title order={3}>Roll Log</Title>
                  <Divider />
                  {character.rollLog.length > 0 && (
                    <ScrollArea h={"70vh"}>
                      <Stack>
                        {character.rollLog.reverse().map((item) => {
                          return (
                            <Card
                              withBorder
                              styles={{
                                root: {
                                  borderColor:
                                    calculateRollLogEntryLanguage(item) ===
                                      "CRITICAL SUCCESS" ||
                                    calculateRollLogEntryLanguage(item) ===
                                      "SUCCESS"
                                      ? "green"
                                      : "red",
                                },
                              }}
                            >
                              <Stack>
                                <Group justify="space-between">
                                  <Text>
                                    {calculateRollLogEntryLanguage(item)}
                                  </Text>
                                  <Text c="dimmed">
                                    {handleDateStamp(item.date)}
                                  </Text>
                                </Group>
                                <Divider />
                                <Group justify="space-between">
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Test</InputLabel>
                                    <Text tt="capitalize">
                                      {skillKeyLabels(item.skill)}
                                    </Text>
                                  </Stack>
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Rating</InputLabel>
                                    <Text tt="capitalize">
                                      {item.skill === "luck"
                                        ? 50
                                        : item.skill == "san"
                                        ? character.attributes[item.skill]
                                            .current
                                        : isStat(item.skill)
                                        ? character.stats[item.skill] * 5
                                        : isSkillChoice(item.skill)
                                        ? character.skills[item.skill][0].skill
                                        : character.skills[item.skill]}
                                    </Text>
                                  </Stack>
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Roll</InputLabel>
                                    <Text>{item.rolledValue}</Text>
                                  </Stack>
                                </Group>
                              </Stack>
                            </Card>
                          );
                        })}
                      </Stack>
                    </ScrollArea>
                  )}
                </Stack>
                {character.rollLog.length === 0 && (
                  <Text c="dimmed" ta="center">
                    There are no entires in your roll log.
                  </Text>
                )}
                <Stack>
                  <Button
                    variant="outline"
                    onClick={handleDeleteRollLog}
                    leftSection={<IconTrash />}
                  >
                    Clear Roll Log
                  </Button>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={toggleRollLog}
                    leftSection={<IconX />}
                  >
                    Close
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack gap="lg">
                <Title
                  order={3}
                  ta="center"
                  bg={
                    calculateCurrentRollLanguage() === "CRITICAL SUCCESS" ||
                    calculateCurrentRollLanguage() === "SUCCESS"
                      ? "green"
                      : "red"
                  }
                  styles={{ root: { borderRadius: "4px" } }}
                  py="sm"
                >
                  {calculateCurrentRollLanguage()}
                </Title>
                <Card>
                  <Stack>
                    <Group justify="space-between">
                      <Text fw={700}>Dice Roll</Text>
                      <Group fw={700}>{value.join("")}</Group>
                    </Group>
                    <Divider label={<IconVs />} />
                    <Stack>
                      <Group justify="space-between">
                        <Text tt="capitalize" fw={700}>
                          {skillKeyLabels(rollType)}
                        </Text>
                        <Text fw={700}>
                          {rollType == "luck"
                            ? 50
                            : rollType == "san"
                            ? character.attributes[rollType].current
                            : isStat(rollType)
                            ? character.stats[rollType] * 5
                            : isSkillChoice(rollType)
                            ? character.skills[rollType][0].skill
                            : character.skills[rollType]}
                        </Text>
                      </Group>
                    </Stack>
                  </Stack>
                </Card>
                <Stack>
                  <Button
                    variant="outline"
                    leftSection={<IconHistory />}
                    onClick={() => setShowRollLog(true)}
                  >
                    View Roll Log
                  </Button>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={toggle}
                    leftSection={<IconX />}
                  >
                    Close
                  </Button>
                </Stack>
              </Stack>
            )}
          </Drawer>
        ) : (
          <Modal
            opened={opened}
            withCloseButton={false}
            onClose={close}
            size={"lg"}
          >
            {showRollLog ? (
              <Stack justify="space-between" h={"75vh"}>
                <Stack>
                  <Title order={3}>Roll Log</Title>
                  <Divider />
                  {character.rollLog.length > 0 && (
                    <ScrollArea.Autosize mah={425}>
                      <Stack>
                        {character.rollLog.reverse().map((item) => {
                          return (
                            <Card
                              withBorder
                              styles={{
                                root: {
                                  borderColor:
                                    calculateRollLogEntryLanguage(item) ===
                                      "CRITICAL SUCCESS" ||
                                    calculateRollLogEntryLanguage(item) ===
                                      "SUCCESS"
                                      ? "green"
                                      : "red",
                                },
                              }}
                            >
                              <Stack>
                                <Group justify="space-between">
                                  <Text fw={700}>
                                    {calculateRollLogEntryLanguage(item)}
                                  </Text>
                                  <Text c="dimmed">
                                    {handleDateStamp(item.date)}
                                  </Text>
                                </Group>
                                <Divider />
                                <Group justify="space-between">
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Test</InputLabel>
                                    <Text tt="capitalize">
                                      {skillKeyLabels(item.skill)}
                                    </Text>
                                  </Stack>
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Rating</InputLabel>
                                    <Text tt="capitalize">
                                      {item.skill == "luck"
                                        ? 50
                                        : item.skill == "san"
                                        ? character.attributes[item.skill]
                                            .current
                                        : isStat(item.skill)
                                        ? character.stats[item.skill] * 5
                                        : isSkillChoice(item.skill)
                                        ? character.skills[item.skill][0].skill
                                        : character.skills[item.skill]}
                                    </Text>
                                  </Stack>
                                  <Stack gap="0">
                                    <InputLabel c="dimmed">Roll</InputLabel>
                                    <Text>{item.rolledValue}</Text>
                                  </Stack>
                                </Group>
                              </Stack>
                            </Card>
                          );
                        })}
                      </Stack>
                    </ScrollArea.Autosize>
                  )}
                </Stack>
                {character.rollLog.length === 0 && (
                  <Text c="dimmed" ta="center">
                    There are no entires in your roll log.
                  </Text>
                )}
                <Stack>
                  <Button
                    variant="outline"
                    onClick={handleDeleteRollLog}
                    leftSection={<IconTrash />}
                  >
                    Clear Roll Log
                  </Button>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={toggleRollLog}
                    leftSection={<IconX />}
                  >
                    Close
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack gap="lg">
                <Title
                  order={3}
                  ta="center"
                  bg={
                    calculateCurrentRollLanguage() === "CRITICAL SUCCESS" ||
                    calculateCurrentRollLanguage() === "SUCCESS"
                      ? "green"
                      : "red"
                  }
                  styles={{ root: { borderRadius: "4px" } }}
                  py="sm"
                >
                  {calculateCurrentRollLanguage()}
                </Title>
                <Card>
                  <Stack>
                    <Group justify="space-between">
                      <Text fw={700}>Dice Roll</Text>
                      <Group fw={700}>{value.join("")}</Group>
                    </Group>
                    <Divider label={<IconVs />} />
                    <Stack>
                      <Group justify="space-between">
                        <Text tt="capitalize" fw={700}>
                          {skillKeyLabels(rollType)}
                        </Text>
                        <Text fw={700}>
                          {rollType == "luck"
                            ? 50
                            : rollType == "san"
                            ? character.attributes[rollType].current
                            : isStat(rollType)
                            ? character.stats[rollType] * 5
                            : isSkillChoice(rollType)
                            ? character.skills[rollType][0].skill
                            : character.skills[rollType]}
                        </Text>
                      </Group>
                    </Stack>
                  </Stack>
                </Card>
                <Stack>
                  <Button
                    variant="outline"
                    leftSection={<IconHistory />}
                    onClick={() => setShowRollLog(true)}
                  >
                    View Roll Log
                  </Button>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={toggle}
                    leftSection={<IconX />}
                  >
                    Close
                  </Button>
                </Stack>
              </Stack>
            )}
          </Modal>
        )}
      </Tabs>
    );
  }
};

export default CharacterSheet;
