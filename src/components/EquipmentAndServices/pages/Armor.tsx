import { Grid, Stack, Table, Title } from "@mantine/core";
import { armorList } from "../../../data";

export const Armor = () => {
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack gap="lg">
          <Title>Body Armor</Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th>Armor Rating</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Expense</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {armorList.map((item) => {
                return (
                  <Table.Tr>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td>{item.armorRating}</Table.Td>
                    <Table.Td>{item.description}</Table.Td>
                    <Table.Td tt="capitalize">{item.expense}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
