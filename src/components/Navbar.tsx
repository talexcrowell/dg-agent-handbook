import {
  ActionIcon,
  ActionIconGroup,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  NavLink,
  Text,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconMenu, IconMenu2, IconNotebook } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const { width } = useViewportSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container size="xl" h={"100%"}>
      {width > 992 ? (
        <Grid gutter={"0"}>
          <Grid.Col span={2}>
            <NavLink
              label="Handbook"
              leftSection={
                <Image
                  src="https://i.imgur.com/GvYNgBC.png"
                  w="auto"
                  h={"25"}
                />
              }
              component={Link}
              to={`/`}
              active={location.pathname === "/"}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NavLink
              label="Delta Green"
              component={Link}
              to={`/delta-green`}
              active={location.pathname === "/delta-green"}
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
          <Grid.Col span={3}>
            <NavLink
              label="Equipment and Services"
              component={Link}
              to={`/equipment-and-services`}
              active={location.pathname === "/equipment-and-services"}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NavLink
              label="Agent Roster"
              component={Link}
              to={`/agents`}
              active={location.pathname === "/agents"}
            />
          </Grid.Col>
        </Grid>
      ) : (
        <Grid align={"center"} h={"100%"}>
          <Grid.Col span={4}>
            <ActionIcon
              size="lg"
              variant="light"
              aria-label="Handbook Menu"
              onClick={() => setMobileMenuOpen(true)}
              my="xs"
            >
              <IconMenu2 size="lg" />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify={"center"} align={"center"}>
              <Image src="https://i.imgur.com/GvYNgBC.png" w="auto" h={"40"} />
            </Flex>
          </Grid.Col>
          <Grid.Col span={4} justify="end"></Grid.Col>
        </Grid>
      )}
      <Modal
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        fullScreen
        title="Handbook Menu"
      >
        <NavLink
          label="Delta Green"
          component={Link}
          to={`/delta-green`}
          active={location.pathname === "/delta-green"}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Rules"
          component={Link}
          to={`/rules`}
          active={location.pathname === "/rules"}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Equipment and Services"
          component={Link}
          to={`/equipment-and-services`}
          active={location.pathname === "/equipment-and-services"}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Agent Roster"
          component={Link}
          to={`/agents`}
          active={location.pathname === "/agents"}
          onClick={() => setMobileMenuOpen(false)}
        />
      </Modal>
    </Container>
  );
};
