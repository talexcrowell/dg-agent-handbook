import {
  Anchor,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  List,
  ListItem,
  ScrollArea,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

export const CombatSanityAndWillpower = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" id="combat-sanity-and-willpower" pt="sm">
      <Grid.Col span={12}>
        <Stack>
          <Title td="underline">Combat, Sanity, and Willpower</Title>
          <Text>
            When things harm your Agent, we measure it in derived attributes:
            Hit Points, Sanity Points, and Willpower Points.
          </Text>
          <Text>
            Combat occurs and can take your Agent out of the game quickly and
            permanently.
          </Text>
          <Text>
            Sanity is tested when your Agent faces violence, helplessness, or
            the unnatural.
          </Text>
          <Text>
            Willpower represents your mental fortitude and can be used sparingly
            to protect your sanity at a cost to you and a loved one. It can even
            be used for unnatural rituals.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Combat
          </Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor component={Link} to="/rules/combat" target="_blank">
              Combat
            </Anchor>{" "}
            section in the Rules.
          </Text>
          <Text>
            Combat is resolved in turns with an Agent able to make one action on
            their turn. Turn order is determined from highest DEX to lowest DEX
            and repeats until combat is resolved.
          </Text>
          <List>
            <Text fw={700}>You can choose one action to perform:</Text>
            <List.Item>Aim</List.Item>
            <List.Item>Attack</List.Item>
            <List.Item>Called Shot</List.Item>
            <List.Item>Disarm</List.Item>
            <List.Item>Dodge</List.Item>
            <List.Item>Escape</List.Item>
            <List.Item>Fight Back</List.Item>
            <List.Item>Move</List.Item>
            <List.Item>Pin</List.Item>
            <List.Item>Wait</List.Item>
            <List.Item>Anything Else</List.Item>
          </List>
          <Text>
            Your Agent can also act defensively from opposing attacks: Dodging
            or Fighting Back. This can happen before your Agent's postion in the
            DEX order and count as your Agent's action for this turn. If an
            Agent has already taken their turn, they can't act defensively.
          </Text>
          <Text>
            In order to dodge or fight back, your Agent must be aware of the
            attack and be physically capable.
          </Text>
          <Text>
            <Text fw={700}>Dodging:</Text>
            Opposes all hand-to-hand attacks that turn and let your Agents duck
            behind cover to evade ranged attacks that turn. Dodging protects
            against each attack that your roll beats. Dodging never inflicts
            damage.
          </Text>
          <Text>
            <Text fw={700}>Attacking or Fighting Back:</Text>
            Opposes each hand-to-hand attack that turn. This cannot protect
            against ranged attacks unless your Agent physically interferes with
            the weapon. When fighting back, choose an offensive action: attack,
            called shot, disarm, or pin. If your roll beats the attack, the
            attacker’s action has no effect and your Agent’s action affects the
            attacker. While the roll defends against all attackers, the
            offensive action affects only a single target.
          </Text>
          <Title order={3}>Damage and Death</Title>
          <Text>
            A successful attack inflicts damage, which reduces the victim’s Hit
            Points. Damage depends on the weapon.
          </Text>
          <Text>
            At 2 HP or below, your Agent falls unconscious for an hour or until
            healed to 3 HP.
          </Text>
          <Text>
            At 0 HP, your Agent dies unless the Handler says otherwise. The
            Handler has a lot of discretion. Sometimes a character can be kept
            alive with the proper medical care such as Medicine, Surgery, or
            First Aid.
          </Text>
          <Text>
            First Aid restores 1D4 HP. It can only be attempted only each time
            an Agent is injured. A Medicine or Surgery roll, whichever is
            appropriate, restores 1D4 HP once a week.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Sanity
          </Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor component={Link} to="/rules/sanity" target="_blank">
              Sanity
            </Anchor>{" "}
            section in the Rules.
          </Text>
          <Text>
            Agents of Delta Green are as vulnerable to mental trauma as to
            physical threats. We track that vulnera- bility in Sanity Points
            (SAN). When SAN drops sharply, the Agent loses self-control and the
            player loses control of the Agent.
          </Text>
          <Text>
            Each threat comes with two possible SAN losses, one more severe than
            the other. When your Agent faces one of those threats, make a SAN
            roll. That means rolling your Agent’s current SAN or lower on
            percentile dice. If you succeed, your Agent suffers the lower loss;
            with a critical success, your Agent suffers the minimum loss
            possible. If you fail, your Agent suffers the higher loss; with a
            critical failure, your Agent loses the maximum possible.
          </Text>
          <Title order={3}>Insanity</Title>
          <Text>
            Insanity is what happens when you lose too many Sanity Points.
          </Text>
          <Text>
            <Text fw={700}>Temporary Insanity:</Text>
            If your Agent loses 5 or more SAN from a single event, your Agent
            goes temporarily insane. This means the “fight or flight” response
            takes over: your Agent either runs away, lashes out mindlessly, or
            curls up in a helpless ball. It lasts until the Handler says the
            Agent snaps out of it; usually that’s a few minutes after the source
            of the SAN loss goes away.
          </Text>
          <Text>
            <Text fw={700}>Disorder:</Text>
            An Agent whose SAN score reaches/passes the Breaking Point gains a
            long-term mental disorder. Its nature and symptoms depend on the
            kind of trauma that pushed the Agent to the Breaking Point:
            Violence, Helplessness, or the Unnatural.You then change the
            Breaking Point to its new value: your Agent’s current SAN minus POW.
            The Handler will determine the details of your Agent’s new disorder
            later in the operation or perhaps in between this operation and the
            next.
          </Text>
          <Text>
            <Text fw={700}>Permanent Insanity:</Text>
            If your Agent’s SAN reaches 0, your Agent goes irretrievably insane.
            The Agent becomes a Handler character and it’s time to make up a new
            one.
          </Text>
          <Title order={3}>Reducing Sanity Loss</Title>
          <Text>
            When there is a SAN loss, your Agent can attempt to reduce it by
            projecting it onto a crucial personal relationship, damaging a Bond.
            Spend 1D4 WP. If your Agent still has at least 1 WP, reduce the SAN
            loss by the amount of WP spent (to a minimum of zero) and reduce a
            Bond’s score by the same amount.
          </Text>
          <Text>
            The next time your Agent interacts with that Bond, decide what shape
            the damage takes. Does your Agent grow hostile and angry,
            irrationally blaming the loved one for imagined wrongs? Does your
            Agent abandon the loved one in favor of relationships with less
            importance and meaning? The stresses faced by Delta Green agents
            often wreck the families and friendships that give them strength.
          </Text>
          <Title order={3}>Adapting to Sanity Loss</Title>
          <Text>
            An Agent who loses SAN from a threat three times without going
            insane becomes adapted. If your Agent loses SAN due to Helplessness
            or Violence, check one of the three boxes for that threat on the
            character sheet under INCIDENTS OF SAN LOSS WITHOUT GOING INSANE. If
            your Agent goes insane or reaches the Breaking Point due to that
            threat, erase all its checks. If you check all three boxes for a
            threat, your Agent becomes adapted to that threat. When adapted to a
            threat, an Agent’s SAN tests for it always succeed— but adapting to
            a threat changes your Agent, and not for the better. No Agent can
            adapt to the Unnatural.
          </Text>
          <Title order={3}>Repressing Symptoms of Insanity</Title>
          <Text>
            When suffering temporary insanity or an acute episode of a disorder,
            your Agent can try to repress it by focusing on the people who
            depend on him or her. Spend 1D4 WP, and reduce one Bond by the same
            amount. Now you may attempt a SAN test. If it succeeds, your Agent
            stifles the symptoms of insanity, and you retain control of your
            character after all. The next time your Agent interacts with that
            Bond, describe how the relationship has worsened.
          </Text>
          <Title order={3}>Regaining Sanity Points</Title>
          <Text>
            Agents gain SAN by seeking therapy between opera- tions (which can
            raise SAN no higher than the Agent’s POW×5) and by overcoming
            unnatural threats (which can raise SAN as high as 99 minus the
            Agent’s Unnatural skill rating). These options are detailed in the
            core rulebook.
          </Text>
          <Divider />
          <Title order={2} td="underline">
            Willpower
          </Title>
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor component={Link} to="/rules/how-to-play#willpower-points">
              Willpower
            </Anchor>{" "}
            section in the Rules.
          </Text>
          <Text>
            Agents need Willpower points (WP) to withstand exhaustion and mental
            trauma, to resist interrogation and persuasion, and to enact
            unnatural rituals.
          </Text>
          <Title order={3}>Low Willpower</Title>
          <Text>
            At 1 or 2 WP your Agent has an emotional break- down, suffering a
            –20% penalty to all actions until WP rises above 2. At 0 WP your
            Agent collapses, incapacitated and perhaps unconscious, and cannot
            succeed at any tests—including SAN rolls.
          </Text>
          <Title order={3}>Regaining Willpower</Title>
          <Text>
            Fulfilling a personal motivation in a way that the Handler finds
            compelling restores 1 WP. A full night’s sleep restores 1D6 WP.
          </Text>
          <Title order={3}>Exhaustion</Title>
          <Text>
            The first time your Agent tries to sleep after suffering temporary
            insanity or reaching the Breaking Point, you must make a Sanity test
            for the Agent to get any rest. After failing to get a good night’s
            sleep, or working CON in hours without a break, an Agent loses 1D6
            WP and become exhausted. An exhausted Agent suffers a –20% penalty
            to all skills, stat tests, and SAN rolls. A full night’s rest
            removes that penalty.
          </Text>
          <Divider />
          <Center>
            <Button
              rightSection={<IconArrowRight />}
              variant="outline"
              component={Link}
              to="/training/being-an-agent"
            >
              Proceed to "Being an Agent"
            </Button>
          </Center>
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
