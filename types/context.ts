import { createContext } from "react";

interface IGlobalContext {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<IGlobalContext>({
  title: "Home",
  setTitle: () => {},
});

export { IGlobalContext, GlobalContext };
