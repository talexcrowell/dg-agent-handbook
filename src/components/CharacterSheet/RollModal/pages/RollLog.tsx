import {
  Button,
  Card,
  Center,
  Divider,
  Group,
  InputLabel,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconTrash, IconVs, IconX } from "@tabler/icons-react";

export const RollLog = ({
  character,
  rollType,
  toggleRollLogTimed,
  handleDeleteRollLog,
}) => {
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

  const calculateRollLogEntryLanguage = (item) => {
    let userValue =
      item.skill == "luck"
        ? 50
        : item.skill === "san"
          ? character.attributes[item.skill].current
          : isStat(rollType)
            ? character.stats[item.skill] * 5
            : isSkillChoice(
                  rollType.includes(".") ? rollType.split(".")[0] : rollType,
                )
              ? rollType.includes(".")
                ? character.skills[rollType.split(".")[0]].filter(
                    (subskill) => {
                      return subskill.label === rollType.split(".")[1];
                    },
                  )[0]?.skill
                : character.skills[rollType][0].skill
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

  return (
    <Stack justify="space-between">
      <Title order={3}>Roll Log</Title>
      <Divider />
      <ScrollArea h={"75vh"}>
        <Stack align="center">
          {character.rollLog.length > 0 &&
            character.rollLog.reverse().map((item) => {
              return (
                <Card
                  withBorder
                  styles={{
                    root: {
                      borderColor:
                        calculateRollLogEntryLanguage(item) ===
                          "CRITICAL SUCCESS" ||
                        calculateRollLogEntryLanguage(item) === "SUCCESS"
                          ? "green"
                          : "red",
                    },
                  }}
                  w={'100%'}
                  maw='350'
                >
                  <Stack>
                    <Text tt="capitalize" ta="center">
                      {skillKeyLabels(item.skill)} {item?.label}
                    </Text>
                    <Divider />

                    <SimpleGrid cols={3}>
                      <Stack gap="0">
                        <InputLabel c="dimmed">Rating</InputLabel>
                        <Text tt="capitalize" size="xl">
                          {item.skill == "luck"
                            ? 50
                            : item.skill == "san"
                              ? character.attributes[item.skill].current
                              : isStat(item.skill)
                                ? character.stats[item.skill] * 5
                                : isSkillChoice(item.skill)
                                  ? character.skills[item.skill][0].skill
                                  : character.skills[item.skill]}
                        </Text>
                      </Stack>
                      <Center>
                        <IconVs size={32} />
                      </Center>
                      <Stack gap="0" ta="end">
                        <InputLabel c="dimmed">Roll</InputLabel>
                        <Text size="xl">{item.rolledValue}</Text>
                      </Stack>
                    </SimpleGrid>

                    <Divider />
                    <Text fw={700} ta="center">
                      {calculateRollLogEntryLanguage(item)}
                    </Text>
                    {item.damage && (
                      <>
                        <Divider />
                        <Group justify="space-between">
                          <InputLabel c="dimmed">Damage Result</InputLabel>
                          {item.damage}
                        </Group>
                      </>
                    )}
                  </Stack>
                </Card>
              );
            })}
        </Stack>
      </ScrollArea>
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
          onClick={toggleRollLogTimed}
          leftSection={<IconX />}
        >
          Close
        </Button>
      </Stack>
    </Stack>
  );
};
