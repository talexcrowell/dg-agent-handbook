import { Grid, ScrollArea, Stack, Text, Title } from "@mantine/core";

export const Home = () => {
  return (
      <Grid p="md" ta="start">
        <Grid.Col span={12}>
          <Stack>
            <Title></Title>
            <Text></Text>
          </Stack>
        </Grid.Col>
      </Grid>
  );
};
