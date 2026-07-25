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
import {
  IconDots,
  IconFile,
  IconFileSearch,
  IconShare,
  IconTrash,
  IconUserPlus,
} from "@tabler/icons-react";
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
        <Stack>
          <InputLabel fw={700} c="dimmed">
            Codename
          </InputLabel>
          <Text>{agent.codename}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack>
          <InputLabel fw={700} c="dimmed">
            Name
          </InputLabel>
          <Text truncate="end">{agent.name}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack>
          <InputLabel fw={700} c="dimmed">
            Profession
          </InputLabel>
          <Text truncate="end">{agent.profession}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group justify="space-between">
          <Stack>
            <InputLabel c="dimmed">
              <Text fw={700} size="sm" truncate="end">
                Sex
              </Text>
            </InputLabel>
            <Text truncate="end">{agent.sex}</Text>
          </Stack>
          <Stack>
            <InputLabel c="dimmed">
              <Text fw={700} size="sm" truncate="end">
                Age
              </Text>
            </InputLabel>
            <Text truncate="end">{agent.age}</Text>
          </Stack>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack gap="xs">
          <InputLabel c="dimmed">
            <Text fw={700} size="sm" truncate="end" ta="center">
              Actions
            </Text>
          </InputLabel>
          <Center>
            <Group>
              <ActionIcon
                size={"lg"}
                variant="outline"
                onClick={() => {
                  actions.changeCurrentCharacter({ ...agent });
                  localStorage.setItem(
                    "currentCharacter",
                    JSON.stringify({ ...agent }),
                  );
                }}
                component={Link}
                to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
              >
                {handleGenerateCharacter ? <IconFileSearch /> : <IconFile />}
              </ActionIcon>
              {handleExport && (
                <ActionIcon
                  size={"lg"}
                  variant="outline"
                  onClick={() => handleExport({ ...agent })}
                >
                  <IconShare />
                </ActionIcon>
              )}
              {handleGenerateCharacter && (
                <ActionIcon
                  size={"lg"}
                  variant="outline"
                  color="green"
                  onClick={() => handleGenerateCharacter(agent)}
                >
                  <IconUserPlus />
                </ActionIcon>
              )}
              {handleRemoveSavedCharacter && (
                <ActionIcon
                  size={"lg"}
                  variant="outline"
                  color="red"
                  onClick={() => handleRemoveSavedCharacter(agent)}
                >
                  <IconTrash />
                </ActionIcon>
              )}
            </Group>
          </Center>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
