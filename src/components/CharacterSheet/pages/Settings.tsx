import { Button, Grid, Stack, Switch, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconShare, IconTrash } from "@tabler/icons-react";

export const Settings = ({ currentCharacter }: any) => {
  const handleExport = () => {
    let jsonObj = JSON.stringify(currentCharacter);
    navigator.clipboard.writeText(btoa(jsonObj));
    notifications.show({
      color: "green",
      title: "Agent Exported",
      message: "Export string copied to clipboard",
      position: "bottom-center",
    });
  };

  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Settings
          </Title>

          <Switch label="In-Person Mode" />
          <Switch label="Enable Rolling" />
          <Button onClick={handleExport} w={200} leftSection={<IconShare />}>
            Export Character
          </Button>
          <Button
            onClick={handleExport}
            w={200}
            color="red"
            leftSection={<IconTrash />}
          >
            Delete Character
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
