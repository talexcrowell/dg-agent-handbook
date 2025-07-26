import {
  Button,
  Card,
  Center,
  FileButton,
  Flex,
  Grid,
  Image,
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
  IconListCheck,
  IconPower,
  IconShare,
  IconTrash,
  IconUserScan,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";
import { useCharacterContext } from "../../../contexts/CharacterContext";

export const Settings = ({
  currentCharacter,
  handleInPerson,
  inPerson,
  toggleRollLog,
  handleFailedTests,
  setCharacter,
  toggleDiceRoller
}: any) => {
  const [viewport] = useViewportContext();
  const [{ savedCharacters }, actions] = useCharacterContext();
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

  function encodeImageFileAsURL(element) {
    let newObj = { ...currentCharacter };
    const reader = new FileReader();
    reader.onloadend = function () {
      newObj.image = reader.result;
      setCharacter({ ...newObj });
      actions.updateCharacters({ ...newObj });
      localStorage.setItem("currentCharacter", JSON.stringify({ ...newObj }));
      localStorage.setItem(
        "savedCharacters",
        JSON.stringify([
          ...savedCharacters.filter((item) => item.id !== newObj.id),
          { ...newObj },
        ])
      );
    };
    reader.readAsDataURL(element);
  }

  return (
    <>
      <Grid pt="sm" px={viewport.width > 760 ? "md" : "0"}>
        <Grid.Col span={12}>
          <Stack>
            <Title order={4} td="underline">
              Settings
            </Title>
            {viewport.width < 760 ? (
              <Center>
                <Stack>
                  <Card withBorder>
                    <Stack>
                      <Center>
                        {currentCharacter.image ? (
                          <Card withBorder w="225">
                            <Center>
                              <Image
                                src={currentCharacter.image}
                                h={200}
                                w={200}
                                radius="md"
                              />
                            </Center>
                          </Card>
                        ) : (
                          <Card m="lg">No image uploaded</Card>
                        )}
                      </Center>
                      <FileButton onChange={encodeImageFileAsURL}>
                        {(props) => (
                          <Button
                            {...props}
                            leftSection={<IconUserScan />}
                            variant="outline"
                          >
                            Change Image
                          </Button>
                        )}
                      </FileButton>
                    </Stack>
                  </Card>
                  <Button
                    onClick={handleExport}
                    fullWidth
                    leftSection={<IconShare />}
                    variant="outline"
                  >
                    Export Character
                  </Button>
                  <Button
                    leftSection={<IconUsersGroup />}
                    fullWidth
                    onClick={handleInPerson}
                    color={inPerson ? "green" : "grey"}
                    variant={inPerson ? "filled" : "outline"}
                  >
                    In-Person Mode {inPerson ? "ON" : "OFF"}
                  </Button>
                  {inPerson && (
                    <Button
                      onClick={toggleDiceRoller}
                      maw={375}
                      leftSection={<IconDice4 />}
                      variant="outline"
                    >
                      Dice Roller
                    </Button>
                  )}
                  {inPerson && (
                    <Button
                      leftSection={<IconHistory />}
                      fullWidth
                      onClick={toggleRollLog}
                      variant="outline"
                    >
                      Roll Log
                    </Button>
                  )}
                  {inPerson && (
                    <Button
                      onClick={handleRollFailures}
                      fullWidth
                      leftSection={<IconListCheck />}
                      variant="outline"
                      disabled
                    >
                      Roll/Clear Failures
                    </Button>
                  )}
                  {inPerson && (
                    <Button
                      onClick={handleExport}
                      fullWidth
                      leftSection={<IconHome />}
                      disabled
                    >
                      Home Scene
                    </Button>
                  )}
                </Stack>
              </Center>
            ) : (
              <Stack>
                <Stack>
                  {currentCharacter.image ? (
                    <Card withBorder w="225">
                      <Center>
                        <Image
                          src={currentCharacter.image}
                          h={200}
                          w={200}
                          radius="md"
                        />
                      </Center>
                      <FileButton onChange={encodeImageFileAsURL}>
                        {(props) => (
                          <Button
                            {...props}
                            leftSection={<IconUserScan />}
                            variant="outline"
                            maw={375}
                          >
                            Change Image
                          </Button>
                        )}
                      </FileButton>
                    </Card>
                  ) : (
                    <Card m="lg" h={200} w={200}>
                      <Stack justify="space-between" h="100%">
                        <Text c="dimmed" my="auto" ta="center">
                          No image uploaded
                        </Text>
                        <FileButton onChange={encodeImageFileAsURL}>
                          {(props) => (
                            <Button
                              {...props}
                              leftSection={<IconUserScan />}
                              variant="outline"
                              maw={375}
                            >
                              Upload Image
                            </Button>
                          )}
                        </FileButton>
                      </Stack>
                    </Card>
                  )}
                </Stack>
                <Button
                  onClick={handleExport}
                  maw={375}
                  leftSection={<IconShare />}
                  variant="outline"
                >
                  Export Character
                </Button>
                <Button
                  leftSection={<IconUsersGroup />}
                  maw={375}
                  onClick={handleInPerson}
                  color={inPerson ? "green" : "grey"}
                  variant={inPerson ? "filled" : "outline"}
                >
                  In-Person Mode {inPerson ? "ON" : "OFF"}
                </Button>
                {inPerson && (
                  <Button
                    onClick={toggleDiceRoller}
                    maw={375}
                    leftSection={<IconDice4 />}
                    variant="outline"
                  >
                    Dice Roller
                  </Button>
                )}
                {inPerson && (
                  <Button
                    leftSection={<IconHistory />}
                    maw={375}
                    onClick={toggleRollLog}
                    variant="outline"
                  >
                    Roll Log
                  </Button>
                )}
                {inPerson && (
                  <Button
                    onClick={handleRollFailures}
                    maw={375}
                    leftSection={<IconListCheck />}
                    variant="outline"
                    disabled
                  >
                    Roll/Clear Failures
                  </Button>
                )}
                {inPerson && (
                  <Button
                    onClick={handleExport}
                    maw={375}
                    leftSection={<IconHome />}
                    variant="outline"
                    disabled
                  >
                    Home Scene
                  </Button>
                )}
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
