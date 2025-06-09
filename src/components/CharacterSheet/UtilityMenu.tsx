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
          <ActionIcon size="xl" aria-label="Roll Log" onClick={toggleRollLog}>
            <IconHistory />
          </ActionIcon>
        )}
        {inPerson && (
          <ActionIcon
            size="xl"
            aria-label="Dice Roller"
            // onClick={handleRollFailures}
          >
            <IconDice4 />
          </ActionIcon>
        )}
        <ActionIcon
          size="xl"
          variant={"light"}
          color={"red"}
          aria-label="Back to Roster"
          component={Link}
          to='/agents/roster'
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
      >
        {viewport.width > 600 && "In-Person Mode"}
      </Button>
      <Group>
        {inPerson && (
          <Button
            leftSection={<IconHistory />}
            maw={375}
            onClick={toggleRollLog}
          >
            {viewport.width > 600 && "Roll Log"}
          </Button>
        )}
      </Group>
    </Group>
  );
};
