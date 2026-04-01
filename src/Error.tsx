import { faker } from "@faker-js/faker";
import { Button, Center, Stack, Text } from "@mantine/core";
import {
  IconError404,
  IconMoodSadFilled,
  IconRefresh,
} from "@tabler/icons-react";

export const Error = () => {
  return (
    <Center>
      <Stack align="center" gap="lg">
        <IconMoodSadFilled size="124" />
        <Stack align="center" gap="xs">
          <Text fw={700} size="xl">
            Oh no!
          </Text>
          <Text>There appears to have been an error.</Text>
          <Text tt="capitalize" c='dimmed'>[ Error Code: {faker.animal.type()} ]</Text>
        </Stack>
        <Button
          variant="outline"
          onClick={() => location.reload()}
          size="lg"
          leftSection={<IconRefresh />}
          mt="lg"
        >
          Refresh
        </Button>
      </Stack>
    </Center>
  );
};
