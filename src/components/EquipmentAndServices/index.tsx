import {
  Divider,
  Grid,
  Group,
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
import { IconList } from "@tabler/icons-react";

export const EquipmentAndServices = () => {
  const [activeTab, setActiveTab] = useState<string | null>("overview");
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    reinitializeRef.current();
  }, [activeTab]);

  return (
    <Grid>
      <Grid.Col span={10}>
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab value={"overview"}>Overview</Tabs.Tab>
            <Tabs.Tab value={"weapons"}>Weapons</Tabs.Tab>
            <Tabs.Tab value={"armor"}>Armor</Tabs.Tab>
            <Tabs.Tab value={"vehicles"}>Vehicles</Tabs.Tab>
            <Tabs.Tab value={"gear-and-services"}>Gear and Services</Tabs.Tab>
          </Tabs.List>
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
              selector: `#${activeTab} :is(h1, h2, h3, h4, h5, h6)`,
            }}
            getControlProps={({ data }) => ({
              onClick: () => data.getNode().scrollIntoView(),
              children: data.value,
            })}
          />
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};
