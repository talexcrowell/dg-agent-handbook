import {
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  InputLabel,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconFile,
  IconShare,
  IconTrash,
  IconUserPlus,
  IconUserQuestion,
} from "@tabler/icons-react";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { Link } from "react-router-dom";
import React from "react";

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
        <Grid justify="space-between" gutter={0}>
          {/* <Grid.Col span={1}>
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
                <Card withBorder w={100} h={148}>
                  <Group justify="center" my="auto">
                    <IconUserQuestion size="62" />
                  </Group>
                </Card>
              )}
            </Center>
          </Grid.Col> */}
          <Grid.Col span={2}>
            <Stack gap="xs">
              <InputLabel fw={700} c='dimmed'>
                Codename
              </InputLabel>
              <Text>{agent.codename}</Text>
              <Divider />
              <InputLabel fw={700} c='dimmed'>
                Name
              </InputLabel>
              <Text truncate='end'>{agent.name}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={2}>
            <Stack gap="xs">
              <InputLabel fw={700} c='dimmed'>
                Profession
              </InputLabel>
              <Text truncate='end'>{agent.profession}</Text>
              <Divider />
              <InputLabel c='dimmed'>
                <Text fw={700} size="sm" truncate="end">
                  Education/Occupation History
                </Text>
              </InputLabel>
              <Text truncate='end'>{agent.education}</Text>
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
                  {agent.attributes.hp.current}/{agent.attributes.hp.max}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fw={700}>WP: </Text>
                <Text>
                  {agent.attributes.wp.current}/{agent.attributes.wp.max}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fw={700}>SAN: </Text>
                <Text>
                  {agent.attributes.san.current}/{agent.attributes.san.max}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fw={700}>BP: </Text>
                <Text>{agent.attributes.bp.current}</Text>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={2}>
            <Stack>
              <Button
                component={Link}
                to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
                onClick={() => {
                  actions.changeCurrentCharacter({ ...agent });
                  localStorage.setItem(
                    "currentCharacter",
                    JSON.stringify({ ...agent })
                  );
                }}
                leftSection={<IconFile />}
                variant="outline"
              >
                {handleGenerateCharacter ? "Preview" : "View"}
              </Button>
              {handleExport && (
                <Button
                  onClick={() => handleExport({ ...agent })}
                  leftSection={<IconShare />}
                  variant="outline"
                >
                  Export
                </Button>
              )}
              {handleRemoveSavedCharacter && (
                <Button
                  onClick={() => handleRemoveSavedCharacter(agent)}
                  color="red"
                  leftSection={<IconTrash />}
                  variant="outline"
                >
                  Delete
                </Button>
              )}
              {handleGenerateCharacter && (
                <Button
                  onClick={() => handleGenerateCharacter(agent)}
                  leftSection={<IconUserPlus />}
                  variant="outline"
                  color="green"
                >
                  Add to Roster
                </Button>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      ) : (
        <Grid>
          <Grid.Col span={6}>
            <Stack gap="xs">
              <InputLabel fw={700} c='dimmed'>
                Codename
              </InputLabel>
              <Text>{agent.codename}</Text>
              <Divider />
              <InputLabel fw={700} c='dimmed'>
                Profession
              </InputLabel>
              <Text truncate='end'>{agent.profession}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack gap="xs">
              <InputLabel fw={700} c='dimmed'>
                Name
              </InputLabel>
              <Text truncate='end'>{agent.name}</Text>
              <Divider />
              <InputLabel c='dimmed' >
                <Text fw={700} truncate="end" size="sm">
                  Education/Occupation History
                </Text>
              </InputLabel>
              <Text truncate='end'>{agent.education}</Text>
            </Stack>
          </Grid.Col>
          {/* {viewport.width > 600 && (
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
                    {agent.attributes.hp.current}/{agent.attributes.hp.max}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={700}>WP: </Text>
                  <Text>
                    {agent.attributes.wp.current}/{agent.attributes.wp.max}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={700}>SAN: </Text>
                  <Text>
                    {agent.attributes.san.current}/{agent.attributes.san.max}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={700}>BP: </Text>
                  <Text>{agent.attributes.bp.current}</Text>
                </Group>
              </Stack>
            </Grid.Col>
          )} */}
          <Grid.Col span={12}>
            <Divider />
          </Grid.Col>
          <Grid.Col span={12}>
            <Group justify="space-evenly">
              <Button
                component={Link}
                to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
                onClick={() => {
                  actions.changeCurrentCharacter({ ...agent });
                  localStorage.setItem(
                    "currentCharacter",
                    JSON.stringify({ ...agent })
                  );
                }}
                leftSection={<IconFile />}
                variant="outline"
              >
                {handleGenerateCharacter ? "Preview" : "View"}
              </Button>
              {handleExport && (
                <Button
                  onClick={() => handleExport({ ...agent })}
                  leftSection={<IconShare />}
                  variant="outline"
                >
                  Export
                </Button>
              )}
              {handleRemoveSavedCharacter && (
                <Button
                  onClick={() => handleRemoveSavedCharacter(agent)}
                  color="red"
                  leftSection={<IconTrash />}
                  variant="outline"
                >
                  Delete
                </Button>
              )}
              {handleGenerateCharacter && (
                <Button
                  onClick={() => handleGenerateCharacter(agent)}
                  leftSection={<IconUserPlus />}
                  variant="outline"
                  color="green"
                >
                  Add to Roster
                </Button>
              )}
            </Group>
          </Grid.Col>
        </Grid>
      )}
    </Card>
  );
};

export default AgentRosterCard;
