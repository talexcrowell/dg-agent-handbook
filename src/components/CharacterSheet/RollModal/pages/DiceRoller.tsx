import { DiceRoll, exportFormats } from "@dice-roller/rpg-dice-roller";
import {
  Button,
  Group,
  InputLabel,
  NumberInput,
  RollingNumber,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

export const DiceRoller = ({ toggleDiceRoller }) => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceNotation, setDiceNotation] = useState("d4");
  const [modifier, setModifier] = useState(0);

  const [diceRoll, setDiceRoll] = useState({
    rolls: [{ rolls: [{ value: 0 }] }],
  });
  const [diceValues, setDiceValues] = useState([{ value: 0 }]);
  const [diceTotal, setDiceTotal] = useState(0);

  const handleDiceValue = (val) => {
    setDiceNotation(val);
  };
  const handleCustomRoll = (input: string) => {
    let roll: any = new DiceRoll(input);
    let rollObj = roll.export(exportFormats.OBJECT);
    let diceValues = [...rollObj.rolls[0].rolls];
    setDiceTotal(rollObj.total);
    setDiceValues([...diceValues]);
    setDiceRoll({ ...rollObj });
  };

  const handleCustomDiceRoll = () => {
    handleCustomRoll(
      diceNumber.toString() +
        diceNotation.toString() +
        (modifier > 0 ? `+${modifier}` : ""),
    );
  };

  const handleDiceNumber = (val: number) => {
    if (val > diceValues.length) {
      let fillerArr = Array.from(
        { length: val - diceValues.length },
        (_, i) => {
          return { value: 0 };
        },
      );
      setDiceValues([...diceValues, ...fillerArr]);
    } else {
      let newArr = [...diceValues].slice(0, val);
      setDiceValues([...newArr]);
    }
    setDiceNumber(val);
  };

  return (
    <Stack gap="xl">
      <Title>Dice Roller</Title>
      <Stack>
        <SimpleGrid cols={3}>
          <NumberInput
            label="Number"
            value={diceNumber}
            onChange={handleDiceNumber}
            min={1}
            max={8}
          />
          <Select
            label="Type of Dice"
            data={["d4", "d6", "d8", "d10", "d20", "d100"]}
            onChange={handleDiceValue}
            value={diceNotation}
          />
          <NumberInput
            label="Modifier"
            value={modifier}
            onChange={setModifier}
            min={0}
            max={8}
          />
        </SimpleGrid>
        <Table withTableBorder withColumnBorders striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta="center">Notation</Table.Th>
              <Table.Th ta="center">Dice Values</Table.Th>
              <Table.Th ta="center">Total Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Text ta="center" size="xl">
                  {diceNumber}
                  {diceNotation}
                  {modifier !== 0 && `+${modifier}`}
                </Text>
              </Table.Td>
              <Table.Td>
                <Group justify="center">
                  {diceValues.map((item) => {
                    return <RollingNumber value={item.value} fz="24" />;
                  })}
                </Group>
              </Table.Td>
              <Table.Td ta="center">
                <RollingNumber value={diceTotal} fz="24" />
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
      <Stack>
        <Button onClick={handleCustomDiceRoll} variant="outline">
          Roll Dice
        </Button>
        <Button variant="outline" color="red" onClick={toggleDiceRoller}>
          Close
        </Button>
      </Stack>
    </Stack>
  );
};
