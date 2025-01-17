import {
  Divider,
  Grid,
  Group,
  List,
  ScrollArea,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconTriangleFilled } from "@tabler/icons-react";

export const Overview = () => {
  const expenseArr = [
    {
      name: "",
      modifier: "",
      timeNormal: "",
      timeAccelerated: "",
      review: "",
      reprecussions: "",
    },
  ];
  return (
    <ScrollArea h={"95vh"}>
      <Grid p="md" id="overview">
        <Grid.Col span={12}>
          <Stack>
            <Title td="underline">Equipment and Services</Title>
            <Text>
              There is a huge selection of gear available to Agents, and while
              not all is useful in Delta Green operations, much will still be
              employed simply because humans tend to fall back on the tools that
              they have at hand.
            </Text>
            <Text>
              These rules don’t track every dollar in an Agent’s pocket. In
              fact, most day-to-day expenses don’t get tracked at all. But if an
              Agent wants an expensive piece of equipment or especially
              difficult assistance, that may require the bureaucratic footwork
              of official requisition, or else risk money the Agent can’t
              afford.
            </Text>
            <Text>
              This system breaks each item down by cost—or the bureaucratic
              difficulty of getting it—into a few broad categories. If an item’s
              expense category isn’t obvious, the Handler decides.
            </Text>
            <List listStyleType="none" spacing={"lg"}>
              <List.Item>
                <Group>
                  <IconTriangleFilled color="green" />
                  Incidental Expense (Up to $150)
                </Group>{" "}
                <Text>
                  Most day-to-day transactions don’t need tracking at all.
                </Text>
              </List.Item>
              <List.Item>
                <Group>
                  <IconTriangleFilled color="blue" />
                  Standard Expense ($200 to $800)
                </Group>
                <Text>These substantial expenses might prove challenging.</Text>
              </List.Item>
              <List.Item>
                <Group>
                  <IconTriangleFilled color="yellow" />
                  Unusual Expense ($1,000 to $5,000)
                </Group>
                <Text>
                  Most Agents can’t afford to make Unusual purchases out of
                  their own pockets without trouble.
                </Text>
              </List.Item>
              <List.Item>
                <Group>
                  <IconTriangleFilled color="orange" />
                  Major Expense ($6,000 to $30,000)
                </Group>
                <Text>
                  This is also the level of expense for exceptional, rare, or
                  big-ticket items.
                </Text>
              </List.Item>
              <List.Item>
                <Group>
                  <IconTriangleFilled color="red" />
                  Extreme Expense ($36,000 and Higher)
                </Group>
                <Text>
                  Beyond that are levels of spending only open to the truly
                  wealthy.
                </Text>
              </List.Item>
            </List>
            <Table withTableBorder striped my="lg">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Expense</Table.Th>
                  <Table.Th>Modifier</Table.Th>
                  <Table.Th>Time (Normal)</Table.Th>
                  <Table.Th>Time (Accelerated)</Table.Th>
                  <Table.Th>Review</Table.Th>
                  <Table.Th>Repercussions for Wrongful Use</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Group>
                      <IconTriangleFilled color="blue" />
                      Standard
                    </Group>
                  </Table.Td>
                  <Table.Td>+0%</Table.Td>
                  <Table.Td>A day or two</Table.Td>
                  <Table.Td>A few hours*</Table.Td>
                  <Table.Td>
                    If restricted; or if accelerated and a CHA*5 test fails
                  </Table.Td>
                  <Table.Td>Reprimand</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Group>
                      <IconTriangleFilled color="yellow" />
                      Unusual
                    </Group>
                  </Table.Td>
                  <Table.Td>+0%</Table.Td>
                  <Table.Td>A few days</Table.Td>
                  <Table.Td>A day or two*</Table.Td>
                  <Table.Td>
                    If restricted; or if accelerated and a CHA*5 test fails
                  </Table.Td>
                  <Table.Td>Reprimand</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Group>
                      <IconTriangleFilled color="orange" />
                      Major
                    </Group>
                  </Table.Td>
                  <Table.Td>-20%</Table.Td>
                  <Table.Td>A few weeks</Table.Td>
                  <Table.Td>A few days**</Table.Td>
                  <Table.Td>Always</Table.Td>
                  <Table.Td>Suspension and/or transfer</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Group>
                      <IconTriangleFilled color="red" />
                      Extreme
                    </Group>
                  </Table.Td>
                  <Table.Td>-40%</Table.Td>
                  <Table.Td>A few months</Table.Td>
                  <Table.Td>A few days**</Table.Td>
                  <Table.Td>Always</Table.Td>
                  <Table.Td>Firing and/or prosecution</Table.Td>
                </Table.Tr>
              </Table.Tbody>
              <Table.Caption ta="start">
                <Text size="sm">
                  * Standard or Unusual delivery can be accelerated by badgering
                  officials.
                </Text>{" "}
                <Text size="sm">
                  ** Major or Extreme delivery can be accelerated for a
                  high-priority operation.
                </Text>
              </Table.Caption>
            </Table>
            <Text>
              Agents can get more gear or aid during an operation through 3
              different ways:
            </Text>
            <Title order={2} td="underline">
              Official Requistion
            </Title>
            <Text>
              Many Delta Green operations take place under the cover of
              official, on-the-books government investigations. That allows for
              requisitioning equipment during an operation. Requisition requires
              a Bureaucracy roll unless the Handler says it’s obvious that the
              Agents can or cannot get what they want.
            </Text>
            <Text>
              It can be risky. An official investigation means oversight and a
              paper trail. In the best-case scenario, the cover investigation
              itself is highly classified, and its details and funding sources
              are beyond the reach of ordinary auditors. But whether that’s the
              case is always up to the Handler. Oversight can lead to questions
              the Agents don’t want to answer.
            </Text>
            <Text>
              Requisitioned equipment is on loan to the Agent. It must be
              returned at the end of the operation.
            </Text>
            <Divider />
            <Title order={2} td="underline">
              Spending Your Own Money
            </Title>
            <Text>
              Most Delta Green Agents are full-time members of federal law
              enforcement, the special forces, or ac- ademia. They’re usually
              not rich. Paying for anything more than Incidental expenses can be
              tricky.
            </Text>
            <Text>
              <Text fw={700}>
                <Group>
                  <IconTriangleFilled color="blue" />
                  Paying for a Standard Expense:
                </Group>
              </Text>
              Make an INT*5 or Accounting test (your choice) to see if your
              Agent has enough free cash or credit available. If your Agent is
              in a wealthy occupation, take a +20% bonus to the test. If it
              fails, the Agent can still make the purchase but must reduce one
              non-Delta Green Bond by 1 from the stress of his or her spending.
            </Text>
            <Text>
              <Text fw={700}>
                <Group>
                  <IconTriangleFilled color="yellow" />
                  Paying for an Unusual Expense:
                </Group>
              </Text>{" "}
              The stress of spending reduces one non-Delta Green Bond by 1. If
              your Agent is in a wealthy occupation, he or she can make an INT*5
              or Accounting test (your choice) to have enough money to avoid the
              Bond damage.
            </Text>
            <Text>
              <Text fw={700}>
                <Group>
                  <IconTriangleFilled color="orange" />
                  Paying for a Major Expense:
                </Group>
              </Text>{" "}
              Your Agent can afford it only by taking on heavy debt. Your Agent
              must make an INT*5 or Accounting test (your choice). If it
              succeeds, the stress reduces each of your Agent’s non-Delta Green
              Bonds by 1. If it fails, it reduces one non-Delta Green Bond of
              the Handler’s choice by 1D4 and the others by 1. An Agent in a
              particularly wealthy occupation gains a +20% bonus to the test.
            </Text>
            <Text>
              <Text fw={700}>
                <Group>
                  <IconTriangleFilled color="red" />
                  Paying for an Extreme Expense:
                </Group>
              </Text>
              Your Agent can’t afford it. If your Agent doesn’t want to let that
              stop him or her, then the stress of going so heavily into debt and
              burning through so much money reduces each of your Agent’s
              non-Delta Green Bonds by 1D4.
            </Text>
            <Title order={3}>Limitations </Title>
            <Text>
              Many assets can be gained only through official requisition, not
              by paying for them out of pocket. Some can be acquired on the
              black market. But no Agent can put tactical support from an FBI
              SWAT team on a credit card.
            </Text>
            <Divider />
            <Title order={2} td="underline">
              Using Illicit Money
            </Title>
            <Text>
              Your Agent may have a stack of cash or disposable debit cards
              provided by Delta Green, stolen in an earlier operation, or
              embezzled from an employer. That allows for one or more Standard
              purchases. Exactly how many is up to the Handler. An Unusual
              purchase counts as five Standard purchases. A Major purchase
              counts as 25 Standard purchases. Illicit cash cannot buy assets
              that could only be gained as part of an official operation.
            </Text>
            <Divider />
            <Title order={2} td="underline">
              Restricted Items
            </Title>
            <Text>
              In the U.S., many weapons are available on the open market with
              negligible licensing. But some equipment is tightly enough
              restrict- ed that it can be requisitioned only with a great deal
              of paperwork and scrutiny, or purchased only after time-consuming
              and expensive registrations and licensing—or by shopping on the
              black market. In the equipment tables, such items are labeled
              RESTRICTED.
            </Text>
            <Text>
              Submachine guns, assault rifles, and automatic rifles that can
              fire on full automatic are restricted. But one can be bought
              legally if it fires only on semi- automatic, and can be converted
              to full automatic with inexpensive tools, an hour or two of work,
              and a Craft (Gunsmithing) roll. Fumbling the roll ruins the
              weapon.
            </Text>
            <Text>
              Certain electronics, particularly advanced encryp- tion programs,
              are also restricted and/or monitored in the U.S.
            </Text>
            <Text>
              Many materials, machinery, and electronics used in the creation of
              explosives are either outright illegal, restricted, or are
              monitored by various government agencies. Obtaining them may
              prompt unwanted inquiries.
            </Text>
            <Title order={3}>The Black Market</Title>
            <Text>
              Practically everything can be had on the black mar- ket, including
              machine guns and explosives. Buying a restricted item on the black
              market requires either a Criminology roll to find a street dealer
              or a Computer Science roll to hide your Agent’s tracks on a Dark
              Web market. If your Agent has extensive contact with spe- cial
              restricted communities, you might have access to a particular kind
              of black market as special training using Criminology or CHA : gun
              clubs and veterans for firearms, for example, or the drug
              industries for restricted medicines. Failure with the skill or
              stat means your Agent can’t get the item without getting caught.
              The cops, the Office of Personnel Management, the FBI, and the ATF
              would all love a crack at federal agents buying illegal goods.
            </Text>
            <Text>
              A fumble means your Agent gets caught trying to make the buy. If
              he or she is caught, the Handler can create the details of the
              ensuing investigation. It may mean police checking into your
              Agent’s mission or a prosecution that might derail your Agent’s
              career.
            </Text>
            <Text>
              Costs on the black market are typically high. Make a Luck roll. If
              it fails, the item is one expense level greater than usual.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </ScrollArea>
  );
};
