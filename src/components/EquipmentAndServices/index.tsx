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
import { IconList, IconNotebook } from "@tabler/icons-react";
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
    <Grid pb={viewport.width > 760 ? 0 : 60} pt={viewport.width > 760 ? 0 : 10}>
      <Grid.Col span={viewport.width > 992 && tabValue !== "search" ? 10 : 12}>
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/equipment-and-services/${value}`)}
        >
          {viewport.width > 760 ? (
            <Tabs.List>
              <Tabs.Tab value={"overview"}>Overview</Tabs.Tab>
              <Tabs.Tab value={"weapons"}>Weapons</Tabs.Tab>
              <Tabs.Tab value={"armor"}>Body Armor</Tabs.Tab>
              <Tabs.Tab value={"vehicles"}>Vehicles</Tabs.Tab>
              <Tabs.Tab value={"gear-and-services"}>Gear and Services</Tabs.Tab>
              <Tabs.Tab value={"search"}>Search</Tabs.Tab>
            </Tabs.List>
          ) : (
            <Affix position={{ bottom: 20, right: 20 }}>
              <Button
                leftSection={<IconNotebook />}
                variant="gradient"
                onClick={() => setMobileMenuOpen(true)}
              >
                Section List
              </Button>
              <Modal
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                fullScreen
                title="Section List"
              >
                <Stack>
                  <NavLink
                    label="Overview"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/equipment-and-services/overview");
                    }}
                    active={
                      location.pathname === "/equipment-and-services/overview"
                    }
                  />
                  <NavLink
                    label="Weapons"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/equipment-and-services/weapons");
                    }}
                    active={
                      location.pathname === "/equipment-and-services/weapons"
                    }
                  />
                  <NavLink
                    label="Body Armor"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/equipment-and-services/armor");
                    }}
                    active={
                      location.pathname === "/equipment-and-services/armor"
                    }
                  />
                  <NavLink
                    label="Vehicles"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/equipment-and-services/vehicles");
                    }}
                    active={
                      location.pathname === "/equipment-and-services/vehicles"
                    }
                  />
                  <NavLink
                    label="Gear and Services"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/equipment-and-services/gear-and-services");
                    }}
                    active={
                      location.pathname ===
                      "/equipment-and-services/gear-and-services"
                    }
                  />
                </Stack>
              </Modal>
            </Affix>
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
        <Grid.Col span={2}>
          <ScrollArea h={"95vh"}>
            <Group pb="sm">
              <IconList />
              <Text>Table of Contents</Text>
            </Group>
            <Divider />
            <TableOfContents
              variant="none"
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
          </ScrollArea>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default EquipmentAndServices;
