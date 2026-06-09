import {
  Affix,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Loader,
  Modal,
  NavLink,
  ScrollArea,
  Stack,
  Table,
  TableOfContents,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  IconChevronRight,
  IconList,
  IconNotebook,
  IconPackage,
  IconPackages,
  IconTriangleFilled,
} from "@tabler/icons-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";
import Overview from "./pages/Overview";
import { FormattedLoader } from "../FormattedLoader";

const Weapons = lazy(() => import("./pages/Weapons"));
const Armor = lazy(() => import("./pages/Armor"));
const Vehicles = lazy(() => import("./pages/Vehicles"));
const GearsAndServices = lazy(() => import("./pages/GearAndServices"));
const Search = lazy(() => import("./pages/Search"));

export const EquipmentAndServices = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();
  const [viewport] = useViewportContext();

  useEffect(() => {
    if (!tabValue) {
      navigate("/equipment-and-services/overview");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid>
      <Grid.Col
        span={viewport.width > 992 && tabValue !== "search" ? 10 : 12}
        py="0"
      >
        <Tabs
          defaultValue="overview"
          value={tabValue}
          onChange={(value) => navigate(`/equipment-and-services/${value}`)}
          keepMounted={false}
        >
          {viewport.width > 760 && (
            <Tabs.List
              style={{ position: "sticky", top: 45 }}
              bg="var(--mantine-color-dark-7)"
            >
              <Tabs.Tab value={"overview"}>Overview</Tabs.Tab>
              <Tabs.Tab value={"weapons"}>Weapons</Tabs.Tab>
              <Tabs.Tab value={"armor"}>Body Armor</Tabs.Tab>
              <Tabs.Tab value={"vehicles"}>Vehicles</Tabs.Tab>
              <Tabs.Tab value={"gear-and-services"}>Gear and Services</Tabs.Tab>
              <Tabs.Tab value={"search"}>Search</Tabs.Tab>
            </Tabs.List>
          )}
          <Tabs.Panel value="overview">
            <Overview />
          </Tabs.Panel>
          <Tabs.Panel value="weapons">
            <Suspense fallback={<FormattedLoader />}>
              <Weapons />
            </Suspense>
          </Tabs.Panel>
          <Tabs.Panel value="armor">
            <Suspense fallback={<FormattedLoader />}>
              <Armor />
            </Suspense>
          </Tabs.Panel>
          <Tabs.Panel value="vehicles">
            <Suspense fallback={<FormattedLoader />}>
              <Vehicles />
            </Suspense>
          </Tabs.Panel>
          <Tabs.Panel value="gear-and-services">
            <Suspense fallback={<FormattedLoader />}>
              <GearsAndServices />
            </Suspense>
          </Tabs.Panel>
          <Tabs.Panel value="search">
            <Suspense fallback={<FormattedLoader />}>
              <Search />
            </Suspense>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {viewport.width > 992 && tabValue !== "search" && (
        <Grid.Col span={2} py="0">
          <Stack
            maw={200}
            style={{ position: "sticky", top: 44 }}
            justify="space-between"
          >
            <Stack gap="0">
              <Button variant='transparent' leftSection={<IconList/>} ta='start' mx='0'>
                  Table of Contents
              </Button>
              <Divider size="sm" />
              <TableOfContents
                variant="light"
                color="blue"
                size="sm"
                radius="sm"
                reinitializeRef={reinitializeRef}
                scrollSpyOptions={{
                  selector: `#${tabValue} :is(h1, h2, h3, h4, h5, h6)`,
                }}
                getControlProps={({ data }) => ({
                  onClick: () => data.getNode().scrollIntoView(),
                  children: data.value,
                })}
              />
            </Stack>
            {tabValue !== "overview" && (
              <Table withColumnBorders withTableBorder striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Expense</Table.Th>
                    <Table.Th>Definition</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td ta="center">
                      <IconTriangleFilled color="green" />
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs">Incidental (&lt;$150)</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">
                      <IconTriangleFilled color="blue" />
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs">Standard ($200-$800)</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">
                      <IconTriangleFilled color="yellow" />
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs">Unusual ($1000-$5000)</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">
                      <IconTriangleFilled color="orange" />
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs">Major ($6000-$30,000)</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">
                      <IconTriangleFilled color="red" />
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs">Extreme (&gt;$36000)</Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            )}
          </Stack>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default EquipmentAndServices;
