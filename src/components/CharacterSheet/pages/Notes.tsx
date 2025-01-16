import { Grid, Stack, Textarea, Title } from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";

export const Notes = () => {
    const [{ currentCharacter }] = useCharacterContext();
  
    let data = { ...currentCharacter };
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Notes
          </Title>
          <Textarea
            label="Personal Details and Notes"
            ta="start"
            rows={10}
            value={data?.personality}
          />
        </Stack>
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
