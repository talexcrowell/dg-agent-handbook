import {
  Button,
  Center,
  Grid,
  List,
  Modal,
  Stack,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconCross,
  IconDice4,
  IconHistory,
  IconHome,
  IconPower,
  IconShare,
  IconTrash,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";

export const Settings = ({
  currentCharacter,
  handleInPerson,
  inPerson,
  toggleRollLog,
  handleFailedTests,
}: any) => {
  const [viewport] = useViewportContext();
  const [failuresModalOpen, setFailuresModalOpen] = useState<boolean>(false);

  const toggleFailuresModal = () => {
    setFailuresModalOpen(!failuresModalOpen);
  };

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
    toggleFailuresModal();
    // notifications.show({
    //   color: "green",
    //   title: "Rolled Failures",
    //   message:
    //     "All failures have been cleared. Adding rolled failures to skills will be added soon.",
    //   position: viewport.width < 760 ? "top-center" : "bottom-center",
    // });
    // handleFailedTests([]);
  };

  return (
    <>
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
      <Modal
        opened={failuresModalOpen}
        onClose={toggleFailuresModal}
        fullScreen={viewport.width <= 760}
        withCloseButton={false}
      >
        <Stack>
          <Title order={3}>Roll Failures</Title>
          <Text>
            Would you like to roll failures to improve your Agent's skills?
          </Text>
          <Text size="sm" c="dimmed">
            (This mechanic is used in-between operations.)
          </Text>
          <List>
            {currentCharacter.failedTests.length > 0 ? (
              currentCharacter.failedTests.map((item) => {
                return <List.Item tt="capitalize">{item}</List.Item>;
              })
            ) : (
              <Text c="dimmed" ta="center">
                No failures found
              </Text>
            )}
          </List>
          <Button variant="outline" leftSection={<IconDice4 />}>
            Roll
          </Button>
          <Button
            variant="outline"
            onClick={toggleFailuresModal}
            color="red"
            leftSection={<IconX />}
          >
            Close
          </Button>
        </Stack>
      </Modal>
    </>
  );
};
