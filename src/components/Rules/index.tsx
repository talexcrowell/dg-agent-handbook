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
      <Grid.Col span={viewport.width > 992 ? 10 : 12} py="0">
        <Tabs
          defaultValue="how-to-play"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
          keepMounted={false}
        >
          {viewport.width > 760 && (
            <Tabs.List>
              <Tabs.Tab value="how-to-play">How to Play</Tabs.Tab>
              <Tabs.Tab value="combat">Combat</Tabs.Tab>
              <Tabs.Tab value="sanity">Sanity</Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
            </Tabs.List>
          )}
          <Tabs.Panel value="how-to-play">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <HowToPlay />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="combat">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <Combat />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="sanity">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <Sanity />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="home">
            <ScrollArea
              h={viewport.height - (viewport.width > 992 ? 90 : 65)}
              scrollbars="y"
            >
              <Home />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue !== "training-video" && viewport.width > 992 && (
        <Grid.Col span={2} py="0">
          <ScrollArea h={viewport.height - 70}>
            <Group py="xs" align="center">
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

export default Rules;
