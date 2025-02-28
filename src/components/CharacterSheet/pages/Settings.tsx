import { Button, Center, Grid, Stack, Switch, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconHistory,
  IconPower,
  IconShare,
  IconTrash,
} from "@tabler/icons-react";

export const Settings = ({
  currentCharacter,
  handleInPerson,
  inPerson,
  toggleRollLog
}: any) => {
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
          <Center>
            <Stack>
              <Button
                variant={inPerson ? "filled" : "outline"}
                leftSection={<IconPower />}
                maw={300}
                onClick={handleInPerson}
                color={inPerson ? "green" : "grey"}
              >
                In-Person Mode
              </Button>
              {inPerson && (
                <Button
                  leftSection={<IconHistory />}
                  maw={300}
                  onClick={toggleRollLog}
                >
                  Roll Log
                </Button>
              )}
              <Button
                onClick={handleExport}
                maw={300}
                leftSection={<IconShare />}
              >
                Export Character
              </Button>
              <Button
                onClick={handleExport}
                w={300}
                color="red"
                leftSection={<IconTrash />}
              >
                Delete Character
              </Button>
            </Stack>
          </Center>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
