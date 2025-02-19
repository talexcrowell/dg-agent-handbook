import {
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Grid,
  Group,
  InputLabel,
  Loader,
  NumberInput,
  ScrollArea,
  Stack,
  Table,
  Tabs,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Personal } from "./pages/Personal";
import { Skills } from "./pages/Skills";
import { Equipment } from "./pages/Equipment";
import { Notes } from "./pages/Notes";
import {
  IconBackpack,
  IconFile,
  IconList,
  IconNotes,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { useEffect, useState } from "react";
import { Settings } from "./pages/Settings";


export const CharacterSheet: React.FC = () => {
  const [viewport] = useViewportContext();
  const [{ currentCharacter }] = useCharacterContext();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    let newObj = { ...currentCharacter };
    if (!currentCharacter.equipment) {
      newObj.equipment = [];
    }
    if (!currentCharacter.unnaturalExperiences) {
      newObj.unnaturalExperiences = "";
    }
    if (!currentCharacter.lifeDevelopments) {
      newObj.lifeDevelopments = "";
    }
    if (!currentCharacter.wounds) {
      newObj.wounds = "";
    }
    if (!currentCharacter.otherGear) {
      newObj.otherGear = "";
    }
    setCharacter({ ...newObj });
  }, [currentCharacter]);

  const handleUpdateCharacter = (
    key: string,
    val: string,
    secondaryKey?: string
  ) => {
    let characterObj = { ...character };
    switch (key) {
      case "stats":
        characterObj[key][secondaryKey] = val;
        break;
      case "attributes":
        characterObj[key][secondaryKey].current = val;
        break;
      case "bonds":
        characterObj[key][secondaryKey].value = val;
        break;
      case "equipment":
        characterObj[key] = [...characterObj[key], { ...val }];
        break;
      case "equipmentDelete":
        let newArr = characterObj.equipment.filter(
          (item) => item.name !== val.name
        );
        characterObj.equipment = [...newArr];
        break;
      default:
        characterObj[key] = val;
        break;
    }

    setCharacter({ ...characterObj });
    localStorage.setItem(
      "currentCharacter",
      JSON.stringify({ ...characterObj })
    );
  };

  if (!character?.name) {
    return (
      <Center h={"70vh"}>
        <Stack>
          <Flex justify="center">
            <Loader color="#696969" size={"xl"} />
          </Flex>
          <Text c="dimmed">Loading agent information...</Text>
        </Stack>
      </Center>
    );
  } else {
    return (
      <Tabs
        orientation={viewport.width > 760 ? "vertical" : "horizontal"}
        variant="outline"
        defaultValue="all"
        inverted={viewport.width < 760}
      >
        {viewport.width > 760 && (
          <Tabs.List
            justify={viewport.width > 760 ? "flex-start" : "space-between"}
          >
            <Tabs.Tab value="all" leftSection={<IconFile />}>
              {viewport.width > 600 && "All"}
            </Tabs.Tab>
            <Tabs.Tab value="personal" leftSection={<IconUser />}>
              {viewport.width > 600 && "Personal"}
            </Tabs.Tab>
            <Tabs.Tab value="skills" leftSection={<IconList />}>
              {viewport.width > 600 && "Skills"}
            </Tabs.Tab>
            <Tabs.Tab value="equipment" leftSection={<IconBackpack />}>
              {viewport.width > 600 && "Equipment"}
            </Tabs.Tab>
            <Tabs.Tab value="notes" leftSection={<IconNotes />}>
              {viewport.width > 600 && "Notes"}
            </Tabs.Tab>
            {/* <Tabs.Tab value="settings" leftSection={<IconSettings />}>
              {viewport.width > 600 && "Settings"}
            </Tabs.Tab> */}
          </Tabs.List>
        )}
        <Tabs.Panel value="all">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
            <Divider />
            <Skills
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
            <Divider />
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
            <Divider />
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="personal">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Personal
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="skills">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Skills
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="equipment">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Equipment
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="notes">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Notes
              currentCharacter={character}
              handleUpdateCharacter={handleUpdateCharacter}
            />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
            <Settings currentCharacter={character} />
          </ScrollArea>
        </Tabs.Panel>
        {viewport.width < 760 && (
          <Tabs.List
            justify={viewport.width > 760 ? "flex-start" : "space-between"}
          >
            <Tabs.Tab value="all" leftSection={<IconFile />}>
              {viewport.width > 600 && "All"}
            </Tabs.Tab>
            <Tabs.Tab value="personal" leftSection={<IconUser />}>
              {viewport.width > 600 && "Personal"}
            </Tabs.Tab>
            <Tabs.Tab value="skills" leftSection={<IconList />}>
              {viewport.width > 600 && "Skills"}
            </Tabs.Tab>
            <Tabs.Tab value="equipment" leftSection={<IconBackpack />}>
              {viewport.width > 600 && "Equipment"}
            </Tabs.Tab>
            <Tabs.Tab value="notes" leftSection={<IconNotes />}>
              {viewport.width > 600 && "Notes"}
            </Tabs.Tab>
            {/* <Tabs.Tab value="settings" leftSection={<IconSettings />}>
              {viewport.width > 600 && "Settings"}
            </Tabs.Tab> */}
          </Tabs.List>
        )}
      </Tabs>
    );
  }
};

export default CharacterSheet;
