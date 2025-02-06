import {
  ActionIcon,
  Button,
  Drawer,
  Flex,
  Grid,
  Group,
  InputLabel,
  Modal,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { weaponsLists } from "../../../data";
import {
  IconCancel,
  IconDots,
  IconInfoCircle,
  IconTriangleFilled,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Weapons = () => {
  const [mobileWeaponsMenuOpen, setMobileWeaponsMenuOpen] = useState(false);
  const [mobileWeapon, setMobileWeapon] = useState({});
  const [viewport] = useViewportContext();

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

  const handleMobileSelect = (weapon) => {
    setMobileWeaponsMenuOpen(true);
    setMobileWeapon({ ...weapon });
  };

  return (
    <ScrollArea h={"95vh"}>
      <Grid
        p={viewport.width > 760 ? "md" : 0}
        gutter={viewport.width > 760 ? "md" : "0"}
        id="weapons"
      >
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline">Hand-to-Hand Weapons</Title>
            <Text>
              Unarmed attacks, like punching, kicking, and strangling, use the
              Unarmed Combat skill. All melee weapons use the Melee Weapons
              skill.
            </Text>
            {viewport.width > 760 ? (
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
                                <Tooltip label={item.description} multiline>
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
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Tear Gas and Pepper Spray</Title>
            <Text>
              These irritant chemicals make eyes tear, lungs seize, and exposed
              tissues sting like hell. If hit, the target must make a CON×5 test
              or be stunned and suffer a penalty to all actions for one hour. If
              the CON×5 roll succeeds, the target is not stunned and suffers
              half the usual penalty. Wearing a gas mask protects against these
              effects but incurs a −20% penalty to Alertness and Search tests.
            </Text>
            {viewport.width > 760 ? (
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
                                <Tooltip label={item.description} multiline>
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
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Stun Grenades</Title>
            <Text>
              A “flash-bang” is a grenade that makes a huge noise and bright
              flash which deafens, blinds and staggers everyone within a 10
              meter radius (indoors) or 5 meters (outdoors). Each target is
              stunned. After the stun wears off, the target suffers a −40%
              penalty to all actions for 1D6 turns. (Having eye or ear
              protection reduces the penalty to −20%.)
            </Text>
            {viewport.width > 760 ? (
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
                                <Tooltip label={item.description} multiline>
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
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Electroshock Weapons</Title>
            <Text>
              A conducted energy device (CED) or stun gun discharges a
              high-voltage electrical shock into the target, causing the
              target’s muscles to spasm violently. The victim must roll a CON×5
              test to resist being stunned. After the stun wears off, the victim
              suffers a −20% penalty to all actions for 1D20 turns.
            </Text>
            {viewport.width > 760 ? (
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>{item.penalty}</Table.Td>
                          <Table.Td tt="capitalize">
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Firearms</Title>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>{item.lethality}</Table.Td>
                          <Table.Td>{item.ammoCapacity}</Table.Td>
                          <Table.Td>
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
                          <Table.Td tt="capitalize">
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Heavy Weapons</Title>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th>Range</Table.Th>
                    <Table.Th>Lethality</Table.Th>
                    <Table.Th>Radius</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>{item.lethality}</Table.Td>
                          <Table.Td>{item.radius}</Table.Td>
                          <Table.Td>{item.ammoCapacity}</Table.Td>
                          <Table.Td>
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
                          <Table.Td tt="capitalize">
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Demolitions</Title>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th>Range</Table.Th>
                    <Table.Th>Lethality</Table.Th>
                    <Table.Th>Radius</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>{item.lethality}</Table.Td>
                          <Table.Td>{item.radius}</Table.Td>
                          <Table.Td>
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
                          <Table.Td tt="capitalize">
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
            <Title td="underline">Artillery</Title>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th>Range</Table.Th>
                    <Table.Th>Lethality</Table.Th>
                    <Table.Th>Radius</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>{item.lethality}</Table.Td>
                          <Table.Td>{item.radius}</Table.Td>
                          <Table.Td>{item.ammoCapacity}</Table.Td>
                          <Table.Td>
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
                          <Table.Td tt="capitalize">
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                </Table.Tbody>
              </Table>
            ) : (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Details</Table.Th>
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
                                <Tooltip label={item.description} multiline>
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
                          <Table.Td>
                            <ActionIcon
                              onClick={() => handleMobileSelect(item)}
                            >
                              <IconDots />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
                  <Table.Tr></Table.Tr>
                </Table.Tbody>
              </Table>
            )}
          </Stack>
        </Grid.Col>
        <Drawer
          position={"bottom"}
          opened={mobileWeaponsMenuOpen}
          onClose={() => setMobileWeaponsMenuOpen(false)}
          title={
            <Title order={2}>
              {mobileWeapon?.name}{" "}
              {mobileWeapon?.restricted && (
                <Text c="red" fw={700} td="underline">
                  {mobileWeapon?.type === "firearms"
                    ? "RESTRICTED ITEM IF CAPABLE OF AUTOMATIC FIRE"
                    : "RESTRICTED ITEM"}
                </Text>
              )}
            </Title>
          }
        >
          <Stack gap="lg">
            <SimpleGrid
              cols={viewport.width > 450 ? 3 : 2}
              verticalSpacing="xl"
            >
              {mobileWeapon?.skill && (
                <Stack gap="0">
                  <InputLabel>Skill</InputLabel>
                  <Text tt="capitalize">
                    {skillKeyLabels(mobileWeapon?.skill)}
                  </Text>
                </Stack>
              )}
              {mobileWeapon?.damage && (
                <Stack gap="0">
                  <InputLabel>Base Damage</InputLabel>
                  <Text>{mobileWeapon?.damage}</Text>
                </Stack>
              )}
              {mobileWeapon?.armorPiercing !== undefined && (
                <Stack gap="0">
                  <InputLabel>Armor Piercing</InputLabel>
                  <Text>
                    {mobileWeapon?.armorPiercing === 0
                      ? "N/A"
                      : mobileWeapon?.armorPiercing}
                  </Text>
                </Stack>
              )}
              {mobileWeapon?.range && (
                <Stack gap="0">
                  <InputLabel>Range</InputLabel>
                  <Text>{mobileWeapon?.range}</Text>
                </Stack>
              )}
              {mobileWeapon?.uses && (
                <Stack gap="0">
                  <InputLabel>Uses</InputLabel>
                  <Text>{mobileWeapon?.uses}</Text>
                </Stack>
              )}
              {mobileWeapon?.radius && (
                <Stack gap="0">
                  <InputLabel>Radius</InputLabel>
                  <Text>{mobileWeapon?.radius}</Text>
                </Stack>
              )}
              {mobileWeapon?.penalty && (
                <Stack gap="0">
                  <InputLabel>Penalty</InputLabel>
                  <Text>{mobileWeapon?.penalty}</Text>
                </Stack>
              )}
              <Stack gap="0">
                <InputLabel>Expense</InputLabel>
                <Group>
                  <IconTriangleFilled
                    color={calculateIcon(mobileWeapon?.expense)}
                  />
                  <Text tt="capitalize">{mobileWeapon?.expense}</Text>
                </Group>
              </Stack>
            </SimpleGrid>
            {mobileWeapon?.description && (
              <Stack gap="0">
                <InputLabel>Additional Info</InputLabel>
                <Text c="dimmed">{mobileWeapon?.description}</Text>
              </Stack>
            )}
          </Stack>
        </Drawer>
      </Grid>
    </ScrollArea>
  );
};
