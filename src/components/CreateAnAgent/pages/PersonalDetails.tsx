import {
  Button,
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

export const PersonalDetails: React.FC<{
  handleAgentPersonalDetails: (val: any, key: any) => void;
  handleCreateAgent: () => void;
  userAgent: any;
}> = ({ handleAgentPersonalDetails, handleCreateAgent, userAgent }) => {
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
            <List>
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
          <Group>
            <TextInput
              label="Name"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "name")}
              value={userAgent?.name}
              required
            />
            <TextInput
              label="Codename"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "codename")}
              value={userAgent?.codename}
              required
            />
            <TextInput
              label="Profession"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "profession")}
              value={userAgent?.profession}
              required
            />
          </Group>
          <Group>
            <TextInput
              label="Employer"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "employer")}
              value={userAgent?.employer}
              required
            />
            <TextInput
              label="Nationality"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "nationality")}
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
              label="Edu/Occ History"
              flex={1}
              onChange={(val) => handleAgentPersonalDetails(val, "education")}
              value={userAgent?.education}
              required
            />
          </Group>
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
            onChange={(val) => handleAgentPersonalDetails(val, "unnaturalExperiences")}
            value={userAgent?.unnaturalExperiences}
            placeholder="Encountered a strange creature, witnessed a ritual, investigated a mysterious relic..."
          />
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
