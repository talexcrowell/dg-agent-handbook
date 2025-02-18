import {
  Accordion,
  ActionIcon,
  Card,
  Divider,
  Grid,
  Group,
  HoverCard,
  InputLabel,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import {
  IconDotsVertical,
  IconInfoCircle,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import styles from "../../../Element.module.css";
import { useState } from "react";
import {
  armorList,
  otherGearAndServicesList,
  weaponsLists,
} from "../../../data";
import Fuse from "fuse.js";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { notifications } from "@mantine/notifications";

export const Equipment = ({ currentCharacter, handleUpdateCharacter }: any) => {
  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const equipmentMasterList = [
    ...weaponsLists.filter((item) => {
      return item.weaponType !== "artillery";
    }),
    ...armorList,
    ...otherGearAndServicesList.filter(
      (item) =>
        (item.gearAndServicesType === "coversAndLegends" ||
          item.gearAndServicesType === "restraints" ||
          item.gearAndServicesType === "communicationsAndComputers" ||
          item.gearAndServicesType === "surveillance" ||
          item.gearAndServicesType === "lightingAndVision" ||
          item.gearAndServicesType === "breakingAndEntering" ||
          item.gearAndServicesType === "emergencyAndSurvival" ||
          item.gearAndServicesType === "accessories") &&
        item.name !== "Hire a hacker to defeat basic encryption" &&
        item.name !== "Hire a hacker to defeat advanced encryption" &&
        item.name !== "Exclusive use of a dedicated communications satellite"
    ),
  ];

  const fuse = new Fuse(equipmentMasterList, {
    keys: ["name"],
    threshold: 0.45,
  });

  const filteredList = fuse.search(searchTerm).map((result) => {
    return { ...result.item };
  });

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

  const validateEquipment = (item) => {
    if (
      currentCharacter.equipment.filter((thing) => thing.name === item.name)
        .length > 0
    ) {
      notifications.show({
        color: "red",
        title: "ERROR: Can't Add Equipment",
        message: `Equipment could not be added because Agent ${currentCharacter.codename} already has it in their possession.`,
        position: "bottom-center",
      });
    } else {
      handleUpdateCharacter("equipment", item);
      notifications.show({
        color: "green",
        title: "Equipment Added!",
        message: `Equipment added to inventory.`,
        position: "bottom-center",
      });
    }
  };

  const deleteEquipment = (item) => {
    handleUpdateCharacter("equipmentDelete", item);
    notifications.show({
      color: "green",
      title: "Equipment Removed!",
      message: `Equipment removed from inventory.`,
      position: "bottom-center",
    });
  };

  return (
    <Grid py="md" px={viewport.width > 992 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Equipment
          </Title>
          <Stack gap="xs">
            <InputLabel>Inventory</InputLabel>
            {currentCharacter.equipment.length > 0 ? (
              currentCharacter.equipment.map((item) => {
                return (
                  <Card withBorder>
                    <Group justify="space-between">
                      <Group>
                        <Stack gap="0">
                          <InputLabel c="dimmed">Name</InputLabel>
                          <Text>{item?.name}</Text>
                        </Stack>
                        <Divider orientation="vertical" />
                        {item?.type === "gearAndServices" &&
                          item?.description && (
                            <>
                              <Stack gap="0">
                                <InputLabel c="dimmed">Description</InputLabel>
                                <Text>
                                  {item?.description.length > 85
                                    ? item?.description.slice(0, 85) + "..."
                                    : item?.description}
                                </Text>
                              </Stack>
                            </>
                          )}
                        {item?.skill && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Skill</InputLabel>
                              <Text tt="capitalize">
                                {skillKeyLabels(item?.skill)}
                              </Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.armorRating && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Armor Rating</InputLabel>
                              <Text>{item?.armorRating}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.damage && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Damage</InputLabel>
                              <Text>{item?.damage}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.lethality && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Lethality</InputLabel>
                              <Text>{item?.lethality}%</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.armorPiercing !== undefined && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Armor Piercing</InputLabel>
                              <Text>
                                {item?.armorPiercing === 0
                                  ? "N/A"
                                  : item?.armorPiercing}
                              </Text>
                            </Stack>{" "}
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.range && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Range</InputLabel>
                              <Text>{item?.range}</Text>
                            </Stack>{" "}
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.uses && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Uses</InputLabel>
                              <Text>{item?.uses}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.radius && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Radius</InputLabel>
                              <Text>{item?.radius}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.penalty && (
                          <>
                            <Stack gap="0">
                              <InputLabel c="dimmed">Penalty</InputLabel>
                              <Text>{item?.penalty}</Text>
                            </Stack>{" "}
                            <Divider orientation="vertical" />
                          </>
                        )}
                      </Group>
                      <Group>
                        <ActionIcon
                          color="red"
                          onClick={() => deleteEquipment(item)}
                        >
                          <IconTrash />
                        </ActionIcon>
                      </Group>
                    </Group>
                  </Card>
                );
              })
            ) : (
              <Card>
                <Text ta="center" c="dimmed">
                  No equipment in inventory...
                </Text>
              </Card>
            )}
                        <Accordion
              styles={{
                root: { backgroundColor: "	#2e2e2e", border: "1px solid #3b3b3b", borderRadius: "6px" },
                panel: {backgroundColor: "	#242424"}
              }}
              p='0'
            >
              <Accordion.Item value={"add-equipment"}>
                <Accordion.Control className={styles.hoverElement}>
                  <Group justify="center">
                    <IconPlus />
                    <Text>Add Equipment and Gear</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    <TextInput
                      leftSection={<IconSearch />}
                      placeholder="Search for name of equipment..."
                      onChange={(e) => setSearchTerm(e.currentTarget.value)}
                      label="Equipment Search"
                    />
                    <Divider />
                    <Stack>
                      {searchTerm ? (
                        filteredList.length > 0 ? (
                          filteredList.slice(0, 5).map((result) => {
                            return (
                              <Card withBorder>
                                <Group justify="space-between">
                                  <Group>
                                    <Stack gap="0">
                                      <InputLabel c="dimmed">Name</InputLabel>
                                      <Text>{result?.name}</Text>
                                    </Stack>
                                    <Divider orientation="vertical" />
                                    {result?.type === "gearAndServices" &&
                                      result?.description && (
                                        <>
                                          <Stack gap="0">
                                            <InputLabel c="dimmed">
                                              Description
                                            </InputLabel>
                                            <Text>
                                              {result?.description.length > 85
                                                ? result?.description.slice(
                                                    0,
                                                    85
                                                  ) + "..."
                                                : result?.description}
                                            </Text>
                                          </Stack>
                                        </>
                                      )}
                                    {result?.skill && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Skill
                                          </InputLabel>
                                          <Text tt="capitalize">
                                            {skillKeyLabels(result?.skill)}
                                          </Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.armorRating && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Armor Rating
                                          </InputLabel>
                                          <Text>{result?.armorRating}</Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.damage && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Damage
                                          </InputLabel>
                                          <Text>{result?.damage}</Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.lethality && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Lethality
                                          </InputLabel>
                                          <Text>{result?.lethality}%</Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.armorPiercing !== undefined && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Armor Piercing
                                          </InputLabel>
                                          <Text>
                                            {result?.armorPiercing === 0
                                              ? "N/A"
                                              : result?.armorPiercing}
                                          </Text>
                                        </Stack>{" "}
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.range && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Range
                                          </InputLabel>
                                          <Text>{result?.range}</Text>
                                        </Stack>{" "}
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.uses && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Uses
                                          </InputLabel>
                                          <Text>{result?.uses}</Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.radius && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Radius
                                          </InputLabel>
                                          <Text>{result?.radius}</Text>
                                        </Stack>
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                    {result?.penalty && (
                                      <>
                                        <Stack gap="0">
                                          <InputLabel c="dimmed">
                                            Penalty
                                          </InputLabel>
                                          <Text>{result?.penalty}</Text>
                                        </Stack>{" "}
                                        <Divider orientation="vertical" />
                                      </>
                                    )}
                                  </Group>
                                  <Group>
                                    <ActionIcon
                                      color="green"
                                      onClick={() => validateEquipment(result)}
                                    >
                                      <IconPlus />
                                    </ActionIcon>
                                  </Group>
                                </Group>
                              </Card>
                            );
                          })
                        ) : (
                          <Card c="dimmed">No results found</Card>
                        )
                      ) : (
                        <Card c="dimmed" ta="center">
                          Enter a name to start searching...
                        </Card>
                      )}
                    </Stack>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
          <Textarea
            label="Other Gear"
            rows={10}
            ta="start"
            value={currentCharacter?.otherGear}
            onChange={(e) => {
              handleUpdateCharacter("otherGear", e.currentTarget.value);
            }}
          />
        </Stack>
      </Grid.Col>
      {/* <Grid.Col span={12}>
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
      </Grid.Col> */}
    </Grid>
  );
};
