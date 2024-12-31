import { createContext, useContext, useMemo, useReducer } from "react";
import { defaultSkillValues } from "../data";

const CharacterContext = createContext<any>(null);

export const CharacterProvider = (props: any) => {
  const { children } = props;

  const initialState = {
    savedCharacters: [],
    currentCharacter: {},
  };

  const initialCharacterState = {
    name: "",
    profession: "",
    employer: "",
    nationality: "",
    sex: "",
    age: "",
    history: "",
    personality: "",
    motivations: "",
    stats: {
      strength: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      power: 0,
      charisma: 0,
    },
    skills: { ...defaultSkillValues },
    bonds: 0,
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);
  const actions = characterActions(dispatch);

  const context = useMemo(() => [{ ...state }, actions], [state, actions]);
  return (
    <CharacterContext.Provider value={context}>
      {children}
    </CharacterContext.Provider>
  );
};

const characterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "create-character":
      return {
        ...state,
        savedCharacters: [...state.savedCharacters, { ...action.payload }],
        currentCharacter: { ...action.payload },
      };

    case "change-character":
      return {
        ...state,
        currentCharacter: { ...action.payload },
      };
    case "update-character":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

const characterActions = (dispatch: any) => ({
  createCharacterObj: (character: any) =>
    dispatch({ type: "create-character", payload: character }),
  changeCurrentCharacter: (character: any) =>
    dispatch({ type: "change-character", payload: character }),
  updateCharacters: (character: any) =>
    dispatch({ type: "update-character", payload: character }),
});

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  return context;
};
