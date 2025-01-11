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

export const CharacterSheet: React.FC<{ userAgent?: any }> = ({
  userAgent,
}) => {
  return (
    <Tabs orientation="vertical" defaultValue="all">
      <Tabs.List>
        <Tabs.Tab value="all" leftSection={<IconFile />}>
          All
        </Tabs.Tab>
        <Tabs.Tab value="personal" leftSection={<IconUser />}>
          Personal
        </Tabs.Tab>
        <Tabs.Tab value="skills" leftSection={<IconList />}>
          Skills
        </Tabs.Tab>
        <Tabs.Tab value="equipment" leftSection={<IconBackpack />}>
          Equipment
        </Tabs.Tab>
        <Tabs.Tab value="notes" leftSection={<IconNotes />}>
          Notes
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="all">
        <ScrollArea h={"95vh"}>
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
        <Personal />
      </Tabs.Panel>
      <Tabs.Panel value="skills">
        <Skills />
      </Tabs.Panel>
      <Tabs.Panel value="equipment">
        <Equipment />
      </Tabs.Panel>
      <Tabs.Panel value="notes">
        <Notes />
      </Tabs.Panel>
    </Tabs>
  );
};
