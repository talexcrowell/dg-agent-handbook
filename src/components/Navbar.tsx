import { Container, Grid, NavLink } from "@mantine/core";
import { useCharacterContext } from "../contexts/CharacterContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [{ currentCharacter }] = useCharacterContext();
  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={2}>
          <NavLink label="Delta Green" component={Link} to={`/`} />
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink label="Rules" component={Link} to={`/rules`} />
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink label="Agent Roster" component={Link} to={`/agents`} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
