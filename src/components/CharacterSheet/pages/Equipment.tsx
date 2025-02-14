import {
  Card,
  Grid,
  Group,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import styles from "../../../Element.module.css";
import { useState } from "react";

export const Equipment = () => {
  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);
  return (
    <Grid py="md" px={viewport.width > 992 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Equipment
          </Title>
          <Card
            withBorder
            styles={{ root: { borderStyle: "dotted", border: "1px" } }}
            onClick={() => setOpened(!opened)}
          >
            <Card.Section className={styles.hoverElement}>
              <Group c="dimmed" justify="center" py="md">
                <IconPlus />
                <Text>Add Equipment and Gear</Text>
              </Group>
            </Card.Section>
            {opened && (
              <Card.Section>
                <TextInput leftSection={<IconSearch />} />
                <Stack></Stack>
              </Card.Section>
            )}
          </Card>

          <Textarea label="Armor and Gear" rows={10} ta="start" />
        </Stack>
      </Grid.Col>
      {/* <Grid.Col span={12}>
        <Table withColumnBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Weapon</Table.Th>
              <Table.Th>Skill %</Table.Th>
              <Table.Th>Base Range</Table.Th>
              <Table.Th>Damage</Table.Th>
              <Table.Th>Armor Piercing</Table.Th>
              <Table.Th>Lethality</Table.Th>
              <Table.Th>Kill Radius</Table.Th>
              <Table.Th>Ammo</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>(a)</Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>(b)</Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>(c)</Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Grid.Col> */}
    </Grid>
  );
};
