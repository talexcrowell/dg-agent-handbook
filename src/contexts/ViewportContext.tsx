import { useViewportSize } from "@mantine/hooks";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const ViewportContext = createContext<any>(null);

export const ViewportProvider = (props: any) => {
  const { height, width } = useViewportSize();
  const { children } = props;
  const initialState = { width: width, height: height };
  const [state, dispatch] = useReducer(viewportReducer, initialState);
  const actions = viewportActions(dispatch);

  useEffect(() => {
    actions.createViewportObj({ width: width, height: height });
  }, [width, height]);

  const context = useMemo(() => [{ ...state }, actions], [state, actions]);
  return (
    <ViewportContext.Provider value={context}>
      {children}
    </ViewportContext.Provider>
  );
};

const viewportReducer = (state: any, action: any) => {
  switch (action.type) {
    case "set-viewport-size":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
const viewportActions = (dispatch: any) => ({
  createViewportObj: (viewport: any) =>
    dispatch({ type: "set-viewport-size", payload: viewport }),
});

export const useViewportContext = () => {
  const context = useContext(ViewportContext);
  return context;
};
