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
  TextInput,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import {
  IconBook,
  IconList,
  IconListDetails,
  IconMenu,
  IconMenu2,
  IconNotebook,
  IconPackages,
  IconSearch,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";

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
              leftSection={<IconList />}
              component={Link}
              to={`/`}
              label="Directory"
              styles={{
                root: { borderRight: "1px solid #696969" },
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NavLink
              label="Delta Green"
              component={Link}
              to={`/delta-green/overview`}
              active={location.pathname.includes("/delta-green")}
              leftSection={<IconWorld />}
              styles={{
                root: { borderRight: "1px solid #696969" },
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NavLink
              label="Rules"
              component={Link}
              to={`/rules/how-to-play`}
              active={location.pathname.includes("/rules")}
              leftSection={<IconBook />}
              styles={{
                root: { borderRight: "1px solid #696969" },
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NavLink
              label="Equipment and Services"
              component={Link}
              to={`/equipment-and-services/overview`}
              active={location.pathname.includes("/equipment-and-services")}
              leftSection={<IconPackages />}
              styles={{
                root: { borderRight: "1px solid #696969" },
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NavLink
              label="Agent Roster"
              component={Link}
              to={`/agents`}
              active={location.pathname.includes("/agents")}
              leftSection={<IconUsers />}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <SearchBar />
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
            <Flex justify={"center"} align={"center"} component={Link} to="/">
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
        title="Agent Handbook Menu"
      >
        <NavLink
          label="Directory"
          component={Link}
          to={`/`}
          active={location.pathname === "/"}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Delta Green"
          component={Link}
          to={`/delta-green`}
          active={location.pathname.includes("/delta-green")}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Rules"
          component={Link}
          to={`/rules`}
          active={location.pathname.includes("/rules")}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Equipment and Services"
          component={Link}
          to={`/equipment-and-services`}
          active={location.pathname.includes("/equipment-and-services")}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavLink
          label="Agent Roster"
          component={Link}
          to={`/agents`}
          active={location.pathname.includes("/agents")}
          onClick={() => setMobileMenuOpen(false)}
        />
      </Modal>
    </Container>
  );
};
