import { Grid, Textarea } from "@mantine/core";

export const Notes = () => {
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Textarea label="Personal Details and Notes" ta="start" rows={10} />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea label="Notable People" ta="start" rows={10} />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          label="Developments Which Affect Home and Family"
          ta="start"
          rows={10}
        />
      </Grid.Col>
    </Grid>
  );
};
