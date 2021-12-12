import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { GlobalContext } from "../types/context";

const Homescreen: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  useEffect(() => {
    if (globalContext) {
      globalContext.setTitle("Left Screen");
    }
  }, [globalContext]);
  return (
    <View>
      <Text>This Is Left View</Text>
    </View>
  );
};

export default Homescreen;
