import {
  Grid,
  Group,
  ScrollArea,
  Stack,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { weaponsLists } from "../../../data";
import {
  IconCancel,
  IconInfoCircle,
  IconTriangleFilled,
} from "@tabler/icons-react";

export const Weapons = () => {
  const skillKeyLabels = (key) => {
    switch (key) {
      case "computerScience":
        return "Computer Science";
      case "firstAid":
        return "First Aid";
      case "foreignLanguage":
        return "Foreign Language";
      case "heavyMachinery":
        return "Heavy Machinery";
      case "heavyWeapons":
        return "Heavy Weapons";
      case "humint":
        return "HUMINT";
      case "meleeWeapons":
        return "Melee Weapons";
      case "militaryScience":
        return "Military Science";
      case "sigint":
        return "SIGINT";
      case "unarmedCombat":
        return "Unarmed Combat";
      default:
        return key;
    }
  };

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
      <Grid p="md">
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline">Hand-to-Hand Weapons</Title>
            <Text>
              Unarmed attacks, like punching, kicking, and strangling, use the
              Unarmed Combat skill. All melee weapons use the Melee Weapons
              skill.
            </Text>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
                        <Table.Td>{skillKeyLabels(item.skill)}</Table.Td>
                        <Table.Td>{item.damage}</Table.Td>
                        <Table.Td>
                          {item.armorPiercing === 0
                            ? "N/A"
                            : item.armorPiercing}
                        </Table.Td>
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
                <Table.Tr></Table.Tr>
              </Table.Tbody>
            </Table>
            <Title td="underline">Tear Gas and Pepper Spray</Title>
            <Text>
              These irritant chemicals make eyes tear, lungs seize, and exposed
              tissues sting like hell. If hit, the target must make a CON×5 test
              or be stunned and suffer a penalty to all actions for one hour. If
              the CON×5 roll succeeds, the target is not stunned and suffers
              half the usual penalty. Wearing a gas mask protects against these
              effects but incurs a −20% penalty to Alertness and Search tests.
            </Text>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
                        <Table.Td tt="capitalize">
                          {skillKeyLabels(item.skill)}
                        </Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
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
                <Table.Tr></Table.Tr>
              </Table.Tbody>
            </Table>
            <Title td="underline">Stun Grenades</Title>
            <Text>
              A “flash-bang” is a grenade that makes a huge noise and bright
              flash which deafens, blinds and staggers everyone within a 10
              meter radius (indoors) or 5 meters (outdoors). Each target is
              stunned. After the stun wears off, the target suffers a −40%
              penalty to all actions for 1D6 turns. (Having eye or ear
              protection reduces the penalty to −20%.)
            </Text>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
                        <Table.Td tt="capitalize">
                          {skillKeyLabels(item.skill)}
                        </Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.radius}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
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
            <Title td="underline">Electroshock Weapons</Title>
            <Text>
              A conducted energy device (CED) or stun gun discharges a
              high-voltage electrical shock into the target, causing the
              target’s muscles to spasm violently. The victim must roll a CON×5
              test to resist being stunned. After the stun wears off, the victim
              suffers a −20% penalty to all actions for 1D20 turns.
            </Text>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
                        <Table.Td>{item.skill}</Table.Td>
                        <Table.Td>{item.range}m</Table.Td>
                        <Table.Td>{item.uses}</Table.Td>
                        <Table.Td>{item.penalty}</Table.Td>
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
            <Title td="underline">Firearms</Title>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                                w={320}
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED IF CAPABLE OF FULLY AUTOMATIC FIRE"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
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
            <Title td="underline">Heavy Weapons</Title>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                                w={320}
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
                        <Table.Td tt="capitalize">
                          {skillKeyLabels(item.skill)}
                        </Table.Td>
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
            <Title td="underline">Demolitions</Title>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                                w={320}
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
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
            <Title td="underline">Artillery</Title>
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
                        <Table.Td>
                          <Group>
                            {item.name}
                            {item.description && (
                              <Tooltip
                                label={item.description}
                                multiline
                                w={320}
                              >
                                <IconInfoCircle />
                              </Tooltip>
                            )}
                            {item.restricted && (
                              <Tooltip label={"RESTRICTED"}>
                                <IconCancel color="red" />
                              </Tooltip>
                            )}
                          </Group>
                        </Table.Td>
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
