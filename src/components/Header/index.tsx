import { Burger, Container, Group, Image, Text } from "@mantine/core";
import { SearchBar } from "../Navbar/SearchBar";

export const Header: React.FC<{
  desktopOpened: boolean;
  mobileOpened: boolean;
  toggleDesktop: () => void;
  toggleMobile: () => void;
}> = ({ desktopOpened, mobileOpened, toggleDesktop, toggleMobile }) => {
  return (
    <Container size="fluid" h={"100%"}>
      <Group justify="space-between">
        <Group h={60} visibleFrom="sm">
          <Image src="https://i.imgur.com/M6abaUa.png" h="auto" w={45} onClick={toggleDesktop} style={{cursor: 'pointer'}} />
          <Text>Agent Handbook</Text>
        </Group>
        <Group h={60} hiddenFrom="sm">
          <Burger opened={mobileOpened} onClick={toggleMobile} />
          <Text>Agent Handbook</Text>
        </Group>
        <SearchBar />
      </Group>
    </Container>
  );
};
