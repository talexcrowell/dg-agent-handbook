import {
  Button,
  Grid,
  Group,
  Image,
  Input,
  List,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { additionalProfessions, professions } from "../../../data";

export const Bonds: React.FC<{
  handleAgentBonds: (bonds: any) => void;
  userAgent: any;
}> = ({ handleAgentBonds, userAgent }) => {
  const [bonds, setBonds] = useState<any[]>([]);

  useEffect(() => {
    if (userAgent) {
      switch (userAgent.profession) {
        case "Special Operator":
          setBonds([
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
          ]);
          break;
        case "Computer Scientist or Engineer":
        case "Federal Agent":
        case "Physician":
          setBonds([
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
          ]);
          break;
        case "Anthropologist or Historian":
        case "Scientist":
          setBonds([
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
            { name: "", value: userAgent?.stats.charisma },
          ]);
          break;
      }
    }
  }, [userAgent]);

  const handleBond = (val, index) => {
    let newArr = [...bonds];
    newArr[index].name = val.target.value;
    setBonds([...newArr]);
  };
  let bondInputs;
  switch (
    [...professions, ...additionalProfessions].filter(
      (item) => item.name === userAgent.profession
    )[0].bonds
  ) {
    case 2:
      bondInputs = (
        <Stack>
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 0)}
            label="Bond 1"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 1)}
            label="Bond 2"
          />
        </Stack>
      );
      break;
    case 3:
      bondInputs = (
        <Stack>
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 0)}
            label="Bond 1"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 1)}
            label="Bond 2"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 2)}
            label="Bond 3"
          />
        </Stack>
      );
      break;
    case 4:
      bondInputs = (
        <Stack>
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 0)}
            label="Bond 1"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 1)}
            label="Bond 2"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 2)}
            label="Bond 3"
          />
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 3)}
            label="Bond 4"
          />
        </Stack>
      );
      break;
  }
  return (
    <Grid ta="start">
      <Grid.Col span={12}>
        <Stack>
          <Title>Bonds</Title>
          <Text>
            Bonds measure your Agent’s relationships with the vital people in
            his or her life: loved ones, family members and close friends. A
            Bond can protect your Agent from SAN loss or offer a chance to
            repress the effects of a disorder or temporary insanity.
          </Text>
          <Text>
            Bonds are your Agent’s connection to humanity. Your Agent’s
            profession determines how many Bonds your Agent begins with. The
            more trying and time consuming the profession, the fewer Bonds your
            Agent is able to maintain. An Agent with no Bonds is more
            susceptible to psychological trauma than one who has people waiting
            back home.
          </Text>
          <Text>
            Each Bond begins with a score equal to your Agent’s CHA. Bonds’
            scores often deteriorate because of your Agent’s involvement in
            Delta Green. Green. A Bond increases if it is cultivated between
            operations during Home scenes. A Bond can never have a score higher
            than your Agent’s CHA. Any time CHA drops, each Bond drops by the
            same amount.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Stack>
          {bondInputs}
          <Button
            onClick={() => handleAgentBonds(bonds)}
            disabled={bonds.filter((bond) => bond.name === "").length > 0}
          >
            Confirm Bonds
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
