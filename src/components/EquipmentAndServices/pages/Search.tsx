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
  Table,
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

  const equipmentTypeColors = (value) => {
    switch (value) {
      case "gearAndServices":
        return "green";
      case "weapon":
        return "pink";
      case "armor":
        return "blue";
      case "vehicle":
        return "purple";
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
    <Grid>
      <Grid.Col span={12}>
        <Stack>
          <TextInput
            label="Search by Name"
            leftSection={<IconSearch />}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            placeholder="Enter search term here..."
          />
          <Stack gap={"0"}>
            <InputLabel>Filter Options</InputLabel>
            <Card>
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
                  data={[
                    "Incidental",
                    "Standard",
                    "Unusual",
                    "Major",
                    "Extreme",
                  ]}
                  w={300}
                  value={expenseFilter}
                  onChange={handleExpenseFilter}
                />
              </Group>
            </Card>
          </Stack>
          <Stack gap={"0"}>
            <InputLabel>Expenses</InputLabel>
            <Card>
              <Group justify='space-evenly'>
                <Group>
                  <IconTriangleFilled color={"green"} />
                  <Text size="sm">Incidental (&lt;$150)</Text>
                </Group>
                <Group>
                  <IconTriangleFilled color={"blue"} />
                  <Text size="sm">Standard ($200-$800)</Text>
                </Group>
                <Group>
                  <IconTriangleFilled color={"yellow"} />
                  <Text size="sm">Unusual ($1000-$5000)</Text>
                </Group>
                <Group>
                  <IconTriangleFilled color={"orange"} />
                  <Text size="sm">Major ($6000-$30,000)</Text>
                </Group>
                <Group>
                  <IconTriangleFilled color={"red"} />
                  <Text size="sm">Extreme (&gt;$36000)</Text>
                </Group>
              </Group>
            </Card>
          </Stack>
          <Divider />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <ScrollArea
          h={viewport.height - 400}
          scrollbars="y"
          offsetScrollbars="y"
        >
          <Stack>
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
                      <Card>
                        <Stack>
                          <Group>
                            <Text fw={600}>{item.name}</Text>
                            <Badge color={equipmentTypeColors(item.type)}>
                              {equipmentTypeLabels(item.type)}
                            </Badge>
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
                          <Divider />
                          <Grid>
                            {item?.weaponType === "firearms" &&
                              item?.restricted && (
                                <Grid.Col span={12}>
                                  <Text c="red" fw={700} td="underline">
                                    [RESTRICTED ITEM IF CAPABLE OF AUTOMATIC
                                    FIRE]
                                  </Text>
                                </Grid.Col>
                              )}
                            {item?.skill && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Skill</InputLabel>
                                  <Text tt="capitalize">
                                    {skillKeyLabels(item?.skill)}
                                  </Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.range > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Range</InputLabel>
                                  <Text>{item?.range}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.uses && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Uses</InputLabel>
                                  <Text>{item?.uses}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.radius && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Radius</InputLabel>
                                  <Text>{item?.radius}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.penalty && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">
                                    Target Penalty
                                  </InputLabel>
                                  <Text>{item?.penalty}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.damage && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Damage</InputLabel>
                                  <Text>{item?.damage}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.lethality > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">Lethality</InputLabel>
                                  <Text>{item?.lethality}%</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.ammoCapacity > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">
                                    Ammo Capacity
                                  </InputLabel>
                                  <Text>{item?.ammoCapacity}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            {item?.armorPiercing > 0 && (
                              <Grid.Col span={"auto"}>
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">
                                    Armor Piercing
                                  </InputLabel>
                                  <Text>{item?.armorPiercing}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                            <Grid.Col span={2}>
                              <Stack gap="xs">
                                <InputLabel c="dimmed">Expense</InputLabel>
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
                              <Grid.Col
                                span={
                                  item?.weaponType === "firearms" ? 12 : "auto"
                                }
                              >
                                <Stack gap="xs">
                                  <InputLabel c="dimmed">
                                    Description
                                  </InputLabel>
                                  <Text>{item?.description}</Text>
                                </Stack>
                              </Grid.Col>
                            )}
                          </Grid>
                        </Stack>
                      </Card>
                      // <Accordion.Item value={item.name}>
                      //   <Accordion.Control>
                      //     <Group>
                      //       {item.name}{" "}
                      //       <Badge color={equipmentTypeColors(item.type)}>
                      //         {equipmentTypeLabels(item.type)}
                      //       </Badge>
                      //       {item?.weaponType && (
                      //         <Badge color="grey">
                      //           {equipmentTypeLabels(item?.weaponType)}
                      //         </Badge>
                      //       )}
                      //       {item?.vehicleType && (
                      //         <Badge color="grey">{item?.vehicleType}</Badge>
                      //       )}
                      //       {item?.gearAndServicesType && (
                      //         <Badge color="grey">
                      //           {equipmentTypeLabels(
                      //             item?.gearAndServicesType
                      //           )}
                      //         </Badge>
                      //       )}
                      //       {item?.restricted && (
                      //         <Badge color="red">Restricted</Badge>
                      //       )}
                      //     </Group>
                      //   </Accordion.Control>
                      //   <Accordion.Panel>
                      //     <Grid>
                      //       {item?.restricted && (
                      //         <Grid.Col span={12}>
                      //           <Text c="red" fw={700} td="underline">
                      //             {item?.weaponType === "firearms"
                      //               ? "[RESTRICTED ITEM IF CAPABLE OF AUTOMATIC FIRE]"
                      //               : "[RESTRICTED ITEM]"}
                      //           </Text>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.skill && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Skill</InputLabel>
                      //             <Text tt="capitalize">
                      //               {skillKeyLabels(item?.skill)}
                      //             </Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.range > 0 && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Range</InputLabel>
                      //             <Text>{item?.range}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.uses && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Uses</InputLabel>
                      //             <Text>{item?.uses}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.radius && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Radius</InputLabel>
                      //             <Text>{item?.radius}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.penalty && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Target Penalty</InputLabel>
                      //             <Text>{item?.penalty}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.damage && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Damage</InputLabel>
                      //             <Text>{item?.damage}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.lethality > 0 && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Lethality</InputLabel>
                      //             <Text>{item?.lethality}%</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.ammoCapacity > 0 && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Ammo Capacity</InputLabel>
                      //             <Text>{item?.ammoCapacity}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       {item?.armorPiercing > 0 && (
                      //         <Grid.Col span={"auto"}>
                      //           <Stack gap="0">
                      //             <InputLabel>Armor Piercing</InputLabel>
                      //             <Text>{item?.armorPiercing}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //       <Grid.Col span={"auto"}>
                      //         <Stack gap="0">
                      //           <InputLabel>Expense</InputLabel>
                      //           <Text tt="capitalize">
                      //             <Group>
                      //               <IconTriangleFilled
                      //                 color={calculateIcon(
                      //                   item?.expense.toLowerCase()
                      //                 )}
                      //               />
                      //               {item?.expense}
                      //             </Group>
                      //           </Text>
                      //         </Stack>
                      //       </Grid.Col>
                      //       {item?.description && (
                      //         <Grid.Col span={12}>
                      //           <Stack gap="0">
                      //             <InputLabel>Description</InputLabel>
                      //             <Text>{item?.description}</Text>
                      //           </Stack>
                      //         </Grid.Col>
                      //       )}
                      //     </Grid>
                      //   </Accordion.Panel>
                      // </Accordion.Item>
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
                      <Card>
                        <Stack>
                          <Group justify="space-between">
                            <Group>
                              <Stack gap="xs">
                                <Text tt="capitalize">
                                  <Group>
                                    <IconTriangleFilled
                                      color={calculateIcon(
                                        item?.expense.toLowerCase()
                                      )}
                                    />
                                  </Group>
                                </Text>
                              </Stack>
                              <Text fw={600}>{item.name}</Text>
                            </Group>
                            <Group>
                              <Badge color={equipmentTypeColors(item.type)}>
                                {equipmentTypeLabels(item.type)}
                              </Badge>
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
                                  {equipmentTypeLabels(
                                    item?.gearAndServicesType
                                  )}
                                </Badge>
                              )}
                              {item?.restricted && (
                                <Badge color="red">Restricted</Badge>
                              )}
                            </Group>
                          </Group>
                          {item.type !== "gearAndServices" &&
                            !item.description && (
                              <>
                                <Divider />
                                <Grid>
                                  {item?.weaponType === "firearms" &&
                                    item?.restricted && (
                                      <Grid.Col span={12}>
                                        <Text c="red" fw={700} td="underline">
                                          [RESTRICTED ITEM IF CAPABLE OF
                                          AUTOMATIC FIRE]
                                        </Text>
                                      </Grid.Col>
                                    )}
                                  {item?.skill && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Skill
                                        </InputLabel>
                                        <Text tt="capitalize">
                                          {skillKeyLabels(item?.skill)}
                                        </Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.range > 0 && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Range
                                        </InputLabel>
                                        <Text>{item?.range}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.uses && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">Uses</InputLabel>
                                        <Text>{item?.uses}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.radius && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Radius
                                        </InputLabel>
                                        <Text>{item?.radius}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.penalty && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Target Penalty
                                        </InputLabel>
                                        <Text>{item?.penalty}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.damage && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Damage
                                        </InputLabel>
                                        <Text>{item?.damage}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.lethality > 0 && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Lethality
                                        </InputLabel>
                                        <Text>{item?.lethality}%</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.ammoCapacity > 0 && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Ammo Capacity
                                        </InputLabel>
                                        <Text>{item?.ammoCapacity}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.armorPiercing > 0 && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Armor Piercing
                                        </InputLabel>
                                        <Text>{item?.armorPiercing}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.hp && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Hit Points
                                        </InputLabel>
                                        <Text>{item?.hp}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.armor > -1 && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Armor
                                        </InputLabel>
                                        <Text>{item?.armor}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.speed && (
                                    <Grid.Col span={"auto"}>
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Speed
                                        </InputLabel>
                                        <Text>{item?.speed}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                  {item?.description && (
                                    <Grid.Col
                                      span={
                                        item?.weaponType === "firearms"
                                          ? 12
                                          : "auto"
                                      }
                                    >
                                      <Stack gap="xs">
                                        <InputLabel c="dimmed">
                                          Description
                                        </InputLabel>
                                        <Text>{item?.description}</Text>
                                      </Stack>
                                    </Grid.Col>
                                  )}
                                </Grid>
                              </>
                            )}
                        </Stack>
                      </Card>
                    );
                  })}
          </Stack>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Search;
