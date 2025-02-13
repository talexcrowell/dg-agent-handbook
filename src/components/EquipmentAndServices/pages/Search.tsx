import {
  Accordion,
  Card,
  Checkbox,
  CheckboxGroup,
  Grid,
  Group,
  InputLabel,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";
import {
  armorList,
  otherGearAndServicesList,
  vehicleList,
  weaponsLists,
} from "../../../data";

export const Search = () => {
  const [viewport] = useViewportContext();
  const [searchTerm, setSearchTerm] = useState("");
  const masterList = [
    ...weaponsLists,
    ...armorList,
    ...vehicleList,
    ...otherGearAndServicesList,
  ];

  const renderList = masterList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <Grid
      p={viewport.width > 600 ? "md" : 0}
      gutter={viewport.width > 600 ? "md" : "0"}
    >
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Search</Title>
          <TextInput
            leftSection={<IconSearch />}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <CheckboxGroup>
            <Group py="sm">
              <Checkbox label="Weapons" />
              <Checkbox label="Armor" />
              <Checkbox label="Vehicles" />
              <Checkbox label="Gear and Services" />
            </Group>
          </CheckboxGroup>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <ScrollArea h={650}>
          {searchTerm ? (
            <Accordion>
              {renderList.map((item) => {
                return (
                  <Accordion.Item value={item.name}>
                    <Accordion.Control>{item.name}</Accordion.Control>
                    <Accordion.Panel>
                      <Grid>
                        {item?.restricted && (
                          <Grid.Col span={12}>
                            <Text c="red" fw={700} td="underline">
                              {item?.type === "firearms"
                                ? "RESTRICTED ITEM IF CAPABLE OF AUTOMATIC FIRE"
                                : "RESTRICTED ITEM"}
                            </Text>
                          </Grid.Col>
                        )}
                        {item?.skill && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Skill</InputLabel>
                              <Text tt="capitalize">
                                {skillKeyLabels(item?.skill)}
                              </Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.range && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Range</InputLabel>
                              <Text>{item?.range}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.uses && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Uses</InputLabel>
                              <Text>{item?.uses}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.radius && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Radius</InputLabel>
                              <Text>{item?.radius}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.penalty && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Target Penalty</InputLabel>
                              <Text>{item?.penalty}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.damage && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Damage</InputLabel>
                              <Text>{item?.damage}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.lethality > 0 && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Lethality</InputLabel>
                              <Text>{item?.lethality}%</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.ammoCapacity > 0 && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Ammo Capacity</InputLabel>
                              <Text>{item?.ammoCapacity}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        {item?.armorPiercing > 0 && (
                          <Grid.Col span={"auto"}>
                            <Stack>
                              <InputLabel>Armor Piercing</InputLabel>
                              <Text>{item?.armorPiercing}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                        <Grid.Col span={"auto"}>
                          <Stack>
                            <InputLabel>Expense</InputLabel>
                            <Text tt="capitalize">{item?.expense}</Text>
                          </Stack>
                        </Grid.Col>
                        {item?.description && (
                          <Grid.Col span={12}>
                            <Stack>
                              <InputLabel>Description</InputLabel>
                              <Text>{item?.description}</Text>
                            </Stack>
                          </Grid.Col>
                        )}
                      </Grid>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          ) : (
            <Card>
              <Card.Section>
                <Text c="dimmed">
                  Start your search by adding a search term...
                </Text>
              </Card.Section>
            </Card>
          )}
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};
