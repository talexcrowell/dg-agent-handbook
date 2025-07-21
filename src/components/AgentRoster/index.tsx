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
  InputLabel,
  List,
  Modal,
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

export const AgentRoster = () => {
  const [{ currentCharacter, savedCharacters }, actions] =
    useCharacterContext();
  const [opened, setOpened] = useState(false);
  const [openedGenerate, setOpenedGenerate] = useState(false);
  const [importString, setImportString] = useState("");
  const [viewport] = useViewportContext();
  const [premade, setPremade] = useState({});

  const toggleImport = () => {
    setOpened(!opened);
    setOpenedGenerate(false);
  };

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
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
    localStorage.setItem("savedCharacters", JSON.stringify([...newArr]));
  };
  const togglePreMadeCharacter = () => {
    setOpened(false);
    setOpenedGenerate(!openedGenerate);
  };

  const handleSelectPreMade = (value) => {
    let choice = premadeAgents.filter((agent) => agent.codename === value)[0];
    setPremade({ ...choice });
  };

  const handleGenerateCharacter = () => {
    let character = { ...premade };
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
      title: "Pre-Made Agent Added Successfully!",
      message: "Agent is available in Agent Roster",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
    togglePreMadeCharacter();
  };

  function encodeImageFileAsURL(element, character) {
    const reader = new FileReader();
    reader.onloadend = function () {
      character.image = reader.result;
      actions.updateCharacters({ ...character });
      localStorage.setItem(
        "currentCharacter",
        JSON.stringify({ ...character })
      );
      localStorage.setItem(
        "savedCharacters",
        JSON.stringify([
          ...savedCharacters.filter((item) => item.id !== character.id),
          { ...character },
        ])
      );
    };
    reader.readAsDataURL(element);
  }

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
          <Group>
            {!opened && !openedGenerate && (
              <Button
                component={Link}
                to="/agents/new"
                color="green"
                leftSection={<IconUserPlus />}
                variant="outline"
              >
                Create An Agent
              </Button>
            )}
            {!opened && (
              <Button
                leftSection={
                  openedGenerate ? <IconArrowBack /> : <IconUserScan />
                }
                onClick={togglePreMadeCharacter}
                variant={openedGenerate ? "filled" : "outline"}
              >
                {openedGenerate ? "Back to Roster" : "Add Pre-Made Agent"}
              </Button>
            )}
            {!openedGenerate && (
              <Button
                onClick={toggleImport}
                leftSection={opened ? <IconArrowBack /> : <IconFileImport />}
                variant={opened ? "filled" : "outline"}
              >
                {opened ? "Back to Roster" : "Import Agent"}
              </Button>
            )}
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
          ) : openedGenerate ? (
            <Card>
              <Grid>
                <Grid.Col>
                  <Stack>
                    <Title order={3}>Pre-Made Agents</Title>
                    <Text>
                      These are basic pre-made Agents that can be used for
                      operations. There are a wide variety of Agents that can be
                      useful to Delta Green so explore the different options.
                    </Text>
                    <Text>
                      Once selected and added to your Agent Roster, you are
                      welcome to change the Agent's details to fit your idea.
                    </Text>

                    <Select
                      label={"Pre-Made Agent List"}
                      data={premadeAgents.map((agent) => {
                        return {
                          label: `Agent ${agent.codename} (${agent.name}) | ${agent.profession}, ${agent.employer}`,
                          value: agent.codename,
                        };
                      })}
                      onChange={(e) => handleSelectPreMade(e)}
                      required={true}
                    />
                    <Button
                      onClick={handleGenerateCharacter}
                      disabled={!premade?.codename}
                    >
                      Add Pre-Made Character
                    </Button>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Card>
          ) : savedCharacters.length > 0 ? (
            <Stack>
              {savedCharacters.map((agent) => (
                <Card withBorder radius={"md"}>
                  {viewport.width > 992 ? (
                    <Grid justify="space-between" gutter={0}>
                      <Grid.Col span={1}>
                        <Center>
                          {agent.image ? (
                            <Image
                              src={agent.image}
                              h={148}
                              w={100}
                              fit="contain"
                              radius="md"
                            />
                          ) : (
                            <FileButton
                              onChange={(e) => encodeImageFileAsURL(e, agent)}
                            >
                              {(props) => (
                                <Button
                                  {...props}
                                  variant="outline"
                                  w={100}
                                  h={148}
                                  color="gray"
                                >
                                  <IconUserQuestion size="32" />
                                </Button>
                              )}
                            </FileButton>
                          )}
                        </Center>
                      </Grid.Col>
                      <Grid.Col span={2}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Codename
                          </InputLabel>
                          <Text>{agent.codename}</Text>
                          <Divider />
                          <InputLabel fw={700} td="underline">
                            Name
                          </InputLabel>
                          <Text>{agent.name}</Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={2}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Profession
                          </InputLabel>
                          <Text>{agent.profession}</Text>
                          <Divider />
                          <InputLabel fw={700} td="underline">
                            Education/Occupation History
                          </InputLabel>
                          <Text>{agent.education}</Text>
                        </Stack>
                      </Grid.Col>
                      <Divider orientation="vertical" />

                      <Grid.Col span={1}>
                        <Stack gap="0">
                          <Group justify="space-between">
                            <Text fw={700}>STR: </Text>
                            <Text>{agent.stats.strength}</Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>CON: </Text>
                            <Text>{agent.stats.constitution}</Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>DEX: </Text>
                            <Text>{agent.stats.dexterity}</Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>INT: </Text>
                            <Text>{agent.stats.intelligence}</Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>POW: </Text>
                            <Text>{agent.stats.power}</Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>CHA: </Text>
                            <Text>{agent.stats.charisma}</Text>
                          </Group>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={1}>
                        <Stack gap="0">
                          <Group justify="space-between">
                            <Text fw={700}>HP: </Text>
                            <Text>
                              {agent.attributes.hp.current}/
                              {agent.attributes.hp.max}
                            </Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>WP: </Text>
                            <Text>
                              {agent.attributes.wp.current}/
                              {agent.attributes.wp.max}
                            </Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>SAN: </Text>
                            <Text>
                              {agent.attributes.san.current}/
                              {agent.attributes.san.max}
                            </Text>
                          </Group>
                          <Group justify="space-between">
                            <Text fw={700}>BP: </Text>
                            <Text>{agent.attributes.bp.current}</Text>
                          </Group>
                        </Stack>
                      </Grid.Col>

                      <Divider orientation="vertical" />
                      <Grid.Col span={2}>
                        <Flex justify="center">
                          <Stack>
                            <Button
                              component={Link}
                              to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
                              onClick={() =>
                                actions.changeCurrentCharacter({ ...agent })
                              }
                              leftSection={<IconFile />}
                              variant="outline"
                            >
                              View
                            </Button>
                            <Button
                              onClick={() => handleExport({ ...agent })}
                              leftSection={<IconShare />}
                              variant="outline"
                            >
                              Export
                            </Button>
                            <Button
                              onClick={() => handleRemoveSavedCharacter(agent)}
                              color="red"
                              leftSection={<IconTrash />}
                              variant="outline"
                            >
                              Delete
                            </Button>
                          </Stack>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  ) : (
                    <Grid>
                      <Grid.Col span={viewport.width > 600 ? 2 : 3}>
                        <Center>
                          {agent.image ? (
                            <Image
                              src={agent.image}
                              h={148}
                              w={100}
                              fit="contain"
                              radius="md"
                              px="xs"
                            />
                          ) : (
                            <FileButton
                              onChange={(e) => encodeImageFileAsURL(e, agent)}
                            >
                              {(props) => (
                                <Button
                                  {...props}
                                  variant="outline"
                                  w={100}
                                  h={148}
                                  color="gray"
                                >
                                  <IconUserScan size="32" />
                                </Button>
                              )}
                            </FileButton>
                          )}
                        </Center>
                      </Grid.Col>
                      <Grid.Col span={viewport.width > 600 ? 3 : 4}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Codename
                          </InputLabel>
                          <Text>{agent.codename}</Text>
                          <Divider />
                          <InputLabel fw={700} td="underline">
                            Name
                          </InputLabel>
                          <Text>{agent.name}</Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={viewport.width > 600 ? 3 : 5}>
                        <Stack gap="xs">
                          <InputLabel fw={700} td="underline">
                            Profession
                          </InputLabel>
                          <Text>{agent.profession}</Text>
                          <Divider />
                          <InputLabel td="underline">
                            <Text fw={700} truncate="end" size="sm">
                              Education/Occupation History
                            </Text>
                          </InputLabel>
                          <Text>{agent.education}</Text>
                        </Stack>
                      </Grid.Col>
                      {viewport.width > 600 && (
                        <Grid.Col span={2}>
                          <Stack gap="0">
                            <Group justify="space-between">
                              <Text fw={700}>STR: </Text>
                              <Text>{agent.stats.strength}</Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>CON: </Text>
                              <Text>{agent.stats.constitution}</Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>DEX: </Text>
                              <Text>{agent.stats.dexterity}</Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>INT: </Text>
                              <Text>{agent.stats.intelligence}</Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>POW: </Text>
                              <Text>{agent.stats.power}</Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>CHA: </Text>
                              <Text>{agent.stats.charisma}</Text>
                            </Group>
                          </Stack>
                        </Grid.Col>
                      )}
                      {viewport.width > 600 && (
                        <Grid.Col span={2}>
                          <Stack gap="0">
                            <Group justify="space-between">
                              <Text fw={700}>HP: </Text>
                              <Text>
                                {agent.attributes.hp.current}/
                                {agent.attributes.hp.max}
                              </Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>WP: </Text>
                              <Text>
                                {agent.attributes.wp.current}/
                                {agent.attributes.wp.max}
                              </Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>SAN: </Text>
                              <Text>
                                {agent.attributes.san.current}/
                                {agent.attributes.san.max}
                              </Text>
                            </Group>
                            <Group justify="space-between">
                              <Text fw={700}>BP: </Text>
                              <Text>{agent.attributes.bp.current}</Text>
                            </Group>
                          </Stack>
                        </Grid.Col>
                      )}
                      <Grid.Col>
                        <Divider />
                      </Grid.Col>
                      <Grid.Col span={12}>
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
                  )}
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
  );
};

export default AgentRoster;
