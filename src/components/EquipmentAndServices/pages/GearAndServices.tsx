import {
  Grid,
  Group,
  ScrollArea,
  Space,
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
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const GearsAndServices = () => {
  const [viewport] = useViewportContext();
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
    <Grid id="gear-and-services">
      <Grid.Col span={12}>
        <Stack gap="lg">
          <Title td="underline" id="transportation" style={{ scrollMarginTop: 80 }}>
            Transportation
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "transportation")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="lodgings" style={{ scrollMarginTop: 80 }}>
            Lodgings
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "lodgings")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="covers-and-legends" style={{ scrollMarginTop: 80 }}>
            Covers and Legends
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter(
                  (item) => item.gearAndServicesType === "coversAndLegends",
                )
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="storage" style={{ scrollMarginTop: 80 }}>
            Storage
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "storage")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="restraints" style={{ scrollMarginTop: 80 }}>
            Restraints
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "restraints")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="research" style={{ scrollMarginTop: 80 }}>
            Research
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "research")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="communications-and-computers" style={{ scrollMarginTop: 80 }}>
            Communications and Computers
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter(
                  (item) =>
                    item.gearAndServicesType === "communicationsAndComputers",
                )
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="surveillance" style={{ scrollMarginTop: 80 }}>
            Surveillance
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "surveillance")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="lighting-and-vision" style={{ scrollMarginTop: 80 }}>
            Lighting and Vision
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter(
                  (item) => item.gearAndServicesType === "lightingAndVision",
                )
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="breaking-and-entering" style={{ scrollMarginTop: 80 }}>
            Breaking and Entering
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter(
                  (item) => item.gearAndServicesType === "breakingAndEntering",
                )
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="emergency-and-survival" style={{ scrollMarginTop: 80 }}>
            Emergency and Survival
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter(
                  (item) => item.gearAndServicesType === "emergencyAndSurvival",
                )
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="off-the-books-medical-care" style={{ scrollMarginTop: 80 }}>
            Off-the-books Medical Care
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "medicalCare")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="weapon-accessories" style={{ scrollMarginTop: 80 }}>
            Weapon Accessories
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "accessories")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title
            td="underline"
            id="law-enforcement-(official-requisition-only)" style={{ scrollMarginTop: 80 }}
          >
            Law Enforcement (Official Requisition Only)
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "lawEnforcement")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="military-(official-requisition-only)" style={{ scrollMarginTop: 80 }}>
            Military (Official Requisition Only)
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "military")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="intelligence-(official-requisition-only)" style={{ scrollMarginTop: 80 }}>
            Intelligence (Official Requisition Only)
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "intelligence")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          <Title td="underline" id="public-safety-(official-requisition-only)" style={{ scrollMarginTop: 80 }}>
            Public Safety (Official Requisition Only)
          </Title>
          <Table withTableBorder highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={"80%"}>Item</Table.Th>
                <Table.Th w={"20%"} ta="center">
                  Expense
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {otherGearAndServicesList
                .filter((item) => item.gearAndServicesType === "publicSafety")
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
                      <Table.Td tt="capitalize" ta="center">
                        {viewport.width > 760 ? (
                          <IconTriangleFilled
                            color={calculateIcon(item.expense)}
                          />
                        ) : (
                          <Stack align="center">
                            <IconTriangleFilled
                              color={calculateIcon(item.expense)}
                            />
                          </Stack>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
            </Table.Tbody>
          </Table>
          {viewport.width > 992 && Array.from({ length: 50 }, (_, i) => (
            <Space />
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default GearsAndServices;
