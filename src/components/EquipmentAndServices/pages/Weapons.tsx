import { Grid, ScrollArea, Stack, Table, Title } from "@mantine/core";
import { weaponsLists } from "../../../data";

export const Weapons = () => {
  return (
    <ScrollArea h={"95vh"}>
      <Grid p="md">
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title>Hand-to-Hand Weapons</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Base Damage</Table.Th>
                  <Table.Th>Armor Piercing</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "handToHand")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.damage}</Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
                <Table.Tr></Table.Tr>
              </Table.Tbody>
            </Table>
            <Title>Tear Gas and Pepper Spray</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Uses</Table.Th>
                  <Table.Th>Radius</Table.Th>
                  <Table.Th>Victim's Penalty</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "tearGasPepperSpray")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
                <Table.Tr></Table.Tr>
              </Table.Tbody>
            </Table>
            <Title>Stun Grenades</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Uses</Table.Th>
                  <Table.Th>Radius</Table.Th>
                  <Table.Th>Victim's Penalty</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "stunGrenade")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title>Electroshock Weapons</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Uses</Table.Th>
                  <Table.Th>Victim's Penalty</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "electroshock")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title>Firearms</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Damage</Table.Th>
                  <Table.Th>Lethality</Table.Th>
                  <Table.Th>Ammo Capacity</Table.Th>
                  <Table.Th>Armor Piercing</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "firearms")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td tt="capitalize">{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.damage}</Table.Td>
                        <Table.Td>{item.lethality}%</Table.Td>
                        <Table.Td>{item.ammoCapacity}</Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title>Heavy Weapons</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Lethality</Table.Th>
                  <Table.Th>Kill Radius</Table.Th>
                  <Table.Th>Ammo Capacity</Table.Th>
                  <Table.Th>Armor Piercing</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "heavyWeapons")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.lethality}%</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>
                          {item.ammoCapacity === 0 ? "N/A" : item.ammoCapacity}
                        </Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title>Demolitions</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Lethality</Table.Th>
                  <Table.Th>Kill Radius</Table.Th>
                  <Table.Th>Ammo Capacity</Table.Th>
                  <Table.Th>Armor Piercing</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "demolitions")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td tt="capitalize">{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.lethality}%</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>
                          {item.ammoCapacity === 0 ? "N/A" : item.ammoCapacity}
                        </Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title>Artillery</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Skill</Table.Th>
                  <Table.Th>Range</Table.Th>
                  <Table.Th>Lethality</Table.Th>
                  <Table.Th>Kill Radius</Table.Th>
                  <Table.Th>Ammo Capacity</Table.Th>
                  <Table.Th>Armor Piercing</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {weaponsLists
                  .filter((item) => item.type === "artillery")
                  .map((item) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td tt="capitalize">{item.skill}</Table.Td>
                        <Table.Td>{item.range}</Table.Td>
                        <Table.Td>{item.lethality}%</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>
                          {item.ammoCapacity === 0 ? "N/A" : item.ammoCapacity}
                        </Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
                        <Table.Td tt="capitalize">{item.expense}</Table.Td>
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
