import { TextAnimate } from "@gfazioli/mantine-text-animate";
import {
  Button,
  Card,
  Center,
  Checkbox,
  Grid,
  Group,
  Image,
  Modal,
  PasswordInput,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
  Transition,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [opened, setOpened] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleUsername = (val: string) => {
    if (val.length < 15) {
      setUsername(val.toUpperCase());
    }
  };

  const handlePassword = (val: string) => {
    if (val.length < 15) {
      setPassword(val);
    }
  };

  const handleRememberDevice = (val: boolean) => {
    setChecked(val);
    localStorage.setItem("rememberDevice", val.toString());
  };

  // useEffect(() => {
  //   let rememberDevice = localStorage.getItem("rememberDevice")
  //   if (rememberDevice) {
  //     navigate('/directory')
  //   }
  // }, []);

  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError(true);
    } else {
      setOpened(true);
    }
  };

  return (
    <Grid py="lg">
      <Grid.Col>
        {!opened ? (
          <Center>
            <Card withBorder>
              <Stack w="325" justify="center" gap="xs">
                <Center>
                  <Image
                    src="https://i.imgur.com/M6abaUa.png"
                    h="auto"
                    w={150}
                  />
                </Center>
                {error ? (
                  <Text c={"red"} fw={700} ta="center">
                    ACCESS DENIED
                  </Text>
                ) : (
                  <Space my="sm" />
                )}
                <form onSubmit={(e) => handleSubmit(e)}>
                  <Stack>
                    <TextInput
                      label="Username"
                      onChange={(e) => handleUsername(e.currentTarget.value)}
                      value={username}
                    />
                    <PasswordInput
                      label="Password"
                      onChange={(e) => handlePassword(e.currentTarget.value)}
                      value={password}
                    />
                    <Checkbox
                      label="Remember this device"
                      my="sm"
                      onChange={(e) =>
                        handleRememberDevice(e.currentTarget.checked)
                      }
                    />
                    <Center>
                      <Button variant="outline" type="submit">
                        CONNECT
                      </Button>
                    </Center>
                  </Stack>
                </form>
              </Stack>
            </Card>
          </Center>
        ) : (
          <Stack justify="start">
            <TextAnimate.Typewriter
              multiline
              c="green"
              ff="monospace"
              cursorChar="█"
              withBlink={true}
              delay={1000}
              loop={false}
              value={[
                "Checking device security...",
                "...",
                "...",
                "Security scan complete. Device Status: APPROVED",
                "",
                "Isolating device from connected networks...",
                "...",
                "...",
                "Device isolation complete",
                "Establishing connection to server...",
                "...",
                "...",
                "Client connected",
                "Authenticating credentials...",
                `ALIAS: ${username} confirmed`,
                "Authorizing...",
                "Retrieving permissions...",
                "Access granted",
                "Welcome to the Program",
              ]}
            />
            <Transition mounted={showButton} transition="fade" duration={500}>
              {(styles) => (
                <Button
                  variant="transparent"
                  c="green"
                  color="green"
                  component={Link}
                  to="/directory"
                  size="lg"
                  w={325}
                  // onClick={() => setOpened(true)}
                  style={{ ...styles }}
                >
                  ENTER
                </Button>
              )}
            </Transition>
          </Stack>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default LandingPage;
