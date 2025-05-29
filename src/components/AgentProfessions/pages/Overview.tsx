import { Grid, Space, Stack, Text, Title } from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Overview = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid
      p={viewport.width > 600 ? "md" : 0}
      gutter={viewport.width > 600 ? "md" : "0"}
    >
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Professions</Title>
          <Text>
            A profession says a lot about an Agent. It grants a “kit” of
            appropriate skills. Many Delta Green Agents are federal special
            agents and special-forces operators. Special agents are highly
            educated investigators trained in interviewing, weighing evidence,
            and self-defense; special operators have stood up to the most
            intense pressures imaginable and can handle any crisis. But
            academics are necessary, too: computer and engineering experts,
            historians, anthropologists, physicians, scientists. Someone from
            nearly any profession might stumble into a Delta Green operation and
            prove crucial.
          </Text>
          <Text>
            <Text fw={700} span>Recommended Stats:</Text> Some professions require
            people who are particularly fit, stable, or smart. This means the
            recommended stats should be 10 or higher—or at least they were when
            your Agent first got the job.
          </Text>
          <Text>
            <Text fw={700} span>
              Recommended Skills:
            </Text>{" "}
            Each profession has a predefined kit of skills with scores that
            replace the default skill ratings. This represents the baseline
            training and education for that profession.
          </Text>
          <Text>
            <Text fw={700} span>
              Bonds:
            </Text>{" "}
            Each profession dictates the number of Bonds your Agent begins with.
            Difficult and trying professions mean fewer Bonds but more skills.
          </Text>
          <Text>
            <Text fw={700} span>
              Bonus Skill Points:
            </Text>{" "}
            Pick any eight skills and add 20 points to each. If it’s not a
            professional skill, add the 20 to its base rating. You can also
            instead select from Bonus Skill Packages to fit to your Agent's
            hobbies and/or background. This allows your Agent to specialize in
            certain professional skills or to learn a little about skills not
            included in his or her profession.
          </Text>
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
