import {
  Button,
  ButtonGroup,
  Center,
  Divider,
  Grid,
  Group,
  InputLabel,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconFile,
  IconShare,
  IconTrash,
  IconUserPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../../../../contexts/CharacterContext";
import { useViewportContext } from "../../../../contexts/ViewportContext";

export const MobileCard: React.FC<{
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
  const [viewport] = useViewportContext();
  return (
    <Grid>
      <Grid.Col span={6}>
        <Stack gap="xs">
          <InputLabel fw={700} c="dimmed">
            Codename
          </InputLabel>
          <Text>{agent.codename}</Text>
          <Divider />
          <InputLabel fw={700} c="dimmed">
            Profession
          </InputLabel>
          <Text truncate="end">{agent.profession}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack gap="xs">
          <InputLabel fw={700} c="dimmed">
            Name
          </InputLabel>
          <Text truncate="end">{agent.name}</Text>
          <Divider />
          <InputLabel c="dimmed">
            <Text fw={700} truncate="end" size="sm">
              Education/Occupation History
            </Text>
          </InputLabel>
          <Text truncate="end">{agent.education}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider />
      </Grid.Col>
      <Grid.Col span={12}>
        <Group justify="space-around">
          <Button
            component={Link}
            to={`/agents/sheet/${agent?.codename.toUpperCase()}`}
            onClick={() => {
              actions.changeCurrentCharacter({ ...agent });
              localStorage.setItem(
                "currentCharacter",
                JSON.stringify({ ...agent }),
              );
            }}
            leftSection={<IconFile />}
            variant="outline"
          >
            {handleGenerateCharacter ? "Preview" : "View"}
          </Button>
          {/* {handleExport && (
            <Button
              onClick={() => handleExport({ ...agent })}
              leftSection={<IconShare />}
              variant="outline"
            >
              Export
            </Button>
          )} */}
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
  );
};
