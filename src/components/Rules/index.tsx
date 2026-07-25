import {
  Grid,
  ScrollArea,
  Stack,
  Tabs,
  TableOfContents,
  Divider,
  Button,
  Text,
  Flex,
} from "@mantine/core";
import { HowToPlay } from "./pages/HowToPlay";
import { Combat } from "./pages/Combat";
import { Sanity } from "./pages/Sanity";
import { Home } from "./pages/Home";
import { useEffect, useRef } from "react";
import { IconList } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { useViewportContext } from "../../contexts/ViewportContext";

export const Rules = () => {
  const reinitializeRef = useRef(() => {});
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();

  useEffect(() => {
    if (!tabValue) {
      navigate("/rules/how-to-play");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid>
      <Grid.Col span={viewport.width > 760 ? 10 : 12}>
        <Tabs
          defaultValue="how-to-play"
          value={tabValue}
          onChange={(value) => navigate(`/rules/${value}`)}
          keepMounted={false}
          color="black"
        >
          {viewport.width > 760 && (
            <Tabs.List
              style={{ position: "sticky", top: 60 }}
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
      {viewport.width > 760 && (
        <Grid.Col span={2} py="0">
          <Stack
            maw={200}
            style={{ position: "sticky", top: 60 }}
            justify="space-between"
          >
            <Stack gap="0">
              <Text ta="center" fw="600" my={5}>
                Table of Contents
              </Text>
              <Divider size="sm" />
              <ScrollArea h={viewport.height - 100} type="hover">
                <TableOfContents
                  variant="light"
                  color="gray"
                  size="sm"
                  radius="sm"
                  reinitializeRef={reinitializeRef}
                  scrollSpyOptions={{
                    selector: `#${tabValue} :is(h1, h2, h3, h4, h5, h6)`,
                    offset: 100,
                  }}
                  getControlProps={({ data }) => ({
                    onClick: () =>
                      data
                        .getNode()
                        .scrollIntoView({ behavior: "smooth", block: "start" }),
                    children: data.value,
                  })}
                />
              </ScrollArea>
            </Stack>
          </Stack>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default Rules;
