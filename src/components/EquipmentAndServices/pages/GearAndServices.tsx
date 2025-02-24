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
    <ScrollArea h={"93vh"}>
      <Grid
        p={viewport.width > 600 ? "md" : 0}
        gutter={viewport.width > 600 ? "md" : "0"}
        id="gear-and-services"
      >
        <Grid.Col span={12}>
          <Stack gap="lg">
            <Title td="underline" id="transportation">
              Transportation
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) => item.gearAndServicesType === "transportation"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="lodgings">
              Lodgings
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="covers-and-legends">
              Covers and Legends
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) => item.gearAndServicesType === "coversAndLegends"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="storage">
              Storage
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="restraints">
              Restraints
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="research">
              Research
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="communications-and-computers">
              Communications and Computers
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) =>
                      item.gearAndServicesType === "communicationsAndComputers"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="surveillance">
              Surveillance
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="lighting-and-vision">
              Lighting and Vision
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) => item.gearAndServicesType === "lightingAndVision"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="breaking-and-entering">
              Breaking and Entering
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) => item.gearAndServicesType === "breakingAndEntering"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="emergency-and-survival">
              Emergency and Survival
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) =>
                      item.gearAndServicesType === "emergencyAndSurvival"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="off-the-books-medical-care">
              Off-the-books Medical Care
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="weapon-accessories">
              Weapon Accessories
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
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
              id="law-enforcement-(official-requisition-only)"
            >
              Law Enforcement (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {otherGearAndServicesList
                  .filter(
                    (item) => item.gearAndServicesType === "lawEnforcement"
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="military-(official-requisition-only)">
              Military (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Title td="underline" id="intelligence-(official-requisition-only)">
              Intelligence (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
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
              id="public-safety-(official-requisition-only)"
            >
              Public Safety (Official Requisition Only)
            </Title>
            <Table withTableBorder highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={"80%"}>Item</Table.Th>
                  <Table.Th w={"20%"}>Expense</Table.Th>
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
                        <Table.Td tt="capitalize">
                          {viewport.width > 760 ? (
                            <Group>
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Group>
                          ) : (
                            <Stack align="center">
                              <IconTriangleFilled
                                color={calculateIcon(item.expense)}
                              />
                              {item.expense}
                            </Stack>
                          )}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
          </Stack>
        </Grid.Col>
      </Grid>
    </ScrollArea>
  );
};

export default GearsAndServices;
