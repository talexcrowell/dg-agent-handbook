import {
  Affix,
  Button,
  Grid,
  Group,
  Modal,
  NavLink,
  ScrollArea,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  IconBriefcase,
  IconChevronRight,
  IconNotebook,
} from "@tabler/icons-react";
import { Overview } from "./pages/Overview";
import { ProfessionList } from "./pages/ProfessionList";
import { BonusSkillPackagesList } from "./pages/BonusSkillPackagesList";

export const AgentProfessions = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewport] = useViewportContext();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    if (!tabValue) {
      navigate("/training/professions/overview");
    }
    reinitializeRef.current();
  }, [tabValue]);

  return (
    <Grid pb={0}>
      <Grid.Col span={viewport.width > 760 ? 10 : 12} pb="0">
        <Tabs
          defaultValue="overview"
          value={tabValue}
          onChange={(value) => navigate(`/training/professions/${value}`)}
          color="black"
        >
          {viewport.width > 760 ? (
            <Tabs.List>
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
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
                      navigate("/training/professions/overview");
                    }}
                    active={
                      location.pathname === "/training/professions/overview"
                    }
                    label="Overview"
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate("/training/professions/profession-list");
                    }}
                    active={
                      location.pathname ===
                      "/training/professions/profession-list"
                    }
                    label="Profession List"
                    rightSection={<IconChevronRight size={16} />}
                  />
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate(
                        "/training/professions/bonus-skill-package-list",
                      );
                    }}
                    active={
                      location.pathname ===
                      "/training/professions/bonus-skill-package-list"
                    }
                    label="Bonus Skill Package List"
                    rightSection={<IconChevronRight size={16} />}
                  />
                </Stack>
              </Modal>
            </Affix>
          )}
          <Tabs.Panel value="overview">
            <Overview />
          </Tabs.Panel>
          <Tabs.Panel value="profession-list">
            <ProfessionList />
          </Tabs.Panel>
          <Tabs.Panel value="bonus-skill-package-list">
            <BonusSkillPackagesList />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
    </Grid>
  );
};
export default AgentProfessions;
