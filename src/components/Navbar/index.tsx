import {
  ActionIcon,
  ActionIconGroup,
  Badge,
  Button,
  Container,
  Drawer,
  Flex,
  Grid,
  Group,
  Image,
  Menu,
  Modal,
  NavLink,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import {
  IconAddressBook,
  IconBook,
  IconBriefcase,
  IconList,
  IconListDetails,
  IconMenu,
  IconMenu2,
  IconNotebook,
  IconPackages,
  IconSearch,
  IconSpy,
  IconUserPlus,
  IconUsers,
  IconVocabulary,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const location = useLocation();
  const { width } = useViewportSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container size="xl" h={"100%"}>
      <Flex justify="space-between">
        {/* {width > 992 ? (
        <Grid gutter={"0"} my={1}>
          <Grid.Col span={2}>
            <NavLink
              leftSection={<IconList />}
              component={Link}
              to={`/directory`}
              active={location.pathname.includes("/directory")}
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
              label={
                <Text truncate="end" size="sm">
                  Equipment and Services
                </Text>
              }
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
              label={
                <Text truncate="end" size="sm">
                  Agent Resources
                </Text>
              }
              active={location.pathname.includes("/agents")}
              leftSection={<IconAddressBook />}
              styles={{
                children: { backgroundColor: "#3b3b3b", paddingLeft: 0 },
              }}
              opened={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <NavLink
                autoContrast
                label="Agent Roster"
                component={Link}
                to={`/agents`}
                active={location.pathname.includes("/agents/roster")}
                leftSection={<IconUsers />}
                onClick={() => setMenuOpen(false)}
              />
              <NavLink
                autoContrast
                label="Create an Agent"
                component={Link}
                to={`/agents/new`}
                active={location.pathname.includes("/agents/new")}
                leftSection={<IconUserPlus />}
                onClick={() => setMenuOpen(false)}
              />
              <NavLink
                autoContrast
                label="Professions"
                component={Link}
                to={`/agents/professions`}
                active={location.pathname.includes("/agents/professions")}
                leftSection={<IconBriefcase />}
                onClick={() => setMenuOpen(false)}
              />
              <NavLink
                autoContrast
                label="Tradecraft"
                component={Link}
                to={`/agents/tradecraft`}
                active={location.pathname.includes("/agents/tradecraft")}
                leftSection={<IconSpy />}
                onClick={() => setMenuOpen(false)}
              />
              <NavLink
                autoContrast
                label="Glossary"
                component={Link}
                to={`/agents/glossary`}
                active={location.pathname.includes("/agents/glossary")}
                leftSection={<IconVocabulary />}
                onClick={() => setMenuOpen(false)}
              />
            </NavLink>
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
            <Flex
              justify={"center"}
              align={"center"}
              component={Link}
              to="/directory"
            >
              <Image src="https://i.imgur.com/GvYNgBC.png" w="auto" h={"40"} />
            </Flex>
          </Grid.Col>
          <Grid.Col span={4} justify="end"></Grid.Col>
        </Grid>
      )} */}
        <Group justify="space-between" pr="md">
          <UnstyledButton component={Link} to="/directory">
            <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={40} />
          </UnstyledButton>
          <Button
            component={Link}
            to="/delta-green"
            variant="subtle"
            c="white"
            bg={location.pathname.includes("/delta-green") ? "gray" : ""}
          >
            Delta Green
          </Button>
          <Button
            component={Link}
            to="/rules"
            variant="subtle"
            c="white"
            bg={location.pathname.includes("/rules") ? "gray" : ""}
          >
            Rules
          </Button>
          <Button
            component={Link}
            to="/equipment-and-services"
            variant="subtle"
            c="white"
            bg={
              location.pathname.includes("/equipment-and-services")
                ? "gray"
                : ""
            }
          >
            Equipment & Services
          </Button>
          <Button
            component={Link}
            to="/training"
            variant="subtle"
            c="white"
            bg={location.pathname.includes("/training") ? "gray" : ""}
          >
            Training
          </Button>
          <Menu trigger="click-hover" offset={2}>
            <Menu.Target>
              <Button
                variant="subtle"
                c="white"
                bg={location.pathname.includes("/agents") ? "gray" : ""}
              >
                Agent Resources
              </Button>
            </Menu.Target>
            <Menu.Dropdown w="175" ta="start">
              <Menu.Item
                leftSection={<IconBriefcase />}
                component={Link}
                to="/agents/professions"
              >
                Professions
              </Menu.Item>
              <Menu.Item
                leftSection={<IconSpy />}
                component={Link}
                to="/agents/tradecraft"
              >
                Tradecraft
              </Menu.Item>
              <Menu.Item
                leftSection={<IconUsers />}
                component={Link}
                to="/agents/roster"
              >
                Agent Roster
              </Menu.Item>
              <Menu.Item
                leftSection={<IconUserPlus />}
                component={Link}
                to="/agents/new"
              >
                Create An Agent
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          {/* <Button
            component={Link}
            to="/agents"
            variant="subtle"
            c="white"
            bg={location.pathname.includes("/handler") ? "gray" : ""}
          >
            Handler Resources
          </Button> */}
        </Group>
        <SearchBar />
      </Flex>
      <Drawer
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Agent Handbook"
      >
        {mobileMenuOpen && <SearchBar setMobileMenuOpen={setMobileMenuOpen} />}
        <NavLink
          label="Directory"
          component={Link}
          to={`/directory`}
          active={location.pathname === "/directory"}
          onClick={() => setMobileMenuOpen(false)}
          leftSection={<IconList />}
        />
        <NavLink
          label="Delta Green"
          component={Link}
          to={`/delta-green`}
          active={location.pathname.includes("/delta-green")}
          onClick={() => setMobileMenuOpen(false)}
          leftSection={<IconWorld />}
        />
        <NavLink
          label="Rules"
          component={Link}
          to={`/rules`}
          active={location.pathname.includes("/rules")}
          onClick={() => setMobileMenuOpen(false)}
          leftSection={<IconBook />}
        />
        <NavLink
          label="Equipment and Services"
          component={Link}
          to={`/equipment-and-services`}
          active={location.pathname.includes("/equipment-and-services")}
          onClick={() => setMobileMenuOpen(false)}
          leftSection={<IconPackages />}
        />
        <NavLink
          label="Agent Resources"
          active={location.pathname.includes("/agents")}
          leftSection={<IconAddressBook />}
        >
          <NavLink
            autoContrast
            label="Agent Roster"
            component={Link}
            to={`/agents`}
            active={location.pathname.includes("/agents/roster")}
            leftSection={<IconUsers />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Create an Agent"
            component={Link}
            to={`/agents/new`}
            active={location.pathname.includes("/agents/new")}
            leftSection={<IconUserPlus />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Professions"
            component={Link}
            to={`/agents/professions`}
            active={location.pathname.includes("/agents/professions")}
            leftSection={<IconBriefcase />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Tradecraft"
            component={Link}
            to={`/agents/tradecraft`}
            active={location.pathname.includes("/agents/tradecraft")}
            leftSection={<IconSpy />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Glossary"
            component={Link}
            to={`/agents/glossary`}
            active={location.pathname.includes("/agents/glossary")}
            leftSection={<IconVocabulary />}
            onClick={() => setMobileMenuOpen(false)}
          />
        </NavLink>
      </Drawer>
    </Container>
  );
};
