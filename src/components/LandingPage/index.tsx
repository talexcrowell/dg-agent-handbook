import {
  Button,
  Card,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Grid py="lg">
      <Grid.Col>
        <Title>Agent's Handbook</Title>
        <Text></Text>
      </Grid.Col>
      <Grid.Col>
        <SimpleGrid cols={3}>
          <Card component={Link} to="/delta-green">
            <Card.Section>
              <Image src={"https://i.imgur.com/4st6AO9.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Delta Green</Text>
            </Group>
          </Card>
          <Card component={Link} to="/rules">
            <Card.Section>
              <Image src={"https://i.imgur.com/usnj5MR.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Game Rules</Text>
            </Group>
          </Card>
          <Card component={Link} to="/rules/training-video">
            Training Video
          </Card>
          <Card component={Link} to="/equipment-and-services">
            Equipment and Services
          </Card>
          <Card component={Link} to="/agents">
            Agent Roster
          </Card>
          <Card component={Link} to="/agents/new">
            Create an Agent
          </Card>
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
};
