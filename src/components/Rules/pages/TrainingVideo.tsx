import { Box, Flex, Grid, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const TrainingVideo = () => {
  const { width } = useViewportSize();
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
              src="https://drive.google.com/file/d/14tzwdVe1oysg5_vPl9mIQOuPfwGCgMF4/preview"
              allow="autoplay"
              width={width > 600 ? 720 : 380}
              height={width > 600 ? 460 : 240}
            />
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
