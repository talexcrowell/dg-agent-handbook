import {
  Divider,
  Flex,
  Grid,
  Group,
  List,
  ScrollArea,
  Stack,
  TableOfContents,
  Text,
  Title,
} from "@mantine/core";
import { IconList } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export const Tradecraft = () => {
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    reinitializeRef.current();
  }, []);

  return (
    <Grid gutter={"md"}>
      <Grid.Col span={10}>
        <ScrollArea h={"95vh"} w={"auto"} scrollbars="y">
          <Stack id="tradecraft" px="md">
            <Title td="underline">Tradecraft</Title>
            <Text>
              Usually in a Delta Green operation, Agents must maintain a cover
              story to explain their presence, gather information about the
              unnatural threat they face, and obscure evidence of the operation
              so nobody else has to be exposed. The Handler decides which skill
              is required when one of those tasks requires playing out in
              detail. And the Handler decides if a task is being opposed by
              suspects or by investigators who think the Agents are up to no
              good.
            </Text>
            <Divider />
            <Title td="underline" order={2}>
              Going Unnoticed
            </Title>
            <Text>
              Delta Green operations require secrecy. Agents blend in with their
              environment, drawing no attention while they save others from the
              unnatural.
            </Text>
            <Text>
              Use the Law skill to come up with a pretext or cover story for the
              team’s investigation, such as some federal law that may have been
              violated to allow FBI jurisdiction.
            </Text>
            <Text>
              Use the Bureaucracy skill to arrange a task force and budget for
              the “cover” investigation.
            </Text>
            <Text>
              Use Charisma or the Persuade skill to convince local police or
              another agency to supply manpower, vehicles, equipment, or other
              resources.
            </Text>
            <Text>
              Use the Law skill to secure a prosecution or some other result to
              justify the creation of a task force and use of official
              resources.
            </Text>
            <Text>
              Use Criminology, Accounting, Law, or Forensics to falsify evidence
              in pursuit of a prosecution.
            </Text>
            <Text>
              Use the Bureaucracy skill to avoid taking the blame when the
              “cover” investigation doesn’t get enough results to keep
              headquarters happy—or when an operation gets police or bystanders
              killed.
            </Text>
            <Text>
              Use the Bureaucracy skill to create a false identity (a cover)
              with an invented background (a legend) deep enough to withstand
              superficial scrutiny.
            </Text>
            <Text>
              Use the HUMINT skill to spend months creating a false online
              history to back up a cover. Spending only weeks or days incurs a
              penalty unless you use Computer Science to back-date posts.
            </Text>
            <Text>
              Use the Art (Forgery) skill to falsify papers and signatures.
              Those won’t stand up to even superficial investigation, so be
              careful with them.
            </Text>
            <Text>
              Use the HUMINT skill to predict when an investigator, witness, or
              suspect is likely to look into the team’s credentials and
              jurisdiction. That may offer a chance to talk them out of it or
              take other steps.
            </Text>
            <Text>
              Use the Persuade skill to convince an unwilling investigator,
              witness, or suspect to cooperate, or to allay suspicions.
            </Text>
            <Text>
              Use the Stealth skill to avoid surveillance or sentries, or to
              literally blend into a crowd.
            </Text>
            <Text>
              Use the Forensics skill to thoroughly clean a crime scene of
              evidence. Making it look like it hasn’t been cleaned may require
              multiple skill rolls.
            </Text>
            <Title td="underline" order={2}>
              Surveillance
            </Title>
            <Text>
              A Delta Green operation is not a criminal prosecution. It doesn’t
              require evidence that can stand in court. But it does require
              accuracy and precision for agents not to take the wrong actions.
            </Text>
            <Text>
              Use the Stealth skill to plant microphones or cameras that only
              the Search skill can find.
            </Text>
            <Text>
              Use the Stealth skill to follow someone without being detected. If
              you’re in a car, use either Stealth or Drive, whichever is lower.
            </Text>
            <Text>
              Use an IMSI catcher with the SIGINT skill or special training
              (with INT) to track and eavesdrop on nearby cellphones.
            </Text>
            <Text>
              Use the Computer Science skill to plant a program or device to
              intercept email or text messages. It may be possible to plant such
              a program remotely, if the target has exceptionally sloppy
              communications security or if you pay hackers for access to a
              backdoor virus or trojan horse already on the system. Most
              government computers require physical access, perhaps requiring
              the Persuade skill to talk your way in. Devices to capture and
              process the intercepts may require the SIGINT skill.
            </Text>
            <Text>
              Use Law or Persuade to get an unwilling store clerk to show
              security video of a recent purchase.
            </Text>

            <Title td="underline" order={2}>
              Pursuit
            </Title>
            <Text>
              The biggest danger with pursuit of a subject—other than the risk
              of getting hurt—is exposure. Agents who run after a cultist on the
              sidewalk or drive after one at high speed on the street will soon
              have police and news helicopters on their tail, and camera phones
              recording from every corner. Exposure means more potential victims
              to protect from the unnatural.
            </Text>
            <Title td="underline" order={2}>
              Breaking & Entering
            </Title>

            <Text>
              Use the Stealth skill to sneak into a location that’s under
              observation by guards or cameras. Use the Athletics skill to climb
              a wall when you can’t use the elevator or stairs.
            </Text>
            <Text>
              Use special training with lockpicks or special training with
              security systems if you don’t have a key; especially hard systems
              can be rewired with Craft (Electrician).
            </Text>
            <Text>
              Use the Forensics skill to obscure toolmarks so someone examining
              the scene with Forensics doesn’t deduce what you did.
            </Text>
            <Title td="underline" order={2}>
              Search & Arrest
            </Title>
            <Text>
              Many Delta Green agents are law-enforcement officers with the
              power to arrest and detain suspects and to obtain search warrants
              from courts. And often an operation has the pretext of a criminal
              case. Sometimes placing a suspect or witness under arrest can be
              useful, even if prosecution for a crime is not the ultimate goal.
              And often the authority of a warrant is the easiest way to get
              into a site and look around.
            </Text>
            <Text>
              Use the Law skill to come up with a convincing pretext for making
              an arrest if one isn’t obvious, or to convince a judge that
              there’s enough reason to suspect criminal activity to justify a
              search warrant.
            </Text>
            <Text>
              But never forget the risk of blowback. Placing someone under
              arrest or executing a search warrant is a use of government
              authority to restrict the rights of individuals. It means scrutiny
              by officials higher up than the Agents, and it means the risk of
              lawsuits if the search or arrest does not lead to prosecution.
            </Text>
            <Title td="underline" order={2}>
              Interrogation
            </Title>
            <Text>
              Interrogation is a lengthy process of interviews and fact-checking
              that requires building a rapport with an unwilling subject.
              Threats and browbeating may have their place, but they mainly work
              when one interrogator uses them to make a subject more receptive
              to the primary interrogator’s more sympathetic approach.
            </Text>
            <Text>
              Interrogation uses the Persuade skill. Each attempt typically
              takes a few hours. Success convinces the subject to provide
              important information. The subject may roll Persuade to oppose it
              at the cost of 1D6 WP. A subject who runs out of WP cannot resist
              interrogation.
            </Text>
            <Title order={3}>Torture</Title>
            <Text>
              Inflicting pain on the subject costs 0/1D8 SAN for the victim and
              for the torturer and does 1D4 damage to the victim. Torture adds
              +20% to the interrogator’s Persuade and incurs a −20% penalty to
              the victim’s roll to resist.
            </Text>
            <Text>
              Less violent “enhanced interrogation” relies on panic or
              humiliation rather than physical harm. Such a technique costs
              0/1D4 SAN for victim and interrogator. It adds +20% to the
              interrogator’s Persuade.
            </Text>
            <Text>
              Pain and panic often leave victims unable to discern the truth
              from whatever lie they must tell to make it stop. The Handler
              always gets the final word on whether this yields information
              worth having.
            </Text>
            <Title order={3}>“Truth” Drugs</Title>
            <Text>
              No known drug can induce someone to tell the truth, but drugs can
              relax inhibitions, cause delusions and forgetfulness, ease pain,
              and cause pain. Using Pharmacy to administer a powerful drug
              incurs a −20% penalty to the victim’s rolls to resist
              interrogation, but there’s always a chance that drug-induced
              confusion makes the information useless. That’s up to the Handler.
              Lacking the Pharmacy skill, or failing the roll if one is
              required, means the drugs act as as a poison with a Lethality
              rating of 5%.
            </Text>
            <Text>
              Getting a subject drunk has the same effect but does not require
              Pharmacy. Instead, the victim gets a CON test to withstand the
              alcohol.
            </Text>
            <Title td="underline" order={2}>
              Human Assets
            </Title>
            <Text>
              When surveillance is not feasible, detectives and intelligence
              officers must cultivate human sources. Human assets work for many
              reasons: spite, revenge, humanitarianism, alienation, and best of
              all (because it’s more predictable), greed. Use the HUMINT skill
              to study a prospective asset and determine what approach is likely
              to secure his or her cooperation. Use the Persuade skill to talk
              the asset into taking a risk. If your Agent has a budget that
              allows for a Major expense to offer the asset, add +20% to the
              roll.
            </Text>
            <Title td="underline" order={2}>
              Medical Treatment
            </Title>
            <Text>
              Delta Green agents who get hurt usually want to avoid hospitals.
              Going to a hospital means the best possible care but it also means
              questions and paper-work that can blow a covert operation wide
              open. Agents who wind up in a hospital may need to use the Law
              skill to come up with a pretext for the emergency that will point
              the police and their own agencies in the wrong direction,
              Bureaucracy skill to reduce red tape, or the Persuade skill to
              convince hospital staff to keep things quiet.
            </Text>
            <Text>
              Agents who provide their own medical expertise can follow the
              guidelines from Breaking & Entering to break into a veterinarian’s
              office, dentist’s office, or walk-in clinic to use the Medicine,
              Pharmacy, or Surgery skill in a crisis.
            </Text>
            <Text>
              Use the Criminology skill to quietly ask around until you find a
              doctor or veterinarian willing to illegally provide off-the-books
              medical care. That’s a Standard expense for first aid or an
              Unusual expense for surgery (or a Major expense if the patient is
              dying). Cash only, up front.
            </Text>
            <Title td="underline" order={2}>
              Evidence-Tampering
            </Title>
            <Text>
              Delta Green, at its core, is about protecting the American public
              from the unnatural. If clues pointing to the unnatural wind up in
              an evidence bag, use the Stealth skill to intercept it before it
              leaves the scene. If it’s already in an evidence locker, things
              become more complicated. That may require the Bureaucracy or Law
              skill to justify getting access, and the Forensics skill to
              falsify the chain of custody so it doesn’t widen it into a hunt
              for corruption. To alter a case file with-out arousing suspicion,
              use Accounting, Bureaucracy, Computer Science, or Law.
            </Text>
            <Title td="underline" order={2}>
              Disposing of a Body
            </Title>
            <Text>
              Delta Green operations seem to always leave bodies behind. Often
              it’s better to get rid of one than to try explaining it to the
              authorities.
            </Text>
            <Text>
              In a pinch, remove the head. If investigators are looking for a
              missing person that might match the body, the lack of a head (and
              therefore dental records) delays the identification by 24 to 48
              hours. If the investigators find the body but have no idea who it
              belongs to, it may never be identified unless the finger- prints
              are on record.
            </Text>
            <Text>
              Carving a corpse into manageable chunks to be wrapped in plastic
              and buried in dispersed, uninhabited areas, or to be left exposed
              for scavenging animals, costs 1/1D6 SAN due to violence. Leaving
              no traces behind requires the Forensics skill.
            </Text>
            <Text>
              Dissolving a corpse in a polypropylene barrel filled with acid
              requires three DEX×5 or Science (Chemistry) rolls, whichever is
              better. Each failure inflicts 1D4 damage from an acid splash or
              fumes. The gruesome process costs 1/1D6+1 SAN due to violence. The
              supplies are an Unusual expense. The container must be disposed of
              safely. Transfer into a steel drum for deep burial someplace
              remote is best.
            </Text>
            <Text>
              Dissolving a body in quicklime requires a Forensics roll to make
              sure it’s thorough enough to leave no traces behind.
            </Text>
            <Text>
              Burning a corpse to ash in an industrial incinerator or a
              crematorium requires 1D6 hours and a Forensics roll to clean it of
              suspicious traces afterward. Getting access usually requires
              breaking and entering or else a Persuade roll and a stiff bribe
              (typically a Major expense).
            </Text>
            <Text>
              Melting a body into liquid metal in an industrial crucible
              requires Craft (Metalworking) or Heavy Machinery for safe
              operation (otherwise a white-hot metal splash may cause 1D6+2
              damage). Getting access without arousing suspicion usually
              requires breaking and entering or else a Persuade roll and a stiff
              bribe (typically a Major expense).
            </Text>
            <Text>
              Dumping a body in a deep lake or swamp, where the still waters
              will leave it to deteriorate in peace, requires perforating it to
              prevent bloating and floating, which costs 1/1D4 SAN due to
              violence. A body discarded at sea is very likely to wash ashore
              unless secured in a vacuum-sealed and very heavy metal container
              and dumped more than 20 miles off shore. A Forensics roll is
              needed to remove all traces.
            </Text>
            <Title td="underline" order={2}>
              Communications
            </Title>
            <Text>
              Delta Green agents are under constant surveillance just like the
              rest of us. They must engage in communications security to keep
              their operations secret—and protect potential eavesdroppers from
              exposure to the unnatural. Here are some best practices.
            </Text>
            <Text>
              <Text fw={700}>Think Like a Criminal</Text> Assume someone is
              always listening to you, especially on the phone. Never give
              sensitive details over the phone (digital or analog), text, email,
              anything that could be intercepted between you and the recipient.
              You must talk in code without sounding like you’re talking in
              code. Be vague and innocuous. Rely on innuendo, context, and
              inside knowledge to fill in the blanks.
            </Text>
            <Text>
              <Text fw={700}>Never Trust Cryptography</Text> You may be tempt-
              ed to give sensitive details over a digital medium out of
              confidence that nobody can ever break your crypto. There are
              skyscraper-size NSA processors in the desert that argue otherwise.
            </Text>
            <Text>
              <Text fw={700}>
                Use Old-Fashioned Brush Passes and Dead Drops
              </Text>{" "}
              If you absolutely must provide written information, hand it over
              without arousing anyone’s interest, let alone suspicion. This may
              require the Stealth skill to do it without detection, so don’t try
              it if you don’t know what you’re doing.
            </Text>
            <Text>
              <Text fw={700}>Meet in Person, Someplace Secure</Text> Where can
              you talk about operational details and make plans? In person, face
              to face with only the people you know are cleared for it,
              someplace where you can confirm no one is listening. In the field
              this means meeting in places that are unpredictable, just in case
              you’re under investigation and don’t yet know it. And it means
              ditching all digital devices that have microphones and
              location-tracking.
            </Text>
            <Title td="underline" order={2}>
              Safe Houses and Green Boxes
            </Title>
            <Text>
              Intelligence and law-enforcement agencies have a long history of
              using safe houses where operatives can work or lie low without
              attracting attention. A rural safe house is usually better than
              one in the city or suburbs, because it’s easier to watch the
              approaches and less likely to see visitors. A safe house that’s
              owned is better than one that’s rented, because no team wants a
              landlord or super-intendent to come knocking. A safe house with a
              crawl space and plenty of room between walls and in the attic is
              good for concealing contraband and weapons.
            </Text>
            <Text>
              Some Delta Green operatives have used “Green Boxes,” storage
              lockers prepaid for months or years where weapons and artifacts
              can be stashed that the team doesn’t want to destroy. A Green Box
              has the advantage that people opening it up at random times
              doesn’t raise much attention. But it’s on property owned by
              someone else, so anything suspicious is likely to get the Green
              Box inspected by strangers or police. It’s smartest to use a Green
              Box only as a contingency while the team finds a more secure
              solution.
            </Text>
          </Stack>
        </ScrollArea>
      </Grid.Col>
      <Grid.Col span={2}>
        <ScrollArea h={"85vh"}>
          <Group pb="sm">
            <IconList />
            <Text>Table of Contents</Text>
          </Group>
          <Divider />
          <TableOfContents
            variant="none"
            color="blue"
            size="sm"
            radius="sm"
            reinitializeRef={reinitializeRef}
            scrollSpyOptions={{
              selector: `#tradecraft :is(h2, h3, h4, h5, h6)`,
            }}
            getControlProps={({ data }) => ({
              onClick: () => data.getNode().scrollIntoView(),
              children: data.value,
            })}
          />
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Tradecraft;
