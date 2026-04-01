import {
  Divider,
  Grid,
  Stack,
  Table,
  TableOfContents,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import { GlossaryTerms } from "../../data";
import { useViewportContext } from "../../contexts/ViewportContext";

export const Glossary = () => {
  const reinitializeRef = useRef(() => {});
  return (
    <Grid type="container">
      <Grid.Col span={10}>
        <Stack id="glossary">
          <Title td="underline" style={{ scrollMarginTop: 50 }}>Glossary</Title>
          <Text>
            Every sub-culture develops its own specialized language that
            confuses and confounds outsiders, and the world of counterterrorism,
            intelligence and law enforcement is no different. Slang, official
            terminology, and useful phrases of dubious origin have been mixed
            together for this glossary. In the definitions, words in ALL CAPS
            refer to other terms in this glossary.
          </Text>
          <Divider />
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                },
              )}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
              {GlossaryTerms.filter((term) => term.type === "individuals").map(
                (term) => {
                  return (
                    <Table.Tr>
                      <Table.Td>{term.name}</Table.Td>
                      <Table.Td>{term.definition}</Table.Td>
                    </Table.Tr>
                  );
                },
              )}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                (term) => term.type === "informationAndMisinformation",
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
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                },
              )}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                (term) => term.type === "miscellaneous",
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
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                },
              )}
            </Table.Tbody>
          </Table>
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                (term) => term.type === "organizations",
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
          <Title td="underline" order={2} style={{ scrollMarginTop: 50 }}>
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
                },
              )}
            </Table.Tbody>
          </Table>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack
          maw={200}
          style={{ position: "sticky", top: 55 }}
          justify="space-between"
          gap="0"
        >
          <Stack gap="sm">
            <Text fw={600}>Table of Contents</Text>
            <Divider />
          </Stack>
          <TableOfContents
            variant="light"
            color="blue"
            size="sm"
            radius="0"
            reinitializeRef={reinitializeRef}
            scrollSpyOptions={{
              selector: `#glossary :is(h1, h2, h3, h4, h5, h6)`,
            }}
            getControlProps={({ data }) => ({
              onClick: () =>
                data
                  .getNode()
                  .scrollIntoView({ behavior: "smooth", block: "start" }),
              children: data.value,
            })}
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Glossary;
