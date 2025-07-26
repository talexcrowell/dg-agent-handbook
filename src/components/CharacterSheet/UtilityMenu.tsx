import { ActionIcon, Button, Group } from "@mantine/core";
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
}: any) => {
  const [viewport] = useViewportContext();
  return viewport.width < 760 ? (
    <Group my="sm" justify="space-between">
      <Group>
        <ActionIcon
          size="xl"
          onClick={handleInPerson}
          variant={inPerson ? "filled" : "outline"}
          color={inPerson ? "green" : "gray"}
          aria-label="In-Person"
        >
          <IconUsersGroup />
        </ActionIcon>
      </Group>
      <Group>
        {inPerson && (
          <ActionIcon
            size="xl"
            aria-label="Dice Roller"
            variant="outline"
            onClick={toggleDiceRoller}
          >
            <IconDice4 />
          </ActionIcon>
        )}
        {inPerson && (
          <ActionIcon
            size="xl"
            aria-label="Roll Log"
            variant="outline"
            onClick={toggleRollLog}
          >
            <IconHistory />
          </ActionIcon>
        )}
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
