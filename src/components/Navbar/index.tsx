import {
  ActionIcon,
  ActionIconGroup,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  Image,
  InputLabel,
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
  IconBackpack,
  IconBook,
  IconBook2,
  IconBookFilled,
  IconBriefcase,
  IconChevronRight,
  IconClipboardData,
  IconJacket,
  IconList,
  IconListDetails,
  IconListSearch,
  IconMenu,
  IconMenu2,
  IconNotebook,
  IconPackages,
  IconSearch,
  IconSpy,
  IconStairs,
  IconSword,
  IconTank,
  IconUserPlus,
  IconUsers,
  IconVocabulary,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useCharacterContext } from "../../contexts/CharacterContext";

export const Navbar = () => {
  const location = useLocation();
  const { width } = useViewportSize();
  const [{ currentCharacter, savedCharacters }] = useCharacterContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container size="xl" h={"100%"}>
      <Flex justify="space-between">
        {width > 760 ? (
          <Group justify="space-between">
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
            <Menu trigger="click-hover" offset={2}>
              <Menu.Target>
                <Button
                  variant="subtle"
                  c="white"
                  bg={location.pathname.includes("/training") ? "gray" : ""}
                >
                  Training
                </Button>
              </Menu.Target>
              <Menu.Dropdown w="175" ta="start">
                <Menu.Label>Introduction</Menu.Label>
                <Menu.Item
                  leftSection={<IconNotebook />}
                  component={Link}
                  to="/training/introduction"
                >
                  Training Guide
                </Menu.Item>
                <Menu.Divider />
                <Menu.Label>Core Resources</Menu.Label>
                <Menu.Item
                  leftSection={<IconClipboardData />}
                  component={Link}
                  to="/training/stats-and-skills"
                >
                  Stats and Skills
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBriefcase />}
                  component={Link}
                  to="/training/professions"
                >
                  Professions
                </Menu.Item>
                <Menu.Divider />
                <Menu.Label>Supplemental Resources</Menu.Label>
                <Menu.Item
                  leftSection={<IconSpy />}
                  component={Link}
                  to="/training/tradecraft"
                >
                  Tradecraft
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBook2 />}
                  component={Link}
                  to="/training/glossary"
                >
                  Glossary
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu trigger="click-hover" offset={2}>
              <Menu.Target>
                <Button
                  variant="subtle"
                  c="white"
                  bg={location.pathname.includes("/agents") ? "gray" : ""}
                >
                  Agents
                </Button>
              </Menu.Target>
              <Menu.Dropdown w="175" ta="start">
                {currentCharacter.name &&
                  savedCharacters.filter(
                    (agent) => agent.name === currentCharacter.name,
                  ).length !== 0 && (
                    <>
                      <Menu.Label>Current Agent</Menu.Label>
                      <Menu.Item
                        px="xs"
                        leftSection={
                          <Avatar size="sm" src={currentCharacter.image} />
                        }
                        component={Link}
                        to={`/agents/sheet/${currentCharacter.codename}`}
                      >
                        Agent {currentCharacter.codename}
                      </Menu.Item>
                      <Menu.Divider />
                    </>
                  )}
                <Menu.Label>Personnel Records</Menu.Label>
                <Menu.Item
                  leftSection={<IconAddressBook />}
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
        ) : (
          <Group justify="space-between" align="center" w={"100%"} h={50}>
            <ActionIcon
              onClick={() => setMobileMenuOpen(true)}
              variant="outline"
              size="lg"
            >
              <IconList />
            </ActionIcon>
            <Center>
              <UnstyledButton component={Link} to="/directory">
                <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={45} />
              </UnstyledButton>
            </Center>
            <Box w="45" />
          </Group>
        )}
        {width > 992 && <SearchBar />}
      </Flex>
      <Drawer
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title={
          <Group>
            <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={35} />
            <Text>Agent Handbook</Text>
          </Group>
        }
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
          active={location.pathname.includes("/delta-green")}
          leftSection={<IconWorld />}
        >
          <NavLink
            label="Welcome"
            component={Link}
            to={`/delta-green/welcome`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="The World of Delta Green"
            component={Link}
            to={`/delta-green/the-world-of-delta-green`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="What is Delta Green?"
            component={Link}
            to={`/delta-green/what-is-delta-green`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Fundamentals"
            component={Link}
            to={`/delta-green/fundamentals`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="How the Game is Played"
            component={Link}
            to={`/delta-green/how-the-game-is-played`}
            onClick={() => setMobileMenuOpen(false)}
          />
        </NavLink>
        <NavLink
          label="Rules"
          active={location.pathname.includes("/rules")}
          leftSection={<IconBook />}
        >
          <NavLink
            label="How to Play"
            component={Link}
            to={`/rules/how-to-play`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Combat"
            component={Link}
            to={`/rules/combat`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Sanity"
            component={Link}
            to={`/rules/sanity`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Home"
            component={Link}
            to={`/rules/home`}
            onClick={() => setMobileMenuOpen(false)}
          />
        </NavLink>
        <NavLink
          label="Equipment and Services"
          active={location.pathname.includes("/equipment-and-services")}
          leftSection={<IconPackages />}
        >
          <NavLink
            label="Overview"
            component={Link}
            to={`/equipment-and-services/overview`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Weapons"
            component={Link}
            to={`/equipment-and-services/weapons`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Body Armor"
            component={Link}
            to={`/equipment-and-services/armor`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Vehicles"
            component={Link}
            to={`/equipment-and-services/vehicles`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            label="Gear and Services"
            component={Link}
            to={`/equipment-and-services/gear-and-services`}
            onClick={() => setMobileMenuOpen(false)}
          />
        </NavLink>

        <NavLink
          label="Training"
          active={location.pathname.includes("/training")}
          leftSection={<IconStairs />}
        >
          <InputLabel size="xs" c="dimmed">
            Introduction
          </InputLabel>
          <NavLink
            autoContrast
            label="Training Guide"
            component={Link}
            to={`/training/introduction`}
            active={location.pathname.includes("/training/introduction")}
            leftSection={<IconNotebook />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <Divider />
          <InputLabel size="xs" c="dimmed">
            Core Resources
          </InputLabel>
          <NavLink
            autoContrast
            label="Stats and Skills"
            component={Link}
            to={`/training/stats-and-skills`}
            active={location.pathname.includes("/training/stats-and-skills")}
            leftSection={<IconBriefcase />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Professions"
            component={Link}
            to={`/training/professions`}
            active={location.pathname.includes("/training/professions")}
            leftSection={<IconBriefcase />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <Divider />
          <InputLabel size="xs" c="dimmed">
            Supplementary Resources
          </InputLabel>
          <NavLink
            autoContrast
            label="Tradecraft"
            component={Link}
            to={`/training/tradecraft`}
            active={location.pathname.includes("/training/tradecraft")}
            leftSection={<IconSpy />}
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            autoContrast
            label="Glossary"
            component={Link}
            to={`/training/glossary`}
            active={location.pathname.includes("/training/glossary")}
            leftSection={<IconBook2 />}
            onClick={() => setMobileMenuOpen(false)}
          />
        </NavLink>

        <NavLink
          label="Agents"
          active={location.pathname.includes("/agents")}
          leftSection={<IconAddressBook />}
        >
          {currentCharacter.name &&
            savedCharacters.filter(
              (agent) => agent.name === currentCharacter.name,
            ).length !== 0 && (
              <>
                <InputLabel size="xs" c="dimmed">
                  Current Agent
                </InputLabel>
                <NavLink
                  autoContrast
                  label={`Agent ${currentCharacter.codename}`}
                  component={Link}
                  to={`/agents/sheet/${currentCharacter.codename}`}
                  active={location.pathname.includes("/agents/sheet")}
                  leftSection={
                    <Avatar src={currentCharacter.image} size="sm" />
                  }
                  onClick={() => setMobileMenuOpen(false)}
                />
              </>
            )}
          <Divider />
          <InputLabel size="xs" c="dimmed">
            Personnel Records
          </InputLabel>
          <NavLink
            autoContrast
            label="Agent Roster"
            component={Link}
            to={`/agents/roster`}
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
        </NavLink>
      </Drawer>
    </Container>
  );
};
