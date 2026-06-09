import {
  Accordion,
  ActionIcon,
  ActionIconGroup,
  Alert,
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
  IconInfoCircle,
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
          JSON.stringify([...JSON.parse(localSaved), { ...character }]),
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...character }]),
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
      (item: any) => item.id !== character.id,
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
          JSON.stringify([...JSON.parse(localSaved), { ...character }]),
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...character }]),
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
    <Grid ta="start" mt='sm'>
      <Grid.Col span={12}>
        <Stack>
          <Title>Agent Roster</Title>
          {viewport.width > 600 ? (
            <Alert title="Where is my Agent?" icon={<IconInfoCircle />}>
              The Agent Roster ONLY shows Agents that have been created or saved
              to this specific device. If you have created an Agent on another
              device, you can add them to this device by copying the export
              string using the "Export" button from the respective Agent,
              sending it to yourself, and pasting the export string into the
              text box located in the "Import" section.
            </Alert>
          ) : (
            <Card p="0" bg="">
              <Accordion>
                <Accordion.Item key="detail" value="detail">
                  <Accordion.Control icon={<IconInfoCircle size="18" />}>
                    <Text fw={700} size="sm">
                      Where is my Agent?
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text>
                      The Agent Roster ONLY shows Agents that have been created
                      or saved to this specific device. If you have created an
                      Agent on another device, you can add them to this device
                      by copying the export string using the "Export" button
                      from the respective Agent, sending it to yourself, and
                      pasting the export string into the text box located in the
                      "Import" section.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Card>
          )}
          <Center>
            <Button
              component={Link}
              to="/agents/new"
              leftSection={<IconUserPlus />}
              variant="outline"
              maw={375}
            >
              Create An Agent
            </Button>
          </Center>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Stack>
          <SegmentedControl
            data={[
              { label: "Roster", value: "roster" },
              { label: "Pre-Made", value: "premade" },
              { label: "Import", value: "import" },
            ]}
            onChange={(e) => setPage(e)}
            value={page}
          />
          {page === "import" ? (
            <Stack>
              <Text c="dimmed" size="sm">
                If you have created an Agent on another device, you can add them
                to this device by copying the export string from the other
                device and pasting the export string into the input below.
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
                <ScrollAreaAutosize>
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
                ),
              )}
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
            </Stack>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default AgentRoster;
