import { Grid, Stack, Textarea, Title } from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Notes = ({ currentCharacter, handleUpdateCharacter }: any) => {
  let data = { ...currentCharacter };
  const [viewport] = useViewportContext();
  return (
    <Grid py="md" px={viewport.width > 992 ? "md" : 0}>
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
            onChange={(e) => {
              handleUpdateCharacter("personality", e.currentTarget.value);
            }}
          />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          label="Experiences with the Unnatural"
          ta="start"
          rows={10}
          value={data?.unnaturalExperiences}
          onChange={(e) => {
            handleUpdateCharacter("unnaturalExperiences", e.currentTarget.value);
          }}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          label="Developments Which Affect Home and Family"
          ta="start"
          rows={10}
          value={data?.lifeDevelopments}
          onChange={(e) => {
            handleUpdateCharacter("lifeDevelopments", e.currentTarget.value);
          }}
        />
      </Grid.Col>
    </Grid>
  );
};
