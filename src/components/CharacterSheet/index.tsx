import {
  ActionIcon,
  Box,
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
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconBackpack,
  IconDice4,
  IconExclamationCircle,
  IconExclamationMark,
  IconFile,
  IconHistory,
  IconList,
  IconNotes,
  IconSettings,
  IconTrash,
  IconUser,
  IconUsersGroup,
  IconVs,
  IconX,
} from "@tabler/icons-react";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { useCallback, useEffect, useState } from "react";
import { Settings } from "./pages/Settings";
import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
import { notifications } from "@mantine/notifications";
import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import { RollModalContainer } from "./RollModal";
import { UtilityMenu, UtiltyMenu } from "./UtilityMenu";

export const CharacterSheet: React.FC = () => {
  const [viewport] = useViewportContext();
  const [{ currentCharacter, savedCharacters }, actions] =
    useCharacterContext();
  const [character, setCharacter] = useState({});
  const [blockerOpened, setBlockerOpened] = useState(false);

  // Settings
  const [inPerson, setInPerson] = useState(
    currentCharacter.inPersonMode ? currentCharacter.inPersonMode : false
  );

  // Rolls
  const [value, setValue] = useState([]);
  const [rollType, setRollType] = useState("");
  const [showRollLog, setShowRollLog] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [modalType, setModalType] = useState("default");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

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
    if (!currentCharacter.inPersonMode) {
      newObj.inPersonMode = false;
    }
    setCharacter({ ...newObj });
  }, [currentCharacter]);

  // Back Button Blocker
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
      setBlockerOpened(true);
    });
    return () => {
      window.removeEventListener("popstate", function (event) {
        window.history.pushState(null, document.title, window.location.href);
        setBlockerOpened(false);
      });
    };
  }, [location]);

  const handleLeaveCharacterSheet = () => {
    setBlockerOpened(false);
    navigate("/agents/roster");
  };

  const handleClose = () => {
    if (isFullscreen) {
      const characterSheet = document.getElementById("character-sheet");
      console.log(characterSheet);
      character.style.display = "";
    }
    close();
  };

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
    handleUpdateCharacter("inPersonMode", !inPerson);
  };

  const isCombat = (skill) => {
    switch (skill) {
      case "unarmedCombat":
      case "heavyWeapons":
      case "meleeWeapons":
      case "firearms":
      case "artillery":
      case "demolitions":
        return true;
      default:
        return false;
    }
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
        ratingValue:
          skill === "luck"
            ? 50
            : skill === "san"
            ? character.attributes[skill].current
            : isStat(skill)
            ? character.stats[skill] * 5
            : isSkillChoice(skill)
            ? character.skills[skill][0].skill
            : character.skills[skill],
        skill,
        label: isSkillChoice(skill)
          ? `(${character.skills[skill][0].label})`
          : "",
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

    if (isCombat(skill)) {
      setModalType("combat");
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

  const handleAdditionalStandardRoll = (skill, type) => {
    let characterObj = {
      ...character,
    };

    setRollType(skill);

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

    let ratingValue = characterObj.skills[skill].filter((val) => {
      return val.label === type?.label;
    })[0].skill;

    let newRollLog = [
      ...characterObj.rollLog,
      {
        rolledValue: parseInt(diceRoll.join("")),
        ratingValue,
        skill,
        label: `(${type.label})`,
        date: new Date().getTime(),
      },
    ];

    // if (
    //   !isStat(skill) &&
    //   parseInt(diceRoll.join("")) > playerValue &&
    //   !characterObj.failedTests.includes(skill)
    // ) {
    //   characterObj.failedTests = [...character.failedTests, skill];
    // }

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

  const handleDamageRoll = (value) => {
    let characterObj = {
      ...character,
    };
    let roll: any = new DiceRoll(value);
    let rollObj = roll.export(exportFormats.OBJECT);
    let diceRoll = rollObj.total;
    let newRollLog = [...character.rollLog];
    newRollLog[newRollLog.length - 1].damage = diceRoll + " Damage";
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
    notifications.show({
      message: `You dealt ${diceRoll} damage to your target.`,
      autoClose: 7000,
      color: "green",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleLethalityRoll = (rating) => {
    let characterObj = {
      ...character,
    };
    let roll: any = new DiceRoll("2d10");
    let rollObj = roll.export(exportFormats.OBJECT);
    let diceRoll = rollObj.rolls[0].rolls.map((item) => {
      if (item.calculationValue === 10) {
        return 0;
      } else {
        return item.calculationValue;
      }
    });

    let lethalityDamage;
    if (parseInt(diceRoll.join("")) <= rating) {
      lethalityDamage = "Target Killed";
    } else {
      lethalityDamage =
        parseInt(diceRoll[0]) + parseInt(diceRoll[1]) + " Damage";
    }

    let newRollLog = [...character.rollLog];
    newRollLog[newRollLog.length - 1].damage = lethalityDamage;
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
    notifications.show({
      message:
        parseInt(diceRoll.join("")) <= rating
          ? "You killed your target."
          : `You dealt ${lethalityDamage} damage to your target.`,
      autoClose: 7000,
      color: "green",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleSanityDefense = (damageValue, selectedBond) => {
    let characterObj = {
      ...character,
    };

    let roll: any = new DiceRoll("1d4");
    let rollObj = roll.export(exportFormats.OBJECT);
    let diceRoll = rollObj.total;

    let sanDifference =
      parseInt(damageValue.replace(" Damage", "")) - parseInt(diceRoll) < 0
        ? 0
        : parseInt(damageValue.replace(" Damage", "")) - parseInt(diceRoll);

    let bondFilter = characterObj.bonds.filter(
      (bond) => bond.name === selectedBond
    )[0];

    let bondOthersFilter = characterObj.bonds.filter(
      (bond) => bond.name !== selectedBond
    );

    // Willpower calculation
    characterObj.attributes.wp.current =
      characterObj.attributes.wp.current -
      (sanDifference === 0
        ? parseInt(damageValue.replace(" Damage", ""))
        : parseInt(damageValue.replace(" Damage", "")) - sanDifference);

    // Bonds calculation
    characterObj.bonds = [
      ...bondOthersFilter,
      {
        name: bondFilter.name,
        value:
          bondFilter.value -
          (sanDifference === 0
            ? parseInt(damageValue.replace(" Damage", ""))
            : parseInt(damageValue.replace(" Damage", "")) - sanDifference),
      },
    ];

    //Sanity Damage Calculation
    characterObj.attributes.san.current =
      characterObj.attributes.san.current - sanDifference;
    // Update Roll Log
    let newRollLog = [...character.rollLog];
    newRollLog[newRollLog.length - 1].bond =
      selectedBond +
      ` suffers ${
        sanDifference === 0
          ? parseInt(damageValue.replace(" Damage", ""))
          : parseInt(damageValue.replace(" Damage", "")) - sanDifference
      } bond loss`;
    newRollLog[newRollLog.length - 1].damage = `${
      newRollLog[newRollLog.length - 1].damage
    } - ${parseInt(diceRoll)} Projection = ${sanDifference} Damage`;
    characterObj.rollLog = [...newRollLog];
    // Update character sheet
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
    notifications.show({
      message: `You have taken ${sanDifference} sanity damage. You projected ${
        parseInt(damageValue.replace(" Damage", "")) - sanDifference
      } bond loss to ${selectedBond}.`,
      autoClose: 7000,
      color: "red",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleSanityDamage = (damageValue) => {
    let characterObj = {
      ...character,
    };

    //Sanity Damage Calculation
    characterObj.attributes.san.current =
      characterObj.attributes.san.current -
      parseInt(damageValue.replace(" Damage", ""));
    let newRollLog = [...character.rollLog];
    newRollLog[newRollLog.length - 1].bond = "No bond loss";
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
    notifications.show({
      message: `You have taken ${damageValue.replace(
        " Damage",
        ""
      )} sanity damage`,
      autoClose: 7000,
      color: "red",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleRollModalType = (type) => {
    setModalType(type);
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

  const toggleRollLog = () => {
    setShowRollLog(!showRollLog);
    toggle();
  };

  const handleFailedTests = (val) => {
    handleUpdateCharacter("failedTests", [...val]);
  };

  const handleCharacterSheetFullscreen = () => {
    let elem = document.getElementById("character-sheet");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // For Safari
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // For Firefox
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // For IE/Edge
    }
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    isFullscreen ? exitFullscreen() : handleCharacterSheetFullscreen();
  };
  const handleModalFullscreen = (value) => {
    notifications.show({
      color: "green",
      title: value,
      message: "Rolling enabled on your character sheet.",
      position: viewport.width > 760 ? "bottom-center" : "top-center",
    });
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
        id="character-sheet"
        px={0}
        style={{ zIndex: 100 }}
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
        <Tabs.Panel value="all" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
            />
            <Divider />
            <Skills
              currentCharacter={character}
              handleStandardRoll={handleStandardRoll}
              handleAdditionalStandardRoll={handleAdditionalStandardRoll}
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
        <Tabs.Panel value="personal" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
              handleStandardRoll={handleStandardRoll}
              inPerson={inPerson}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="skills" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
            <Skills
              currentCharacter={character}
              handleStandardRoll={handleStandardRoll}
              handleAdditionalStandardRoll={handleAdditionalStandardRoll}
              inPerson={inPerson}
              handleFailedTests={handleFailedTests}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="equipment" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="notes" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="equipment-notes" id="tab-panel">
          <UtilityMenu
            handleInPerson={handleInPerson}
            inPerson={inPerson}
            toggleRollLog={toggleRollLog}
          />
          <Divider />
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 110 : 170)}
            scrollbars="y"
          >
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
        <Tabs.Panel value="settings" id="tab-panel">
          <ScrollArea
            h={viewport.height - (viewport.width > 760 ? 0 : 102)}
            scrollbars="y"
          >
            <Settings
              currentCharacter={character}
              handleInPerson={handleInPerson}
              inPerson={inPerson}
              toggleRollLog={toggleRollLog}
              handleFailedTests={handleFailedTests}
            />
          </ScrollArea>
        </Tabs.Panel>
        <RollModalContainer
          character={character}
          rollType={rollType}
          value={value}
          opened={opened}
          close={handleClose}
          isMobile={viewport.width <= 760}
          toggle={toggle}
          modalType={modalType}
          handleUpdateCharacter={handleUpdateCharacter}
          handleDamageRoll={handleDamageRoll}
          handleLethalityRoll={handleLethalityRoll}
          handleSanityDamage={handleSanityDamage}
          handleSanityDefense={handleSanityDefense}
          showRollLog={showRollLog}
          toggleRollLog={toggleRollLog}
          setShowRollLog={setShowRollLog}
          id="roll-modal"
        />
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
        <Modal
          opened={blockerOpened}
          onClose={() => setBlockerOpened(false)}
          fullScreen={viewport.width <= 760}
          withCloseButton={false}
        >
          <Stack>
            <Center>
              <Stack>
                <IconExclamationCircle size={84} color="red" />
              </Stack>
            </Center>
            <Text>Are you sure you want to leave the character sheet?</Text>
            <Text>You will be taken back to the Agent Roster.</Text>
            <Button onClick={handleLeaveCharacterSheet} variant="outline">
              Yes
            </Button>
            <Button
              onClick={() => setBlockerOpened(false)}
              variant="outline"
              color="red"
            >
              No
            </Button>
          </Stack>
        </Modal>
      </Tabs>
    );
  }
};

export default CharacterSheet;
