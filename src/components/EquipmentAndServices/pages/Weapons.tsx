import {
  ActionIcon,
  Anchor,
  Button,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  InputLabel,
  Modal,
  ScrollArea,
  SimpleGrid,
  Space,
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
import { Link } from "react-router-dom";

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
      <Grid id="weapons">
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline" id="weapons" style={{ scrollMarginTop: 80 }}>
              Weapons
            </Title>
            <Text>
              There’s a staggering variety of personal firearms and weaponry.
              Their usefulness on Delta Green ops is limited, of course,
              depending on who or what the Agents face.
            </Text>
            <Title td="underline" order={3} id="concealment" style={{ scrollMarginTop: 80 }}>
              Concealment
            </Title>
            <Text>
              Knives and pistols can be concealed under ordinary clothing.
              Someone deliberately looking for a concealed weapon can attempt an
              Alertness test to spot it. A heavy pistol or especially big knife
              means a +20% Alertness bonus.If your Agent is wearing an overcoat,
              he or she can attempt to conceal a bigger gun like a submachine
              gun or sawed-off shotgun, or a larger hand weapon like a hatchet
              or machete, and incur no Alertness bonus for a very large pistol.
              There’s no way to conceal a full-size rifle or a large melee
              weapon.
            </Text>
            <Title td="underline" order={3} id="bright-lights" style={{ scrollMarginTop: 80 }}>
              Bright Lights
            </Title>
            <Text>
              A bright flashlight in darkness can dazzle someone up to 10 meters
              away by shining it in the target’s eyes. This is an action in
              combat. It requires a DEX×5 test, which is automatically opposed
              by the target’s DEX×5 test. A dazzled target is at a −20% penalty
              to all actions for 1D6 turns.
            </Text>
            <Divider />
            <Title td="underline" order={2} id="hand-to-hand-weapons" style={{ scrollMarginTop: 80 }}>
              Hand-to-Hand Weapons
            </Title>
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
                    <Table.Th ta="center">Base Damage</Table.Th>
                    <Table.Th ta="center">Armor Piercing</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "handToHand")
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
                          <Table.Td ta="center">{item.damage}</Table.Td>
                          <Table.Td ta="center">
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
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
                    .filter((item) => item.weaponType === "handToHand")
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
            <Divider />
            <Title td="underline" order={2} id="tear-gas-and-pepper-spray" style={{ scrollMarginTop: 80 }}>
              Tear Gas and Pepper Spray
            </Title>
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
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Uses</Table.Th>
                    <Table.Th ta="center">Radius</Table.Th>
                    <Table.Th ta="center">Victim's Penalty</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "tearGasPepperSpray")
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
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.uses}</Table.Td>
                          <Table.Td ta="center">{item.radius}</Table.Td>
                          <Table.Td ta="center">{item.penalty}</Table.Td>
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
                    .filter((item) => item.weaponType === "tearGasPepperSpray")
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
            <Divider />
            <Title td="underline" order={2} id="stun-grenades" style={{ scrollMarginTop: 80 }}>
              Stun Grenades
            </Title>
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
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Uses</Table.Th>
                    <Table.Th ta="center">Radius</Table.Th>
                    <Table.Th ta="center">Victim's Penalty</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "stunGrenade")
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
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.uses}</Table.Td>
                          <Table.Td ta="center">{item.radius}</Table.Td>
                          <Table.Td ta="center">{item.penalty}</Table.Td>
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
                    .filter((item) => item.weaponType === "stunGrenade")
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
            <Divider />
            <Title td="underline" order={2} id="electroshock-weapons" style={{ scrollMarginTop: 80 }}>
              Electroshock Weapons
            </Title>
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
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Uses</Table.Th>
                    <Table.Th ta="center">Victim's Penalty</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "electroshock")
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
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.uses}</Table.Td>
                          <Table.Td ta="center">{item.penalty}</Table.Td>
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
                    .filter((item) => item.weaponType === "electroshock")
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
            <Divider />
            <Title td="underline" order={2} id="firearms" style={{ scrollMarginTop: 80 }}>
              Firearms
            </Title>
            <Text>
              In most U.S. agencies, a law enforcement officer wears a medium
              pistol at all times. One might carry a light pistol or a compact
              medium pistol with smaller ammo capacity as a backup gun or if
              operating undercover.
            </Text>
            <Text>
              In the U.S., police officers typically have a carbine or a shotgun
              in the squad car. Soldiers and tactical teams usually carry
              carbines or assault rifles. All of those weapons are available in
              semiautomatic from gun shops.
            </Text>
            <Flex>
              <Text>
                Firearms can be heavily accessorized. (See{" "}
                <Anchor
                  inherit
                  w={"content"}
                  component={Link}
                  to="/equipment-and-services/gear-and-services#weapon-accessories"
                >
                  Weapons Accessories
                </Anchor>
                ). Popular add-ons are a tactical light, a sound suppressor, a
                holographic sight, a telescopic sight, a night sight, and/or a
                targeting laser. Many rifles can also be fitted with an
                underbarrel shotgun or grenade launcher.
              </Text>
            </Flex>
            <Title order={3} id='pistols' style={{ scrollMarginTop: 80 }}>Pistols</Title>
            <Text>
              Lightweight pistols fire low-powered cartridges and are of limited
              use even against humans. Medium pistols are the standard sidearms
              in law enforcement and the military everywhere. They fire
              moderately powerful rounds. Most revolvers hold six shots, but
              modern models for seven or eight are available. Pocket revolvers
              sometimes take only five. There’s a huge variety of ammunition
              capacities for semiautomatic pistol magazines, but 15 is typical,
              although 17 or even 20 is not uncommon. Large-caliber pistols
              often carry less. A typical figure for a heavy pistol is eight.
            </Text>
            <Title order={3} id="shotguns" style={{ scrollMarginTop: 80 }}>Shotguns</Title>
            <Text>
              A typical pump-action shotgun holds five shots, although there are
              many with extended magazines for eight or more. Double-barrel
              shotguns hold one shot per barrel, and can fire both barrels at
              one target with one attack roll. Shotguns can fire shot (a spread
              of small projectiles), slugs (a single heavy bullet), or
              “nonlethal” ammunition such as bean bag rounds, baton rounds, or
              rubber shot.
            </Text>
            <Text>
              <Text fw={700}>Firing Shot:</Text> Grants a +20% bonus to hit at
              all ranges: at point-blank due to the target being so close, and
              beyond that due to the spread of projectiles. If the target has an
              Armor rating due to armor or cover, double it.
            </Text>
            <Text>
              <Text fw={700}>Firing Both Barrels:</Text> You can fire both
              barrels of a double-barrel shotgun at one target with one attack
              roll. That inflicts an extra +1D8 damage at base range. It adds no
              damage beyond base range as the shot or the slugs separate.
            </Text>
            <Text>
              <Text fw={700}>Other Gauges:</Text> These rules assume a 12-gauge
              shotgun firing buckshot. Modify the damage by +2 for a heavier
              blast or −2 for a lighter one.
            </Text>
            <Title order={3} id='submachine-guns' style={{ scrollMarginTop: 80 }}>Submachine Guns</Title>
            <Flex>
              <Text>
                Submachine guns fire full automatic bursts, but are often also
                capable of semiautomatic fire. When firing semiautomatic, the
                weapon inflicts ordinary damage; with automatic fire, it uses a
                Lethality rating. (See{" "}
                <Anchor
                  inherit
                  w={"content"}
                  component={Link}
                  to="/equipment-and-services/gear-and-services#weapon-accessories"
                >
                  Lethality Rating
                </Anchor>
                .)
              </Text>
            </Flex>
            <Title order={3} id='rifles-and-carbines' style={{ scrollMarginTop: 80 }}>Rifles and Carbines</Title>
            <Text>
              Rifles fire more powerful cartridges than pistols or submachine
              guns, meaning better penetration, wounding, and range. Some
              military rifles—assault rifles in smaller calibers and automatic
              rifles in heavier calibers—are capable of firing full-automatic
              bursts with Lethality ratings. Especially heavy rifles have
              Lethality ratings with single shots.
            </Text>
            <Text>
              <Text fw={700}>Bolt Action:</Text> Older rifles and many hunting
              rifles use a bolt action that must be manually worked before each
              shot, which delays aiming. An attack with one in the turn
              immediately after it’s fired is at −20%. A bolt-action rifle gets
              no benefit from the Aim action in the turn immediately after it’s
              fired.
            </Text>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th ta="center">Damage</Table.Th>
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Lethality</Table.Th>
                    <Table.Th ta="center">Ammo Capacity</Table.Th>
                    <Table.Th ta="center">Armor Piercing</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "firearms")
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
                                <Tooltip
                                  label={"RESTRICTED IF FULLY AUTOMATIC"}
                                >
                                  <IconCancel color="red" />
                                </Tooltip>
                              )}
                            </Group>
                          </Table.Td>
                          <Table.Td tt="capitalize">
                            {skillKeyLabels(item.skill)}
                          </Table.Td>
                          <Table.Td ta="center">{item.damage}</Table.Td>
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.lethality}%</Table.Td>
                          <Table.Td ta="center">{item.ammoCapacity}</Table.Td>
                          <Table.Td ta="center">
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
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
                    .filter((item) => item.weaponType === "firearms")
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
            <Divider />
            <Title td="underline" order={2} id="heavy-weapons" style={{ scrollMarginTop: 80 }}>
              Heavy Weapons
            </Title>
            <Text>
              The Base Range for each weapon reflects the fact that it needs to
              be accurate enough only to get a target within the Kill Radius. A
              machine gun fired without a bipod, tripod, or vehicle mount has
              half Base Range.
            </Text>
            <Text>
              Many of these weapons actually fire in automatic bursts as well,
              which is subsumed under their Lethality ratings and Kill Radius.
              The Ammo Capacity of these weapons also varies widely, often
              depending on the vehicle on which they are mounted.
            </Text>
            <Text>
              Only the lightest Heavy Weapons are commonly available even to
              military personnel, and most of the heavier ones are
              vehicle-mounted or allocated to military support units that are
              not typically engaged in direct action.
            </Text>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Lethality</Table.Th>
                    <Table.Th ta="center">Radius</Table.Th>
                    <Table.Th ta="center">Ammo Capacity</Table.Th>
                    <Table.Th ta="center">Armor Piercing</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "heavyWeapons")
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
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.lethality}%</Table.Td>
                          <Table.Td ta="center">{item.radius}</Table.Td>
                          <Table.Td ta="center">{item.ammoCapacity}</Table.Td>
                          <Table.Td ta="center">
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
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
                    .filter((item) => item.weaponType === "heavyWeapons")
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
            <Divider />
            <Title td="underline" order={2} id="demolitions" style={{ scrollMarginTop: 80 }}>
              Demolitions
            </Title>
            <Text>
              The Base Range for each weapon reflects the fact that it needs to
              be accurate enough only to get a target within the Kill Radius. A
              machine gun fired without a bipod, tripod, or vehicle mount has
              half Base Range.
            </Text>
            {viewport.width > 760 ? (
              <Table withTableBorder highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Skill</Table.Th>
                    <Table.Th ta="center">Range</Table.Th>
                    <Table.Th ta="center">Lethality</Table.Th>
                    <Table.Th ta="center">Radius</Table.Th>
                    <Table.Th ta="center">Armor Piercing</Table.Th>
                    <Table.Th ta="center">Expense</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {weaponsLists
                    .filter((item) => item.weaponType === "demolitions")
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
                          <Table.Td ta="center">{item.range}m</Table.Td>
                          <Table.Td ta="center">{item.lethality}%</Table.Td>
                          <Table.Td ta="center">{item.radius}</Table.Td>
                          <Table.Td ta="center">
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
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
                    .filter((item) => item.weaponType === "demolitions")
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
            <Divider />
            <Title td="underline" order={2} id="artillery" style={{ scrollMarginTop: 80 }}>
              Artillery
            </Title>
            <Text>
              The Base Range for each weapon reflects the fact that it needs to
              be accurate enough only to get a target within the Kill Radius. A
              machine gun fired without a bipod, tripod, or vehicle mount has
              half Base Range.
            </Text>
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
                    .filter((item) => item.weaponType === "artillery")
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
                          <Table.Td ta="center">{item.range}</Table.Td>
                          <Table.Td ta="center">{item.lethality}%</Table.Td>
                          <Table.Td ta="center">{item.radius}</Table.Td>
                          <Table.Td ta="center">{item.ammoCapacity}</Table.Td>
                          <Table.Td ta="center">
                            {item.armorPiercing === 0
                              ? "N/A"
                              : item.armorPiercing}
                          </Table.Td>
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
                    .filter((item) => item.weaponType === "artillery")
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
          {Array.from({ length: 45 }, (_, i) => (
            <Space />
          ))}
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
                  {mobileWeapon?.weaponType === "firearms"
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
  );
};

export default Weapons;
