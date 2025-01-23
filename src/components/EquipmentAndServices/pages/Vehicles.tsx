import {
  Divider,
  Grid,
  Group,
  ScrollArea,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { vehicleList } from "../../../data";
import { IconTriangleFilled } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Vehicles = () => {
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
    <ScrollArea h={"95vh"}>
      <Grid
        p={viewport.width > 600 ? "md" : 0}
        gutter={viewport.width > 600 ? "md" : "0"}
        id="vehicles"
      >
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline">Vehicles</Title>
            <Text>
              A vehicle counts as a huge target. It takes damage from unarmed
              attacks and small weapons such as knives and clubs only when the
              Handler thinks it makes sense.
            </Text>
            <Text>
              A vehicle that loses half its Hit Points can’t be operated without
              a Drive or Pilot test. If a Drive or Pilot test fumbles, the
              vehicle fails altogether until repaired. A vehicle that loses all
              its HP is demolished. It will never function again.
            </Text>
            <Text>
              There are two categories of vehicle speed: Surface and Air. Any
              vehicle with an Air Speed rating can automatically outrun a
              vehicle with a Surface Speed rating. Within the same category, a
              “Fast” vehicle grants a +20% bonus to any Drive or Pilot test to
              pursue or escape. A “Slow” vehicle incurs a −20% penalty.
            </Text>
            <Title order={3}>Ramming</Title>
            <Text>The Handler decides how deadly a collision ought to be.</Text>
            <Text>
              <Text fw={700}>Low Speed:</Text> 1D6 or 2D6 damage.
            </Text>
            <Text>
              <Text fw={700}>Moderate Speed:</Text> Roll half the vehicle’s
              maximum HP as a Lethality rating. A “Slow” vehicle cannot go
              faster than this.
            </Text>
            <Text>
              <Text fw={700}>High Speed:</Text> Roll the vehicle’s maximum HP as
              a Lethality rating.
            </Text>
            <Text>
              A vehicle’s Armor rating acts as Armor Piercing for its ramming
              damage. Every passenger in a ramming vehicle takes 1D6 damage.
              Every passenger in a rammed vehicle takes 2D6 damage. A worn seat
              belt or active air bag halves the damage.
            </Text>
            <Title order={2} td="underline">
              Ground Vehicles
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Hit Points</Table.Th>
                  <Table.Th>Armor</Table.Th>
                  <Table.Th>Speed</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {vehicleList
                  .filter((item) => item.type === "ground")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.hp}</Table.Td>
                        <Table.Td>{item.armor}</Table.Td>
                        <Table.Td>{item.speed}</Table.Td>
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
            <Title order={2} td="underline">
              Water Vehicles
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Hit Points</Table.Th>
                  <Table.Th>Armor</Table.Th>
                  <Table.Th>Speed</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {vehicleList
                  .filter((item) => item.type === "water")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.hp}</Table.Td>
                        <Table.Td>{item.armor}</Table.Td>
                        <Table.Td>{item.speed}</Table.Td>
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
            <Title order={2} td="underline">
              Air Vehicles
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Hit Points</Table.Th>
                  <Table.Th>Armor</Table.Th>
                  <Table.Th>Speed</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {vehicleList
                  .filter((item) => item.type === "air")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.hp}</Table.Td>
                        <Table.Td>{item.armor}</Table.Td>
                        <Table.Td>{item.speed}</Table.Td>
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
    </ScrollArea>
  );
};
