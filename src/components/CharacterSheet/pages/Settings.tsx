import { Button, Center, Grid, Stack, Switch, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconDice4,
  IconHistory,
  IconHome,
  IconPower,
  IconShare,
  IconTrash,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Settings = ({
  currentCharacter,
  handleInPerson,
  inPerson,
  toggleRollLog,
  handleFailedTests,
}: any) => {
  const [viewport] = useViewportContext();
  const handleExport = () => {
    let jsonObj = JSON.stringify(currentCharacter);
    navigator.clipboard.writeText(btoa(jsonObj));
    notifications.show({
      color: "green",
      title: "Agent Exported",
      message: "Export string copied to clipboard",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
  };

  const handleRollFailures = () => {
    notifications.show({
      color: "green",
      title: "Rolled Failures",
      message:
        "All failures have been cleared. Adding rolled failures to skills will be added soon.",
      position: viewport.width < 760 ? "top-center" : "bottom-center",
    });
    handleFailedTests([]);
  };

  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Settings
          </Title>
          {viewport.width < 760 ? (
            <Center>
              <Stack>
                <Button
                  variant={inPerson ? "filled" : "outline"}
                  leftSection={<IconUsersGroup />}
                  fullWidth
                  onClick={handleInPerson}
                  color={inPerson ? "green" : "grey"}
                >
                  In-Person Mode {inPerson ? "ON" : "OFF"}
                </Button>
                {inPerson && (
                  <Button
                    leftSection={<IconHistory />}
                    fullWidth
                    onClick={toggleRollLog}
                    color="grey"
                  >
                    Roll Log
                  </Button>
                )}
                {inPerson && (
                  <Button
                    onClick={handleRollFailures}
                    fullWidth
                    leftSection={<IconDice4 />}
                    color="grey"
                  >
                    Roll/Clear Failures
                  </Button>
                )}
                <Button
                  onClick={handleExport}
                  fullWidth
                  leftSection={<IconHome />}
                >
                  Home Scene/Improvements
                </Button>
                <Button
                  onClick={handleExport}
                  fullWidth
                  leftSection={<IconShare />}
                >
                  Export Character
                </Button>
              </Stack>
            </Center>
          ) : (
            <Stack>
              <Button
                variant={inPerson ? "filled" : "outline"}
                leftSection={<IconUsersGroup />}
                maw={375}
                onClick={handleInPerson}
                color={inPerson ? "green" : "grey"}
              >
                In-Person Mode {inPerson ? "ON" : "OFF"}
              </Button>
              {inPerson && (
                <Button
                  leftSection={<IconHistory />}
                  maw={375}
                  onClick={toggleRollLog}
                >
                  Roll Log
                </Button>
              )}
              {inPerson && (
                <Button
                  onClick={handleRollFailures}
                  maw={375}
                  leftSection={<IconDice4 />}
                >
                  Roll/Clear Failures
                </Button>
              )}
              <Button
                onClick={handleExport}
                maw={375}
                leftSection={<IconHome />}
                disabled
              >
                Home Scene/Improvements
              </Button>
              <Button
                onClick={handleExport}
                maw={375}
                leftSection={<IconShare />}
              >
                Export Character
              </Button>
            </Stack>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
