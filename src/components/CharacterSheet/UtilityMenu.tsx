import { ActionIcon, Button, Group, Select } from "@mantine/core";
import {
  IconArrowLeft,
  IconDice4,
  IconHistory,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useViewportContext } from "../../contexts/ViewportContext";
import { Link } from "react-router-dom";

export const UtilityMenu = ({
  handleInPerson,
  inPerson,
  toggleRollLog,
  toggleDiceRoller,
  handleMobileTab,
  tabValue,
}: any) => {
  const [viewport] = useViewportContext();
  return viewport.width < 760 ? (
    <Group my="sm" justify="space-between">
      <ActionIcon
        size="xl"
        onClick={handleInPerson}
        variant={inPerson ? "filled" : "outline"}
        color={inPerson ? "green" : "gray"}
        aria-label="In-Person"
      >
        <IconUsersGroup />
      </ActionIcon>

      <Select
        value={tabValue}
        onChange={(val, opt) => handleMobileTab(val)}
        data={[
          { label: "Character Sheet", value: "all" },
          { label: "Settings", value: "settings" },
          {
            group: "Sheet Sections",
            items: [
              { label: "Personal", value: "personal" },
              { label: "Skills", value: "skills" },
              { label: "Equipment", value: "equipment" },
              { label: "Notes", value: "notes" },
            ],
          },
        ]}
        size='md'
        allowDeselect={false}

        w='175'
      />
      <ActionIcon
        size="xl"
        variant={"light"}
        color={"red"}
        aria-label="Back to Roster"
        component={Link}
        to="/agents/roster"
      >
        <IconArrowLeft />
      </ActionIcon>
    </Group>
  ) : (
    <Group my="sm" mx="md" justify="space-between">
      <Button
        leftSection={<IconUsersGroup />}
        maw={375}
        onClick={handleInPerson}
        color={inPerson ? "green" : "grey"}
        variant={inPerson ? "filled" : "outline"}
      >
        {viewport.width > 600 && "In-Person Mode"}
      </Button>
      <Group>
        {inPerson && (
          <Button
            leftSection={<IconDice4 />}
            maw={375}
            variant={"outline"}
            onClick={toggleDiceRoller}
          >
            {viewport.width > 600 && "Dice Roller"}
          </Button>
        )}
        {inPerson && (
          <Button
            leftSection={<IconHistory />}
            maw={375}
            onClick={toggleRollLog}
            variant={"outline"}
          >
            {viewport.width > 600 && "Roll Log"}
          </Button>
        )}
      </Group>
    </Group>
  );
};
