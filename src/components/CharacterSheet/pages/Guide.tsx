import {
  Accordion,
  Anchor,
  Grid,
  List,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";

export const Guide = () => {
  const [viewport] = useViewportContext();

  return (
    <Grid py="md" px={viewport.width > 760 ? "md" : 0}>
      <Stack w="100%">
        <Title order={3}>Quick Guide</Title>
        <Accordion>
          <Accordion.Item value="basic">
            <Accordion.Control>Agent Etiquette</Accordion.Control>
            <Accordion.Panel>
              <List spacing="xs">
                <List.Item>Describe Your Agent’s Actions</List.Item>
                <List.Item>Respond Quickly</List.Item>
                <List.Item>Speak for Your Agent</List.Item>
                <List.Item>Respect the Mood</List.Item>
                <List.Item>Work With the Other Players</List.Item>
                <List.Item>Trust the Handler</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="starting-equipment">
            <Accordion.Control>Starting Equipment</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text>
                  Unless the Handler states otherwise, it is assumed that your
                  Agent brings some equipment for Operations. Your Agent's
                  starting equipment is based on their profession and their
                  history.{" "}
                </Text>
                <Text>
                  You can always clarify with the Handler if your Agent has a
                  specific item and they will make the final decision.
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="acquiring-equipment">
            <Accordion.Control>Acquiring Equipment</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text c="dimmed">
                  For more information, you can read the{" "}
                  <Anchor
                    component={Link}
                    to="/equipment/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Equipment
                  </Anchor>{" "}
                  section in the Rules.
                </Text>
                <Text>
                  Agents can acquire equipment during an Operation or in-between
                  Operations.
                </Text>
                <Text>
                  Acquiring equipment during an Operation can be through three
                  different ways:
                </Text>
                <List spacing="xs">
                  <List.Item>
                    <Text fw={700}>Official Requisition</Text>
                    <Text>
                      Requisition requires a Bureaucracy roll unless the Handler
                      says it’s obvious that the Agents can or cannot get what
                      they want. Requisitioned equipment is on loan to the
                      Agent. It must be returned at the end of the operation.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text fw={700}>Spending Your Own Money</Text>
                    <Text>
                      For most Agents' professions, paying for anything over
                      Incidental expenses (&lt;$150) can be difficult on short
                      notice. At minimum, it will require an INT*5 or Accounting
                      test to see if your Agent has enough free cash or credit
                      available. If your Agent comes from a wealthy occupation
                      or is born to a wealthy family, it allows flexibility by
                      increasing the limit to Standard expenses ($200 to $800).
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text fw={700}>Using Illicit Funds</Text>
                    <Text>
                      Follows the same rules as spending your own money, but the
                      money must be sourced before it can be used for
                      acquisition.
                    </Text>
                  </List.Item>
                </List>
                <Text>
                  Acquiring equipment or illicit funds in-between Operations can
                  be determined through Home Pursuits. Illicit cash cannot buy
                  assets that could only be gained as part of an official
                  operation.
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="actions">
            <Accordion.Control>Combat Actions</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text c="dimmed">
                  For more information, you can read the{" "}
                  <Anchor
                    component={Link}
                    to="/rules/combat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Combat
                  </Anchor>{" "}
                  section in the Rules.
                </Text>
                <Text>
                  Combat is measured in turns. A turn is a few seconds, or as
                  long as it takes everyone to complete a single action.
                </Text>
                <Text>
                  The Handler counts down by DEX for all characters, from
                  highest to lowest. Each character acts when his or her number
                  comes up. If DEX scores tie, the actions occur at the same
                  time or the Handler can choose some tiebreaker.
                </Text>

                <Text>
                  During a turn, a combatant can attempt one of the following
                  actions:
                </Text>
                <Table
                  withTableBorder
                  withColumnBorders
                  striped
                  highlightOnHover
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Action</Table.Th>
                      <Table.Th>Description</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>Aim</Table.Td>
                      <Table.Td>
                        Sacrifice one turn to aim and gain a +20% to your attack
                        next turn. Aiming requires no roll. After the next turn,
                        or if your Agent suffers any damage before attempting
                        it, the bonus is lost.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Attack</Table.Td>
                      <Table.Td>
                        The “standard” attack (ranged or hand-to-hand) is a
                        skill test to see if your Agent hits a target, damage is
                        inflicted based on the weapon used. Usually it’s
                        Firearms for a gun, Athletics for a thrown weapon, Melee
                        Weapons for a hand-to-hand weapon, or Unarmed Combat for
                        a punch or kick. The number of shots fired in a single
                        firearm attack depends on the weapon used—a bolt-action
                        rifle fires one bullet while a semi-automatic firearm
                        might fire three quick shots—but it’s always a single
                        attack roll and a single damage roll.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Called Shot</Table.Td>
                      <Table.Td>
                        A called shot is an attack to a particular body part
                        (the head, the hand, the leg). A called shot allows your
                        Agent to roll a grenade past cover or to shoot someone
                        in the leg in order to avoid body armor. If the attack
                        is automatic gunfire that can hit multiple targets, the
                        called shot affects only the first target.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Disarm</Table.Td>
                      <Table.Td>
                        An Unarmed Combat roll attempting to make a target drop
                        an object. This is possible only if your Agent has both
                        hands free and is in hand-to-hand range. Attempting to
                        disarm also means your Agent is parrying and blocking.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Dodge (Defense)</Table.Td>
                      <Table.Td>
                        A Dodge skill test to get out of the way of an attack
                        (or a disarm or pin). This opposed test pits your
                        Agent’s Dodge skill against the attack roll. If your
                        roll overcomes the attack roll, your Agent avoids harm.
                        If the Handler agrees, an Agent can dodge while jogging
                        or running as described in the MOVE action on this page.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Escape</Table.Td>
                      <Table.Td>
                        Roll either STR×5 or Unarmed Combat, whichever is
                        better, to escape being pinned. It’s opposed by the
                        pinning character’s attack roll against your Agent. If
                        the pinning character is not attacking, the escape is
                        opposed by either Unarmed Combat or STR×5 (whichever is
                        better). If the escape roll succeeds, your Agent is no
                        longer pinned and the escape roll acts as a defense roll
                        against all attackers. If it fails, your Agent remains
                        pinned and the escape roll does not defend against
                        attacks.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Fight Back (Defense)</Table.Td>
                      <Table.Td>
                        If someone attacks your Agent with a melee weapon or
                        unarmed combat (not a ranged attack or an explosive),
                        your Agent can fight back with Unarmed Combat or Melee
                        Weapons to block and counterattack.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Move</Table.Td>
                      <Table.Td>
                        An action that moves your Agent a significant distance:
                        10 meters jogging, 20 meters running, or 30 meters
                        sprinting (or you can move about 3 meters while
                        performing some other action). Usually moving requires
                        no roll, but if Agents are running or sprinting, players
                        may need to make a DEX×5 test to keep their footing.
                        Fail, and your Agent falls prone and must spend a turn
                        recovering. If there’s cover at the end of your Agent’s
                        movement, getting behind it provides protection. This
                        can give your Agent armor against firearms and
                        explosives—if the Agent is behind cover when the attack
                        happens. That requires a Dodge roll if the attack
                        happens in the same turn.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Pin</Table.Td>
                      <Table.Td>
                        An attempt to immobilize a target, either on the ground
                        or up against something, using Unarmed Combat. This is
                        possible only if your Agent has both hands free and is
                        in hand-to-hand range and if the Handler says it makes
                        sense. If it succeeds, the target is pinned. All unarmed
                        or melee weapon attacks against a pinned target are at a
                        +20% bonus. An Agent pinning a target can attack the
                        pinned target in later turns. A pinned target can
                        attempt escape once per turn but nothing else.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Wait</Table.Td>
                      <Table.Td>
                        Agents can choose to wait to take any action after their
                        DEX order comes up. At any time before your next turn,
                        you can insert your Agent’s action before the next
                        action in DEX order. Your Agent can’t wait until another
                        character acts and then jump in before it’s resolved,
                        but your Agent can jump in before the other character’s
                        turn comes up.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Anything Else</Table.Td>
                      <Table.Td>
                        Anything that takes a moment’s concentration. The
                        Handler decides whether it requires a stat or skill
                        test.
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="attack">
            <Accordion.Control>Attack Rolls</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text>
                  An attack is a skill roll which inflicts damage, disarms or
                  pins the target, depending on the attacker’s action. An attack
                  roll that’s a critical success is a critical hit. A critical
                  hit inflicts double damage. An attack roll that fumbles
                  includes a complication determined by the Handler. Bonuses and
                  penalties in combat apply only in extraordinary circumstances.
                  No matter the bonus or penalty, a roll of 01 always hits and a
                  roll of 00 (100) always misses.
                </Text>
                <Text>
                  If your Agent is out to kill someone who’s unaware or helpless
                  (and nobody is trying to stop you), that’s hardly combat. You
                  may not even need to make a roll. If the Target is helpless
                  (bound or asleep), no roll is needed to murder the target in
                  one turn. If the Target is active but unaware, make an attack
                  roll at +20%. Any success is a critical hit. If it fails, the
                  attack misses.
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="defense">
            <Accordion.Control>Defense Rolls</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Stack>
                  <Text>
                    Dodging and hand-to-hand combat (with unarmed or with melee
                    weapons) are tests that protect your Agent by opposing an
                    attack roll.
                  </Text>
                </Stack>
                <Stack gap="xs">
                  <Title
                    order={5}
                    id="dodging-and-fighting-back"
                    style={{ scrollMarginTop: 80 }}
                    c="dimmed"
                  >
                    Dodging and Fighting Back
                  </Title>
                  <Text>
                    Your Agent can Dodge or fight back against an incoming
                    attack even before your Agent’s DEX order in a turn. If you
                    do this, it becomes your Agent’s single action for that
                    turn. An Agent who has already taken another action that
                    turn can’t Dodge or fight back until the next turn.
                  </Text>
                  <Text>
                    A roll to Dodge opposes all hand-to-hand attacks that turn.
                    It lets your Agent duck behind cover to evade all ranged
                    attacks that turn if cover is near. Dodging never inflicts
                    damage.
                  </Text>
                  <Text>
                    Fighting back opposes all hand-to-hand attacks that turn. If
                    you win the contest, you take no damage. It does not protect
                    you against ranged attacks unless you’re close enough to
                    push the ranged weapon away. As part of your fighting back
                    roll, choose one offensive action—attack, called shot,
                    disarm, or pin— against a single attacker. If your roll
                    beats that attacker’s roll, your Agent takes no damage and
                    your Agent’s action affects the attacker instead.
                  </Text>
                  <Text>
                    In order to Dodge or fight back, your Agent must know an
                    attack is coming and be physically able to block or evade
                    it. If your Agent is pinned, if the attack occurs before he
                    or she realizes it, or if your Agent can’t see or hear the
                    attacker, your Agent can’t Dodge or fight back.
                  </Text>
                </Stack>
                <Stack gap="xs">
                  <Title
                    order={5}
                    id="dodging-ranged-attacks"
                    style={{ scrollMarginTop: 80 }}
                    c="dimmed"
                  >
                    Dodging Ranged Attacks
                  </Title>
                  <Text>
                    An ordinary Dodge roll can avoid an arrow or a thrown
                    weapon. Nobody can react as fast as bullets and shrapnel,
                    but your Agent can use Dodge to scramble for cover. If your
                    Agent is near enough to move to cover and knows gunfire or
                    an explosion is imminent, make a Dodge roll for the Agent to
                    get behind the cover. If there’s no cover, Dodging does no
                    good. This is why people get nervous when guns come out.
                  </Text>
                </Stack>
                <Stack gap="xs">
                  <Title
                    order={5}
                    id="defending-after-attacking"
                    style={{ scrollMarginTop: 80 }}
                    c="dimmed"
                  >
                    Defending After Attacking
                  </Title>
                  <Text>
                    When your turn comes up, declare your Agent’s action—attack,
                    called shot, disarm, or pin—and make the roll. Your Agent
                    can harm, disarm or pin only one target a turn (the attack
                    might hurt others, but all attacks have a single target).
                  </Text>
                  <Text>
                    A roll to attack, disarm, pin, or make a called shot also
                    opposes each Unarmed Combat and Melee Weapons attack against
                    your Agent until your Agent’s next action. If an attack
                    fails to overcome your roll, it does no harm.
                  </Text>
                  <Text>
                    To oppose an attack, your Agent must know the attack is
                    coming. That requires seeing or hearing the attacker. The
                    Agent must also be physically able to block the Attack, if
                    it is melee. A pinned Agent can’t defend, nor can an Agent
                    who has already successfully pinned a target.
                  </Text>
                  <Text>
                    An attack roll with a ranged weapon does not oppose attack
                    rolls against your Agent.
                  </Text>
                </Stack>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="damage">
            <Accordion.Control>Damage</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text>
                  Each weapon or attack has a damage rating measured in dice.
                  When an attack hits, roll the weapon’s damage dice and
                  subtract the result from the target’s Hit Points.
                </Text>
                <Table withTableBorder withColumnBorders striped>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>Description</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td fw="700">Damage Bonus</Table.Td>
                      <Table.Td>
                        High or low Strength modifies the damage of hand-to-hand
                        attacks, to a minimum of 0
                      </Table.Td>
                    </Table.Tr>{" "}
                    <Table.Tr>
                      <Table.Td fw="700">Stun</Table.Td>
                      <Table.Td>
                        While stunned, your Agent can’t act. When it’s your
                        Agent’s turn, you may attempt a CON×5 test to recover
                        and act normally next turn. If any single attack
                        inflicts half of your Agent’s current HP, the Agent is
                        stunned.
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td fw="700">Unconsciousness</Table.Td>
                      <Table.Td>
                        If your Agent is reduced to 2 or fewer HP, he or she
                        falls unconscious. An unconscious Agent is helpless and
                        can be killed with a single attack without having to
                        roll. At 3 HP or more (or after an hour passes), the
                        Agent regains consciousness.
                      </Table.Td>
                    </Table.Tr>{" "}
                    <Table.Tr>
                      <Table.Td fw="700">Permanent Injury</Table.Td>
                      <Table.Td>
                        Any time your Agent is reduced to 2 or fewer HP, make a
                        CON×5 test. Failure indicates permanent injury. The
                        Handler selects a stat to be permanently reduced by the
                        number on the lowest ten-sided die of the failed CON×5
                        roll, to a minimum score of 3. If STR or CON drop,
                        adjust HP accordingly.
                      </Table.Td>
                    </Table.Tr>{" "}
                    <Table.Tr>
                      <Table.Td fw="700">Death</Table.Td>
                      <Table.Td>
                        If an attack brings your Agent to 0 HP, he or she is
                        dead. HP do not go below 0.
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="healing">
            <Accordion.Control>Healing</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Stack gap="xs">
                  <Text>There are four types of healing:</Text>
                  <Table withTableBorder withColumnBorders striped>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Description</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td fw="700">Resuscitation</Table.Td>
                        <Table.Td>
                          If the Handler says resuscitation is possible, someone
                          must make a First Aid test. This must occur within a
                          number of minutes after death equal to the victim’s
                          CON score. If it succeeds, it restores 1D4 HP (doubled
                          for a critical success) and allows the patient to
                          recover. If First Aid fails, the victim dies and may
                          not be resuscitated.
                        </Table.Td>
                      </Table.Tr>{" "}
                      <Table.Tr>
                        <Table.Td fw="700">Stabilization</Table.Td>
                        <Table.Td>
                          Stabilizing a wounded character with a successful
                          First Aid test immediately heals 1D4 HP. A critical
                          success doubles the amount healed; a fumble inflicts
                          1D4 damage. Once your Agent receives first aid,
                          success or failure, the Agent can’t benefit from it
                          again until he or she suffers damage again.
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td fw="700">Treatment</Table.Td>
                        <Table.Td>
                          Treatment is medical care in a hospital or aid station
                          with extensive tools and medicines. A doctor can
                          attempt a Surgery or Medicine test once per week:
                          Surgery for critical care of severe wounds; Medicine
                          for poison, disease, and ongoing healing. If treatment
                          succeeds, the patient recovers 1D4 HP. This is doubled
                          with a critical, while a fumble inflicts 1D4 HP
                          damage. At the Handler’s discretion, having less
                          extensive tools and medicines may incur a penalty.
                        </Table.Td>
                      </Table.Tr>{" "}
                      <Table.Tr>
                        <Table.Td fw="700">Recuperation</Table.Td>
                        <Table.Td>
                          Over time, the human body repairs itself. A patient
                          who rests in a safe place with proper food and water
                          can attempt a CON×5 test once per day to recover 1 HP
                          (in addition to any HP recovered due to medical
                          treatment). On a critical success, the patient regains
                          1D4; on a fumble, the patient loses 1 HP.
                        </Table.Td>
                      </Table.Tr>{" "}
                    </Table.Tbody>
                  </Table>
                </Stack>
                <Stack gap="xs">
                  <Title
                    order={5}
                    id="complicaitons"
                    style={{ scrollMarginTop: 80 }}
                    c="dimmed"
                  >
                    Complications
                  </Title>
                  <Text>
                    After treatment in a hospital or aid station, and until the
                    patient heals all lost Hit Points, undertaking strenuous
                    activity (any physical stat or skill test) inflicts 1D4 HP
                    damage as sutures rip, broken bones shift, or fever sets in.
                  </Text>
                </Stack>
                <Stack gap="xs">
                  <Title
                    order={5}
                    id="recovering-stat-points"
                    style={{ scrollMarginTop: 80 }}
                    c="dimmed"
                  >
                    Recovering Stat Points
                  </Title>
                  <Text>
                    Unless the Handler says otherwise, temporarily lost stat
                    points are restored at 1 point per day.
                  </Text>
                </Stack>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="sanity">
            <Accordion.Control>Sanity</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Text c="dimmed">
                  For more information, you can read the{" "}
                  <Anchor
                    component={Link}
                    to="/rules/sanity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sanity
                  </Anchor>{" "}
                  section in the Rules.
                </Text>
                <Text>
                  Sanity Points represent the resilience of the relationship
                  between your Agent’s personality and the world.
                </Text>
                <Text>
                  The three major threats to Sanity are violence, helplessness
                  and the Unnatural. These categories can overlap.
                </Text>
                <Text>
                  Agents who lose excessive Sanity lose control of themselves,
                  suffering insanity and mental disorders.
                </Text>
                <Text>
                  It’s possible to resist SAN loss and insanity through
                  adaptation and the strength of Bonds. But suffering a trauma
                  always comes with a cost.
                </Text>
                <Text>
                  Agents can recover their mental health through a few ways.
                </Text>
                <Text>
                  After the mission your Agent can attempt to recuperate with
                  professional help or by focusing on his or her Bonds; the
                  things that give your Agent strength.
                </Text>
                <Text>
                  Destroying an unnatural creature or object known to contain
                  otherworldly power restores an amount of SAN equivalent to the
                  lowest amount that could be lost for encountering it.
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="operations">
            <Accordion.Control>After Operations</Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Grid>
  );
};
