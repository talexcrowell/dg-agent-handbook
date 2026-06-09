import {
  Anchor,
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
import { useViewportContext } from "../../../contexts/ViewportContext";
import { Link } from "react-router-dom";

export const Bonds: React.FC<{
  handleAgentBonds: (bonds: any) => void;
  userAgent: any;
}> = ({ handleAgentBonds, userAgent }) => {
  const [bonds, setBonds] = useState<any[]>([]);
  const [viewport] = useViewportContext();

  useEffect(() => {
    switch (userAgent.bonds) {
      case 1:
        setBonds([{ name: "", value: userAgent?.stats.charisma }]);
        break;
      case 2:
        setBonds([
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
        ]);
        break;
      case 3:
        setBonds([
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
        ]);
        break;
      case 4:
        setBonds([
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
          { name: "", value: userAgent?.stats.charisma },
        ]);
        break;
    }
  }, [userAgent]);

  const handleBond = (val, index) => {
    let newArr = [...bonds];
    newArr[index].name = val.target.value;
    setBonds([...newArr]);
  };
  let bondInputs;
  switch (userAgent.bonds) {
    case 1:
      bondInputs = (
        <Stack>
          <TextInput
            placeholder="Enter bond name and relationship here..."
            onChange={(val) => handleBond(val, 0)}
            label="Bond 1"
          />
        </Stack>
      );
      break;
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
          <Text c="dimmed">
            For more information, you can read the{" "}
            <Anchor
              component={Link}
              to="/training/professions/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bonds
            </Anchor>{" "}
            section in Agent Professions.
          </Text>
          {bondInputs}
          <Button
            onClick={() => handleAgentBonds(bonds)}
            disabled={bonds.filter((bond) => bond.name === "").length > 0}
            color={"green"}
          >
            Confirm Bonds
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
