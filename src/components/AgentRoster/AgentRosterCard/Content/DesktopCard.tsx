import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  InputLabel,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { IconDots, IconFile, IconShare, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../../../../contexts/CharacterContext";

export const DesktopCard: React.FC<{
  agent: any;
  handleExport: any;
  handleRemoveSavedCharacter: any;
  handleGenerateCharacter: any;
}> = ({
  agent,
  handleExport,
  handleRemoveSavedCharacter,
  handleGenerateCharacter,
}) => {
  const [, actions] = useCharacterContext();

  return (
    <Grid justify="space-between">
      <Grid.Col span={2}>
        <Stack gap="lg">
          <InputLabel fw={700} c="dimmed">
            Codename
          </InputLabel>
          <Text>{agent.codename}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack gap="lg">
          <InputLabel fw={700} c="dimmed">
            Name
          </InputLabel>
          <Text truncate="end">{agent.name}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack gap="lg">
          <InputLabel fw={700} c="dimmed">
            Profession
          </InputLabel>
          <Text truncate="end">{agent.profession}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack gap="lg">
          <InputLabel c="dimmed">
            <Text fw={700} size="sm" truncate="end">
              Education/Occupation History
            </Text>
          </InputLabel>
          <Text truncate="end">{agent.education}</Text>
        </Stack>
      </Grid.Col>
      <Divider orientation="vertical" />
      <Grid.Col span={2}>
        <Stack>
          <InputLabel c="dimmed">
            <Text fw={700} size="sm" truncate="end" ta="center">
              Actions
            </Text>
          </InputLabel>
          <Center>
            <Group>
              <Button
                leftSection={<IconFile />}
                onClick={() => {
                  actions.changeCurrentCharacter({ ...agent });
                  localStorage.setItem(
                    "currentCharacter",
                    JSON.stringify({ ...agent }),
                  );
                }}
                component={Link}
                to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
                variant="outline"
              >
                View
              </Button>
              <Menu width={150}>
                <Menu.Target>
                  <ActionIcon variant="outline" size="lg">
                    <IconDots />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconShare />}
                    onClick={() => handleExport({ ...agent })}
                  >
                    Export
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<IconTrash />}
                    onClick={() => handleRemoveSavedCharacter(agent)}
                    color="red"
                  >
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Center>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
