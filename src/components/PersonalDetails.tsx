import {
  Button,
  Grid,
  Group,
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

export const PersonalDetails = () => {
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
            <TextInput label="Name" flex={1} />
            <TextInput label="Profession" flex={1} />
          </Group>
          <Group>
            <TextInput label="Employer" flex={1} />
            <TextInput label="Nationality" flex={1} />
          </Group>
          <Group>
            <Select label="Sex" w={100} />
            <NumberInput label="Age" w={100} />
            <TextInput label="Education and Occupational History" flex={1} />
          </Group>
          <Textarea
            label="Personality, Hobbies, Obsessions, etc."
            minRows={6}
          />
          <Textarea label="Motivations" minRows={6} />
          <Button>Confirm Personal Details</Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
