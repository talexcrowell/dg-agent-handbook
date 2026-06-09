import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  ActionIcon,
  Anchor,
  Button,
  Card,
  Center,
  CloseButton,
  Combobox,
  Divider,
  FileButton,
  Grid,
  Group,
  Image,
  Input,
  InputBase,
  InputLabel,
  List,
  ListItem,
  MultiSelect,
  NumberInput,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
  Title,
  useCombobox,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useViewportContext } from "../../../contexts/ViewportContext";
import {
  IconArrowRight,
  IconCheck,
  IconPencilPlus,
  IconUserScan,
  IconX,
} from "@tabler/icons-react";
import { faker } from "@faker-js/faker";
import { skillsMasterList } from "../../../data";
import { TextAnimate } from "@gfazioli/mantine-text-animate";

export const PersonalDetails: React.FC<{
  handleAgentPersonalDetails: (val: any, key: any) => void;
  handleCreateAgent: () => void;
  userAgent: any;
}> = ({ handleAgentPersonalDetails, handleCreateAgent, userAgent }) => {
  const [viewport] = useViewportContext();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [isSaving, setIsSaving] = useState(false);
  const [checked, setChecked] = useState(false);

  const [value, setValue] = useState<string | null>(null);
  const [veteranValues, setVeteranValues] = useState<any>({
    bond: "",
    skills: [],
    wounds: "",
  });
  const handleVeteranValues = (key, val) => {
    let newObj = { ...veteranValues };
    newObj[key] = val;
    setVeteranValues({ ...newObj });
  };

  const handleGenerateRandomValue = (key: string) => {
    let randomValue = "";
    switch (key) {
      case "name":
        randomValue = faker.person.fullName();
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
      case "codename":
        randomValue = faker.word.noun();
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
      case "employer":
        let buzzword = faker.company.buzzNoun();
        randomValue =
          faker.company.name() +
          " " +
          String(buzzword).charAt(0).toUpperCase() +
          String(buzzword).slice(1);
        handleAgentPersonalDetails({ target: { value: randomValue } }, key);
        break;
    }
  };

  const veteransList = [
    {
      label: "Extreme Violence",
      value: "violence",
      description:
        "Add +10% to your Agent’s Occult skill. Reduce SAN by 5. Subtract 3 from your Agent’s CHA and each Bond. Your Agent is adapted to violence.",
    },
    {
      label: "Captivity or Imprisonment",
      value: "imprisonment",
      description:
        "Add +10% to your Agent’s Occult skill. Reduce SAN by 5. Subtract 3 from your Agent’s POW. Your Agent is adapted to helplessness.",
    },
    {
      label: "Hard Experience",
      value: "experience",
      description:
        "Add +10% to your Agent’s Occult and +10% to any five skills other than Unnatural. This can bring no skill higher than 90%. Reduce your Agent’s SAN by 5. Remove one Bond.",
    },
    {
      label: "Things Man Was Not Meant to Know",
      value: "unknown",
      description:
        "Your Agent gains 10% in the Unnatural skill and adds +20% to Occult. Reduce your Agent’s SAN by his or her POW. Your Agent gains a new disorder caused by the Unnatural. Reset your Agent’s Breaking Point to his or her new SAN minus POW.",
    },
  ];

  const selectedOption = veteransList.find((item) => item.value === value);
  const SelectOption = ({ label, description }: any) => {
    return (
      <Stack gap="xs">
        <Text size="sm" fw={700}>
          {label}
        </Text>
        <Text size="sm">{description}</Text>
      </Stack>
    );
  };

  const options = veteransList.map((item) => {
    return (
      <Combobox.Option value={item.value} key={item.value}>
        <SelectOption {...item} />
      </Combobox.Option>
    );
  });

  return (
    <Grid ta="start">
      <Grid.Col span={12}>
        <Stack>
          <Title>Personal Details</Title>
          {viewport.width > 600 ? (
            <>
              <Group>
                <TextInput
                  label="Name"
                  flex={1}
                  onChange={(val) => handleAgentPersonalDetails(val, "name")}
                  value={userAgent?.name}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("name")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Codename"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "codename")
                  }
                  value={userAgent?.codename}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("codename")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Profession"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "profession")
                  }
                  value={userAgent?.profession}
                  required
                />
              </Group>
              <Group>
                <TextInput
                  label="Employer"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "employer")
                  }
                  value={userAgent?.employer}
                  required
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("employer")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                />
                <TextInput
                  label="Nationality"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "nationality")
                  }
                  value={userAgent?.nationality}
                  required
                />
              </Group>
              <Group>
                <Select
                  label="Sex"
                  w={100}
                  onChange={(val) => handleAgentPersonalDetails(val, "sex")}
                  data={["M", "F", "DND"]}
                  value={userAgent?.sex}
                  required
                />
                <NumberInput
                  label="Age"
                  w={100}
                  min={25}
                  max={70}
                  onChange={(val) => handleAgentPersonalDetails(val, "age")}
                  value={userAgent?.age}
                  required
                />
                <TextInput
                  label="Education/Occupation History"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "education")
                  }
                  value={userAgent?.education}
                  required
                />
              </Group>
            </>
          ) : (
            <>
              <Stack>
                {" "}
                <TextInput
                  label="Name"
                  flex={1}
                  onChange={(val) => handleAgentPersonalDetails(val, "name")}
                  value={userAgent?.name}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("name")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Codename"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "codename")
                  }
                  value={userAgent?.codename}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("codename")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Profession"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "profession")
                  }
                  value={userAgent?.profession}
                  required
                />
                <TextInput
                  label="Employer"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "employer")
                  }
                  value={userAgent?.employer}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      onClick={() => handleGenerateRandomValue("employer")}
                      c="gray"
                    >
                      <IconPencilPlus />
                    </ActionIcon>
                  }
                  required
                />
                <TextInput
                  label="Nationality"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "nationality")
                  }
                  value={userAgent?.nationality}
                  required
                />
                <Group justify="space-between">
                  <Select
                    label="Sex"
                    w={"45%"}
                    onChange={(val) => handleAgentPersonalDetails(val, "sex")}
                    data={["M", "F", "DND"]}
                    value={userAgent?.sex}
                    required
                  />
                  <NumberInput
                    label="Age"
                    w={"45%"}
                    min={30}
                    max={60}
                    onChange={(val) => handleAgentPersonalDetails(val, "age")}
                    value={userAgent?.age}
                    required
                  />
                </Group>
                <TextInput
                  label="Education/Occupation History"
                  flex={1}
                  onChange={(val) =>
                    handleAgentPersonalDetails(val, "education")
                  }
                  value={userAgent?.education}
                  required
                />
              </Stack>
            </>
          )}
          <Textarea
            label="Personality, Hobbies, Obsessions, etc."
            minRows={6}
            onChange={(val) => handleAgentPersonalDetails(val, "personality")}
            value={userAgent?.personality}
            placeholder="Tenacious, depressed, cautious..."
          />
          <Textarea
            label="Motivations"
            minRows={6}
            onChange={(val) => handleAgentPersonalDetails(val, "motivations")}
            value={userAgent?.motivations}
            placeholder="National security, learning about cults, protecting loved ones..."
          />
          <Textarea
            label="Experiences with the Unnatural"
            ta="start"
            minRows={6}
            onChange={(val) =>
              handleAgentPersonalDetails(val, "unnaturalExperiences")
            }
            value={userAgent?.unnaturalExperiences}
            placeholder="Encountered a strange creature, witnessed a ritual, investigated a mysterious relic..."
          />
          {/* PREVIOUS DELTA GREEN OPERATION EXPERIENCE */}
          {/* <Switch
            checked={checked}
            thumbIcon={
              checked ? (
                <IconCheck
                  size={12}
                  color="var(--mantine-color-teal-6)"
                  stroke={3}
                />
              ) : (
                <IconX
                  size={12}
                  color="var(--mantine-color-red-6)"
                  stroke={3}
                />
              )
            }
            size="md"
            onChange={(event) => setChecked(event.currentTarget.checked)}
            label={
              <Group>
                <Text>
                  Has this Agent previously participated in a Delta Green
                  Operation or have past experience with unnatural forces?
                </Text>
                <Text c="dimmed">*FOR EXPERIENCED PLAYERS ONLY</Text>
              </Group>
            }
          />
          {checked && (
            <Stack>
              <Divider />
              <Text>
                If you’re playing a Delta Green Agent with some past experience
                with unnatural forces, you don’t need to describe exactly what
                happened but you need a sense of that past investigation or
                encounter. Choose from one of four options to best summarize
                that experience.
              </Text>
              <Combobox
                store={combobox}
                withinPortal={false}
                onOptionSubmit={(val) => {
                  setValue(val);
                  handleAgentPersonalDetails(val, "veteran");
                  combobox.closeDropdown();
                }}
              >
                <Combobox.Target>
                  <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={
                      value !== null ? (
                        <CloseButton
                          size="md"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => setValue(null)}
                          aria-label="Clear value"
                        />
                      ) : (
                        <Combobox.Chevron />
                      )
                    }
                    onClick={() => combobox.toggleDropdown()}
                    rightSectionPointerEvents={value === null ? "none" : "all"}
                    label="Type of Experience"
                    multiline
                  >
                    {selectedOption ? (
                      <Input.Label>{selectedOption.label}</Input.Label>
                    ) : (
                      <Input.Placeholder>Select an option</Input.Placeholder>
                    )}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
              {value === "violence" && (
                <List>
                  <Text>Effects:</Text>
                  <ListItem>
                    <Group>
                      <Text>Occult:</Text>
                      <Group>
                        <Text>{userAgent.skills.occult}%</Text>
                        <IconArrowRight />
                        <Text>{userAgent.skills.occult + 10}%</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Group>
                      <Text>Sanity:</Text>
                      <Group>
                        <Text>{userAgent.attributes?.san.current}</Text>
                        <IconArrowRight />
                        <Text>{userAgent.attributes?.san.current - 5}</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Group>
                      <Text>Charisma:</Text>
                      <Group>
                        <Text>{userAgent.stats.charisma}</Text>
                        <IconArrowRight />
                        <Text>{userAgent.stats.charisma - 3}</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Group>
                      <Text>Bond Values:</Text>
                      <Group>
                        <Text>{userAgent.bonds[0]?.value}</Text>
                        <IconArrowRight />
                        <Text>{userAgent.bonds[0]?.value - 3}</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Agent is{" "}
                      <Anchor
                        component={Link}
                        to="/rules/sanity#adapting-to-sanity-loss"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        adapted
                      </Anchor>{" "}
                      to violence.
                    </Text>
                  </ListItem>
                </List>
              )}
              {value === "imprisonment" && (
                <List>
                  <Text>Effects:</Text>
                  <ListItem>
                    <Group>
                      <Text>Occult:</Text>
                      <Group>
                        <Text>{userAgent.skills.occult}%</Text>
                        <IconArrowRight />
                        <Text>{userAgent.skills.occult + 10}%</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Group>
                      <Text>Sanity:</Text>
                      <Group>
                        <Text>{userAgent.attributes?.san.current}</Text>
                        <IconArrowRight />
                        <Text>{userAgent.attributes?.san.current - 5}</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Group>
                      <Text>Power:</Text>
                      <Group>
                        <Text>{userAgent.stats.power}</Text>
                        <IconArrowRight />
                        <Text>{userAgent.stats.power - 3}</Text>
                      </Group>
                    </Group>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Agent is{" "}
                      <Anchor
                        component={Link}
                        to="/rules/sanity#adapting-to-sanity-loss"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        adapted
                      </Anchor>{" "}
                      to helplessness.
                    </Text>
                  </ListItem>
                </List>
              )}
              {value === "experience" && (
                <>
                  <List>
                    <Text>Effects:</Text>
                    <ListItem>
                      <Group>
                        <Text>Occult:</Text>
                        <Group>
                          <Text>{userAgent.skills.occult}%</Text>
                          <IconArrowRight />
                          <Text>{userAgent.skills.occult + 10}%</Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Group>
                        <Text>Sanity:</Text>
                        <Group>
                          <Text>{userAgent.attributes?.san.current}</Text>
                          <IconArrowRight />
                          <Text>{userAgent.attributes?.san.current - 5}</Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Text>
                        Add 10% to any five skills other than Unnatural. The
                        skill can be no higher than 90%.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>Remove one Bond.</Text>
                    </ListItem>
                  </List>
                  <MultiSelect
                    label="Skills to boost by 10%"
                    placeholder="Select a skill to boost..."
                    data={skillsMasterList
                      .filter((skill) => skill.id !== "unnatural")
                      .map((skill) => {
                        return {
                          label: `${skill.name}  ${
                            userAgent.skills[skill.id]
                          }%`,
                          value: skill.id,
                        };
                      })}
                    onChange={(e) => handleVeteranValues("skills", e)}
                    maxValues={5}
                  />
                  <Select
                    label="Bond"
                    placeholder="Select a bond to be removed..."
                    data={[
                      ...userAgent.bonds.map((bond) => {
                        return bond.name;
                      }),
                    ]}
                    onChange={(e) => handleVeteranValues("bond", e)}
                  />
                </>
              )}
              {value === "unknown" && (
                <>
                  {" "}
                  <List>
                    <Text>Effects:</Text>
                    <ListItem>
                      <Group>
                        <Text>Unnatural:</Text>
                        <Group>
                          <Text>{userAgent.skills.unnatural}%</Text>
                          <IconArrowRight />
                          <Text>{userAgent.skills.unnatural + 10}%</Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Group>
                        <Text>Occult:</Text>
                        <Group>
                          <Text>{userAgent.skills.occult}%</Text>
                          <IconArrowRight />
                          <Text>{userAgent.skills.occult + 20}%</Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Group>
                        <Text>Sanity:</Text>
                        <Group>
                          <Text>{userAgent.attributes?.san.current}</Text>
                          <IconArrowRight />
                          <Text>
                            {userAgent.attributes?.san.current -
                              userAgent.stats.power}
                          </Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Group>
                        <Text>Breaking Point:</Text>
                        <Group>
                          <Text>{userAgent?.attributes?.bp.current}</Text>
                          <IconArrowRight />
                          <Text>
                            {userAgent?.attributes?.san.current -
                              userAgent.stats.power -
                              userAgent.stats.power}
                          </Text>
                        </Group>
                      </Group>
                    </ListItem>
                    <ListItem>
                      <Text>
                        Agent gains a new{" "}
                        <Anchor
                          component={Link}
                          to="/rules/sanity#disorders"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          disorder
                        </Anchor>
                        .
                      </Text>
                    </ListItem>
                  </List>
                  <TextInput
                    label="Describe your disorder caused by the unnatural"
                    placeholder="Agoraphobia, Pyromania, etc."
                    value={veteranValues.wounds}
                    onChange={(e) =>
                      handleVeteranValues("wounds", e.currentTarget.value)
                    }
                  />
                </>
              )}
              <Divider />
            </Stack>
          )} */}
          {/* <Center>
            <Card withBorder w={250}>
              <Stack justify="space-between" h={250}>
                <Center>
                  {userAgent?.image ? (
                    <Image src={userAgent.image} h={200} w={200} radius="md" />
                  ) : (
                    <Card m="lg">
                      <Text c="dimmed">No image uploaded</Text>
                    </Card>
                  )}
                </Center>
                <Stack>
                  <FileButton
                    onChange={(e) => handleAgentPersonalDetails(e, "image")}
                  >
                    {(props) => (
                      <Button {...props} leftSection={<IconUserScan />}>
                        Change Image
                      </Button>
                    )}
                  </FileButton>
                </Stack>
              </Stack>
            </Card>
          </Center> */}
          <Button
            // component={Link}
            // to={`/agents/sheet/${
            //   userAgent.codename ? userAgent.codename.toUpperCase() : ""
            // }`}
            disabled={
              !userAgent?.name ||
              !userAgent?.codename ||
              !userAgent?.profession ||
              !userAgent?.age ||
              !userAgent?.education
            }
            onClick={() => {
              handleCreateAgent();
              // value === "experience" || value === "unknown"
              //   ? handleCreateAgent(veteranValues)
              //   : handleCreateAgent()
            }}
            color={"green"}
          >
            Create Agent
          </Button>
        </Stack>
        
      </Grid.Col>
    </Grid>
  );
};
