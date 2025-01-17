import {
  Divider,
  Grid,
  ScrollArea,
  Stack,
  Table,
  Tabs,
  Title,
} from "@mantine/core";
import { weaponsLists } from "../../data";
import { Weapons } from "./pages/Weapons";
import { Armor } from "./pages/Armor";

export const EquipmentAndServices = () => {
  return (
    <Tabs defaultValue="overview" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value={"overview"}>Overview</Tabs.Tab>
        <Tabs.Tab value={"weapons"}>Weapons</Tabs.Tab>
        <Tabs.Tab value={"armor"}>Armor</Tabs.Tab>
        <Tabs.Tab value={"vehicles"}>Vehicles</Tabs.Tab>
        <Tabs.Tab value={"gearAndServices"}>Gear and Services</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Coming Soon</Tabs.Panel>
      <Tabs.Panel value="weapons">
        <Weapons />
      </Tabs.Panel>
      <Tabs.Panel value="armor">
        <Armor />
      </Tabs.Panel>
      <Tabs.Panel value="vehicles">Coming Soon</Tabs.Panel>
      <Tabs.Panel value="gearAndServices">Coming Soon</Tabs.Panel>
    </Tabs>
  );
};
