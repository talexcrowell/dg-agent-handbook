import { TextAnimate } from "@gfazioli/mantine-text-animate";
import { Stack } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SavingAgent: React.FC<{ userAgent }> = ({ userAgent }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(
        `/agents/sheet/${
          userAgent.codename ? userAgent.codename.toUpperCase() : ""
        }`,
      );
    }, 34000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Stack>
      <TextAnimate.Typewriter
        multiline
        c="green"
        ff="monospace"
        cursorChar="█"
        withBlink={true}
        delay={1000}
        loop={false}
        value={[
          "Reviewing application submission for Agent...",
          `REQUEST_ID: ${userAgent.id}`,
          `NAME: ${userAgent.name}`,
          `CODENAME: ${userAgent.codename}`,
          `SEX: ${userAgent.sex}`,
          `AGE: ${userAgent.age}`,
          `PROFESSION: ${userAgent.profession}`,
          `EMPLOYER: ${userAgent.employer}`,
          `EDUCATION_OCCUPATION_HISTORY: ${userAgent.education}`,
          "Analyzing stats...",
          "Analyzing attributes...",
          "Analyzing skills...",
          "Agent application status: APPROVED",
          "Adding Agent to Agent Roster...",
          "...",
          "...",
          "...",
          "Agent successfully added",
          `Navigating to Agent ${userAgent.codename}'s Personnel File...`,
        ]}
      />
    </Stack>
  );
};
