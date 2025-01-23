import {
  Affix,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Table,
  TableOfContents,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { weaponsLists } from "../../data";
import { Weapons } from "./pages/Weapons";
import { Armor } from "./pages/Armor";
import { Vehicles } from "./pages/Vehicles";
import { GearsAndServices } from "./pages/GearAndServices";
import { Overview } from "./pages/Overview";
import { useEffect, useRef, useState } from "react";
import { IconList, IconNotebook } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const EquipmentAndServices = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const { width } = useViewportSize();
  const navigate = useNavigate();
  const { tabValue } = useParams();

  useEffect(() => {
    if(!tabValue){
      navigate('/equipment-and-services/overview')
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={width > 760 ? 0 : 60}>
      <Grid.Col span={width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          value={tabValue}
          onChange={(value) => navigate(`/equipment-and-services/${value}`)}
        >
          {width > 760 ? (
            <Tabs.List>
              <Tabs.Tab value={"overview"}>Overview</Tabs.Tab>
              <Tabs.Tab value={"weapons"}>Weapons</Tabs.Tab>
              <Tabs.Tab value={"armor"}>Armor</Tabs.Tab>
              <Tabs.Tab value={"vehicles"}>Vehicles</Tabs.Tab>
              <Tabs.Tab value={"gear-and-services"}>Gear and Services</Tabs.Tab>
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
                <Tabs.List>
                  <Stack>
                    <Tabs.Tab
                      value={"overview"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Overview
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"weapons"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Weapons
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"armor"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Armor
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"vehicles"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Vehicles
                    </Tabs.Tab>
                    <Tabs.Tab
                      value={"gear-and-services"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gear and Services
                    </Tabs.Tab>
                  </Stack>
                </Tabs.List>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="overview">
            <Overview />
          </Tabs.Panel>
          <Tabs.Panel value="weapons">
            <Weapons />
          </Tabs.Panel>
          <Tabs.Panel value="armor">
            <Armor />
          </Tabs.Panel>
          <Tabs.Panel value="vehicles">
            <Vehicles />
          </Tabs.Panel>
          <Tabs.Panel value="gear-and-services">
            <GearsAndServices />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {width > 992 && (
        <Grid.Col span={2}>
          <ScrollArea h={"95vh"}>
            <Group py="md">
              <IconList />
              <Text>Table of Contents</Text>
            </Group>
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
          </ScrollArea>
        </Grid.Col>
      )}
    </Grid>
  );
};
