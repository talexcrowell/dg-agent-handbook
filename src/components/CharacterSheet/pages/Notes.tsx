import { Grid, InputLabel, Stack, Textarea, Title } from "@mantine/core";
import { useCharacterContext } from "../../../contexts/CharacterContext";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Notes = ({
  currentCharacter,
  handleUpdateCharacter,
  IsPreview,
}: any) => {
  let data = { ...currentCharacter };
  const [viewport] = useViewportContext();
  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0}>
      <Grid.Col span={12}>
        <Stack>
          <Title order={4} td="underline">
            Notes
          </Title>
          <Textarea
            label={
              <InputLabel c="dimmed">Personal Details and Notes</InputLabel>
            }
            ta="start"
            rows={10}
            value={data?.personality}
            onChange={(e) => {
              handleUpdateCharacter("personality", e.currentTarget.value);
            }}
            disabled={IsPreview()}
          />
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          label={
            <InputLabel c="dimmed">Experiences with the Unnatural</InputLabel>
          }
          ta="start"
          rows={10}
          value={data?.unnaturalExperiences}
          onChange={(e) => {
            handleUpdateCharacter(
              "unnaturalExperiences",
              e.currentTarget.value
            );
          }}
          disabled={IsPreview()}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          label={
            <InputLabel c="dimmed">
              Developments Which Affect Home and Family
            </InputLabel>
          }
          ta="start"
          rows={10}
          value={data?.lifeDevelopments}
          onChange={(e) => {
            handleUpdateCharacter("lifeDevelopments", e.currentTarget.value);
          }}
          disabled={IsPreview()}
        />
      </Grid.Col>
    </Grid>
  );
};
