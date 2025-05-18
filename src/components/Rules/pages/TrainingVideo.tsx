import { Box, Flex, Grid, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect } from "react";

export const TrainingVideo = () => {
  const { width } = useViewportSize();
  useEffect(() =>{}, )
  return (
    <Grid p={width > 600 ? "md" : 0} gutter={width > 600 ? "md" : "0"}>
      <Grid.Col span={12}>
        <Stack>
          <Title>Training Video</Title>
          <Text>
            Please review this training video for a quick overview of the rules
            of Delta Green.
          </Text>
          <Flex justify="center">
            <iframe
              src="https://drive.google.com/file/d/15NrqwVsNDd0RLvIL2M5ScVM0DqRiiaLv/preview" 
              allow="autoplay"
              width={width > 992 ? 992 : width > 600 ? 600 : 320}
              height={width > 992 ? 540 : width > 600 ? 360 : 220}
            />
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
