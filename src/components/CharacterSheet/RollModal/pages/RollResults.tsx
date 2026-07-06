import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Group,
  RollingNumber,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { IconHistory, IconVs, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useViewportContext } from "../../../../contexts/ViewportContext";
import { BorderAnimate } from "@gfazioli/mantine-border-animate";

export const RollResults = ({
  character,
  rollType,
  value,
  handleShowRollLog,
  toggle,
}) => {
  const [diceRollValue, setDiceRollValue] = useState(500);
  const [mounted, setMounted] = useState(false);

  const [viewport] = useViewportContext();

  useEffect(() => {
    setTimeout(() => {
      setDiceRollValue(parseInt(value.join("")));
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
  }, []);

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

  const calculateCurrentRollLanguage = () => {
    let userValue =
      rollType == "luck"
        ? 50
        : rollType == "san"
          ? character.attributes[rollType].current
          : isStat(rollType)
            ? character.stats[rollType] * 5
            : isSkillChoice(
                  rollType?.includes(".") ? rollType.split(".")[0] : rollType,
                )
              ? rollType.includes(".")
                ? character.skills[rollType.split(".")[0]].filter(
                    (subskill) => {
                      return subskill.label === rollType.split(".")[1];
                    },
                  )[0]?.skill
                : character.skills[rollType][0].skill
              : character.skills[rollType];
    if (userValue >= parseInt(value.join(""))) {
      if (value[0] === value[1]) {
        if (parseInt(value.join("")) === 0) {
          return "FUMBLE";
        }
        return "CRITICAL SUCCESS";
      }
      if (parseInt(value.join("")) === 1) {
        return "CRITICAL SUCCESS";
      }
      return "SUCCESS";
    } else {
      if (value[0] === value[1]) {
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
      <Stack gap="lg">
        <Card>
          <Stack>
            <Text fz="32" c="dimmed" tt="capitalize" ta="center">
              {character.rollLog.length > 0 &&
                skillKeyLabels(
                  character.rollLog[character.rollLog.length - 1].skill,
                )}{" "}
              {character.rollLog.length > 0 &&
                character?.rollLog[character.rollLog.length - 1].label}
            </Text>
            <Divider />
            <Group justify="space-evenly" mx="xs">
              <Stack gap="xs" w="25%" align="center">
                <Text ta="center" c="dimmed">
                  Rating
                </Text>
                <Text fw={700} fz={48}>
                  {character.rollLog.length > 0 &&
                    character?.rollLog[character.rollLog.length - 1]
                      .ratingValue}
                </Text>
              </Stack>
              <IconVs size={42} width={"25%"} />
              <Stack gap="xs" w="25%" align="center">
                <Text ta="center" c="dimmed">
                  Roll
                </Text>
                <RollingNumber
                  value={diceRollValue !== 0 ? diceRollValue : 100}
                  fz={48}
                  fw={700}
                  py="sm"
                  animationDuration={1000}
                  ta="center"
                />
              </Stack>
            </Group>
          </Stack>
        </Card>
        <BorderAnimate
          variant="glow"
          blur='xs'
          show={mounted}
          colorFrom={
            calculateCurrentRollLanguage() === "CRITICAL SUCCESS" ||
            calculateCurrentRollLanguage() === "SUCCESS"
              ? "green"
              : "red"
          }
          colorTo={
            calculateCurrentRollLanguage() === "CRITICAL SUCCESS" ||
            calculateCurrentRollLanguage() === "SUCCESS"
              ? "green"
              : "red"
          }
        >
          <Card w="100%">
            <Box h={50}>
              <Transition mounted={mounted} duration={1000} transition={"fade"}>
                {(styles) => (
                  <div style={styles}>
                    <Text
                      fz="32"
                      fw={700}
                      c={
                        calculateCurrentRollLanguage() === "CRITICAL SUCCESS" ||
                        calculateCurrentRollLanguage() === "SUCCESS"
                          ? "green"
                          : "red"
                      }
                      ta="center"
                    >
                      {calculateCurrentRollLanguage()}
                    </Text>
                  </div>
                )}
              </Transition>
            </Box>
          </Card>
        </BorderAnimate>
      </Stack>
      {/* Damage Card */}
      {/* {character.rollLog.length > 0 &&
          character.rollLog[character.rollLog.length - 1].rolledValue <=
            character.rollLog[character.rollLog.length - 1].ratingValue &&
          isCombat(character.rollLog[character.rollLog.length - 1].skill) && (
            <Card>
              <Stack>
                <Text fw={700}>Damage Roll</Text>
                <Stack>
                  {character.rollLog[character.rollLog.length - 1].skill !==
                    "unarmedCombat" && (
                    <Checkbox
                      label="Does your weapon have a Lethality Rating?"
                      checked={
                        isLethalCombat(
                          character?.rollLog[character.rollLog.length - 1]
                            .skill,
                        ) || lethality
                      }
                      onChange={() => setLethality(!lethality)}
                      disabled={
                        character?.rollLog[character.rollLog.length - 1].damage
                      }
                    />
                  )}
                  {isLethalCombat(
                    character?.rollLog[character.rollLog.length - 1].skill,
                  ) || lethality ? (
                    <Group align="end" justify="space-between">
                      <NumberInput
                        label={
                          <InputLabel c="dimmed">Lethality Rating</InputLabel>
                        }
                        suffix="%"
                        min={10}
                        max={30}
                        w={150}
                        defaultValue={10}
                        value={lethalityRating}
                        step={5}
                        onChange={(e) => setLethalityRating(e)}
                        disabled={
                          character?.rollLog[character.rollLog.length - 1]
                            .damage
                        }
                      />
                      <Button
                        onClick={() => handleLethalityRoll(lethalityRating)}
                        disabled={
                          character?.rollLog[character.rollLog.length - 1]
                            .damage
                        }
                      >
                        Roll Lethality
                      </Button>
                    </Group>
                  ) : (
                    <Group align="end" justify="space-between">
                      <Select
                        label={<InputLabel c="dimmed">Damage Dice</InputLabel>}
                        data={[
                          "1d4",
                          "1d6",
                          "1d8",
                          "2d8",
                          "1d10",
                          "1d12",
                          "1d12+2",
                        ]}
                        onChange={(e) => {
                          setDiceNotation(e);
                        }}
                        disabled={
                          character?.rollLog[character.rollLog.length - 1]
                            .damage
                        }
                        w={150}
                        value={diceNotation}
                      />
                      <Button
                        onClick={() => handleDamageRoll(diceNotation)}
                        disabled={
                          character?.rollLog[character.rollLog.length - 1]
                            .damage
                        }
                      >
                        Roll Damage
                      </Button>
                    </Group>
                  )}
                </Stack>
                <Text fw={700} ta="center">
                  {character?.rollLog[character.rollLog.length - 1].damage &&
                    character?.rollLog[character.rollLog.length - 1].damage}
                </Text>
              </Stack>
            </Card>
          )} */}
      {/* Sanity Card */}
      {/* {character.rollLog.length > 0 &&
          character.rollLog[character.rollLog.length - 1].rolledValue >
            character.rollLog[character.rollLog.length - 1].ratingValue &&
          character.rollLog[character.rollLog.length - 1].skill === "san" && (
            <Card>
              <Stack>
                <Text fw={700}>Sanity Damage</Text>
                {!character?.rollLog[character.rollLog.length - 1].damage ? (
                  <Group align="end" justify="space-between">
                    <Select
                      label={<InputLabel c="dimmed">Damage Dice</InputLabel>}
                      data={[
                        "1d4",
                        "1d6",
                        "1d8",
                        "2d8",
                        "1d10",
                        "1d12",
                        "1d12+2",
                      ]}
                      onChange={(e) => {
                        setDiceNotation(e);
                      }}
                      disabled={
                        character?.rollLog[character.rollLog.length - 1].damage
                      }
                      value={diceNotation}
                    />
                    <Button
                      onClick={() => handleDamageRoll(diceNotation)}
                      disabled={
                        character?.rollLog[character.rollLog.length - 1].damage
                      }
                    >
                      Roll Damage
                    </Button>
                  </Group>
                ) : (
                  <Text fw={700} ta="center">
                    {character?.rollLog[character.rollLog.length - 1].damage}{" "}
                    {parseInt(
                      character?.rollLog[
                        character.rollLog.length - 1
                      ].damage.replace(" Damage", ""),
                    ) >= 5 && "(Temporary Insanity)"}
                  </Text>
                )}
                {character?.rollLog[character.rollLog.length - 1].damage && (
                  <>
                    <Divider />
                    <Text fw={700}>Sanity Defense (Project onto a Bond?)</Text>
                    {!character?.rollLog[character.rollLog.length - 1].bond ? (
                      <Group justify="space-between" align="end">
                        <Select
                          label={<InputLabel c="dimmed">Bond</InputLabel>}
                          data={[...character.bonds.map((item) => item.name)]}
                          value={bond}
                          onChange={(e) => setBond(e)}
                        />
                        <Group>
                          <Button
                            color="green"
                            onClick={() =>
                              handleSanityDefense(
                                character?.rollLog[character.rollLog.length - 1]
                                  .damage,
                                bond,
                              )
                            }
                            disabled={!bond}
                          >
                            Yes
                          </Button>
                          <Button
                            color="red"
                            onClick={() =>
                              handleSanityDamage(
                                character?.rollLog[character.rollLog.length - 1]
                                  .damage,
                              )
                            }
                          >
                            No
                          </Button>
                        </Group>
                      </Group>
                    ) : (
                      <Stack ta="center">
                        <Text fw={700}>
                          Willpower is {character?.attributes.wp.current}
                        </Text>
                        <Text fw={700}>
                          {
                            character?.rollLog[character.rollLog.length - 1]
                              .bond
                          }
                        </Text>
                      </Stack>
                    )}
                  </>
                )}
              </Stack>
            </Card>
          )} */}
      <Stack>
        <Button
          variant="outline"
          leftSection={<IconHistory />}
          onClick={handleShowRollLog}
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
  );
};
