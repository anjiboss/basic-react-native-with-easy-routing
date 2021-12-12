import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { GlobalContext } from "../types/context";
import AddMode from "./AddMode";

const Homescreen: React.FC = () => {
  const [addMode, setAddMode] = useState(false);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    if (globalContext) {
      globalContext.setTitle("Home");
    }
  }, [globalContext]);

  return (
    <View>
      <Text>This Is Home View</Text>
      <View>
        <Button
          title="Add"
          onPress={() => {
            setAddMode(true);
          }}
        />
      </View>
      <AddMode visible={addMode} />
    </View>
  );
};

export default Homescreen;
