import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
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
  TextInput,
  Title,
} from "@mantine/core";
import { IconHistory, IconTrash, IconVs, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { DiceRoller } from "./pages/DiceRoller";
import { RollLog } from "./pages/RollLog";
import { RollResults } from "./pages/RollResults";

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
  toggleDiceRoller,
  showDiceRoller,
}: any) => {
  const [diceNotation, setDiceNotation] = useState("d4");
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceRoll, setDiceRoll] = useState();
  const [modifier, setModifier] = useState(0);
  const [lethality, setLethality] = useState(false);
  const [lethalityRating, setLethalityRating] = useState(10);
  const [bond, setBond] = useState("");

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

  const handleDeleteRollLog = () => {
    handleUpdateCharacter("rollLog", []);
  };

  const handleCustomRoll = (input: string) => {
    let roll: any = new DiceRoll(input);
    let rollObj = roll.export(exportFormats.OBJECT);
    setDiceRoll({ ...rollObj });
  };

  const handleCustomDiceRoll = () => {
    handleCustomRoll(
      diceNumber.toString() +
        diceNotation.toString() +
        (modifier > 0 ? `+${modifier}` : ""),
    );
  };
  const handleDiceValue = (val) => {
    setDiceNotation(val);
  };

  if (showRollLog) {
    return (
      <RollLog
        character={character}
        rollType={rollType}
        toggleRollLogTimed={toggleRollLogTimed}
        handleDeleteRollLog={handleDeleteRollLog}
      />
    );
  } else if (showDiceRoller) {
    return <DiceRoller toggleDiceRoller={toggleDiceRoller} />;
  } else {
    return (
      <RollResults
        character={character}
        handleShowRollLog={handleShowRollLog}
        rollType={rollType}
        toggle={toggle}
        value={value}
      />
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
  setShowRollLog,
  toggleDiceRoller,
  showDiceRoller,
}: any) => {
  const handleShowRollLog = () => {
    setShowRollLog(!showRollLog);
  };

  if (isMobile) {
    return (
      <Drawer
        opened={opened}
        withCloseButton={false}
        onClose={
          showRollLog
            ? toggleRollLog
            : showDiceRoller
              ? toggleDiceRoller
              : close
        }
        size={"100%"}
        position="bottom"
        overlayProps={{ fixed: true }}
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
          toggleDiceRoller={toggleDiceRoller}
          showDiceRoller={showDiceRoller}
        />
      </Drawer>
    );
  } else {
    return (
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={
          showRollLog
            ? toggleRollLog
            : showDiceRoller
              ? toggleDiceRoller
              : close
        }
        size={"lg"}
        overlayProps={{
          blur: 20,
        }}
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
          toggleDiceRoller={toggleDiceRoller}
          showDiceRoller={showDiceRoller}
        />
      </Modal>
    );
  }
};
