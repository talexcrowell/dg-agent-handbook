import {
  Divider,
  Grid,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";

export const Sanity = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid pt="sm" ta="start" id="sanity">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline" id="sanity-title">
            Sanity
          </Title>
          <Text>
            Sanity Points represent the resilience of the relationship between
            your Agent’s personality and the world.
          </Text>
          <Text>
            With high SAN, your Agent has confidence in his or her place in the
            world. A high SAN score is marked by insight, self-awareness, and a
            life-affirming view of reality. With low SAN, the deadly truth of
            the universe has begun to overwhelm your Agent. With no SAN, your
            Agent is forever lost.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="rules-of-thumb-for-san-loss">
            Rules of Thumb for SAN Loss
          </Title>
          <Text>
            If the cost of failing a SAN test is 1D6 or less, the cost of
            success is usually zero. If the cost of failure is 1D8 or 1D10, the
            cost of success is usually 1. Some unnatural events and encounters
            are even more catastrophic.
          </Text>
          <Text>
            A critical success with a Sanity roll means your Agent loses the
            least possible SAN. If the loss for succeeding at the Sanity roll
            would have been 1D4, he or she loses 1 point. Fumbling a Sanity roll
            means your Agent loses the most possible SAN. If the loss for
            failing the Sanity roll would have been 1D20, he or she loses 20
            points.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="threats-to-san">
            Threats to SAN
          </Title>
          <Text>
            The three major threats to SAN are violence, helplessness and the
            Unnatural. These categories can overlap.
          </Text>
          <Title order={3} id="violence">
            Violence
          </Title>
          <Text>
            Killing other humans is inherently harmful to sanity. While
            wrestling and punching people is within biological norms,
            bludgeoning someone to death is not instinctive. The blasting noise
            and fire of modern violence overwhelm the human brain. Violence can
            drive you insane if you’re not careful.
          </Text>
          <Text>
            In combat, you must make a SAN test for a trauma the first time it
            happens in that fight. Outside of combat, every individual incident
            triggers its own SAN loss.
          </Text>
          <Title order={3} id="helplessness">
            Helplessness
          </Title>
          <Text>
            The essential human impulse is to act. True inactivity is
            unwholesome to the human psyche.
          </Text>
          <Text>
            Note that helplessness often makes violence worse, just like
            violence makes helplessness worse.
          </Text>
          <Title order={3} id="the-unnatural">
            The Unnatural
          </Title>
          <Text>
            The unnatural troubles us because it is wholly outside of human
            experience. It wounds our sense of connection to the world by
            causing huge gaps in understanding. This is why the Unnatural skill
            limits maximum SAN. The more you know of our actual place in the
            cosmos, the harder it is to navigate the human world.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="insanity-and-disorders">
            Insanity and Disorders
          </Title>
          <Text>
            Agents who lose excessive SAN lose control of themselves, suffering
            insanity and mental disorders.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="temporary-insanity">
            Temporary Insanity
          </Title>
          <Text>
            After losing 5 or more SAN in a single roll, your Agent loses
            self-control. For a short time you cannot control your Agent’s
            actions. Your Agent’s primitive brain switches to pure panic, with
            one of three possible responses: Flee, Struggle, or Submit. Work
            with the Handler to determine which stance your Agent takes. Each is
            more likely in some circumstances than others.
          </Text>
          <Text>
            If the circumstances are calm, someone making a Psychotherapy roll
            can talk your Agent down from temporary insanity. Otherwise your
            Agent loses control until the insanity runs its course.
          </Text>
          <Title order={3} id="flee">
            Flee
          </Title>
          <Text>
            Your Agent must move away from the SAN-affecting stimulus at top
            speed in any direction. Your Agent must do this for a number of
            turns equal to his or her CON, whereupon your Agent falls to the
            ground exhausted, or until your Agent feels “safe”, whichever
            happens first. This is a common reaction against Unnatural and
            violence SAN threats.
          </Text>
          <Title order={3} id="struggle">
            Struggle
          </Title>
          <Text>
            This is lashing out randomly at the nearest threat, no matter how
            insurmountable it might be. Once this course is set upon, your Agent
            has no choice but to fight until he or she is killed, unconscious,
            or restrained. This is a common reaction against helplessness and
            violence SAN threats.
          </Text>
          <Title order={3} id="submit">
            Submit
          </Title>
          <Text>
            This is shutting down or passing out from shock. If conscious, your
            Agent is catatonic and paralyzed until the Handler decides he or she
            snaps out of it. When your Agent comes to, it’s likely he or she has
            suppressed the trauma that caused his or her collapse. Remembering
            details requires an INT×5 test and is terribly stressful. This is a
            common reaction against Unnatural and helplessness SAN threats.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="disorders">
            Disorders
          </Title>
          <Text>
            An Agent whose SAN reaches the Breaking Point gains a disorder. When
            suffering from a disorder, the mind maladapts to mental trauma with
            long-term neuroses. A disorder is like a release valve for
            intolerable stress. Indulging in it helps your Agent cope. It’s
            possible to suffer from multiple disorders at the same time.
          </Text>
          <Title order={3} id="acute-episodes">
            Acute Episodes
          </Title>
          <Text>
            A disorder is a chronic, ongoing condition. It lurks under the
            surface, threatening to erupt when things get bad. Each disorder
            suggests triggers that bring on acute episodes. Acute episodes last
            as long as your Agent is in the crisis or in the presence of the
            trigger and usually for at least a few hours afterward. In an acute
            episode, the Agent succumbs to the disorder’s internal logic and
            must act accordingly. If your Agent suffers from more than one
            disorder, the Handler decides which comes to the fore.
          </Text>
          <Text>
            <Text fw={700}>Repressing an Episode:</Text>When an acute episode
            begins, your Agent can attempt to repress it by projecting the
            stress and trauma onto a Bond.
          </Text>
          <Text>
            <Text fw={700}>Effects of an Episode:</Text>Suffering an acute
            episode of a disorder often means your Agent can’t take some actions
            (or can attempt them only with a penalty), or your Agent must take
            some actions. The Handler always decides the exact repercussions,
            and whether it happens immediately or builds gradually, in the
            aftermath of the trauma.
          </Text>
          <Text>
            When your Agent is going through an acute episode, make sure it is
            obvious to everyone that something is wrong. A Psychotherapy roll
            can diagnose your Agent’s particular disorder.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="permanent-insanity">
            Permanent Insanity
          </Title>
          <Text>
            An Agent who drops to 0 SAN is effectively “lost.” Just as being
            reduced to 0 Hit Points permanently removes your Agent from your
            control through physical death, being reduced to 0 SAN permanently
            removes your Agent from your control through insanity. Agents at 0
            SAN have embraced a world of violence, helplessness, and death. No
            therapy or treatment will ever bring them back.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="resisting-insanity">
            Resisting Insanity
          </Title>
          <Text>
            It’s possible to resist SAN loss and insanity through adaptation and
            the strength of Bonds. But suffering a trauma always comes with a
            cost.
          </Text>
          <Title order={3} id="adapting-to-sanity-loss">
            Adapting to Sanity Loss
          </Title>
          <Text>
            Adaptation to violence or to helplessness means you always succeed
            at a Sanity roll for that type of trauma.
          </Text>
          <Text>
            Adaptation to violence or adaptation to helplessness occurs after
            your Agent has lost SAN from that kind of trauma three times in a
            row without going temporarily insane from it or hitting the Breaking
            Point. The character sheet has spaces to mark your Agent’s progress
            toward adaptation. Each time violence or helplessness reduces your
            Agent’s SAN by 1 or more, mark a box on your character sheet to keep
            track of it. If your Agent suffers insanity from violence before all
            three boxes are marked, erase all the “Violence” boxes and start
            again. If your Agent suffers insanity from helplessness before all
            three boxes are marked, erase all the “Helplessness” boxes and start
            again. If you fill in all three boxes for violence or all three for
            helplessness, your Agent becomes adapted to it.
          </Text>
          <Text>
            <Text fw={700}>Adapting to Violence:</Text> Unfortunately, being
            adapted to violence means your Agent’s empathy suffers. He or she
            permanently loses 1D6 CHA and the same amount from each Bond.
          </Text>
          <Text>
            <Text fw={700}>Adapting to Helplessness:</Text> Being adapted to
            helplessness means your Agent’s personal drive suffers. As soon as
            your Agent becomes adapted to helplessness, he or she permanently
            loses 1D6 POW.
          </Text>
          <Text>
            <Text fw={700}>Adapting to the Unnatural:</Text> There is no
            adapting to the unnatural. Things that exist beyond human
            comprehension are beyond “getting used to.” Every new encounter is a
            fresh shock. The only way to “adapt” to the Unnatural is to reach 0
            SAN, whereupon the horrors make perfect sense and no longer inflict
            mental damage.
          </Text>
          <Title order={3} id="projecting-onto-a-bond">
            Projecting Onto a Bond
          </Title>
          <Text>
            When your Agent loses SAN, you may spend WP to reduce the loss. The
            amount is always 1D4: roll the die and reduce your WP by that much.
          </Text>
          <Text>
            If your Agent still has at least 1 WP, reduce the SAN loss by the
            amount of WP spent—the amount you rolled—to a minimum of zero.
          </Text>
          <Text>
            Now reduce a Bond’s score by the same amount. The next time your
            Agent interacts with the subject of the Bond, decide what shape the
            projection takes.
          </Text>
          <Title order={3} id="repressing-insanity">
            Repressing Insanity
          </Title>
          <Text>
            You may attempt to repress the blind panic of temporary insanity or
            an acute episode of a disorder by spending Willpower Points. The
            amount is always 1D4: roll the die and reduce your WP by that much.
          </Text>
          <Text>
            If your Agent has at least 1 WP after spending the 1D4, describe how
            a Bond might help your Agent keep it together. Reduce the Bond by
            the same amount. Make a note to describe later how the Bond becomes
            strained as your Agent takes too much support from it.
          </Text>
          <Text>
            Now attempt a Sanity roll. If it succeeds, your Agent suppresses the
            insanity or disorder and behaves normally.
          </Text>
          <Divider />
          <Title order={2} td="underline" id="recovery">
            Recovery
          </Title>
          <Text>There are only a few ways to restore mental health.</Text>
          <Title order={3} id="therapy-or-home-life">
            Therapy or Home Life
          </Title>
          <Text>
            After the mission your Agent can attempt to recuperate with
            professional help or by focusing on his or her Bonds; the things
            that give your Agent strength.
          </Text>
          <Title order={3} id="destroying-the-unnatural">
            Destroying the Unnatural
          </Title>
          <Text>
            Destroying an unnatural creature or an object known to contain
            otherworldly power restores an amount of SAN equivalent to the
            lowest amount that could be lost for encountering it.
          </Text>
          <Text>
            If the SAN loss is 1/1D6, for example, destroying it restores 1 SAN.
            If the SAN loss is 1D6/1D20, your Agent gains 1D6 SAN for destroying
            it. This can mean your Agent gains more SAN from overcoming the
            threat than he or she actually lost from facing it.
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
