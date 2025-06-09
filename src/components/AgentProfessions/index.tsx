import {
  Affix,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  InputLabel,
  List,
  Modal,
  NavLink,
  ScrollArea,
  SegmentedControl,
  Stack,
  TableOfContents,
  Tabs,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {
  additionalProfessions,
  professions,
  skillsMasterList,
} from "../../data";
import styles from "../../Element.module.css";
import { useViewportContext } from "../../contexts/ViewportContext";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  IconBriefcase,
  IconChevronRight,
  IconList,
  IconNotebook,
} from "@tabler/icons-react";
import { Overview } from "./pages/Overview";
import { ProfessionList } from "./pages/ProfessionList";
import { BonusSkillPackagesList } from "./pages/BonusSkillPackagesList";
import { StatsAndSkills } from "./pages/StatsAndSkills";

export const AgentProfessions = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    if (!tabValue) {
      navigate("/agents/professions/overview");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={0}>
      <Grid.Col
        span={tabValue === "stats-and-skills" && viewport.width > 992 ? 10 : 12}
        pb="0"
      >
        <Tabs
          defaultValue="overview"
          value={tabValue}
          onChange={(value) => navigate(`/agents/professions/${value}`)}
        >
          {viewport.width > 760 ? (
            <Tabs.List>
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
              <Tabs.Tab value="stats-and-skills">Stats and Skills</Tabs.Tab>
              <Tabs.Tab value="profession-list">Profession List</Tabs.Tab>
              <Tabs.Tab value="bonus-skill-package-list">
                Bonus Skill Package List
              </Tabs.Tab>
            </Tabs.List>
          ) : (
            <Affix position={{ bottom: 20, right: 20 }}>
              <Button
                leftSection={<IconNotebook />}
                variant="filled"
                onClick={() => setMobileMenuOpen(true)}
                tt="capitalize"
              >
                <Text size="sm" fw={500} truncate="end" maw={175}>
                  Professions / {tabValue}
                </Text>
              </Button>
              <Modal
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                fullScreen
                title={
                  <Group>
                    <IconBriefcase />
                    <Text fw={700}>Professions</Text>
                  </Group>
                }
              >
                <Stack>
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/agents/professions/overview");
                    }}
                    active={
                      location.pathname === "/agents/professions/overview"
                    }
                    label="Overview"
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/agents/professions/stats-and-skills");
                    }}
                    active={
                      location.pathname ===
                      "/agents/professions/stats-and-skills"
                    }
                    label="Stats and Skills"
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/agents/professions/profession-list");
                    }}
                    active={
                      location.pathname ===
                      "/agents/professions/profession-list"
                    }
                    label="Profession List"
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/agents/professions/bonus-skill-package-list");
                    }}
                    active={
                      location.pathname ===
                      "/agents/professions/bonus-skill-package-list"
                    }
                    label="Bonus Skill Package List"
                    rightSection={<IconChevronRight size={16} />}
                  />
                </Stack>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="overview">
            <ScrollArea h={"93vh"}>
              <Overview />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="stats-and-skills">
            <ScrollArea h={"93vh"}>
              <StatsAndSkills />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="profession-list">
            <ScrollArea h={"93vh"}>
              <ProfessionList />
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="bonus-skill-package-list">
            <ScrollArea h={"93vh"}>
              <BonusSkillPackagesList />
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
      {tabValue === "stats-and-skills" && viewport.width > 992 && (
        <Grid.Col span={2} pb={0}>
          <ScrollArea h={"93vh"}>
            <Group py="xs">
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
                selector: `#stats-and-skills :is(h1, h2, h3, h4, h5, h6)`,
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
