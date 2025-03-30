import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Divider,
  Drawer,
  Group,
  InputLabel,
  Modal,
  NumberInput,
  ScrollArea,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconHistory, IconTrash, IconVs, IconX } from "@tabler/icons-react";
import { useState } from "react";

const RollModalContent = ({
  character,
  handleUpdateCharacter,
  toggle,
  handleShowRollLog,
  toggleRollLogTimed,
  showRollLog,
  rollType,
  value,
  modalType,
  handleDamageRoll,
  handleLethalityRoll,
  handleSanityDamage,
  handleSanityDefense,
}: any) => {
  const [diceNotation, setDiceNotation] = useState("1d4");
  const [lethality, setLethality] = useState(false);
  const [lethalityRating, setLethalityRating] = useState(10);
  const [bond, setBond] = useState("");

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

  const isCombat = (skill) => {
    switch (skill) {
      case "unarmedCombat":
      case "meleeWeapons":
      case "firearms":
      case "heavyWeapons":
      case "demolitions":
      case "artillery":
        return true;
      default:
        return false;
    }
  };

  const isLethalCombat = (skill) => {
    switch (skill) {
      case "heavyWeapons":
      case "demolitions":
      case "artillery":
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

  const handleDeleteRollLog = () => {
    handleUpdateCharacter("rollLog", []);
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

  if (showRollLog) {
    return (
      <Stack justify="space-between">
        <Title order={3}>Roll Log</Title>
        <Divider />
        <ScrollArea h={"63vh"}>
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
                    w={325}
                  >
                    <Stack>
                      <Group justify="space-between">
                        <Stack gap={0}>
                          <InputLabel c="dimmed">Test</InputLabel>
                          <Text tt="capitalize">
                            {skillKeyLabels(item.skill)} {item?.label}
                          </Text>
                        </Stack>
                        <Stack gap={0} ta="end">
                          <InputLabel c="dimmed">Result</InputLabel>
                          <Text fw={700}>
                            {calculateRollLogEntryLanguage(item)}
                          </Text>
                        </Stack>
                      </Group>
                      <Divider />
                      <Group justify="space-between">
                        <Stack gap="0">
                          <InputLabel c="dimmed">Rating</InputLabel>
                          <Text tt="capitalize">
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
                        <IconVs size={32} />
                        <Stack gap="0" ta="end">
                          <InputLabel c="dimmed">Roll</InputLabel>
                          <Text>{item.rolledValue}</Text>
                        </Stack>
                      </Group>
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
  } else {
    return (
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
        {/* Roll Card */}
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
                  {character.rollLog.length > 0 &&
                    skillKeyLabels(
                      character.rollLog[character.rollLog.length - 1].skill
                    )}{" "}
                  {character.rollLog.length > 0 &&
                    character?.rollLog[character.rollLog.length - 1].label}
                </Text>
                <Text fw={700}>
                  {character.rollLog.length > 0 &&
                    character?.rollLog[character.rollLog.length - 1]
                      .ratingValue}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Card>
        {/* Damage Card */}
        {character.rollLog.length > 0 &&
          character.rollLog[character.rollLog.length - 1].rolledValue <=
            character.rollLog[character.rollLog.length - 1].ratingValue &&
          isCombat(character.rollLog[character.rollLog.length - 1].skill) && (
            <Card>
              <Stack>
                <Text fw={700}>Damage Roll</Text>
                <Stack>
                  <Checkbox
                    label="Does your weapon have a Lethality Rating?"
                    checked={
                      isLethalCombat(
                        character?.rollLog[character.rollLog.length - 1].skill
                      ) || lethality
                    }
                    onChange={() => setLethality(!lethality)}
                    disabled={
                      character?.rollLog[character.rollLog.length - 1].damage
                    }
                  />
                  {isLethalCombat(
                    character?.rollLog[character.rollLog.length - 1].skill
                  ) || lethality ? (
                    <Group align="end" justify="space-between">
                      <NumberInput
                        label={
                          <InputLabel c="dimmed">Lethality Rating</InputLabel>
                        }
                        suffix="%"
                        min={10}
                        max={30}
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
          )}
        {character.rollLog.length > 0 &&
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
                  <Text
                    fw={700}
                    ta="center"
                  >
                    {character?.rollLog[character.rollLog.length - 1].damage}{" "}
                    {parseInt(
                      character?.rollLog[
                        character.rollLog.length - 1
                      ].damage.replace(" Damage", "")
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
                                bond
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
                                  .damage
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
          )}
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
  }
};

export const RollModalContainer = ({
  character,
  rollType,
  value,
  opened,
  close,
  isMobile,
  toggle,
  modalType,
  showRollLog,
  handleUpdateCharacter,
  handleDamageRoll,
  handleLethalityRoll,
  handleSanityDamage,
  handleSanityDefense,
  toggleRollLog,
}: any) => {



  const handleShowRollLog = () => {
    setShowRollLog(!showRollLog);
  };

  if (isMobile) {
    return (
      <Drawer
        opened={opened}
        withCloseButton={false}
        onClose={showRollLog ? toggleRollLog : close}
        size={"fullscreen"}
        position="bottom"
      >
        <RollModalContent
          character={character}
          handleUpdateCharacter={handleUpdateCharacter}
          toggle={toggle}
          showRollLog={showRollLog}
          toggleRollLogTimed={toggleRollLog}
          handleShowRollLog={handleShowRollLog}
          rollType={rollType}
          value={value}
          modalType={modalType}
          handleDamageRoll={handleDamageRoll}
          handleLethalityRoll={handleLethalityRoll}
          handleSanityDamage={handleSanityDamage}
        />
      </Drawer>
    );
  } else {
    return (
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={showRollLog ? toggleRollLog : close}
        size={"lg"}
      >
        <RollModalContent
          character={character}
          handleUpdateCharacter={handleUpdateCharacter}
          toggle={toggle}
          showRollLog={showRollLog}
          toggleRollLogTimed={toggleRollLog}
          handleShowRollLog={handleShowRollLog}
          rollType={rollType}
          value={value}
          modalType={modalType}
          handleDamageRoll={handleDamageRoll}
          handleLethalityRoll={handleLethalityRoll}
          handleSanityDamage={handleSanityDamage}
          handleSanityDefense={handleSanityDefense}
        />
      </Modal>
    );
  }
};
