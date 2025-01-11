import { Grid, Stack, Table, Textarea, Title } from "@mantine/core";

export const Equipment = () => {
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Equipment
          </Title>
          <Textarea label="Armor and Gear" rows={10} ta="start" />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
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
      </Grid.Col>
    </Grid>
  );
};
