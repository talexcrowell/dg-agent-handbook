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
              onClick={() => setOpened(true)}
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
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
          <Center>
            <Group>
              <Button
                component={Link}
                to="/directory"
                variant="outline"
              >
                AUTHORIZE
              </Button>
              <Button onClick={() => setOpened(false)} variant="outline" color="red">
                CANCEL
              </Button>
            </Group>
          </Center>
        </Stack>
      </Modal>
    </Grid>
  );
};
