import {
  ActionIcon,
  ActionIconGroup,
  AppShell,
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
  ScrollArea,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import {
  IconAddressBook,
  IconBackpack,
  IconBook,
  IconBook2,
  IconBookFilled,
  IconBriefcase,
  IconChartGridDots,
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
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useCharacterContext } from "../../contexts/CharacterContext";

export const Navbar: React.FC<{ toggleMobile: any }> = ({ toggleMobile }) => {
  const location = useLocation();
  const [{ currentCharacter, savedCharacters }] = useCharacterContext();
  const { width } = useViewportSize();
  return (
    <>
      {width < 760 && (
        <AppShell.Section>
          <Stack gap="xs" my="sm">
            <Center>
              <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={100} />
            </Center>
          </Stack>
        </AppShell.Section>
      )}
      <AppShell.Section grow component={ScrollArea}>
        <Stack gap="0">
          <NavLink
            label="Directory"
            component={Link}
            to={`/directory`}
            active={location.pathname === "/directory"}
            color="gray"
            leftSection={<IconList />}
            onClick={toggleMobile}
          />
          <NavLink
            label="Delta Green"
            active={location.pathname.includes("/delta-green")}
            leftSection={<IconWorld />}
            color="gray"
          >
            <NavLink
              label="Welcome"
              component={Link}
              to={`/delta-green/welcome`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/delta-green/welcome`)}
              color="gray"
            />
            <NavLink
              label="The World of Delta Green"
              component={Link}
              to={`/delta-green/the-world-of-delta-green`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/delta-green/the-world-of-delta-green`,
              )}
              color="gray"
            />
            <NavLink
              label="What is Delta Green?"
              component={Link}
              to={`/delta-green/what-is-delta-green`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/delta-green/what-is-delta-green`,
              )}
              color="gray"
            />
            <NavLink
              label="Fundamentals"
              component={Link}
              to={`/delta-green/fundamentals`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/delta-green/fundamentals`)}
              color="gray"
            />
            <NavLink
              label="How the Game is Played"
              component={Link}
              to={`/delta-green/how-the-game-is-played`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/delta-green/how-the-game-is-played`,
              )}
              color="gray"
            />
          </NavLink>
          <NavLink
            label="Rules"
            active={location.pathname.includes("/rules")}
            leftSection={<IconBook />}
            color="gray"
          >
            <NavLink
              label="How to Play"
              component={Link}
              to={`/rules/how-to-play`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/rules/how-to-play`)}
              color="gray"
            />
            <NavLink
              label="Combat"
              component={Link}
              to={`/rules/combat`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/rules/combat`)}
              color="gray"
            />
            <NavLink
              label="Sanity"
              component={Link}
              to={`/rules/sanity`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/rules/sanity`)}
              color="gray"
            />
            <NavLink
              label="Home"
              component={Link}
              to={`/rules/home`}
              onClick={toggleMobile}
              active={location.pathname.includes(`/rules/home`)}
              color="gray"
            />
          </NavLink>
          <NavLink
            label="Equipment and Services"
            active={location.pathname.includes("/equipment-and-services")}
            leftSection={<IconPackages />}
            color="gray"
          >
            <NavLink
              label="Overview"
              component={Link}
              to={`/equipment-and-services/overview`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/overview`,
              )}
              color="gray"
            />
            <NavLink
              label="Weapons"
              component={Link}
              to={`/equipment-and-services/weapons`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/weapons`,
              )}
              color="gray"
            />
            <NavLink
              label="Body Armor"
              component={Link}
              to={`/equipment-and-services/armor`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/armor`,
              )}
              color="gray"
            />
            <NavLink
              label="Vehicles"
              component={Link}
              to={`/equipment-and-services/vehicles`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/vehicles`,
              )}
              color="gray"
            />
            <NavLink
              label="Gear and Services"
              component={Link}
              to={`/equipment-and-services/gear-and-services`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/gear-and-services`,
              )}
              color="gray"
            />

            <NavLink
              label="Search"
              component={Link}
              to={`/equipment-and-services/search`}
              onClick={toggleMobile}
              active={location.pathname.includes(
                `/equipment-and-services/search`,
              )}
              color="gray"
            />
          </NavLink>
          <NavLink
            label="Training"
            active={location.pathname.includes("/training")}
            leftSection={<IconStairs />}
            color="gray"
          >
            <NavLink
              autoContrast
              label="Training Guide"
              component={Link}
              to={`/training/introduction`}
              active={location.pathname.includes("/training/introduction")}
              onClick={toggleMobile}
              color="gray"
            />
            <NavLink
              autoContrast
              label="Stats and Skills"
              component={Link}
              to={`/training/stats-and-skills`}
              active={location.pathname.includes("/training/stats-and-skills")}
              onClick={toggleMobile}
              color="gray"
            />
            <NavLink
              autoContrast
              label="Professions"
              component={Link}
              to={`/training/professions`}
              active={location.pathname.includes("/training/professions")}
              onClick={toggleMobile}
              color="gray"
            />
            <NavLink
              autoContrast
              label="Tradecraft"
              component={Link}
              to={`/training/tradecraft`}
              active={location.pathname.includes("/training/tradecraft")}
              onClick={toggleMobile}
              color="gray"
            />
            <NavLink
              autoContrast
              label="Glossary"
              component={Link}
              to={`/training/glossary`}
              active={location.pathname.includes("/training/glossary")}
              onClick={toggleMobile}
              color="gray"
            />
          </NavLink>
          <NavLink
            label="Agents"
            active={location.pathname.includes("/agents")}
            leftSection={<IconAddressBook />}
            color="gray"
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
                    onClick={toggleMobile}
                    color="gray"
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
              onClick={toggleMobile}
              color="gray"
            />
            <NavLink
              autoContrast
              label="Create an Agent"
              component={Link}
              to={`/agents/new`}
              active={location.pathname.includes("/agents/new")}
              leftSection={<IconUserPlus />}
              onClick={toggleMobile}
              color="gray"
            />
          </NavLink>
          {/* <NavLink
            component={Link}
            label="Handler Resources"
            to="/handler-resources"
            active={location.pathname.includes("/agents/new")}
            leftSection={<IconChartGridDots />}
            color="gray"
            onClick={toggleMobile}
          /> */}
        </Stack>
      </AppShell.Section>
    </>
  );
};
