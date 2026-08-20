import { TextAnimate } from "@gfazioli/mantine-text-animate";
import { Button, Stack, Transition } from "@mantine/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const IntroAnimation = () => {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(()=>{
        navigate('/directory')
      }, 20000)
    }, []);
  return (
    <Stack justify="start" my="lg">
      <TextAnimate.Typewriter
        multiline
        c="green"
        ff="monospace"
        cursorChar="█"
        withBlink={true}
        delay={1000}
        loop={false}
        value={[
          "Establishing connection to server...",
          "...",
          "...",
          "Client connected",
          "Authenticating credentials...",
          // `ALIAS: ${username} confirmed`,
          "Authorizing...",
          "Retrieving permissions...",
          "...",
          "...",
          "Access granted",
          "Welcome to the Program",
          "Redirecting..."
        ]}
      />
    </Stack>
  );
};
