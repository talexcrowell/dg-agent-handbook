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
import { armorList, weaponsLists } from "../../../data";
import Fuse from "fuse.js";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { notifications } from "@mantine/notifications";

export const Equipment = ({ currentCharacter, handleUpdateCharacter }: any) => {
  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const equipmentMasterList = [...weaponsLists, ...armorList];

  const fuse = new Fuse(equipmentMasterList, {
    keys: ["name"],
    threshold: 0.45,
  });

  const filteredList = fuse.search(searchTerm).map((result) => {
    return { ...result.item };
  });

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
            {currentCharacter.equipment.length > 0 ? (
              currentCharacter.equipment.map((item) => {
                return (
                  <Card withBorder>
                    <Group justify="space-between">
                      <Group>
                        <Stack gap="0">
                          <InputLabel>Item</InputLabel>
                          <Text>{item?.name}</Text>
                        </Stack>
                        <Divider orientation="vertical" />
                        {item?.armorRating && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Armor Rating</InputLabel>
                              <Text>{item?.armorRating}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.damage && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Damage</InputLabel>
                              <Text>{item?.damage}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.lethality && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Lethality</InputLabel>
                              <Text>{item?.lethality}%</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.armorPiercing !== undefined && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Armor Piercing</InputLabel>
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
                              <InputLabel>Range</InputLabel>
                              <Text>{item?.range}</Text>
                            </Stack>{" "}
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.uses && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Uses</InputLabel>
                              <Text>{item?.uses}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.radius && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Radius</InputLabel>
                              <Text>{item?.radius}</Text>
                            </Stack>
                            <Divider orientation="vertical" />
                          </>
                        )}
                        {item?.penalty && (
                          <>
                            <Stack gap="0">
                              <InputLabel>Penalty</InputLabel>
                              <Text>{item?.penalty}</Text>
                            </Stack>{" "}
                            <Divider orientation="vertical" />
                          </>
                        )}
                      </Group>
                      <Group>
                        <ActionIcon>
                          <IconInfoCircle />
                        </ActionIcon>
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
          </Stack>
          <Accordion
            styles={{
              root: { border: "1px solid #2e2e2e", borderRadius: "6px" },
            }}
          >
            <Accordion.Item value={"add-equipment"}>
              <Accordion.Control className={styles.hoverElement}>
                <Group c="dimmed" justify="center" py="md">
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
                            <Card>
                              <Group justify="space-between">
                                {result.name}
                                <Group>
                                  <ActionIcon>
                                    <IconInfoCircle />
                                  </ActionIcon>
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
                      <Card c="dimmed">No results found</Card>
                    )}
                  </Stack>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

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
