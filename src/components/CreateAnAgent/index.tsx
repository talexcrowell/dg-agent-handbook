import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Modal,
  RingProgress,
  ScrollArea,
  Stack,
  Stepper,
  Text,
  Timeline,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Stats } from "./pages/Stats";
import { Profession } from "./pages/Profession";
import { OtherProfessionalSkills } from "./pages/OtherProfessionalSkills";
import { PersonalDetails } from "./pages/PersonalDetails";
import { Introduction } from "./pages/Introduction";
import { defaultSkillValues } from "../../data";
import { Bonds } from "./pages/Bonds";
import { CharacterSheet } from "../CharacterSheet";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { v4 } from "uuid";
import { notifications } from "@mantine/notifications";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IconBriefcase,
  IconExclamationCircle,
  IconListDetails,
  IconListLetters,
  IconUserFilled,
  IconUsers,
} from "@tabler/icons-react";

export const CreateAnAgent: React.FC = () => {
  const [creationMode, setCreationMode] = useState<"STATS" | "PROFESSION">(
    "STATS"
  );
  const [progressValue, setProgressValue] = useState(0);
  const [userAgent, setUserAgent] = useState({
    name: "",
    codename: "",
    profession: "",
    employer: "",
    nationality: "",
    sex: "",
    age: "",
    education: "",
    personality: "",
    motivations: "",
    unnaturalExperiences: "",
    stats: {
      strength: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      power: 0,
      charisma: 0,
    },
    skills: { ...defaultSkillValues },
    bonds: 0,
    adaptation: { violence: 0, helplessness: 0 },
  });
  const [{}, actions] = useCharacterContext();
  const [viewport] = useViewportContext();
  const [blockerOpened, setBlockerOpened] = useState(false);
  const [, scrollTo] = useWindowScroll();

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
      setBlockerOpened(true);
    });
    return () => {
      window.removeEventListener("popstate", function (event) {
        window.history.pushState(null, document.title, window.location.href);
        setBlockerOpened(false);
      });
    };
  }, [location]);

  useEffect(() => {
    scrollTo({ y: 0 });
  }, [progressValue]);

  const handleLeaveCharacterCreator = () => {
    setBlockerOpened(false);
    navigate("/agents/roster");
  };

  const handleProgressValue = (value: number) => {
    setProgressValue(value);
  };

  const handleAgentStats = (stats: any) => {
    let newObj = { ...userAgent };
    newObj.stats = { ...stats };
    newObj.attributes = {
      hp: {
        max: Math.ceil((stats.strength + stats.constitution) / 2),
        current: Math.ceil((stats.strength + stats.constitution) / 2),
      },
      wp: {
        max: stats.power,
        current: stats.power,
      },
      san: {
        max: stats.power * 5,
        current: stats.power * 5,
      },
      bp: {
        max: stats.power * 5 - stats.power,
        current: stats.power * 5 - stats.power,
      },
    };
    setUserAgent({ ...newObj });
    handleProgressValue(creationMode === "PROFESSION" ? 3 : 2);
  };

  const handleAgentProfession = (profession: any) => {
    let newObj = { ...userAgent };
    newObj.profession = profession.name;
    newObj.skills = { ...defaultSkillValues };
    newObj.bonds = profession.bonds;
    for (let i = 0; i < profession.professionalSkills.length; i++) {
      if (isSkillChoice(profession.professionalSkills[i].id)) {
        newObj.skills[profession.professionalSkills[i].id].length > 0
          ? (newObj.skills[profession.professionalSkills[i].id] = [
              ...newObj.skills[profession.professionalSkills[i].id],
              {
                label: profession.professionalSkills[i].type,
                skill: profession.professionalSkills[i].value,
              },
            ].filter((skill) => skill.label !== ""))
          : (newObj.skills[profession.professionalSkills[i].id] = [
              {
                label: profession.professionalSkills[i].type,
                skill: profession.professionalSkills[i].value,
              },
            ].filter((skill) => skill.label !== ""));
      } else {
        newObj.skills[profession.professionalSkills[i].id] =
          profession.professionalSkills[i].value;
      }
    }
    setUserAgent({ ...newObj });
    handleProgressValue(creationMode === "PROFESSION" ? 2 : 3);
  };

  const isSkillChoice = (skill) => {
    switch (skill) {
      case "art":
      case "craft":
      case "foreignLanguage":
      case "militaryScience":
      case "pilot":
      case "science":
        return true;
      default:
        return false;
    }
  };

  const handleAgentOtherSkills = (newSkills) => {
    let newObj = { ...userAgent?.skills };
    let filteredArr = newSkills.filter((skill) => !skill.id);
    let filteredArrAdditional = newSkills.filter((skill) => skill.id);
    for (let i = 0; i < filteredArr.length; i++) {
      if (isSkillChoice(filteredArr[i].name)) {
        let userAgentSkillChoiceArr = newObj[filteredArr[i].name].filter(
          (item) => item.label !== filteredArr[i].label
        );
        newObj[filteredArr[i].name] = [
          ...userAgentSkillChoiceArr,
          {
            label: filteredArr[i].label,
            skill:
              newObj[filteredArr[i].name].filter(
                (item) => item.label === filteredArr[i].label
              ).length > 0
                ? newObj[filteredArr[i].name].filter(
                    (item) => item.label === filteredArr[i].label
                  )[0].skill + filteredArr[i].value
                : filteredArr[i].value,
          },
        ]
          .filter((skill) => skill.label !== "")
          .sort((a, b) => (a.label < b.label ? -1 : a.label > b.label ? 1 : 0));
      } else {
        newObj[filteredArr[i].name] =
          newObj[filteredArr[i].name] + filteredArr[i].value;
      }
    }

    for (let i = 0; i < filteredArrAdditional.length; i++) {
      let userAgentSkillChoiceArr = newObj[filteredArrAdditional[i].id].filter(
        (item) => item.label !== filteredArrAdditional[i].label
      );
      newObj[filteredArrAdditional[i].id] = [
        ...userAgentSkillChoiceArr,
        {
          label: filteredArrAdditional[i].label,
          skill:
            newObj[filteredArrAdditional[i].id].filter(
              (item) => item.label === filteredArrAdditional[i].label
            )[0].skill + filteredArrAdditional[i].value,
        },
      ].sort((a, b) => (a.label < b.label ? -1 : a.label > b.label ? 1 : 0));
    }
    setUserAgent({ ...userAgent, skills: newObj });
    handleProgressValue(4);
  };

  const handleAgentSkillPackage = (selectedPackage) => {
    let newObj = { ...userAgent.skills };
    let filteredArr = [...selectedPackage.professionalSkills];
    for (let i = 0; i < filteredArr.length; i++) {
      if (isSkillChoice(filteredArr[i].id)) {
        newObj[filteredArr[i].id].length > 1 ||
        newObj[filteredArr[i].id][0].label !== ""
          ? (newObj[filteredArr[i].id] = [
              ...newObj[filteredArr[i].id],
              {
                label: filteredArr[i].type,
                skill:
                  [...filteredArr[i].id].filter(
                    (item) => item.label === filteredArr[i].type
                  ).length > 1
                    ? filteredArr[i].id.skill + 20 > 80
                      ? 80
                      : filteredArr[i].id.skill + 20
                    : 20,
              },
            ])
          : (newObj[filteredArr[i].id] = [
              {
                label: filteredArr[i].type,
                skill: 20,
              },
            ]);
      } else {
        newObj[filteredArr[i].id] =
          newObj[filteredArr[i].id] + 20 > 80
            ? 80
            : newObj[filteredArr[i].id] + 20;
      }
    }
    setUserAgent({
      ...userAgent,
      education: selectedPackage.name,
      skills: { ...newObj },
    });
    handleProgressValue(4);
  };

  const handleAgentBonds = (bonds) => {
    let newObj = { ...userAgent };
    newObj.bonds = [...bonds];
    setUserAgent({ ...newObj });
    handleProgressValue(5);
  };

  const handleAgentImage = (value, agent) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      agent.image = reader.result;
      setUserAgent({ ...agent });
    };
    reader.readAsDataURL(value);
  };
  const handleAgentPersonalDetails = (value, key) => {
    let newObj = { ...userAgent };
    newObj[key] =
      key === "age" || key === "sex" || key === "veteran"
        ? value
        : key === "codename"
        ? value.target.value.toUpperCase()
        : value.target.value;
    setUserAgent({ ...newObj });
  };

  const handleCreateAgent = (veteranValues?: any) => {
    let newObj = { ...userAgent };
    newObj.id = v4();
    if (newObj.veteran !== "") {
      switch (newObj.veteran) {
        case "violence":
          newObj.skills.occult = userAgent.skills.occult + 10;
          newObj.attributes.san.max = userAgent.attributes.san.max - 5;
          newObj.attributes.san.current = userAgent.attributes.san.current - 5;
          newObj.stats.charisma = userAgent.stats.charisma - 3;
          newObj.bonds = [
            ...userAgent.bonds.map((bond) => {
              return { ...bond, value: bond.value - 3 };
            }),
          ];
          newObj.adaptation = { violence: 3, helplessness: 0 };
          break;
        case "imprisonment":
          newObj.skills.occult = userAgent.skills.occult + 10;
          newObj.attributes.san.max = userAgent.attributes.san.max - 5;
          newObj.attributes.san.current = userAgent.attributes.san.current - 5;
          newObj.stats.power = userAgent.stats.power - 3;
          newObj.adaptation = { violence: 0, helplessness: 3 };
          actions.createCharacterObj({ ...newObj });
          break;
        case "experience":
          newObj.skills.occult = userAgent.skills.occult + 10;
          veteranValues.skills.forEach(
            (arrValue) => (newObj.skills[arrValue] = userAgent.skills[arrValue])
          );
          newObj.attributes.san.max = userAgent.attributes.san.max - 5;
          newObj.attributes.san.current = userAgent.attributes.san.current - 5;
          newObj.bonds = userAgent.bonds.filter(
            (bond) => bond.name !== veteranValues.bond
          );
          actions.createCharacterObj({ ...newObj });
          break;
        case "unknown":
          newObj.skills.unnatural = userAgent.skills.unnatural + 10;
          newObj.skills.occult = userAgent.skills.occult + 20;
          newObj.attributes.san.max =
            userAgent.attributes.san.max - userAgent.stats.power;
          newObj.attributes.san.current =
            userAgent.attributes.san.current - userAgent.stats.power;
          newObj.wounds = veteranValues.wounds;
          newObj.attributes.bp.max =
            userAgent.attributes.bp.max -
            userAgent.stats.power -
            userAgent.stats.power;
          newObj.attributes.bp.current =
            userAgent.attributes.bp.current -
            userAgent.stats.power -
            userAgent.stats.power;
          actions.createCharacterObj({ ...newObj });
          break;
      }
    }
    localStorage.setItem("currentCharacter", JSON.stringify({ ...newObj }));
    const localSaved = localStorage.getItem("savedCharacters");

    localSaved !== null
      ? localStorage.setItem(
          "savedCharacters",
          JSON.stringify([...JSON.parse(localSaved), { ...newObj }])
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...newObj }])
        );
    notifications.show({
      color: "green",
      title: "Agent Created Successfully!",
      message: `Agent ${newObj.codename} has been added to the Agent Roster.`,
      position: "top-center",
    });

    setUserAgent({
      name: "",
      codename: "",
      profession: "",
      employer: "",
      nationality: "",
      sex: "",
      age: "",
      education: "",
      personality: "",
      motivations: "",
      stats: {
        strength: 0,
        constitution: 0,
        dexterity: 0,
        intelligence: 0,
        power: 0,
        charisma: 0,
      },
      skills: { ...defaultSkillValues },
      bonds: 0,
      adaptation: { violence: 0, helplessness: 0 },
    });
  };

  const handleAgentCreationMode = (value: any) => {
    setCreationMode(value);
  };

  const handleStart = (value: any) => {
    handleAgentCreationMode(value);
    handleProgressValue(1);
  };

  const handleVerifyStepNavigation = (value: number) => {
    switch (value) {
      case 1:
        handleProgressValue(value);
        break;
      case 2:
        creationMode === "PROFESSION"
          ? userAgent.profession === ""
            ? notifications.show({
                color: "red",
                title: "Error!",
                message:
                  "Agent must select Profession before switching to Stats.",
                position: viewport.width < 760 ? "top-center" : "bottom-center",
              })
            : handleProgressValue(value)
          : userAgent.stats.strength === 0
          ? notifications.show({
              color: "red",
              title: "Error!",
              message: "Agent must roll Stats before switching to Profession.",
              position: viewport.width < 760 ? "top-center" : "bottom-center",
            })
          : handleProgressValue(value);
        break;
      case 3:
      case 4:
      case 5:
        notifications.show({
          color: "red",
          title: "Error!",
          message: "Can only change to Statistics or Profession.",
          position: viewport.width < 760 ? "top-center" : "bottom-center",
        });
        break;
    }
  };

  let page;
  switch (progressValue) {
    case 0:
      page = <Introduction handleStart={handleStart} />;
      break;
    case 1:
      page =
        creationMode === "PROFESSION" ? (
          <Profession
            handleAgentProfession={handleAgentProfession}
            userAgent={userAgent}
          />
        ) : (
          <Stats handleAgentStats={handleAgentStats} userAgent={userAgent} />
        );
      break;
    case 2:
      page =
        creationMode === "PROFESSION" ? (
          <Stats handleAgentStats={handleAgentStats} userAgent={userAgent} />
        ) : (
          <Profession
            handleAgentProfession={handleAgentProfession}
            userAgent={userAgent}
          />
        );
      break;
    case 3:
      page = (
        <OtherProfessionalSkills
          handleAgentOtherSkills={handleAgentOtherSkills}
          handleAgentSkillPackage={handleAgentSkillPackage}
          userAgent={userAgent}
        />
      );
      break;
    case 4:
      page = (
        <Bonds handleAgentBonds={handleAgentBonds} userAgent={userAgent} />
      );
      break;
    case 5:
      page = (
        <PersonalDetails
          handleAgentPersonalDetails={handleAgentPersonalDetails}
          handleCreateAgent={handleCreateAgent}
          userAgent={userAgent}
        />
      );
      break;
  }
  return (
    <Grid>
      {progressValue !== 0 && (
        <Grid.Col span={12}>
          <Stepper
            active={progressValue - 1}
            pt={"md"}
            onStepClick={(value) => handleVerifyStepNavigation(value + 1)}
            iconSize={viewport.width > 760 ? 42 : 34}
          >
            <Stepper.Step
              icon={
                creationMode === "PROFESSION" ? (
                  <IconBriefcase />
                ) : (
                  <IconListLetters />
                )
              }
              label={
                viewport.width > 600 ? (
                  <Text size={viewport.width > 760 ? "md" : "sm"}>
                    {creationMode === "PROFESSION"
                      ? "Profession"
                      : "Statistics"}
                  </Text>
                ) : (
                  ""
                )
              }
            />
            <Stepper.Step
              icon={
                creationMode === "PROFESSION" ? (
                  <IconListLetters />
                ) : (
                  <IconBriefcase />
                )
              }
              label={
                viewport.width > 600 ? (
                  <Text size={viewport.width > 760 ? "md" : "sm"}>
                    {creationMode === "PROFESSION"
                      ? "Statistics"
                      : "Profession"}
                  </Text>
                ) : (
                  ""
                )
              }
            />
            <Stepper.Step
              icon={<IconListDetails />}
              label={
                viewport.width > 600 ? (
                  <Text size={viewport.width > 760 ? "md" : "sm"}>Skills</Text>
                ) : (
                  ""
                )
              }
            />
            <Stepper.Step
              icon={<IconUsers />}
              label={
                viewport.width > 600 ? (
                  <Text size={viewport.width > 760 ? "md" : "sm"}>Bonds</Text>
                ) : (
                  ""
                )
              }
            />
            <Stepper.Step
              icon={<IconUserFilled />}
              label={
                viewport.width > 600 ? (
                  <Text size={viewport.width > 760 ? "md" : "sm"}>
                    Personal Details
                  </Text>
                ) : (
                  ""
                )
              }
            />
          </Stepper>
        </Grid.Col>
      )}
      {progressValue !== 0 && (
        <Grid.Col span={12}>
          <Divider />
        </Grid.Col>
      )}
      <Grid.Col span={12}>
        <ScrollArea
          h={
            progressValue !== 0 ? viewport.height - 150 : viewport.height - 100
          }
          scrollbars={"y"}
        >
          {page}
        </ScrollArea>
      </Grid.Col>
      <Modal
        opened={blockerOpened}
        onClose={() => setBlockerOpened(false)}
        fullScreen={viewport.width <= 760}
      >
        <Stack>
          <Center>
            <Stack>
              <IconExclamationCircle size={84} color="red" />
            </Stack>
          </Center>
          <Text>Are you sure you want to leave while creating an Agent?</Text>
          <Text>You will be taken back to the Agent Roster.</Text>
          <Button onClick={handleLeaveCharacterCreator} variant="outline">
            Yes
          </Button>
          <Button
            onClick={() => setBlockerOpened(false)}
            variant="outline"
            color="red"
          >
            No
          </Button>
        </Stack>
      </Modal>
    </Grid>
  );
};

export default CreateAnAgent;
