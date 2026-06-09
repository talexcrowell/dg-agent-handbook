import {
  Grid,
  ScrollArea,
  Stack,
  Tabs,
  Text,
  Title,
  TableOfContents,
  Group,
  Divider,
  Affix,
  Button,
  Modal,
  NavLink,
} from "@mantine/core";
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";
import { TrainingVideo } from "./pages/TrainingVideo";
import { useEffect, useRef, useState } from "react";
import {
  IconBook,
  IconBook2,
  IconChevronRight,
  IconList,
  IconNotebook,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";

export const Rules = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!tabValue) {
      navigate("/rules/how-to-play");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid>
      <Grid.Col span={viewport.width > 992 ? 10 : 12}>
        <Tabs
          defaultValue="how-to-play"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
          keepMounted={false}
        >
          {viewport.width > 760 && (
            <Tabs.List
              style={{ position: "sticky", top: 45 }}
              bg="var(--mantine-color-dark-7)"
            >
              <Tabs.Tab value="how-to-play">How to Play</Tabs.Tab>
              <Tabs.Tab value="combat">Combat</Tabs.Tab>
              <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
            </Tabs.List>
          )}
          <Tabs.Panel value="how-to-play">
            <HowToPlay />
          </Tabs.Panel>
          <Tabs.Panel value="combat">
            <Combat />
          </Tabs.Panel>
          <Tabs.Panel value="sanity">
            <Sanity />
          </Tabs.Panel>
          <Tabs.Panel value="home">
            <Home />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {viewport.width > 992 && (
        <Grid.Col span={2}>
          <Stack
            maw={200}
            style={{ position: "sticky", top: 55 }}
            justify="space-between"
            gap="0"
          >
            <Stack gap="xs">
              <Text fw={600}>Table of Contents</Text>
              <Divider />
            </Stack>
            <ScrollArea h={viewport.height - 100} type='hover'>
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
          </Stack>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default Rules;
