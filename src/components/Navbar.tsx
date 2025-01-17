import { Container, Grid, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={2}>
          <NavLink
            label="Delta Green"
            component={Link}
            to={`/`}
            active={location.pathname === "/"}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink
            label="Rules"
            component={Link}
            to={`/rules`}
            active={location.pathname === "/rules"}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink
            label="Equipment and Services"
            component={Link}
            to={`/equipment-and-services`}
            active={location.pathname === "/equipment-and-services"}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NavLink
            label="Agent Roster"
            component={Link}
            to={`/agents`}
            active={location.pathname === "/agents"}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
