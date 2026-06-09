import { Grid, Group, Stack, Table, Text, Title } from "@mantine/core";
import { armorList } from "../../../data";
import { IconTriangleFilled } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Armor = () => {
  const [viewport] = useViewportContext();

  const calculateIcon = (expense) => {
    let str;
    switch (expense) {
      case "incidental":
        str = "green";
        break;
      case "standard":
        str = "blue";
        break;
      case "unusual":
        str = "yellow";
        break;
      case "major":
        str = "orange";
        break;
      case "extreme":
        str = "red";
        break;
    }
    return str;
  };

  return (
    <Grid id="armor" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Stack gap="xs">
            <Title td="underline" id="body-armor">
              Body Armor
            </Title>
            <Text>
              While modern construction and materials such as Kevlar and
              ceramics have come a long way, they cannot protect you against all
              threats, and usually also cover only a very small part of you.
              It’s always better to stay behind cover and not get hit.
            </Text>
          </Stack>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th ta="center">Armor Rating</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Expense</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {armorList.map((item) => {
                return (
                  <Table.Tr>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td ta="center">{item.armorRating}</Table.Td>
                    <Table.Td>{item.description}</Table.Td>
                    <Table.Td tt="capitalize">
                      <Stack align="center">
                        <IconTriangleFilled
                          color={calculateIcon(item.expense)}
                        />
                      </Stack>
                    </Table.Td>
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

export default Armor;
