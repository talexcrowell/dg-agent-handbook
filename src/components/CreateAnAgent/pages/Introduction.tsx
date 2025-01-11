import { Button, Grid, Image, List, Stack, Text, Title } from "@mantine/core";
import React from "react";

export const Introduction: React.FC<{
  handleProgressValue: (value: number) => void;
}> = ({ handleProgressValue }) => {
  return (
    <Grid>
      <Grid.Col span={12} ta="start">
        <Stack>
          <Title>Introduction</Title>
          <Text>
            Delta Green recruits a new prospect only after confirming that they
            can handle the work and the unconventional demands the group makes.
            They usually look to federal agents and special forces, adaptable
            professionals trained to cope with overwhelming stress and danger.
            Sometimes prospects are recruited from other fields, such as
            science, anthropology, or medicine.
          </Text>
          <Text>
            If the prospect has encountered the unnatural, all the better. Delta
            Green wants people who recognize the depth of the danger. If your
            first instinct is to go public with an unnatural discovery, it’s
            likely you are not a Delta Green recruit but a Delta Green mission.
          </Text>
          <Text>
            All Delta Green Agents are composed of five elements:
            <List>
              <List.Item>Statistics (Stats)</List.Item>
              <List.Item>Derived Attributes</List.Item>
              <List.Item>Profession</List.Item>
              <List.Item>Skills</List.Item>
              <List.Item>Bonds*</List.Item>
            </List>
          </Text>
          <Text>
            Talk with your Handler about the particulars of the game to help you
            mould your idea for an agent. Those details, however, are at the
            discretion of the Handler.
          </Text>
          <Text c="dimmed" size="sm">
            *Note: Bonds are more significant in longer campaigns. For shorter
            campaigns or one-shots, they are used to add more character depth to
            your agent.
          </Text>
          <Button onClick={() => handleProgressValue(1)} bg={"green"}>
            Continue to Agent Creation
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
