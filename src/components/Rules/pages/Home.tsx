import { Divider, Grid, ScrollArea, Stack, Text, Title } from "@mantine/core";

export const Home = () => {
  return (
    <Grid p="md" ta="start">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Home</Title>
          <Text>
            Delta Green features occasional scenes that focus on Agents’
            everyday lives. These short vignettes should last no more than a few
            minutes. They are a chance to explore the most important things in
            an Agent’s life—and to see whether those things are deteriorating
            thanks to Delta Green.
          </Text>
          <Text>
            Typically, “home” scenes occur between missions and reflect months
            or even years of time, but the Handler decides when and whether one
            is appropriate.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            What Changed
          </Title>
          <Divider />
          <Title order={2} td="underline">
            Personal Pursuits
          </Title>
          <Title order={3}>Fulfill Responsibilities</Title>
          <Text>
            If your Agent focuses on ordinary obligations and relationships,
            describe something the Agent is doing at work or at home to support
            one Bond (other than a Bond for Delta Green). Roll a SAN test.
            Success improves the Bond by 1D6 (up to your Agent’s CHA). A
            critical success also adds 1 SAN (up to your POW×5). Failure adds 1
            to the Bond. A fumble means some disastrous conflict—probably
            related to your Agent’s involvement with Delta Green—reduces the
            Bond by 1D4 and your SAN by 1.
          </Text>
          <Title order={3}>Back to Nature</Title>
          <Text>
            Your Agent can spend time in seclusion, minimizing stress,
            distractions, and obligations. This isn’t a vacation with the
            family. It’s extended time alone, or mostly alone, in an environment
            that’s physically active but places few other demands on the Agent.
            This reduces one Bond (other than a Bond for Delta Green) by 1 as
            you let other responsibilities lapse. Roll a SAN test. Success adds
            1D4 SAN, or 4 for a critical (up to your Agent’s POW×5). Failure
            adds 1 SAN. A fumble costs 1D4 SAN. Describe the impact of this time
            alone.
          </Text>
          <Title order={3}>Establish a New Bond</Title>
          <Text>
            Your Agent attempts to create a new Bond. This means that character
            or group is developing into an essential, important part of your
            Agent’s life. Attempt a CHA×5 test. Success establishes a new Bond
            with a score equal to half your Agent’s CHA (round up).
            Unfortunately, the attention required to successfully establish a
            new Bond reduces the value of one other Bond (other than a Bond for
            Delta Green) by 1.
          </Text>
          <Title order={3}>Go to Therapy</Title>
          <Text></Text>
          <Title order={3}>Improve Skills or Stats</Title>
          <Text>
            By training or studying extensively, your Agent can try to boost any
            two separate skills or stats, or one stat and one skill. Describe
            what your Agent is doing to improve the stat or skill: taking night
            classes for INT or a skill, lifting weights for STR, meditating to
            strengthen self-discipline for POW, socializing or taking leadership
            courses for CHA, going to physical therapy to regain stat points
            permanently lost from an injury, etc. Attempt a test of the stat × 5
            or of the skill. If the test fails, add 3D6 percentage points to the
            skill (to a maximum of 99%), or one point to the stat (to a maximum
            of 18). Each increase to a stat or skill reduces one Bond (other
            than a Bond for Delta Green) by 1 as you let other responsibilities
            lapse.
          </Text>
          <Title order={3}>Personal Motivation</Title>
          <Text>
            Your Agent indulges in the things that he or she finds meaningful.
            Roll a SAN test. Success adds 1 SAN, or 1D4 for a critical (up to
            your Agent’s POW×5), and reduces one Bond (other than a Bond for
            Delta Green) by 1 as you let other responsibilities lapse. A fumble
            costs 1 SAN.
          </Text>
          <Title order={3}>Special Training</Title>
          <Text>
            Your Agent can study and practice to gain special training. This
            reduces one Bond (other than a Bond for Delta Green) by 1 as you let
            other responsibilities lapse.
          </Text>
          <Title order={3}>Stay On the Case</Title>
          <Text>
            Your Agent can spend nights and weekends poring over an old
            operation’s evidence and case files. This reduces one Bond (other
            than a Bond for Delta Green) by 1 as you let other responsibilities
            lapse. The Handler secretly rolls Criminology or Occult for your
            Agent. Success means you uncover some pertinent clue of the
            Handler’s devising, an especially valuable one with a critical.
            Failure means you find nothing. A fumble means you think you find a
            valuable clue but it will turn out to be dangerously wrong. Either
            way, your Agent gains 1D6–3 SAN in coming to terms with what
            happened—or in obsessing over it self-destructively if the roll
            means a loss of SAN.
          </Text>
          <Title order={3}>Study the Unnatural</Title>
          <Text>
            Your Agent can spend the vignette studying a forbidden tome, a
            decrypted flash drive full of shocking data, case reports from a
            prior Delta Green op, or some other source of unnatural knowledge.
            This raises your Agent’s Unnatural skill. The Handler describes the
            results of the study. You must choose one Bond which loses 1D4
            points as your Agent spends more and more time on awful things.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Getting Fired
          </Title>
          <Divider />
          <Title order={2} td="underline">
            Prosecution
          </Title>
          <Divider />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
