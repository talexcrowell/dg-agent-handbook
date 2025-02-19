import {
  Divider,
  Grid,
  Group,
  ScrollArea,
  Stack,
  Table,
  TableOfContents,
  Text,
  Title,
} from "@mantine/core";
import { IconList } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import { GlossaryTerms } from "../../data";

export const Glossary = () => {
  const reinitializeRef = useRef(() => {});

  useEffect(() => {
    reinitializeRef.current();
  }, []);

  return (
    <Grid gutter={"md"}>
      <Grid.Col span={10}>
        <ScrollArea h={"95vh"} w={"auto"} scrollbars="y">
          <Stack id="tradecraft" px="md">
            <Title td="underline">Glossary</Title>
            <Text>
              Every sub-culture develops its own specialized language that
              confuses and confounds outsiders, and the world of
              counterterrorism, intelligence and law enforcement is no
              different. Slang, official terminology, and useful phrases of
              dubious origin have been mixed together for this glossary. In the
              definitions, words in ALL CAPS refer to other terms in this
              glossary.
            </Text>
            <Divider />
            <Title td="underline" order={2}>
              Equipment
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter((term) => term.type === "equipment").map(
                  (term) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{term.name}</Table.Td>
                        <Table.Td>{term.definition}</Table.Td>
                      </Table.Tr>
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Individuals
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter(
                  (term) => term.type === "individuals"
                ).map((term) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{term.name}</Table.Td>
                      <Table.Td>{term.definition}</Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Information and Misinformation
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter(
                  (term) => term.type === "informationAndMisinformation"
                ).map((term) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{term.name}</Table.Td>
                      <Table.Td>{term.definition}</Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Locations
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter((term) => term.type === "locations").map(
                  (term) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{term.name}</Table.Td>
                        <Table.Td>{term.definition}</Table.Td>
                      </Table.Tr>
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Miscellaneous
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter(
                  (term) => term.type === "miscellaneous"
                ).map((term) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{term.name}</Table.Td>
                      <Table.Td>{term.definition}</Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Operations
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter((term) => term.type === "operations").map(
                  (term) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{term.name}</Table.Td>
                        <Table.Td>{term.definition}</Table.Td>
                      </Table.Tr>
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Organziations
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter(
                  (term) => term.type === "organizations"
                ).map((term) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{term.name}</Table.Td>
                      <Table.Td>{term.definition}</Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
            <Title td="underline" order={2}>
              Procedures
            </Title>
            <Table
              withRowBorders
              withColumnBorders
              withTableBorder
              highlightOnHover
              striped
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Term</Table.Th>
                  <Table.Th>Definition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {GlossaryTerms.filter((term) => term.type === "procedures").map(
                  (term) => {
                    return (
                      <Table.Tr>
                        <Table.Td>{term.name}</Table.Td>
                        <Table.Td>{term.definition}</Table.Td>
                      </Table.Tr>
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
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

export default Glossary;
