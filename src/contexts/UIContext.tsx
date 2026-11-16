import { createContext, useContext, useMemo, useReducer } from "react";

const UIContext = createContext<any>(null);

export const UIProvider = (props: any) => {
  const { children } = props;
  let didSkipIntroduction =
    localStorage.getItem("rememberDevice") === "true" ? true : false;
  const initialState = {
    apploading: false,
    skipIntroduction: didSkipIntroduction,
  };
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const actions = uiActions(dispatch);
  const context = useMemo(() => [{ ...state }, actions], [state, actions]);
  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
};

const uiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "set-skip-introduction":
      return { ...state, skipIntroduction: action.payload };
    default:
      return { ...state };
  }
};

const uiActions = (dispatch: any) => ({
  setSkipIntroduction: (val: boolean) =>
    dispatch({ type: "set-skip-introduction", payload: val }),
});

export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};
