import { Grid, Group, Stack, Table, Text, Title } from "@mantine/core";
import { armorList } from "../../../data";
import { IconTriangleFilled } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

export const Armor = () => {
  const { width } = useViewportSize();
  
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
    <Grid
      p={width > 600 ? "md" : 0}
      gutter={width > 600 ? "md" : "0"}
      id="armor"
    >
      <Grid.Col span={12}>
        <Stack gap="lg">
          <Title>Body Armor</Title>
          <Text>
            While modern construction and materials such as Kevlar and ceramics
            have come a long way, they cannot protect you against all threats,
            and usually also cover only a very small part of you. It’s always
            better to stay behind cover and not get hit.
          </Text>
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
                    <Table.Td tt="capitalize">
                      <Group>
                        <IconTriangleFilled
                          color={calculateIcon(item.expense)}
                        />
                        {item.expense}
                      </Group>
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
