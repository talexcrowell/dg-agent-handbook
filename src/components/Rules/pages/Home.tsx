import {
  Anchor,
  Divider,
  Grid,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid pt="sm" ta="start" id="home">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline" id="home">
            Home
          </Title>
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
          <Title order={2} td="underline" id="what-changed">
            What Changed
          </Title>
          <Text>
            In a home vignette, take stock of what changed for your Agent in the
            last operation.
          </Text>
          <Text>
            <Text fw={700} span>
              Bonds Damaged or Broken:
            </Text>{" "}
            Describe how each relationship has deteriorated.
          </Text>
          <Text>
            <Text fw={700} span>
              Permanent Injuries:
            </Text>{" "}
            Describe what they look like.
          </Text>
          <Text>
            <Text fw={700} span>
              Disorders Gained:
            </Text>{" "}
            Did your Agent hit the Breaking Point during the operation? Now’s
            the time for the Handler to decide what disorder the Agent gains.
          </Text>
          <Text>
            <Text fw={700} span>
              Work:
            </Text>{" "}
            If your Agent misused his or her contacts, authority, or resources
            from his or her day job, describe how actions during the operation
            may have impacted your Agent’s career.
          </Text>
          <Text>
            <Text fw={700} span>
              Prosecution:
            </Text>{" "}
            Did your Agent get arrested?
          </Text>
          <Divider />
          <Title order={2} td="underline" id="personal-pursuits">
            Personal Pursuits
          </Title>
          <Title order={3} id="fulfill-responsibilities">
            Fulfill Responsibilities
          </Title>
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
          <Title order={3} id="back-to-nature">
            Back to Nature
          </Title>
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
          <Title order={3} id="establish-a-new-bond">
            Establish a New Bond
          </Title>
          <Text>
            Your Agent attempts to create a new Bond. This means that character
            or group is developing into an essential, important part of your
            Agent’s life. Attempt a CHA×5 test. Success establishes a new Bond
            with a score equal to half your Agent’s CHA (round up).
            Unfortunately, the attention required to successfully establish a
            new Bond reduces the value of one other Bond (other than a Bond for
            Delta Green) by 1.
          </Text>
          <Title order={3} id="go-to-therapy">
            Go to Therapy
          </Title>
          <Text>
            Therapy is a systematic deconstruction of mental trauma. It is an
            ongoing process requiring honesty and commitment. Going to therapy
            reduces a Bond (other than one for Delta Green) by 1 as you let
            responsibilities lapse. Therapy requires a Luck roll or a roll of
            the therapist’s Psychotherapy skill.
          </Text>
          <Text>
            Your Agent must decide whether to truthfully tell the therapist what
            caused the SAN loss. If your Agent tells the truth, there are risks.
            If the SAN loss came from confronting the unnatural, the Handler
            decides whether the therapist believes what your Agent says. The
            therapist may in turn lose SAN from the Agent’s stories. If the
            therapist thinks the Agent’s stories are lies or delusions, make the
            Luck roll at −20%. If the Luck roll fails, your Agent gains 1 SAN,
            or loses 1 with a fumble. If the Luck roll succeeds, your Agent
            gains 1D6 SAN (or 6 with a critical success). If your Agent
            describes illegal violence and it sounds like further violence is
            imminent, the Handler may decide the therapist reports it to the
            authorities.
          </Text>
          <Text>
            If your Agent does not tell the therapist the truth, healing is
            limited. If the Luck roll fails, your Agent gains no SAN, and loses
            1 on a fumble. If it succeeds, your Agent gains 1D4 SAN (or 4 for a
            critical success).
          </Text>
          <Text>
            If your Agent suffers from a disorder, a critical success with
            therapy’s Luck roll cures it (whether your Agent told the truth or
            not). Your Agent develops a Bond with the therapist equal to half
            your Agent’s CHA (or add 1D4 to it if your Agent already has that
            Bond), and loses 1D4 from one other Bond of your choice. Write
            “cured” next to the disorder on the character sheet—but do not erase
            it. The next time you gain a disorder, you must roll another SAN
            test. If that fails, the “cured” disorder returns in full force
            alongside the new one.
          </Text>
          <Title order={3} id="improve-skills-or-stats">
            Improve Skills or Stats
          </Title>
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
          <Title order={3} id="personal-motivation">
            Personal Motivation
          </Title>
          <Text>
            Your Agent indulges in the things that he or she finds meaningful.
            Roll a SAN test. Success adds 1 SAN, or 1D4 for a critical (up to
            your Agent’s POW×5), and reduces one Bond (other than a Bond for
            Delta Green) by 1 as you let other responsibilities lapse. A fumble
            costs 1 SAN.
          </Text>
          <Title order={3} id="special-training">
            Special Training
          </Title>
          <Text>
            Your Agent can study and practice to gain special training. This
            reduces one Bond (other than a Bond for Delta Green) by 1 as you let
            other responsibilities lapse.
          </Text>
          <Group gap={5}>
            <Text>You can read more about special training in</Text>
            <Anchor
              component={Link}
              to="/agents/professions/stats-and-skills#special-training"
            >
              Professions.
            </Anchor>
          </Group>
          <Title order={3} id="stay-on-the-case">
            Stay On the Case
          </Title>
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
          <Title order={3} id="study-the-unnatural">
            Study the Unnatural
          </Title>
          <Text>
            Your Agent can spend the vignette studying a forbidden tome, a
            decrypted flash drive full of shocking data, case reports from a
            prior Delta Green op, or some other source of unnatural knowledge.
            This raises your Agent’s Unnatural skill. The Handler describes the
            results of the study. You must choose one Bond which loses 1D4
            points as your Agent spends more and more time on awful things.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="getting-fired">
            Getting Fired
          </Title>
          <Text>
            Delta Green often requires Agents to leave their jobs behind at
            short notice, to flash their badges under flimsy pretexts, to misuse
            agency funds, and to return to work injured or shaken from PTSD.
            Describe that kind of blowback in a “Home” vignette between
            operations.
          </Text>
          <Text>
            If your Agent has pushed his or her luck once too often, the Handler
            might say your Agent’s job is on the line. It might require a CHA
            test to get back into a supervisor’s good graces. If things have
            really gone wrong and it looks like there’s little hope, it might
            need a Persuade or Bureaucracy test to suffer a mere suspension or
            disciplinary action. If the CHA or skill test fails, your Agent gets
            fired.
          </Text>
          <Text>
            Getting fired costs 0/1 SAN from helplessness. You must make a CHA
            test for each Bond (including Delta Green Bonds) or lose 1D4 points
            from it. The test is at −20% if the Bond is a colleague from the
            job.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="prosecution">
            Prosecution
          </Title>
          <Text>
            Delta Green Agents routinely violate major laws. Sometimes they get
            caught, and sometimes Delta Green can’t cover it up.
          </Text>
          <Text>
            If your Agent is prosecuted for crimes, the result is determined in
            a between-missions “Home” vignette. An ambitious Handler might have
            other Agents brought in as witnesses and play out a few minutes of
            questioning.
          </Text>
          <Text>
            Make a Luck roll. If the Handler thinks the case against your Agent
            is especially strong, the roll is at a −20% penalty. If the case is
            especially weak, or if the Handler decides Delta Green is quietly
            pulling strings on your Agent’s behalf, it’s at a +20% bonus.
          </Text>
          <Text>
            Before making the Luck roll, you can attempt a Law roll to work the
            system. Success adds a +20% bonus, or +40% with a critical; failure
            backfires and incurs a −20% penalty, or −40% with a fumble.
          </Text>
          <Text>
            If the Luck roll succeeds, your Agent is acquitted or the case is
            dropped. But the stress of it can be terrible. You must make a CHA
            test for each Bond (including Delta Green Bonds) or lose 1D4 points
            from it.
          </Text>
          <Text>
            If the Luck roll fails, your Agent is convicted at trial or must
            admit guilt in a plea bargain. Your Agent automatically loses his or
            her job and loses 0/1D4 SAN from helplessness. And you must make a
            CHA test for each Bond, including Delta Green Bonds. Success means
            the Bond drops by one point. Failure means it drops by 1D6. Whether
            your Agent winds up in prison, on probation, and/or hit with
            catastrophic fines is up to the Handler.
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
