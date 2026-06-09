import {
  Divider,
  Grid,
  Group,
  ScrollArea,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { vehicleList } from "../../../data";
import { IconTriangleFilled } from "@tabler/icons-react";
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
    <Grid pt={"sm"} id="vehicles">
      <Grid.Col span={12}>
        <Stack>
          <Stack gap="xs">
            <Title td="underline" id="vehicles" style={{ scrollMarginTop: 80 }}>
              Vehicles
            </Title>
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
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title order={3} id="ramming" style={{ scrollMarginTop: 80 }}>
              Ramming
            </Title>
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
          </Stack>
          <Divider />
          <Title
            order={2}
            id="ground-vehicles"
            td="underline"
            style={{ scrollMarginTop: 80 }}
          >
            Ground Vehicles
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th ta="center">Hit Points</Table.Th>
                <Table.Th ta="center">Armor</Table.Th>
                <Table.Th ta="center">Speed</Table.Th>
                <Table.Th ta="center">Expense</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {vehicleList
                .filter((item) => item.vehicleType === "ground")
                .map((item) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{item.name}</Table.Td>
                      <Table.Td ta="center">{item.hp}</Table.Td>
                      <Table.Td ta="center">{item.armor}</Table.Td>
                      <Table.Td ta="center">{item.speed}</Table.Td>
                      <Table.Td tt="capitalize" ta="center">
                        <IconTriangleFilled
                          color={calculateIcon(item.expense)}
                        />
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Divider />
          <Title
            order={2}
            id="water-vehicles"
            td="underline"
            style={{ scrollMarginTop: 80 }}
          >
            Water Vehicles
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th ta="center">Hit Points</Table.Th>
                <Table.Th ta="center">Armor</Table.Th>
                <Table.Th ta="center">Speed</Table.Th>
                <Table.Th ta="center">Expense</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {vehicleList
                .filter((item) => item.vehicleType === "water")
                .map((item) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{item.name}</Table.Td>
                      <Table.Td ta="center">{item.hp}</Table.Td>
                      <Table.Td ta="center">{item.armor}</Table.Td>
                      <Table.Td ta="center">{item.speed}</Table.Td>
                      <Table.Td tt="capitalize" ta="center">
                        <IconTriangleFilled
                          color={calculateIcon(item.expense)}
                        />
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Divider />
          <Title
            order={2}
            id="air-vehicles"
            td="underline"
            style={{ scrollMarginTop: 80 }}
          >
            Air Vehicles
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th ta="center">Hit Points</Table.Th>
                <Table.Th ta="center">Armor</Table.Th>
                <Table.Th ta="center">Speed</Table.Th>
                <Table.Th ta="center">Expense</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {vehicleList
                .filter((item) => item.vehicleType === "air")
                .map((item) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{item.name}</Table.Td>
                      <Table.Td ta="center">{item.hp}</Table.Td>
                      <Table.Td ta="center">{item.armor}</Table.Td>
                      <Table.Td ta="center">{item.speed}</Table.Td>
                      <Table.Td tt="capitalize" ta="center">
                        <IconTriangleFilled
                          color={calculateIcon(item.expense)}
                        />
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          {viewport.width > 992 &&
            Array.from({ length: 50 }, (_, i) => <Space />)}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Vehicles;
