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

export const WhatIsDeltaGreen = () => {
  const [viewport] = useViewportContext();
  return (
    <Grid ta="start" pt="sm" id="what-is-delta-green">
      <Grid.Col span={12}>
        <Stack>
          <Stack gap="xs">
            <Title td="underline" style={{ scrollMarginTop: 80 }}>
              What Is Delta Green?
            </Title>
            <Text>
              Ask any two Delta Green agents “What is Delta Green?” and you’ll
              get two very different answers. It is an enigma. Its mission
              requires concealing itself from the public, from the rest of the
              U.S. government, and even, sometimes, from its own agents.
            </Text>
            <Text>
              It is likely that even a veteran agent has met fewer than five
              Delta Green operatives. That’s it. There are no cubicles. No
              secret bases. No newsletters or human resources intranets. No
              badges or letterhead. Every team is spread out, coming together
              only when a mission demands it.
            </Text>
            <Text>
              Details about the leadership are off-limits. If there is a
              headquarters, you’ve never seen it. If you do know more, you know
              to keep it to yourself. Such knowledge could get people arrested
              or killed. The group is more like a secret society than an agency
              of the federal government.
            </Text>
            <Text>
              Every Delta Green agent spends most of his or her time working a
              “real” job. Many are FBI, CIA, or military, but nearly any
              profession can be found in Delta Green’s ranks.
            </Text>
            <Text>
              How does Delta Green operate? How are new agents recruited? The
              details vary from game to game. Delta Green itself changes and
              evolves, often without telling its agents. We can give you a
              version that is common, but your experience may be very different.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              td="underline"
              id="potential-recruits"
              style={{ scrollMarginTop: 80 }}
            >
              Potential Recruits
            </Title>
            <Text>
              Delta Green recruits a new prospect only after confirming that he
              or she can handle the work and the unconventional demands the
              group makes. They usually look to federal agents and special
              forces, adaptable professionals trained to cope with overwhelming
              stress and danger.
            </Text>
            <Text>
              Sometimes prospects are recruited from other fields, such as
              science, anthropology, or medicine.
            </Text>
            <Text>
              If the prospect has encountered the unnatural, all the better.
              Delta Green wants people who recognize the depth of the danger. If
              your first instinct is to go public with an unnatural discovery,
              it’s likely you are not a Delta Green recruit but a Delta Green
              mission.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              td="underline"
              id="operational-briefing"
              style={{ scrollMarginTop: 80 }}
            >
              Operational Briefing
            </Title>
            <Text>
              When a Delta Green operation is necessary, the mission is always
              the same. Stop the incursion. Minimize exposure. Save lives. Cover
              it up to save others from being exposed. Never, ever reveal the
              existence of Delta Green.
            </Text>
            <Text>
              One agent gets instructions from Delta Green’s leaders and shares
              it with the team. In these days of constant surveillance and
              ever-growing NSA decryption farms, technology means risk. Keeping
              Delta Green’s missions secret sometimes requires old-fashioned
              tradecraft: instructions given to the agent face-to-face by a
              paranoid case officer, a briefing transferred by hand, the need
              for a meeting given in a prearranged, covert signal.
            </Text>
            <Text>
              When possible, strings are pulled to bring each member of the team
              to the mission. Sometimes an official reassignment is authorized
              under restricted classification. Delta Green has agents embedded
              at high levels in the U.S. government to create sham task forces
              and set up faux training exercises. The words “Delta Green” appear
              nowhere in these orders and reassignments.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              td="underline"
              id="on-the-ground"
              style={{ scrollMarginTop: 80 }}
            >
              On the Ground
            </Title>
            <Text>
              Occasionally, the Delta Green team acts undercover and within the
              budget of an official, mundane investigation or counterterrorism
              task force: a few SUVs, surveillance drones, rooms at the nearest
              motel, access to official databases, even a discretionary budget
              to pay confidential informants. Sometimes, agents might even use
              their own identities and badges.
            </Text>
            <Text>
              More often than not, agents go in without cover, on their own
              time, erasing their tracks and covering expenses as best they can
              when the job is done.
            </Text>
            <Text>
              Sometimes a mundane law enforcement investigation or military
              operation uncovers something unnatural, and Delta Green responds
              after the fact. The group looks for ways to take over, or at least
              get agents on the team. Agents debrief the non-Delta Green
              personnel to minimize exposure. Sometimes witnesses can be
              convinced they saw nothing. If the exposure was too overt, a
              decision must be made. If the witness can be trusted to help save
              lives and to stay quiet, Delta Green brings him or her in as an
              ally, a “friendly,” and potentially, as a new agent. If not, the
              witness is discredited, made to look nuts or drug-addled. If
              things go too far, the witness may need to be eliminated.
            </Text>
          </Stack>
          <Divider />
          <Stack gap="xs">
            <Title
              order={2}
              td="underline"
              id="retirement"
              style={{ scrollMarginTop: 80 }}
            >
              Retirement
            </Title>
            <Text>
              When a Delta Green agent is hurt, killed, or so badly traumatized
              that returning to the day job is impossible, it’s up to fellow
              agents to make it look like an accident or a nervous breakdown.
              When that doesn’t work, the agent must cope with the consequences.
              The group may not call on the agent again except in extreme need.
              In Delta Green the mission comes first, and death is the only sure
              way out.
            </Text>
          </Stack>
          {viewport.width > 760 &&
            Array.from({ length: 60 }, (_, i) => <Space />)}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
