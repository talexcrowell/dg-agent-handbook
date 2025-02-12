import { Box, Grid, Group, RingProgress, Text, Timeline } from "@mantine/core";
import React, { useState } from "react";
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

export const CreateAnAgent: React.FC = () => {
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
  const { width } = useViewportSize();

  const handleProgressValue = (value: number) => {
    setProgressValue(value);
  };

  const handleAgentStats = (stats: any) => {
    let newObj = { stats };
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
    handleProgressValue(2);
  };

  const handleAgentProfession = (profession: any) => {
    let newObj = { ...userAgent };
    newObj.profession = profession.name;
    newObj.skills = { ...defaultSkillValues };
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
    handleProgressValue(3);
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

  const handleAgentPersonalDetails = (value, key) => {
    let newObj = { ...userAgent };
    newObj[key] =
      key === "age" || key === "sex"
        ? value
        : key === "codename"
        ? value.target.value.toUpperCase()
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

  let page;
  switch (progressValue) {
    case 0:
      page = <Introduction handleProgressValue={handleProgressValue} />;
      break;
    case 1:
      page = <Stats handleAgentStats={handleAgentStats} />;
      break;
    case 2:
      page = <Profession handleAgentProfession={handleAgentProfession} />;
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
    <Grid my="sm">
      {width > 992 && (
        <Grid.Col span={2}>
          <Timeline active={progressValue}>
            <Timeline.Item>
              <Text>Introduction</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Statistics</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Profession</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Skills</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Bonds</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Personal Details</Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      )}
      <Grid.Col span={width > 992 ? 10 : 12}>{page}</Grid.Col>
    </Grid>
  );
};
