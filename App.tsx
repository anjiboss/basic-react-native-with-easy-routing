import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Router from "./Router/Router";
import Homescreen from "./Screen/Homescreen";
import LeftScreen from "./Screen/LeftScreen";
import RightScreen from "./Screen/RightScreen";
import { GlobalContext } from "./types/context";

export default function App() {
  const [title, setTitle] = useState("Home");
  return (
    <GlobalContext.Provider value={{ title: title, setTitle }}>
      <View style={styles.container}>
        <Router
          HomeScreen={Homescreen}
          LeftScreen={LeftScreen}
          RightScreen={RightScreen}
        />
        <StatusBar style="auto" />
      </View>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
