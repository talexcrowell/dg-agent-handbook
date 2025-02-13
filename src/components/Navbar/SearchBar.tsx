import {
  Box,
  Breadcrumbs,
  Card,
  Group,
  HoverCard,
  NavLink,
  Popover,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Fuse from "fuse.js";
import { useState } from "react";
import { searchList } from "./SearchList";
import { Link } from "react-router-dom";
import styles from "../../Element.module.css";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = new Fuse(searchList, {
    keys: ["section", "header", "subheader"],
    threshold: 0.45,
  });

  const results = fuse.search(searchTerm);
  console.log(results);

  const transformChaptersSectionsHeaders = (
    chapterString: string,
    sectionString: string,
    headerString?: string,
    subheaderString?: string
  ) => {
    let chapter;
    let section = sectionString.toLowerCase().replace(/ /g, "-");
    let header = headerString?.toLowerCase().replace(/ /g, "-");
    let subheader = subheaderString?.toLowerCase().replace(/ /g, "-");

    switch (chapterString) {
      case "Delta Green":
        chapter = "delta-green";
        break;
      case "Rules":
        chapter = "rules";
        break;
      case "Equipment and Services":
        chapter = "equipment-and=services";
        break;
    }
    return subheaderString
      ? `/${chapter}/${section}#${subheader}`
      : headerString
      ? `/${chapter}/${section}#${header}`
      : `/${chapter}/${section}`;
  };

  return (
    <Popover>
      <Popover.Target>
        <TextInput
          py={3}
          mx={3}
          leftSection={<IconSearch />}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          placeholder='Search'
        />
      </Popover.Target>
      <Popover.Dropdown p="0">
        {results.length > 0 ? (
          <Stack gap="0" px="0">
            <Box p="xs">
              <Group>
                <Text size="xs" c="dimmed" td="italic">
                  Navigate to:{" "}
                </Text>
                <Breadcrumbs>
                  <Text size="xs" c="dimmed">
                    Chapter
                  </Text>
                  <Text size="xs" c="dimmed">
                    Section
                  </Text>
                  <Text size="xs" c="dimmed">
                    Header
                  </Text>
                </Breadcrumbs>
              </Group>
            </Box>
            {results.slice(0, 5).map((result: any) => {
              return (
                <NavLink
                  label={
                    <Breadcrumbs>
                      <Text size="xs">
                        {result.item.chapter.length > 20
                          ? result.item.chapter.slice(0, 20) + "..."
                          : result.item.chapter}
                      </Text>
                      <Text size="xs">
                        {result.item.section.length > 20
                          ? result.item.section.slice(0, 19) + "..."
                          : result.item.section}
                      </Text>
                      {result.item.header && (
                        <Text size="xs">{result.item.header}</Text>
                      )}
                      {result.item.subheader && (
                        <Text size="xs">{result.item.subheader}</Text>
                      )}
                    </Breadcrumbs>
                  }
                  component={Link}
                  to={transformChaptersSectionsHeaders(
                    result.item.chapter,
                    result.item.section,
                    result.item.header,
                    result.item.subheader
                  )}
                  className={styles.hoverElement}
                />
              );
            })}
          </Stack>
        ) : searchTerm.length > 0 ? (
          <Text>No Results Found...</Text>
        ) : (
          ""
        )}
      </Popover.Dropdown>
    </Popover>
  );
};
