import {
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  InputLabel,
  Modal,
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
  IconArrowUp,
  IconFile,
  IconFileExport,
  IconFileImport,
  IconShare,
  IconTrash,
  IconUserPlus,
} from "@tabler/icons-react";

export const AgentRoster = () => {
  const [{ currentCharacter, savedCharacters }, actions] =
    useCharacterContext();
  const [opened, setOpened] = useState(false);
  const [importString, setImportString] = useState("");

  const toggleImport = () => {
    setOpened(!opened);
  };

  const handleExport = (character) => {
    let jsonObj = JSON.stringify(character);
    navigator.clipboard.writeText(btoa(jsonObj));
    notifications.show({
      color: "green",
      title: "Agent Exported",
      message: "Export string copied to clipboard",
      position: "top-center",
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
      position: "top-center",
    });
    toggleImport();
  };

  const handleRemoveSavedCharacter = (character: any) => {
    let newArr = savedCharacters.filter(
      (item: any) => item.id !== character.id
    );
    actions.updateCharacters({ savedCharacters: [...newArr] });
    notifications.show({
      color: "green",
      title: "Agent Deleted Successfully!",
      message: `Agent ${character.codename} has been removed from the Agent Roster.`,
      position: "top-center",
    });
    localStorage.setItem("savedCharacters", JSON.stringify([...newArr]));
  };

  return (
    <>
      <Grid ta="start">
        <Grid.Col span={12}>
          <Stack>
            <Title>Agent Roster</Title>
            <Text>
              Delta Green recruits a new prospect only after confirming that
              they can handle the work and the unconventional demands the group
              makes. They usually look to federal agents and special forces,
              adaptable professionals trained to cope with overwhelming stress
              and danger. Sometimes prospects are recruited from other fields,
              such as science, anthropology, or medicine.
            </Text>
            <Text>
              If the prospect has encountered the unnatural, all the better.
              Delta Green wants people who recognize the depth of the danger. If
              your first instinct is to go public with an unnatural discovery,
              it’s likely you are not a Delta Green recruit but a Delta Green
              mission.
            </Text>
            <Divider />
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Stack>
            <Group>
              <Button
                component={Link}
                to="/agents/new"
                bg="green"
                leftSection={<IconUserPlus />}
              >
                Add An Agent
              </Button>
              <Button onClick={toggleImport} leftSection={<IconFileImport />}>
                {opened ? "Back to Roster" : "Import Agent"}
              </Button>
            </Group>
            {opened ? (
              <Stack>
                <Textarea
                  label="Paste import string here"
                  rows={10}
                  value={importString}
                  onChange={(e) => setImportString(e.currentTarget.value)}
                />
                <Button onClick={() => handleImport(importString)}>
                  Import Agent
                </Button>
              </Stack>
            ) : savedCharacters.length > 0 ? (
              <Stack>
                {savedCharacters.map((agent) => (
                  <Card withBorder radius={"md"}>
                    <Grid align="center" justify="space-between" gutter="lg">
                      <Grid.Col span={2}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Codename
                          </InputLabel>
                          <Text>Agent {agent.codename}</Text>
                        </Stack>
                      </Grid.Col>
                      <Divider orientation="vertical" />
                      <Grid.Col span={2}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Name
                          </InputLabel>
                          <Text>{agent.name}</Text>
                        </Stack>
                      </Grid.Col>
                      <Divider orientation="vertical" />
                      <Grid.Col span={3}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Profession
                          </InputLabel>
                          <Text>{agent.profession}</Text>
                        </Stack>
                      </Grid.Col>
                      <Divider orientation="vertical" />
                      <Grid.Col span={4}>
                        
                        <Flex justify="center">
                          <Group>
                            <Button
                              component={Link}
                              to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
                              onClick={() =>
                                actions.changeCurrentCharacter({ ...agent })
                              }
                              leftSection={<IconFile />}
                            >
                              View
                            </Button>
                            <Button
                              onClick={() => handleExport(agent)}
                              leftSection={<IconShare />}
                            >
                              Export
                            </Button>
                            <Button
                              onClick={() => handleRemoveSavedCharacter(agent)}
                              bg="red"
                              leftSection={<IconTrash />}
                            >
                              Delete
                            </Button>
                          </Group>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  </Card>
                ))}
              </Stack>
            ) : (
              <Stack py="lg">
                <Card withBorder p="xl">
                  <Text ta="center" c="dimmed">
                    You have not created any Delta Green agents
                  </Text>
                </Card>
              </Stack>
            )}
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
};
