import {
  ActionIcon,
  ActionIconGroup,
  Button,
  ButtonGroup,
  Card,
  Center,
  Divider,
  FileButton,
  FileInput,
  Flex,
  Grid,
  Group,
  Image,
  Indicator,
  InputLabel,
  List,
  Modal,
  ScrollArea,
  ScrollAreaAutosize,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import {
  IconArrowBack,
  IconArrowUp,
  IconFile,
  IconFileExport,
  IconFileImport,
  IconPhotoPlus,
  IconShare,
  IconTrash,
  IconUserPlus,
  IconUserQuestion,
  IconUserScan,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { premadeAgents } from "./data";
import { AgentRosterCard } from "./AgentRosterCard";

export const AgentRoster = () => {
  const [{ currentCharacter, savedCharacters }, actions] =
    useCharacterContext();
  const [page, setPage] = useState("roster");
  const [importString, setImportString] = useState("");
  const [viewport] = useViewportContext();

  const handleExport = (character) => {
    let jsonObj = JSON.stringify({ ...character });
    navigator.clipboard.writeText(btoa(jsonObj));
    notifications.show({
      color: "green",
      title: "Agent Exported",
      message: "Export string copied to clipboard",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleImport = (encodedString) => {
    let decodedString = atob(encodedString);
    let character = JSON.parse(decodedString);
    const localSaved = localStorage.getItem("savedCharacters");

    localSaved !== null
      ? localStorage.setItem(
          "savedCharacters",
          JSON.stringify([...JSON.parse(localSaved), { ...character }])
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...character }])
        );

    actions.importCharacter({ ...character });
    notifications.show({
      color: "green",
      title: "Agent Imported Successfully!",
      message: "Agent is available in Agent Roster",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
    setPage("roster");
  };

  const handleRemoveSavedCharacter = (character: any) => {
    let newArr = savedCharacters.filter(
      (item: any) => item.id !== character.id
    );
    if (character.id === currentCharacter.id) {
      actions.changeCurrentCharacter();
    }

    actions.updateCharacters({ savedCharacters: [...newArr] });
    notifications.show({
      color: "green",
      title: "Agent Deleted Successfully!",
      message: `Agent ${character.codename} has been removed from the Agent Roster.`,
      position: viewport.width > 760 ? "top-center" : "bottom-center",
    });
    localStorage.setItem("savedCharacters", JSON.stringify([...newArr]));
  };

  const handleGenerateCharacter = (agent) => {
    let character = { ...agent };
    const localSaved = localStorage.getItem("savedCharacters");
    localSaved !== null
      ? localStorage.setItem(
          "savedCharacters",
          JSON.stringify([...JSON.parse(localSaved), { ...character }])
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...character }])
        );

    actions.importCharacter({ ...character });
    setPage("roster");
    notifications.show({
      color: "green",
      title: "Pre-Made Agent Added Successfully!",
      message: "Agent is available in Agent Roster",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  return (
    <Grid ta="start" pt={viewport.width > 600 ? 0 : 10}>
      <Grid.Col span={12}>
        <Stack mt="md">
          <Title>Agent Roster</Title>
          <Text>
            Delta Green recruits a new prospect only after confirming that they
            can handle the work and the unconventional demands the group makes.
            They usually look to federal agents and special forces, adaptable
            professionals trained to cope with overwhelming stress and danger.
            Sometimes prospects are recruited from other fields, such as
            science, anthropology, or medicine.
          </Text>
          <Text>
            If the prospect has encountered the unnatural, all the better. Delta
            Green wants people who recognize the depth of the danger. If your
            first instinct is to go public with an unnatural discovery, it’s
            likely you are not a Delta Green recruit but a Delta Green mission.
          </Text>

          <List>
            <Text fw={700}>Agents’ main directives are:</Text>
            <List.Item>Stop the Unnatural</List.Item>
            <List.Item>Minimize exposure</List.Item>
            <List.Item>Save lives</List.Item>
            <List.Item>Cover it up to save others from being exposed</List.Item>
            <List.Item>Never reveal the existence of Delta Green</List.Item>
          </List>
          <Text c="dimmed" size="sm">
            NOTE: Agents are only available on the device that originally
            created/added them. To share to another device, you will need to
            export your Agent from the original device and import the copied
            code into the new device.
          </Text>
          <Divider />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Stack>
          <SegmentedControl
            data={[
              { label: "Agent Roster", value: "roster" },
              { label: "Add Pre-Made Agent", value: "premade" },
              { label: "Import Agent", value: "import" },
            ]}
            onChange={(e) => setPage(e)}
            value={page}
          />
          {page === "import" ? (
            <Stack>
              <Text c="dimmed" size="sm">
                If you have created an Agent on another device, you can add them
                to this device by copying and pasting the export string into the
                input below.
              </Text>
              <Textarea
                rows={10}
                value={importString}
                onChange={(e) => setImportString(e.currentTarget.value)}
                placeholder="Paste import string here..."
              />
              <Button onClick={() => handleImport(importString)}>
                Import Agent
              </Button>
            </Stack>
          ) : page === "premade" ? (
            <Grid>
              <Grid.Col>
                <ScrollAreaAutosize h="700">
                  <Stack>
                    {premadeAgents.map((agent) => {
                      return (
                        <AgentRosterCard
                          agent={agent}
                          handleGenerateCharacter={handleGenerateCharacter}
                        />
                      );
                    })}
                  </Stack>
                </ScrollAreaAutosize>
              </Grid.Col>
            </Grid>
          ) : savedCharacters.length > 0 ? (
            <Stack>
              {savedCharacters.map((agent) =>
                currentCharacter.name === agent.name ? (
                  <Indicator
                    position="top-center"
                    processing
                    color="green"
                    label="Current Agent"
                    size="xl"
                  >
                    <AgentRosterCard
                      agent={agent}
                      handleExport={handleExport}
                      handleRemoveSavedCharacter={handleRemoveSavedCharacter}
                    />
                  </Indicator>
                ) : (
                  <AgentRosterCard
                    agent={agent}
                    handleExport={handleExport}
                    handleRemoveSavedCharacter={handleRemoveSavedCharacter}
                  />
                )
              )}
              <Button
                component={Link}
                to="/agents/new"
                color="green"
                leftSection={<IconUserPlus />}
                variant="outline"
              >
                Create An Agent
              </Button>
            </Stack>
          ) : (
            <Stack>
              <Card withBorder p="xl">
                <Stack>
                  <Text ta="center" c="dimmed">
                    There are no Delta Green agents in your roster.
                  </Text>
                </Stack>
              </Card>
              <Button
                component={Link}
                to="/agents/new"
                color="green"
                leftSection={<IconUserPlus />}
                variant="outline"
              >
                Create An Agent
              </Button>
            </Stack>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default AgentRoster;
