import {
  ActionIcon,
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
  IconFileSearch,
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
          <ActionIcon
            size={"xl"}
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
              size={50}
              variant="outline"
              onClick={() => handleExport({ ...agent })}
            >
              <IconShare />
            </ActionIcon>
          )}
          {handleGenerateCharacter && (
            <ActionIcon
              size={"xl"}
              variant="outline"
              color="green"
              onClick={() => handleGenerateCharacter(agent)}
            >
              <IconUserPlus />
            </ActionIcon>
          )}
          {handleRemoveSavedCharacter && (
            <ActionIcon
              size={"xl"}
              variant="outline"
              color="red"
              onClick={() => handleRemoveSavedCharacter(agent)}
            >
              <IconTrash />
            </ActionIcon>
          )}
        </Group>
      </Grid.Col>
    </Grid>
  );
};
