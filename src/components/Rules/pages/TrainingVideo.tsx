import { Box, Flex, Grid, Stack, Text, Title } from "@mantine/core";

export const TrainingVideo = () => {
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title>Training Video</Title>
          <Text>Please review this training video for a quick overview of the rules of Delta Green.</Text>
          <Flex justify="center">
            <iframe
              src="https://drive.google.com/file/d/14tzwdVe1oysg5_vPl9mIQOuPfwGCgMF4/preview"
              allow="autoplay"
              width={720}
              height={460}
            />
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
