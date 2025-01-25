import {
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  InputLabel,
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
  IconUser,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";

export const CharacterSheet: React.FC<{ userAgent?: any }> = ({
  userAgent,
}) => {
  const [viewport] = useViewportContext();
  return (
    <Tabs
      orientation={viewport.width > 760 ? "vertical" : "horizontal"}
      variant="pills"
      defaultValue="all"
      inverted
    >
      <Tabs.Panel value="all">
        <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
          <Personal />
          <Divider />
          <Skills />
          <Divider />
          <Equipment />
          <Divider />
          <Notes />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="personal">
        <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
          <Personal />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="skills">
        <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
          <Skills />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="equipment">
        <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
          <Equipment />
        </ScrollArea>
      </Tabs.Panel>
      <Tabs.Panel value="notes">
        <ScrollArea h={viewport.width > 760 ? "95vh" : "88vh"}>
          <Notes />
        </ScrollArea>
      </Tabs.Panel>
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
      </Tabs.List>
    </Tabs>
  );
};
