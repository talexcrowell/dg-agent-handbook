import {
  Accordion,
  ActionIcon,
  Button,
  Card,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  HoverCard,
  InputLabel,
  Modal,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import {
  IconDots,
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
  const [equipmentItem, setEquipmentItem] = useState({});

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

  const handleEquipmentType = (item) => {
    let type;
    let subtype;
    switch (item.type) {
      case "gearAndServices":
        type = "Gear and Services";
        switch (item.gearAndServicesType) {
          case "coversAndLegends":
            subtype = "Covers And Legends";
            break;
          case "communicationsAndComputers":
            subtype = "Communications And Computers";
            break;
          case "lightingAndVision":
            subtype = "Lighting And Vision";
            break;
          case "breakingAndEntering":
            subtype = "Breaking And Entering";
            break;
          case "emergencyAndSurvival":
            subtype = "Emergency And Survival";
            break;
          default:
            subtype = item.gearAndServicesType;
            break;
        }
        break;
      case "weapon":
        type = "Weapon";
        subtype = item.weaponType;
        switch (item.weaponType) {
          case "handToHand":
            subtype = "Hand-To-Hand";
            break;
          case "heavyWeapons":
            subtype = "Heavy Weapons";
            break;
          case "stunGrenade":
            subtype = "Stun Grenade";
            break;
          case "tearGasPepperSpray":
            subtype = "Tear Gas/Pepper Spray";
            break;
          default:
            subtype = item.weaponType;
            break;
        }
        break;
      case "armor":
        type = "Armor";
        break;
    }
    return { type, subtype };
  };

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
    setOpened(false);
    notifications.show({
      color: "green",
      title: "Equipment Removed!",
      message: `Equipment removed from Agent ${currentCharacter.codename}'s inventory.`,
      position: "bottom-center",
    });
  };

  const handleInspectEquipment = (item) => {
    setEquipmentItem({ ...item });
    setOpened(true);
  };

  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0}>
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
                      <SimpleGrid cols={3} w={"85%"}>
                        <Stack gap="0">
                          <InputLabel c="dimmed">Name</InputLabel>
                          <Text>{item?.name}</Text>
                        </Stack>
                        <Stack gap="0">
                          <InputLabel c="dimmed">Type</InputLabel>
                          <Text>{handleEquipmentType(item).type}</Text>
                        </Stack>

                        <Stack gap="0">
                          <InputLabel c="dimmed">Subtype</InputLabel>
                          <Text tt="capitalize">
                            {handleEquipmentType(item).subtype}
                          </Text>
                        </Stack>
                      </SimpleGrid>

                      <ActionIcon
                        color="grey"
                        onClick={() => handleInspectEquipment(item)}
                      >
                        <IconDots />
                      </ActionIcon>
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
                root: {
                  backgroundColor: "	#2e2e2e",
                  border: "1px solid #3b3b3b",
                  borderRadius: "6px",
                },
                panel: { backgroundColor: "	#242424" },
              }}
              p="0"
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
                                  <SimpleGrid cols={3} w={"80%"}>
                                    <Stack gap="0">
                                      <InputLabel c="dimmed">Name</InputLabel>
                                      <Text>{result?.name}</Text>
                                    </Stack>
                                    <Stack gap="0">
                                      <InputLabel c="dimmed">Type</InputLabel>
                                      <Text>
                                        {handleEquipmentType(result).type}
                                      </Text>
                                    </Stack>
                                    <Stack gap="0">
                                      <InputLabel c="dimmed">
                                        Subtype
                                      </InputLabel>
                                      <Text tt="capitalize">
                                        {handleEquipmentType(result).subtype}
                                      </Text>
                                    </Stack>
                                  </SimpleGrid>
                                  <Group>
                                    <ActionIcon
                                      color="grey"
                                      onClick={() =>
                                        handleInspectEquipment(result)
                                      }
                                    >
                                      <IconDots />
                                    </ActionIcon>
                                    <ActionIcon
                                      color="green"
                                      onClick={() => validateEquipment(result)}
                                    >
                                      <IconPlus />
                                    </ActionIcon>
                                  </Group>
                                </Group>
                                {/* </Group> */}
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
      {viewport.width < 760 ? (
        <Drawer
          opened={opened}
          onClose={() => setOpened(!opened)}
          title={<Title order={3}>{equipmentItem.name}</Title>}
          position="bottom"
        >
          <Stack>
            <Stack>
              {equipmentItem?.restricted && (
                <Text c="red" fw={700}>
                  {handleEquipmentType(equipmentItem).subtype === "firearms"
                    ? "RESTRICTED IF CAPABLE OF AUTOMATIC FIRE"
                    : "RESTRICTED"}
                </Text>
              )}
              <SimpleGrid cols={2}>
                <Stack gap="0">
                  <InputLabel c="dimmed">Type</InputLabel>
                  <Text tt="capitalize">
                    {handleEquipmentType(equipmentItem).type}
                  </Text>
                </Stack>
                <Stack gap="0">
                  <InputLabel c="dimmed">Subtype</InputLabel>
                  <Text tt="capitalize">
                    {handleEquipmentType(equipmentItem).subtype}
                  </Text>
                </Stack>
              </SimpleGrid>
              <SimpleGrid cols={3}>
                {equipmentItem?.skill && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Skill</InputLabel>
                      <Text tt="capitalize">
                        {skillKeyLabels(equipmentItem?.skill)}
                      </Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.armorRating && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Armor Rating</InputLabel>
                      <Text>{equipmentItem?.armorRating}</Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.damage && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Damage</InputLabel>
                      <Text>{equipmentItem?.damage}</Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.lethality && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Lethality</InputLabel>
                      <Text>{equipmentItem?.lethality}%</Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.armorPiercing !== undefined && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Armor Piercing</InputLabel>
                      <Text>
                        {equipmentItem?.armorPiercing === 0
                          ? "N/A"
                          : equipmentItem?.armorPiercing}
                      </Text>
                    </Stack>{" "}
                  </>
                )}
                {equipmentItem?.range !== undefined && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Range</InputLabel>
                      <Text>{equipmentItem?.range}m</Text>
                    </Stack>{" "}
                  </>
                )}
                {equipmentItem?.uses && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Uses</InputLabel>
                      <Text>{equipmentItem?.uses}</Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.radius && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Radius</InputLabel>
                      <Text>{equipmentItem?.radius}</Text>
                    </Stack>
                  </>
                )}
                {equipmentItem?.penalty && (
                  <>
                    <Stack gap="0">
                      <InputLabel c="dimmed">Penalty</InputLabel>
                      <Text>{equipmentItem?.penalty}</Text>
                    </Stack>{" "}
                  </>
                )}
              </SimpleGrid>
              {equipmentItem?.description && (
                <Stack gap="0">
                  <InputLabel c="dimmed">Description</InputLabel>
                  <Text>
                    {equipmentItem?.description.length > 85
                      ? equipmentItem?.description.slice(0, 85) + "..."
                      : equipmentItem?.description}
                  </Text>
                </Stack>
              )}
            </Stack>
            {currentCharacter.equipment.filter(
              (item) => item.name === equipmentItem.name
            ).length > 0 && (
              <Button
                leftSection={<IconTrash />}
                color="red"
                onClick={() => deleteEquipment(equipmentItem)}
              >
                Delete
              </Button>
            )}
          </Stack>
        </Drawer>
      ) : (
        <Modal
          opened={opened}
          onClose={() => setOpened(!opened)}
          title={<Title order={3}>{equipmentItem.name}</Title>}
        >
          <Stack>
            {equipmentItem?.restricted && (
              <Text c="red" fw={700}>
                {handleEquipmentType(equipmentItem).subtype === "firearms"
                  ? "RESTRICTED IF CAPABLE OF AUTOMATIC FIRE"
                  : "RESTRICTED"}
              </Text>
            )}
            <SimpleGrid cols={2}>
              <Stack gap="0">
                <InputLabel c="dimmed">Type</InputLabel>
                <Text tt="capitalize">
                  {handleEquipmentType(equipmentItem).type}
                </Text>
              </Stack>
              <Stack gap="0">
                <InputLabel c="dimmed">Subtype</InputLabel>
                <Text tt="capitalize">
                  {handleEquipmentType(equipmentItem).subtype}
                </Text>
              </Stack>
            </SimpleGrid>
            <SimpleGrid cols={3}>
              {equipmentItem?.skill && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Skill</InputLabel>
                    <Text tt="capitalize">
                      {skillKeyLabels(equipmentItem?.skill)}
                    </Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.armorRating && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Armor Rating</InputLabel>
                    <Text>{equipmentItem?.armorRating}</Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.damage && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Damage</InputLabel>
                    <Text>{equipmentItem?.damage}</Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.lethality && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Lethality</InputLabel>
                    <Text>{equipmentItem?.lethality}%</Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.armorPiercing !== undefined && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Armor Piercing</InputLabel>
                    <Text>
                      {equipmentItem?.armorPiercing === 0
                        ? "N/A"
                        : equipmentItem?.armorPiercing}
                    </Text>
                  </Stack>{" "}
                </>
              )}
              {equipmentItem?.range !== undefined && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Range</InputLabel>
                    <Text>{equipmentItem?.range}m</Text>
                  </Stack>{" "}
                </>
              )}
              {equipmentItem?.uses && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Uses</InputLabel>
                    <Text>{equipmentItem?.uses}</Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.radius && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Radius</InputLabel>
                    <Text>{equipmentItem?.radius}</Text>
                  </Stack>
                </>
              )}
              {equipmentItem?.penalty && (
                <>
                  <Stack gap="0">
                    <InputLabel c="dimmed">Penalty</InputLabel>
                    <Text>{equipmentItem?.penalty}</Text>
                  </Stack>{" "}
                </>
              )}
            </SimpleGrid>
            {equipmentItem?.description && (
              <Stack gap="0">
                <InputLabel c="dimmed">Description</InputLabel>
                <Text>
                  {equipmentItem?.description.length > 85
                    ? equipmentItem?.description.slice(0, 85) + "..."
                    : equipmentItem?.description}
                </Text>
              </Stack>
            )}
            {currentCharacter.equipment.filter(
              (item) => item.name === equipmentItem.name
            ).length > 0 && (
              <Button
                leftSection={<IconTrash />}
                color="red"
                onClick={() => deleteEquipment(equipmentItem)}
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal>
      )}
    </Grid>
  );
};
