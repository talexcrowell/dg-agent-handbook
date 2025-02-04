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
import { useViewportContext } from "../../contexts/ViewportContext";

export const LandingPage = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid py="lg">
      <Grid.Col>
        <Title>Agent Handbook Directory</Title>
        <Text></Text>
      </Grid.Col>
      <Grid.Col>
        <SimpleGrid cols={viewport.width > 760 ? 3 : 2}>
          <Card component={Link} to="/delta-green/overview">
            <Card.Section>
              <Image src={"https://i.imgur.com/4st6AO9.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Delta Green</Text>
            </Group>
          </Card>
          <Card component={Link} to="/rules/how-to-play">
            <Card.Section>
              <Image src={"https://i.imgur.com/usnj5MR.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Game Rules</Text>
            </Group>
          </Card>
          <Card component={Link} to="/rules/training-video">
            <Card.Section>
              <Image src={"https://i.imgur.com/c1Ne6Io.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Training Video</Text>
            </Group>
          </Card>
          <Card component={Link} to="/equipment-and-services/overview">
            <Card.Section>
              <Image src={"https://i.imgur.com/dIQQX1X.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Equipment and Services</Text>
            </Group>
          </Card>
          <Card component={Link} to="/agents">
            <Card.Section>
              <Image src={"https://i.imgur.com/7pu9wM0.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Agent Roster</Text>
            </Group>
          </Card>
          <Card component={Link} to="/agents/new">
            <Card.Section>
              <Image src={"https://i.imgur.com/CqrNu4c.png"} h={150} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>Create an Agent</Text>
            </Group>
          </Card>
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
};
