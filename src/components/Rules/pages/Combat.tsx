import { Divider, Grid, ScrollArea, Stack, Text, Title } from "@mantine/core";

export const Combat = () => {
  return (
      <Grid p="md" ta="start">
        <Grid.Col span={12}>
          <Stack>
            <Title>Combat</Title>
            <Text>
              A serious fight, where people are trying to kill each other, is
              chaotic, frightening, and fast. That’s what these rules represent.
              Being skilled, having better weapons, or being in a superior
              position helps, but the inescapable randomness of combat can claim
              even the most skilled combatant’s life.
            </Text>
            <Text>
              However, Humanity’s weaponry is as ridiculous to the unnatural
              forces that control the universe as an ant wielding a pebble is to
              the bulldozer razing the field the ant hill stands in. Combat
              rarely resolves any unnatural threat.
            </Text>
            <Divider />
            <Title order={2}>The Turn</Title>
            <Text>
              Combat is measured in turns. A turn is a few seconds, or as long
              as it takes everyone to complete a single action.
            </Text>
            <Text>
              The Handler counts down by DEX for all characters, from highest to
              lowest. Each character acts when his or her number comes up. If
              DEX scores tie, the actions occur at the same time or the Handler
              can choose some tiebreaker.
            </Text>
            <Text>
              During a turn, a combatant can attempt one of the following
              actions:
            </Text>
            <Title order={3}>Aim</Title>
            <Text>
              Sacrifice one turn to aim and gain a +20% to your attack next
              turn. Aiming requires no roll. After the next turn, or if your
              Agent suffers any damage before attempting it, the bonus is lost.
            </Text>
            <Title order={3}>Attack</Title>
            <Text>
              An “attack” encompasses anything from throwing a punch to firing
              an anti-tank rocket. The “standard” attack (ranged or
              hand-to-hand) is a skill test to see if your Agent hits a target,
              damage is inflicted based on the weapon used. Usually it’s
              Firearms for a gun, Athletics for a thrown weapon, Melee Weapons
              for a hand-to-hand weapon, or Unarmed Combat for a punch or kick.
            </Text>
            <Text>
              The number of shots fired in a single firearm attack depends on
              the weapon used—a bolt-action rifle fires one bullet while a
              semi-automatic firearm might fire three quick shots—but it’s
              always a single attack roll and a single damage roll.
            </Text>
            <Title order={3}>Called Shot</Title>
            <Text>
              A called shot is an attack to a particular body part (the head,
              the hand, the leg). A called shot allows your Agent to roll a
              grenade past cover or to shoot someone in the leg in order to
              avoid body armor. If the attack is automatic gunfire that can hit
              multiple targets, the called shot affects only the first target.
            </Text>
            <Text>
              <Text fw={700}>Partly Covered (-20%):</Text> The target is
              partially covered (half the body).
            </Text>
            <Text>
              <Text fw={700}>Mostly Covered (-40%):</Text> The target is mostly
              covered (all but a limb or head).
            </Text>
            <Title order={3}>Disarm</Title>
            <Text>
              An Unarmed Combat roll attempting to make a target drop an object.
              This is possible only if your Agent has both hands free and is in
              hand-to-hand range. Attempting to disarm also means your Agent is
              parrying and blocking.
            </Text>
            <Title order={3}>Dodge</Title>
            <Text>
              A Dodge skill test to get out of the way of an attack (or a disarm
              or pin). This opposed test pits your Agent’s Dodge skill against
              the attack roll. If your roll overcomes the attack roll, your
              Agent avoids harm. If the Handler agrees, an Agent can dodge while
              jogging or running as described in the MOVE action on this page.
            </Text>
            <Title order={3}>Escape</Title>
            <Text>
              Roll either STR×5 or Unarmed Combat, whichever is better, to
              escape being pinned. It’s opposed by the pinning character’s
              attack roll against your Agent. If the pinning character is not
              attacking, the escape is opposed by either Unarmed Combat or STR×5
              (whichever is better). If the escape roll succeeds, your Agent is
              no longer pinned and the escape roll acts as a defense roll
              against all attackers. If it fails, your Agent remains pinned and
              the escape roll does not defend against attacks.
            </Text>
            <Title order={3}>Fight Back</Title>
            <Text>
              If someone attacks your Agent with a melee weapon or unarmed
              combat (not a ranged attack or an explosive), your Agent can fight
              back with Unarmed Combat or Melee Weapons to block and
              counterattack.
            </Text>
            <Title order={3}>Move</Title>
            <Text>
              An action that moves your Agent a significant distance: 10 meters
              jogging, 20 meters running, or 30 meters sprinting (or you can
              move about 3 meters while performing some other action).
            </Text>
            <Text>
              Usually moving requires no roll, but if Agents are running or
              sprinting, players may need to make a DEX×5 test to keep their
              footing. Fail, and your Agent falls prone and must spend a turn
              recovering.
            </Text>
            <Text>
              If there’s cover at the end of your Agent’s movement, getting
              behind it provides protection. This can give your Agent armor
              against firearms and explosives—if the Agent is behind cover when
              the attack happens. That requires a Dodge roll if the attack
              happens in the same turn.
            </Text>
            <Title order={3}>Pin</Title>
            <Text>
              An attempt to immobilize a target, either on the ground or up
              against something, using Unarmed Combat. This is possible only if
              your Agent has both hands free and is in hand-to-hand range and if
              the Handler says it makes sense. If it succeeds, the target is
              pinned.
            </Text>
            <Text>
              All unarmed or melee weapon attacks against a pinned target are at
              a +20% bonus. An Agent pinning a target can attack the pinned
              target in later turns.
            </Text>
            <Text>
              A pinned target can attempt escape once per turn but nothing else.
            </Text>
            <Title order={3}>Wait</Title>
            <Text>
              Agents can choose to wait to take any action after their DEX order
              comes up. At any time before your next turn, you can insert your
              Agent’s action before the next action in DEX order. Your Agent
              can’t wait until another character acts and then jump in before
              it’s resolved, but your Agent can jump in before the other
              character’s turn comes up.
            </Text>
            <Title order={3}>Anything Else</Title>
            <Text>
              Anything that takes a moment’s concentration. The Handler decides
              whether it requires a stat or skill test.
            </Text>
            <Divider />
            <Title order={2}>Attack Rolls</Title>
            <Text>
              An attack is a skill roll which inflicts damage, disarms or pins
              the target, depending on the attacker’s action. An attack roll
              that’s a critical success is a critical hit. A critical hit
              inflicts double damage. An attack roll that fumbles includes a
              complication determined by the Handler.
            </Text>
            <Text>
              Bonuses and penalties in combat apply only in extraordinary
              circumstances. No matter the bonus or penalty, a roll of 01 always
              hits and a roll of 00 (100) always misses.
            </Text>
            <Title order={3}>Surprise Attacks</Title>
            <Text>
              If your Agent is out to kill someone who’s unaware or helpless
              (and nobody is trying to stop you), that’s hardly combat. You may
              not even need to make a roll.
            </Text>
            <Text>
              <Text fw={700}>Target is Helpless (Bound or Asleep)</Text>No roll
              is needed to murder the target in one turn.
            </Text>
            <Text>
              <Text fw={700}>Target is Active but Unaware</Text>Make an attack
              roll at +20%. Any success is a critical hit. If it fails, the
              attack misses.
            </Text>
            <Title order={3}>Shooting into a Crowd</Title>
            <Text>
              Use a called shot to hit a particular target in a crowd with a
              ranged attack. Otherwise a random member of the crowd takes the
              hit.
            </Text>
            <Divider />
            <Title order={2}>Defense Rolls</Title>
            <Text>
              Dodging and hand-to-hand combat (with unarmed or with melee
              weapons) are tests that protect your Agent by opposing an attack
              roll.
            </Text>
            <Title order={3}>Dodging and Fighting Back</Title>
            <Text>
              Your Agent can Dodge or fight back against an incoming attack even
              before your Agent’s DEX order in a turn. If you do this, it
              becomes your Agent’s single action for that turn. An Agent who has
              already taken another action that turn can’t Dodge or fight back
              until the next turn.
            </Text>
            <Text>
              A roll to Dodge opposes all hand-to-hand attacks that turn. It
              lets your Agent duck behind cover to evade all ranged attacks that
              turn if cover is near. Dodging never inflicts damage.
            </Text>
            <Text>
              Fighting back opposes all hand-to-hand attacks that turn. If you
              win the contest, you take no damage. It does not protect you
              against ranged attacks unless you’re close enough to push the
              ranged weapon away. As part of your fighting back roll, choose one
              offensive action—attack, called shot, disarm, or pin— against a
              single attacker. If your roll beats that attacker’s roll, your
              Agent takes no damage and your Agent’s action affects the attacker
              instead.
            </Text>
            <Text>
              In order to Dodge or fight back, your Agent must know an attack is
              coming and be physically able to block or evade it. If your Agent
              is pinned, if the attack occurs before he or she realizes it, or
              if your Agent can’t see or hear the attacker, your Agent can’t
              Dodge or fight back.
            </Text>
            <Title order={3}>Dodging Ranged Attacks</Title>
            <Text>
              An ordinary Dodge roll can avoid an arrow or a thrown weapon.
              Nobody can react as fast as bullets and shrapnel, but your Agent
              can use Dodge to scramble for cover. If your Agent is near enough
              to move to cover and knows gunfire or an explosion is imminent,
              make a Dodge roll for the Agent to get behind the cover. If
              there’s no cover, Dodging does no good. This is why people get
              nervous when guns come out.
            </Text>
            <Title order={3}>Defending After Attacking</Title>
            <Text>
              When your turn comes up, declare your Agent’s action—attack,
              called shot, disarm, or pin—and make the roll. Your Agent can
              harm, disarm or pin only one target a turn (the attack might hurt
              others, but all attacks have a single target).
            </Text>
            <Text>
              A roll to attack, disarm, pin, or make a called shot also opposes
              each Unarmed Combat and Melee Weapons attack against your Agent
              until your Agent’s next action. If an attack fails to overcome
              your roll, it does no harm.
            </Text>
            <Text>
              To oppose an attack, your Agent must know the attack is coming.
              That requires seeing or hearing the attacker. The Agent must also
              be physically able to block the Attack, if it is melee. A pinned
              Agent can’t defend, nor can an Agent who has already successfully
              pinned a target.
            </Text>
            <Text>
              An attack roll with a ranged weapon does not oppose attack rolls
              against your Agent.
            </Text>
            <Divider />
            <Title order={2}>Damage</Title>
            <Text>
              Each weapon or attack has a damage rating measured in dice. When
              an attack hits, roll the weapon’s damage dice and subtract the
              result from the target’s Hit Points.
            </Text>
            <Text>
              <Text fw={700}>Damage Bonus:</Text> High or low Strength modifies
              the damage of hand-to-hand attacks, to a minimum of 0
            </Text>
            <Text>
              <Text fw={700}>Stun:</Text> While stunned, your Agent can’t act.
              When it’s your Agent’s turn, you may attempt a CON×5 test to
              recover and act normally next turn. If any single attack inflicts
              half of your Agent’s current HP, the Agent is stunned.
            </Text>
            <Text>
              <Text fw={700}>Unconsciousness:</Text> If your Agent is reduced to
              2 or fewer HP, he or she falls unconscious. An unconscious Agent
              is helpless and can be killed with a single attack without having
              to roll. At 3 HP or more (or after an hour passes), the Agent
              regains consciousness.
            </Text>
            <Text>
              <Text fw={700}>Permanent Injury:</Text> Any time your Agent is
              reduced to 2 or fewer HP, make a CON×5 test. Failure indicates
              permanent injury. The Handler selects a stat to be permanently
              reduced by the number on the lowest ten-sided die of the failed
              CON×5 roll, to a minimum score of 3. If STR or CON drop, adjust HP
              accordingly.
            </Text>
            <Text>
              <Text fw={700}>Death:</Text> If an attack brings your Agent to 0
              HP, he or she is dead. HP do not go below 0.
            </Text>
            <Title order={3}>Healing</Title>
            <Text>There are four types of healing:</Text>
            <Text>
              <Text fw={700}>Resuscitation:</Text> If the Handler says
              resuscitation is possible, someone must make a First Aid test.
              This must occur within a number of minutes after death equal to
              the victim’s CON score. If it succeeds, it restores 1D4 HP
              (doubled for a critical success) and allows the patient to
              recover. If First Aid fails, the victim dies and may not be
              resuscitated.
            </Text>
            <Text>
              <Text fw={700}>Stabilization:</Text> Stabilizing a wounded
              character with a successful First Aid test immediately heals 1D4
              HP. A critical success doubles the amount healed; a fumble
              inflicts 1D4 damage. Once your Agent receives first aid, success
              or failure, the Agent can’t benefit from it again until he or she
              suffers damage again.
            </Text>
            <Text>
              <Text fw={700}>Treatment:</Text> Treatment is medical care in a
              hospital or aid station with extensive tools and medicines. A
              doctor can attempt a Surgery or Medicine test once per week:
              Surgery for critical care of severe wounds; Medicine for poison,
              disease, and ongoing healing. If treatment succeeds, the patient
              recovers 1D4 HP. This is doubled with a critical, while a fumble
              inflicts 1D4 HP damage. At the Handler’s discretion, having less
              extensive tools and medicines may incur a penalty.
            </Text>
            <Text>
              <Text fw={700}>Recuperation:</Text> Over time, the human body
              repairs itself. A patient who rests in a safe place with proper
              food and water can attempt a CON×5 test once per day to recover 1
              HP (in addition to any HP recovered due to medical treatment). On
              a critical success, the patient regains 1D4; on a fumble, the
              patient loses 1 HP.
            </Text>
            <Title order={3}>Complications</Title>
            <Text>
              After treatment in a hospital or aid station, and until the
              patient heals all lost Hit Points, undertaking strenuous activity
              (any physical stat or skill test) inflicts 1D4 HP damage as
              sutures rip, broken bones shift, or fever sets in.
            </Text>
            <Title order={3}>Recovering Stat Points</Title>
            <Text>
              Unless the Handler says otherwise, temporarily lost stat points
              are restored at 1 point per day.
            </Text>
            <Divider />
            <Title order={2}>Lethality Rating</Title>
            <Text>
              If your agent hits with a weapon that has a Lethality rating,
              there’s a chance it simply kills the target outright. Instead of
              rolling normal damage, roll percentile dice against the weapon’s
              Lethality rating. If the Lethality test succeeds, a human target
              immediately drops to 0 HP. If the Lethality test fails, add the
              two dice together as if they were individual D10s (0 is 10) and
              apply that as HP damage.
            </Text>
            <Text>
              Lethality rolls do not fumble or critically succeed, but the
              attack roll can. If the attack roll is a critical success, double
              the Lethality rating, and double the HP damage if the Lethality
              roll fails.
            </Text>
            <Title order={3}>Kill Radius</Title>
            <Text>
              If a weapon has a Kill Radius, a successful attack inflicts a
              Lethality roll on each character in that radius. The center of the
              Kill Radius is the initial target of the attack.
            </Text>
            <Text>
              A failed attack roll means the Kill Radius lands harmlessly
              outside the intended area. The attack does no harm but it may
              still suppress targets. Whether a failed Kill Radius attack does
              unwanted collateral damage is up to the Handler.
            </Text>
            <Text>
              <Text fw={700}>Blast Zone Bonus:</Text> With explosive weapons,
              Kill Radius attacks don’t need to be as precise as ordinary
              attacks; hitting a zone within the Kill Radius of a target is
              enough. That adds +20% to the chance to hit.
            </Text>
            <Text>
              <Text fw={700}>Many Targets:</Text> An attack with a Kill Radius
              usually affects everyone in the Kill Radius. If that makes no
              sense for the attack, the Handler can decide who gets hit or allow
              Luck rolls for escaping harm.
            </Text>
            <Text>
              The Handler is welcome to let players roll the Lethality results
              for NPCs to speed things up. But really, you need to roll
              Lethality only for characters who are important enough to track in
              detail. Since even a failed Lethality roll inflicts between 2 and
              20 damage, it’s safe to just assume that most humans caught in a
              Kill Radius are either dead or incapacitated.
            </Text>
            <Title order={3}>Suppression</Title>
            <Text>
              Any time your Agent knows that he or she is inside an intended
              Kill Radius, even if the attack roll misses, your Agent’s
              fear-riddled nervous system forces him or her to go to ground.
              Your Agent must either find cover or go prone as his or her next
              action. Your Agent can stifle his or her terror and act normally
              at a cost of 1 SAN.
            </Text>
            <Text>
              In a firefight, often targets don’t realize they’re under attack.
              When in doubt, call for an Alertness test. An unaware target isn’t
              subject to suppression.
            </Text>
            <Text>
              A character adapted to violence loses no SAN for braving
              suppressing fire. For NPCs, it’s easiest to assume the average
              human goes to ground when suppressed. Only insane, hardened, or
              fanatical enemies stand up in the face of fire.
            </Text>
            <Title order={3}>Selective Fire</Title>
            <Text>
              Some small arms, like submachine guns and assault rifles, have
              selective fire. The shooter chooses how it’s used; each pull of
              the trigger can fire a single shot, a short burst, a long burst, a
              short spray, or a long spray. A weapon set for single shots
              attacks normally. A burst or a spray has a Lethality rating.
            </Text>
            <Text>
              A short burst fires three bullets in one trigger pull. It affects
              a single target. A long burst fires five shots with a Kill Radius
              of 1 meter. Short and long sprays empty the magazine faster but
              cover a larger Kill Radius. Some firearms allow only single shots
              or short bursts.
            </Text>
            <Title order={3}>Blowing Things Up</Title>
            <Text>
              If your Agent wants to disable or destroy a vehicle or hardware, a
              heavy weapon with a Lethality rating is the way to do it. Small
              arms can do this, but it takes longer. Large objects have Hit
              Points as described in the Equipment section and they are
              considered huge targets.
            </Text>
            <Divider />
            <Title order={2}>Protection in Combat</Title>
            <Text>
              There are five stages of protection, categories that determine how
              easy an Agent or other creature is to harm, regardless of their
              ability to get out of the way.
            </Text>
            <Title order={3}>Fragile</Title>
            <Text>
              Fragile targets drop to 0 HP instantly if they suffer any damage
              from a deliberate attempt to injure them. A helpless human is
              Fragile and may, at the Handler’s discretion, be reduced to 0 HP
              with one attack without bothering to roll damage.
            </Text>
            <Title order={3}>Exposed</Title>
            <Text>
              Exposed is the default for humans and many creatures. It means the
              target is aware of danger and trying to avoid it, but doesn’t have
              any real protection. Attacks operate normally against Exposed
              targets.
            </Text>
            <Title order={3}>Armored</Title>
            <Text>
              Being Armored reduces the damage of attacks. Armor has an Armor
              rating which reduces the HP damage of attacks. Armor 5 means
              reduce damage by 5.
            </Text>
            <Text>
              Armor comes in two forms: body armor and cover. They both reduce
              the damage of ordinary attacks, but have different effects on
              Lethality attacks. If you have more than one source of armor (such
              as wearing body armor while behind a wall), add them all together.
            </Text>
            <Text>
              <Text fw={700}>Body Armor:</Text> Body armor reduces the damage of
              an ordinary attack by its Armor Rating. Body armor protects
              against the damage of a failed Lethality roll, but does nothing
              whatsoever against a successful Lethality roll.
            </Text>
            <Text>
              <Text fw={700}>Cover:</Text> Finding cover means using a hard bar-
              rier as armor against attack. Cover protects more completely than
              body armor. If you have cover against a Lethality attack, the
              Lethality roll automatically fails, but still inflicts the sum of
              the dice as damage. Subtract the cover’s Armor rating from that
              damage. What if your Agents are completely enclosed in a structure
              or vehicle? That’s definitely cover, but it’s the Handler’s call.
              Maybe they take damage reduced by the cover, or maybe they take no
              damage until the cover is breached.
            </Text>
            <Title order={3}>Huge</Title>
            <Text>
              A huge target loses Hit Points from ordinary weapon damage as
              usual. But Lethality ratings don’t affect huge creatures in the
              same way they do a human sized target. Instead, the Lethality
              attack does flat HP damage equal to the Lethality rating.
            </Text>
            <Title order={3}>Transcendent</Title>
            <Text>
              Transcendent entities are immune to physical damage. This might
              mean they exist partly in dimensions we barely perceive, or are so
              organized that mere excesses of force and matter cannot harm them.
            </Text>
            <Text>
              Nothing of this Earth is Transcendent. Only through the use of
              unnatural techniques, under extremely dangerous and limited
              situations, can humans become Transcendent.
            </Text>
            <Title order={3}>Armor Piercing Weapons</Title>
            <Text>
              An armor piercing weapon reduces the Armor value of a target by 5
              points. Heavy armor-piercing weapons reduce armor by 10 points or
              more. An explosive weapon’s armor-piercing rating applies to its
              specific target, not to victims in its Kill Radius.
            </Text>
            <Divider />
            <Title order={2}>Other Threats</Title>
            <Title order={3}>Poison and Disease</Title>
            <Text>
              Every poison or disease has two ratings: Speed and Damage.
            </Text>
            <Text>
              Speed indicates how soon the poison or disease inflicts damage. A
              poison inflicts damage once and then passes from your Agent’s
              system. A disease requires a series of CON tests to resist damage.
            </Text>
            <Text>
              Damage is ordinary HP for a disease, while poisons have Lethality
              ratings.
            </Text>
            <Text>
              <Text fw={700}>Poisons:</Text> A poison has a Lethality rating. If
              the Lethality roll fails, the victim makes a CON×5 test to
              withstand harm. Success means half damage, and a critical success
              means the victim loses only 1 HP. A fumble doubles the damage.
              Hospitalization grants +20% to the victim’s CON test.
            </Text>
            <Text>
              <Text fw={700}>Diseases:</Text> Diseases inflict HP damage. If
              your Agent succeeds at a CON×5 test, he or she suffers half damage
              and recovers from the disease, or no damage with a critical
              success. On a failure, he or she suffers full damage and must make
              the CON×5 test again after another Speed interval. A fumbled CON
              test doubles the damage. While under the effects of a disease, the
              Agent cannot gain Hit Points back. Hospital- ization grants a +20%
              bonus to the CON test.
            </Text>
            <Text>
              Serious diseases may come with a penalty to the CON test. A
              persistent disease—such as HIV/AIDS—means succeeding at the CON
              test only buys time; the disease subsides and your Agent recovers
              lost HP. But every time the Agent is badly hurt (losing more than
              half his or her HP) or suffers from some other poison or disease,
              the Agent must make a CON×5 test to resist a resurgence.
            </Text>
            <Text>
              <Text fw={700}>Antidotes:</Text> Many poisons and diseases can be
              cured with medication. If a physician has the antidote for a
              poison or the right antibiotics for a disease, a Medicine or
              Pharmacy test before the ailment takes effect renders the poison
              or disease harmless. An antidote given after the ailment takes
              effect halves the Lethality rating and the HP damage.
            </Text>
            <Title order={3}>Falling</Title>
            <Text>
              Falling is extremely dangerous to humans. Even a bad slip can be
              lethal. A fall from a short distance (one to three meters) does
              1D6 damage, or 2D6 if it’s a partic- ularly uncontrolled fall.
              Beyond that, a fall instead has a Lethality rating of 1% per meter
              fallen. An agent who survives a fall must make a CON×5 test or be
              stunned.
            </Text>
            <Title order={3}>Impact</Title>
            <Text>
              Slamming into a barrier can be deadly. It has a Lethality rating
              of 10% for every 40 kph (25 mph) of speed. Double the Lethality
              rating if your Agent slams into a wall and there’s nowhere to
              tumble. An Agent who survives an impact must make a CON×5 test or
              be stunned.
            </Text>
            <Title order={3}>Suffocation</Title>
            <Text>
              Suffocation is a slow death. If your Agent takes a deep breath
              before holding it, he or she can go without breathing for CON×5
              turns. After that, your Agent’s oxygen-starved brain begins to
              die. Once every turn, make a CON×5 test. If it fails, your Agent
              suffers 1D6 HP damage. If the CON test succeeds, your Agent
              suffers 1 HP damage instead. This continues until your Agent can
              breathe again or he or she dies.
            </Text>
            <Text>
              If your Agent doesn’t get a breath before suffocating, the damage
              starts immediately and lasts until someone clears his or her
              airway with a First Aid test.
            </Text>
            <Title order={3}>Fire</Title>
            <Text>
              Fire damage suffered depends on the flame’s intensity. The victim
              suffers a damage roll every turn of exposure.
            </Text>
            <Text>
              After taking damage from any moderate, large or major source of
              fire, the victim must make a DEX×5 test or catch fire, suffering
              half damage each turn until extinguished. Being surrounded by a
              raging fire also causes suffocation as the fire consumes oxygen.
            </Text>
            <Title order={3}>Cold</Title>
            <Text>
              Agents can last for CON in minutes exposed to freezing
              temperatures unprepared, or CON×5 minutes if partially prepared.
              Fully prepared and well equipped (decked out for an Arctic
              expedition, for example) Agents can last CON hours.
            </Text>
            <Text>
              After this, their bodies start to fail. Players must make a CON×5
              test every five minutes. Each failure reduces CON by 1. When an
              Agent’s CON hits 1, the Agent can no longer move and suffers 1D8
              HP cold damage every five minutes.
            </Text>
            <Text>
              Exposure to warmth and shelter restores 1 point of CON per minute.
              Hit Points heal normally.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
  );
};
