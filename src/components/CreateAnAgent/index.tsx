import { Box, Grid, Group, RingProgress, Text, Timeline } from "@mantine/core";
import React, { useState } from "react";
import { Stats } from "../Stats";
import { Profession } from "../Profession";
import { OtherProfessionalSkills } from "../OtherProfessionalSkills";
import { PersonalDetails } from "../PersonalDetails";
import { Introduction } from "../Introduction";
import { defaultSkillValues } from "../../data";

export const CreateAnAgent: React.FC = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [userAgent, setUserAgent] = useState({});

  const handleProgressValue = (value: number) => {
    setProgressValue(value);
  };

  const handleAgentStats = (stats: any) => {
    let newObj = { stats };
    setUserAgent({ ...newObj });
    handleProgressValue(2);
  };

  const handleAgentProfession = (profession: any) => {
    let newObj = { ...userAgent };
    newObj.profession = profession.name;
    newObj.skills = { ...defaultSkillValues };
    profession.professionalSkills.map((skill) => {
      switch (skill.id) {
        case "art":
        case "craft":
        case "foreignLanguage":
        case "militaryScience":
        case "pilot":
        case "science":
          newObj.skills[skill.id] = (
            newObj.skills[skill.id].length > 0
              ? [
                  ...newObj.skills[skill.id],
                  { label: skill.name, skill: skill.value },
                ]
              : [{ label: skill.name, skill: skill.value }]
          ).filter((skill) => skill.label !== "");
          break;
        default:
          newObj.skills[skill.id] = skill.value;
          break;
      }
    });
    setUserAgent({ ...newObj });
    handleProgressValue(3);
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
        <OtherProfessionalSkills handleProgressValue={handleProgressValue} userAgent={userAgent}/>
      );
      break;
    case 4:
      page = <PersonalDetails />;
      break;
  }
  return (
    <Box>
      <Grid>
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
              <Text>Personal Details</Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
        <Grid.Col span={10}>{page}</Grid.Col>
      </Grid>
    </Box>
  );
};
