import React, { useContext } from "react";
import { Button, Modal, Text, View } from "react-native";
import { RouterContext } from "../Router/RouteContext";

interface AddModeProps {
  visible: boolean;
}

const AddMode: React.FC<AddModeProps> = ({ visible }) => {
  const router = useContext(RouterContext);
  return (
    <Modal visible={visible} animationType={"slide"}>
      <Text>This Is Add Mode</Text>
      <View style={{ paddingTop: 500 }}>
        <Button
          title="Go To Right Page"
          onPress={() => {
            router.changeRoute && router.changeRoute("RightScreen");
          }}
        />
      </View>
    </Modal>
  );
};
export default AddMode;
