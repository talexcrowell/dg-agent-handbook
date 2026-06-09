import {
  Grid,
  Stack,
  Tabs,
  Text,
  TableOfContents,
  Group,
  Divider,
  Affix,
  Button,
  Modal,
  NavLink,
} from "@mantine/core";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  IconChevronRight,
  IconList,
  IconNotebook,
  IconStairs,
} from "@tabler/icons-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";
import { Introduction } from "./pages/Introduction";
import { Basics } from "./pages/Basics";
import { BeingAnAgent } from "./pages/BeingAnAgent";
import { CombatSanityAndWillpower } from "./pages/CombatSanityAndWillpower";
import { AfterTheOperation } from "./pages/AfterTheOperation";

export const Training = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!tabValue) {
      navigate("/training/introduction");
    }
  }, [tabValue]);

  useLayoutEffect(() => {
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid type="container" py={0}>
      <Grid.Col span={viewport.width > 992 ? 10 : 12} py="0">
        <Tabs
          defaultValue="introduction"
          value={tabValue}
          onChange={(value) => navigate(`/training/${value}`)}
          keepMounted={false}
          mt={0}
        >
          {viewport.width > 760 && (
            <Tabs.List
              style={{ position: "sticky", top: 45 }}
              bg="var(--mantine-color-dark-7)"
            >
              <Tabs.Tab value="introduction">Introduction</Tabs.Tab>
              <Tabs.Tab value="basics">Basics</Tabs.Tab>
              <Tabs.Tab value="combat-sanity-and-willpower">
                Combat, Sanity, and Willpower
              </Tabs.Tab>
              <Tabs.Tab value="being-an-agent">Being an Agent</Tabs.Tab>
              <Tabs.Tab value="after-the-operation">
                After the Operation
              </Tabs.Tab>
            </Tabs.List>
          )}
          <Tabs.Panel value="introduction">
            <Introduction />
          </Tabs.Panel>
          <Tabs.Panel value="basics">
            <Basics />
          </Tabs.Panel>
          <Tabs.Panel value="combat-sanity-and-willpower">
            <CombatSanityAndWillpower />
          </Tabs.Panel>
          <Tabs.Panel value="being-an-agent">
            <BeingAnAgent />
          </Tabs.Panel>
          <Tabs.Panel value="after-the-operation">
            <AfterTheOperation />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {viewport.width > 992 && (
        <Grid.Col span={2} py="0">
          <Stack
            maw={200}
            style={{ position: "sticky", top: 44 }}
            justify="space-between"
            gap="0"
          >
            <Stack gap="0">
              <Button
                variant="transparent"
                leftSection={<IconList />}
                ta="start"
                mx="0"
              >
                Table of Contents
              </Button>
              <Divider size="sm"/>
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
          </Stack>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default Training;
