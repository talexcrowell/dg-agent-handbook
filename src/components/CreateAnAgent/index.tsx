import {
  Box,
  Button,
  Center,
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
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../contexts/ViewportContext";
import { useLocation, useNavigate } from "react-router-dom";
import { IconExclamationCircle } from "@tabler/icons-react";

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
  });
  const [{}, actions] = useCharacterContext();
  const [viewport] = useViewportContext();
  const [blockerOpened, setBlockerOpened] = useState(false);

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
      key === "age" || key === "sex"
        ? value
        : key === "codename"
        ? value.target.value.toUpperCase()
        : key === "image"
        ? handleAgentImage(value, newObj)
        : value.target.value;
    setUserAgent({ ...newObj });
  };

  const handleCreateAgent = () => {
    let newObj = { ...userAgent };
    newObj.id = v4();
    actions.createCharacterObj({ ...newObj });
    notifications.show({
      color: "green",
      title: "Agent Created Successfully!",
      message: `Agent ${userAgent.codename} has been added to the Agent Roster.`,
      position: "top-center",
    });
    localStorage.setItem("currentCharacter", JSON.stringify({ ...userAgent }));
    const localSaved = localStorage.getItem("savedCharacters");

    localSaved !== null
      ? localStorage.setItem(
          "savedCharacters",
          JSON.stringify([...JSON.parse(localSaved), { ...userAgent }])
        )
      : localStorage.setItem(
          "savedCharacters",
          JSON.stringify([{ ...userAgent }])
        );

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
            pt={10}
            onStepClick={(value) => handleVerifyStepNavigation(value + 1)}
            iconSize={viewport.width > 760 ? 42 : 32}
          >
            <Stepper.Step
              label={
                <Text size={viewport.width > 760 ? "md" : "sm"}>
                  {creationMode === "PROFESSION" ? "Profession" : "Statistics"}
                </Text>
              }
            />
            <Stepper.Step
              label={
                <Text size={viewport.width > 760 ? "md" : "sm"}>
                  {creationMode === "PROFESSION" ? "Statistics" : "Profession"}
                </Text>
              }
            />
            <Stepper.Step
              label={
                <Text size={viewport.width > 760 ? "md" : "sm"}>Skills</Text>
              }
            />
            <Stepper.Step
              label={
                <Text size={viewport.width > 760 ? "md" : "sm"}>Bonds</Text>
              }
            />
            <Stepper.Step
              label={
                <Text size={viewport.width > 760 ? "md" : "sm"}>
                  Personal Details
                </Text>
              }
            />
          </Stepper>
        </Grid.Col>
      )}
      <Grid.Col span={12}>
        <ScrollArea
          h={viewport.width > 760 || progressValue === 0 ? "93vh" : "80vh"}
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
