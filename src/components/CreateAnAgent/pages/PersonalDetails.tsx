import {
  ActionIcon,
  Button,
  Card,
  Center,
  FileButton,
  Grid,
  Group,
  Image,
  Input,
  List,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { IconPencilPlus, IconUserScan } from "@tabler/icons-react";
import { faker } from "@faker-js/faker";

export const PersonalDetails: React.FC<{
  handleAgentPersonalDetails: (val: any, key: any) => void;
  handleCreateAgent: () => void;
  userAgent: any;
}> = ({ handleAgentPersonalDetails, handleCreateAgent, userAgent }) => {
  const [viewport] = useViewportContext();

  const handleGenerateRandomValue = (key: string) => {
    let randomValue = "";
    switch (key) {
      case "name":
        randomValue = faker.person.fullName();
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
      case "codename":
        randomValue = faker.word.noun();
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
      case "employer":
        let buzzword = faker.company.buzzNoun();
        randomValue =
          faker.company.name() +
          " " +
          String(buzzword).charAt(0).toUpperCase() +
          String(buzzword).slice(1);
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
    }
  };

  return (
    <Grid ta="start">
      <Grid.Col span={12}>
        <Stack>
          <Title>Personal Details</Title>
          <Text>
            Don’t try to make the perfect Agent. Engaging with your Agent as a
            character, not as a tool to “win” the game, is what makes the
            terrifying catastrophes of Delta Green matter.
          </Text>
          <Text>
            While fleshing out your agent:
            <List pr="sm">
              <List.Item>
                Consider something you like and something you dislike about your
                agent.
              </List.Item>
              <List.Item>
                Consider what brought your agent to work for Delta Green.
              </List.Item>
              <List.Item>
                Consider why you think Delta Green trusts your agent.
              </List.Item>
            </List>
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Stack>
          {viewport.width > 600 ? (
            <>
              <Group>
                <TextInput
                  label="Name"
                  flex={1}
                  onChange={(val) => handleAgentPersonalDetails(val, "name")}
                  value={userAgent?.name}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("name")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Codename"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "codename")
                  }
                  value={userAgent?.codename}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("codename")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Profession"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "profession")
                  }
                  value={userAgent?.profession}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("profession")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
              </Group>
              <Group>
                <TextInput
                  label="Employer"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "employer")
                  }
                  value={userAgent?.employer}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("employer")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Nationality"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "nationality")
                  }
                  value={userAgent?.nationality}
                  required
                />
              </Group>
              <Group>
                <Select
                  label="Sex"
                  w={100}
                  onChange={(val) => handleAgentPersonalDetails(val, "sex")}
                  data={["M", "F", "DND"]}
                  value={userAgent?.sex}
                  required
                />
                <NumberInput
                  label="Age"
                  w={100}
                  min={25}
                  max={70}
                  onChange={(val) => handleAgentPersonalDetails(val, "age")}
                  value={userAgent?.age}
                  required
                />
                <TextInput
                  label="Education/Occupation History"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "education")
                  }
                  value={userAgent?.education}
                  required
                />
              </Group>
            </>
          ) : (
            <>
              <Stack>
                {" "}
                <TextInput
                  label="Name"
                  flex={1}
                  onChange={(val) => handleAgentPersonalDetails(val, "name")}
                  value={userAgent?.name}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("name")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Codename"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "codename")
                  }
                  value={userAgent?.codename}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("codename")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Profession"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "profession")
                  }
                  value={userAgent?.profession}
                  required
                />
                <TextInput
                  label="Employer"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "employer")
                  }
                  value={userAgent?.employer}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("employer")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Nationality"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "nationality")
                  }
                  value={userAgent?.nationality}
                  required
                />
                <Group justify="space-between">
                  <Select
                    label="Sex"
                    w={"45%"}
                    onChange={(val) => handleAgentPersonalDetails(val, "sex")}
                    data={["M", "F", "DND"]}
                    value={userAgent?.sex}
                    required
                  />
                  <NumberInput
                    label="Age"
                    w={"45%"}
                    min={30}
                    max={60}
                    onChange={(val) => handleAgentPersonalDetails(val, "age")}
                    value={userAgent?.age}
                    required
                  />
                </Group>
                <TextInput
                  label="Education/Occupation History"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "education")
                  }
                  value={userAgent?.education}
                  required
                />
              </Stack>
            </>
          )}
          <Textarea
            label="Personality, Hobbies, Obsessions, etc."
            minRows={6}
            onChange={(val) => handleAgentPersonalDetails(val, "personality")}
            value={userAgent?.personality}
            placeholder="Tenacious, depressed, cautious..."
          />
          <Textarea
            label="Motivations"
            minRows={6}
            onChange={(val) => handleAgentPersonalDetails(val, "motivations")}
            value={userAgent?.motivations}
            placeholder="National security, learning about cults, protecting loved ones..."
          />
          <Textarea
            label="Experiences with the Unnatural"
            ta="start"
            minRows={6}
            onChange={(val) =>
              handleAgentPersonalDetails(val, "unnaturalExperiences")
            }
            value={userAgent?.unnaturalExperiences}
            placeholder="Encountered a strange creature, witnessed a ritual, investigated a mysterious relic..."
          />
          <Center>
            <Card withBorder w={250}>
              <Stack justify="space-between" h={250}>
                <Center>
                  {userAgent?.image ? (
                    <Image src={userAgent.image} h={200} w={200} radius="md" />
                  ) : (
                    <Card m="lg">
                      <Text c="dimmed">No image uploaded</Text>
                    </Card>
                  )}
                </Center>
                <Stack>
                  {/* <Button
                    leftSection={<IconPencilPlus />}
                    onClick={() =>
                      handleAgentPersonalDetails(
                        faker.image.personPortrait(),
                        "image"
                      )
                    }
                  >
                    Generate Image
                  </Button> */}
                  <FileButton
                    onChange={(e) => handleAgentPersonalDetails(e, "image")}
                  >
                    {(props) => (
                      <Button {...props} leftSection={<IconUserScan />}>
                        Change Image
                      </Button>
                    )}
                  </FileButton>
                </Stack>
              </Stack>
            </Card>
          </Center>
          <Button
            component={Link}
            to={`/agents/sheet/${
              userAgent.codename ? userAgent.codename.toUpperCase() : ""
            }`}
            disabled={
              !userAgent?.name ||
              !userAgent?.codename ||
              !userAgent?.profession ||
              !userAgent?.age ||
              !userAgent?.education
            }
            onClick={handleCreateAgent}
            color={"green"}
          >
            Create Agent
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
