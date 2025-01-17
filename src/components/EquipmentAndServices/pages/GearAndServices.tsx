import {
  Grid,
  Group,
  ScrollArea,
  Stack,
  Table,
  Title,
  Tooltip,
} from "@mantine/core";
import { armorList, otherGearAndServicesList } from "../../../data";
import {
  IconCancel,
  IconInfoCircle,
  IconTriangleFilled,
} from "@tabler/icons-react";

export const GearsAndServices = () => {
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
      <Grid p="md" id='gear-and-services'>
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline">Transportation</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.transportation.map((item) => {
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
            <Title td="underline">Lodgings</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.lodgings.map((item) => {
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
            <Title td="underline">Covers and Legends</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.coversAndLegends.map((item) => {
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
            <Title td="underline">Storage</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.storage.map((item) => {
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
            <Title td="underline">Restraints</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>

                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.restraints.map((item) => {
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
            <Title td="underline">Research</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.research.map((item) => {
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
            <Title td="underline">Communications and Computers</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.communicationsAndComputers.map(
                  (item) => {
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
                          <Group>
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                            {item.expense}
                          </Group>
                        </Table.Td>
                      </Table.Tr>
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
            <Title td="underline">Surveillance</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>

                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.surveillance.map((item) => {
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
            <Title td="underline">Lighting and Vision</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.lightingAndVision.map((item) => {
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
            <Title td="underline">Breaking and Entering</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.breakingAndEntering.map((item) => {
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
            <Title td="underline">Emergency and Survival</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.emergencyAndSurvival.map((item) => {
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
            <Title td="underline">Off-the-books Medical Care</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.medicalCare.map((item) => {
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
            <Title td="underline">Weapon Accessories</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.accessories.map((item) => {
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
            <Title td="underline">
              Law Enforcement (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.lawEnforcement.map((item) => {
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
            <Title td="underline">Military (Official Requisition Only)</Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.military.map((item) => {
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
            <Title td="underline">
              Intelligence (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.intelligence.map((item) => {
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
            <Title td="underline">
              Public Safety (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList.publicSafety.map((item) => {
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
