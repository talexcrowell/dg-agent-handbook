import {
  Accordion,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  Group,
  InputLabel,
  MultiSelect,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconSearch, IconTriangleFilled } from "@tabler/icons-react";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { useState } from "react";
import {
  armorList,
  otherGearAndServicesList,
  vehicleList,
  weaponsLists,
} from "../../../data";
import Fuse from "fuse.js";

export const Search = () => {
  const [viewport] = useViewportContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState<any>({
    weapon: true,
    armor: true,
    vehicle: true,
    gearAndServices: true,
    restricted: true,
  });
  const [expenseFilter, setExpenseFilter] = useState<any>([]);
  const [accordionValue, setAccordionValue] = useState<string | null>("");

  const masterList = [
    ...weaponsLists,
    ...armorList,
    ...vehicleList,
    ...otherGearAndServicesList,
  ];

  const fuse = new Fuse(masterList, {
    keys: ["name"],
    threshold: 0.45,
  });

  const filteredList = fuse.search(searchTerm).map((result) => {
    return { ...result.item };
  });

  const [itemList, setItemList] = useState([...masterList]);

  // const filteredList = itemList.filter((item) => {
  //   return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

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

  const equipmentTypeLabels = (value) => {
    switch (value) {
      case "breakingAndEntering":
        return "Breaking And Entering";
      case "communicationsAndComputers":
        return "Communications And Computers";
      case "coversAndLegends":
        return "Covers And Legends";
      case "emergencyAndSurvival":
        return "Emergency And Survival";
      case "gearAndServices":
        return "Gear and Services";
      case "lawEnforcement":
        return "Law Enforcement";
      case "lightingAndVision":
        return "Lighting And Vision";
      case "handToHand":
        return "Hand-to-Hand";
      case "heavyWeapons":
        return "Heavy Weapons";
      case "medicalCare":
        return "Medical Care";
      case "publicSafety":
        return "Public Safety";
      case "tearGasPepperSpray":
        return "Tear Gas And Pepper Spray";
      default:
        return value;
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

  const handleToggleFilter = (filter: any) => {
    let obj = filterOptions;
    switch (filter) {
      case "all":
        setFilterOptions({
          weapon: true,
          armor: true,
          vehicle: true,
          gearAndServices: true,
          restricted: true,
        });
        setItemList([...itemList]);
        break;

      case "Incidental":
      case "Standard":
      case "Unusual":
      case "Major":
      case "Extreme":
        if (
          itemList.filter((item: any) => item.expense === filter.toLowerCase())
            .length > 0
        ) {
          setItemList([
            ...itemList.filter(
              (item: any) => item.expense === filter.toLowerCase()
            ),
          ]);
        } else {
          let addArr = masterList.filter(
            (item: any) => item.expense === filter.toLowerCase()
          );
          setItemList([...itemList, ...addArr]);
        }
        break;
      case undefined:
        setItemList([...masterList]);
        break;
      default:
        if (filter in filterOptions) {
          filterOptions[filter] = !filterOptions[filter];
          setFilterOptions({ ...obj });
          if (filter === "restricted") {
            let addArr = masterList.filter((item: any) => {
              return item?.restricted;
            });
            filterOptions[filter]
              ? setItemList([...itemList, ...addArr])
              : setItemList([
                  ...itemList.filter((item: any) => {
                    return !item?.restricted;
                  }),
                ]);
          } else {
            if (
              itemList.filter((item: any) => item.type === filter).length > 0
            ) {
              setItemList([
                ...itemList.filter((item: any) => item.type !== filter),
              ]);
            } else {
              let addArr = masterList.filter(
                (item: any) => item.type === filter
              );
              setItemList([...itemList, ...addArr]);
            }
          }
          break;
        } else {
          if (
            itemList.filter((item: any) => item.keywords.includes(filter))
              .length > 0
          ) {
            setItemList([
              ...itemList.filter((item: any) => item.keywords.includes(filter)),
            ]);
          }
        }
    }
  };

  const handleExpenseFilter = (value: any) => {
    setExpenseFilter([...value]);
    handleToggleFilter(value[value.length - 1]);
  };

  return (
    <Grid
      p={viewport.width > 600 ? "md" : 0}
      gutter={viewport.width > 600 ? "md" : "0"}
    >
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Equipment and Services Search</Title>
          <TextInput
            label="Search by name"
            leftSection={<IconSearch />}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <Stack gap={"0"}>
            <InputLabel>Filter Options</InputLabel>
            <Group justify="space-evenly">
              <Checkbox
                defaultChecked
                checked={filterOptions.weapon}
                label="Weapons"
                onChange={() => handleToggleFilter("weapon")}
              />
              <Checkbox
                defaultChecked
                checked={filterOptions.armor}
                label="Armor"
                onChange={() => handleToggleFilter("armor")}
              />
              <Checkbox
                defaultChecked
                checked={filterOptions.vehicle}
                label="Vehicles"
                onChange={() => handleToggleFilter("vehicle")}
              />
              <Checkbox
                defaultChecked
                checked={filterOptions.equipment}
                label="Gear and Services"
                onChange={() => handleToggleFilter("gearAndServices")}
              />
              <Checkbox
                defaultChecked
                checked={filterOptions.restricted}
                label="Restricted"
                onChange={() => handleToggleFilter("restricted")}
              />
              <MultiSelect
                placeholder="Filter by Expense..."
                data={["Incidental", "Standard", "Unusual", "Major", "Extreme"]}
                w={300}
                value={expenseFilter}
                onChange={handleExpenseFilter}
              />
            </Group>
            {/* <Button>Apply Filters</Button> */}
          </Stack>
          <Divider />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <ScrollArea h={650}>
          <Accordion
            styles={{ panel: { backgroundColor: "#2e2e2e" } }}
          >
            {searchTerm
              ? filteredList
                  .sort((a: any, b: any) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((item) => {
                    return (
                      <Accordion.Item value={item.name}>
                        <Accordion.Control>
                          <Group>
                            {item.name}{" "}
                            <Badge>{equipmentTypeLabels(item.type)}</Badge>
                            {item?.weaponType && (
                              <Badge color="grey">
                                {equipmentTypeLabels(item?.weaponType)}
                              </Badge>
                            )}
                            {item?.vehicleType && (
                              <Badge color="grey">{item?.vehicleType}</Badge>
                            )}
                            {item?.gearAndServicesType && (
                              <Badge color="grey">
                                {equipmentTypeLabels(item?.gearAndServicesType)}
                              </Badge>
                            )}
                            {item?.restricted && (
                              <Badge color="red">Restricted</Badge>
                            )}
                          </Group>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <Grid>
                            {item?.restricted && (
                              <Grid.Col span={12}>
                                <Text c="red" fw={700} td="underline">
                                  {item?.weaponType === "firearms"
                                    ? "[RESTRICTED ITEM IF CAPABLE OF AUTOMATIC FIRE]"
                                    : "[RESTRICTED ITEM]"}
                                </Text>
                              </Grid.Col>
                            )}
                            {item?.skill && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Skill</InputLabel>
                                  <Text tt="capitalize">
                                    {skillKeyLabels(item?.skill)}
                                  </Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.range > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Range</InputLabel>
                                  <Text>{item?.range}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.uses && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Uses</InputLabel>
                                  <Text>{item?.uses}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.radius && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Radius</InputLabel>
                                  <Text>{item?.radius}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.penalty && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Target Penalty</InputLabel>
                                  <Text>{item?.penalty}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.damage && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Damage</InputLabel>
                                  <Text>{item?.damage}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.lethality > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Lethality</InputLabel>
                                  <Text>{item?.lethality}%</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.ammoCapacity > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Ammo Capacity</InputLabel>
                                  <Text>{item?.ammoCapacity}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.armorPiercing > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Armor Piercing</InputLabel>
                                  <Text>{item?.armorPiercing}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            <Grid.Col span={"auto"}>
                              <Stack gap="0">
                                <InputLabel>Expense</InputLabel>
                                <Text tt="capitalize">
                                  <Group>
                                    <IconTriangleFilled
                                      color={calculateIcon(
                                        item?.expense.toLowerCase()
                                      )}
                                    />
                                    {item?.expense}
                                  </Group>
                                </Text>
                              </Stack>
                            </Grid.Col>
                            {item?.description && (
                              <Grid.Col span={12}>
                                <Stack gap="0">
                                  <InputLabel>Description</InputLabel>
                                  <Text>{item?.description}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                          </Grid>
                        </Accordion.Panel>
                      </Accordion.Item>
                    );
                  })
              : itemList
                  .sort((a: any, b: any) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((item) => {
                    return (
                      <Accordion.Item value={item.name}>
                        <Accordion.Control>
                          <Group>
                            {item.name}{" "}
                            <Badge>{equipmentTypeLabels(item.type)}</Badge>
                            {item?.weaponType && (
                              <Badge color="grey">
                                {equipmentTypeLabels(item?.weaponType)}
                              </Badge>
                            )}
                            {item?.vehicleType && (
                              <Badge color="grey">{item?.vehicleType}</Badge>
                            )}
                            {item?.gearAndServicesType && (
                              <Badge color="grey">
                                {equipmentTypeLabels(item?.gearAndServicesType)}
                              </Badge>
                            )}
                            {item?.restricted && (
                              <Badge color="red">Restricted</Badge>
                            )}
                          </Group>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <Grid>
                            {item?.restricted && (
                              <Grid.Col span={12}>
                                <Text c="red" fw={700} td="underline">
                                  {item?.weaponType === "firearms"
                                    ? "[RESTRICTED ITEM IF CAPABLE OF AUTOMATIC FIRE]"
                                    : "[RESTRICTED ITEM]"}
                                </Text>
                              </Grid.Col>
                            )}
                            {item?.skill && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Skill</InputLabel>
                                  <Text tt="capitalize">
                                    {skillKeyLabels(item?.skill)}
                                  </Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.range > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Range</InputLabel>
                                  <Text>{item?.range}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.uses && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Uses</InputLabel>
                                  <Text>{item?.uses}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.radius && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Radius</InputLabel>
                                  <Text>{item?.radius}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.penalty && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Target Penalty</InputLabel>
                                  <Text>{item?.penalty}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.damage && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Damage</InputLabel>
                                  <Text>{item?.damage}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.lethality > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Lethality</InputLabel>
                                  <Text>{item?.lethality}%</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.ammoCapacity > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Ammo Capacity</InputLabel>
                                  <Text>{item?.ammoCapacity}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.armorPiercing > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Armor Piercing</InputLabel>
                                  <Text>{item?.armorPiercing}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.hp > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Hit Points</InputLabel>
                                  <Text>{item?.hp}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.armor > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Armor</InputLabel>
                                  <Text>{item?.armor}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.speed && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="0">
                                  <InputLabel>Armor</InputLabel>
                                  <Text>{item?.speed}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            <Grid.Col span={"auto"}>
                              <Stack gap="0">
                                <InputLabel>Expense</InputLabel>
                                <Text tt="capitalize">
                                  <Group>
                                    <IconTriangleFilled
                                      color={calculateIcon(
                                        item?.expense.toLowerCase()
                                      )}
                                    />
                                    {item?.expense}
                                  </Group>
                                </Text>
                              </Stack>
                            </Grid.Col>
                            {item?.description && (
                              <Grid.Col span={12}>
                                <Stack gap="0">
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
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};
