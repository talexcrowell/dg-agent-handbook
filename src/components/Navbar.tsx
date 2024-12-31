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
          <NavLink label="Rules" component={Link} to={`/rules`}>
            <NavLink label="The Game" component={Link} to="/rules/game" />
            <NavLink label="Combat" component={Link} to="/rules/combat" />
            <NavLink label="Sanity" component={Link} to="/rules/sanity" />
            <NavLink label="Home" component={Link} to="/rules/home" />
          </NavLink>
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink label="Agents">
            <NavLink
              label="Agent Roster"
              component={Link}
              to={`/agents/roster`}
            />
            <NavLink
              label="Current Agent"
              component={Link}
              to={`/agents/${currentCharacter.codename}`}
            />
          </NavLink>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
