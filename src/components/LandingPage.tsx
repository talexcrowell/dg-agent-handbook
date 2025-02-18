import {
  Button,
  Center,
  Grid,
  Group,
  Image,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleAuthorizeUser = () => {
    setError(false);
    if (btoa(password) !== btoa("permafrost")) {
      setError(true);
    } else {
      localStorage.setItem("_at", btoa("permafrost" + Date.now()));
    }
  };

  return (
    <Grid py="lg">
      <Grid.Col>
        <Stack>
          <Center>
            <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={350} />
          </Center>
          <Center>
            <Button
              variant="outline"
              c="grey"
              color="grey"
              component={Link}
              to="/directory"
              // onClick={() => setOpened(true)}
            >
              ENTER
            </Button>
          </Center>
        </Stack>
      </Grid.Col>
      <Modal
        title="Passcode Required"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Stack>
          <PasswordInput
            error={error && "ACCESS DENIED. INVALID PASSWORD"}
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
          <Center>
            <Group>
              <Button variant="outline" onClick={handleAuthorizeUser}>
                AUTHORIZE
              </Button>
              <Button
                onClick={() => setOpened(false)}
                variant="outline"
                color="red"
              >
                CANCEL
              </Button>
            </Group>
          </Center>
        </Stack>
      </Modal>
    </Grid>
  );
};

export default LandingPage;
