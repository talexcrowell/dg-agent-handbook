import {
  Accordion,
  ActionIcon,
  Card,
  Divider,
  Grid,
  Group,
  HoverCard,
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
} from "@tabler/icons-react";
import styles from "../../../Element.module.css";
import { useState } from "react";
import {
  armorList,
  otherGearAndServicesList,
  vehicleList,
  weaponsLists,
} from "../../../data";
import Fuse from "fuse.js";

export const Equipment = () => {
  const [viewport] = useViewportContext();
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const equipmentMasterList = [...weaponsLists, ...armorList, ...vehicleList];

  const fuse = new Fuse(equipmentMasterList, {
    keys: ["name"],
    threshold: 0.45,
  });

  const filteredList = fuse.search(searchTerm).map((result) => {
    return { ...result.item };
  });

  return (
    <Grid py="md" px={viewport.width > 992 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Equipment
          </Title>
          
          <Accordion
            styles={{
              root: { border: "1px solid #C9C9C9", borderRadius: "6px" },
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
                                {result.name}{" "}
                                <Group>
                                  <ActionIcon>
                                    <IconInfoCircle />
                                  </ActionIcon>
                                  <ActionIcon>
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

          <Textarea label="Other Gear" rows={10} ta="start" />
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
