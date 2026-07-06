import {
  ActionIcon,
  Button,
  ButtonGroup,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  InputLabel,
  Menu,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDots,
  IconFile,
  IconShare,
  IconTrash,
  IconUserPlus,
  IconUserQuestion,
} from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { Link } from "react-router-dom";
import React from "react";
import { DesktopCard } from "./Content/DesktopCard";
import { MobileCard } from "./Content/MobileCard";

export const AgentRosterCard: React.FC<{
  agent: any;
  handleExport?: any;
  handleRemoveSavedCharacter?: any;
  handleGenerateCharacter?: any;
}> = ({
  agent,
  handleExport,
  handleRemoveSavedCharacter,
  handleGenerateCharacter,
}) => {
  const [, actions] = useCharacterContext();
  const [viewport] = useViewportContext();
  return (
    <Card withBorder radius={"md"}>
      {viewport.width > 992 ? (
        <DesktopCard
          agent={agent}
          handleExport={handleExport}
          handleRemoveSavedCharacter={handleRemoveSavedCharacter}
          handleGenerateCharacter={handleGenerateCharacter}
        />
      ) : (
        <MobileCard
          agent={agent}
          handleExport={handleExport}
          handleRemoveSavedCharacter={handleRemoveSavedCharacter}
          handleGenerateCharacter={handleGenerateCharacter}
        />
      )}
    </Card>
  );
};

export default AgentRosterCard;
