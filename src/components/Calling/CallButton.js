import React from "react";
import { TouchableOpacity, Linking, Text, View} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const CallButton = () => {
  const phoneNumber = "17";

  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity style={{position: 'absolute', bottom: -350, left: 300,  zIndex: 99999, width: 500, height: 500}} onPress={handlePress}>
      <View style={{backgroundColor: '#EF4124', width: 50, height: 50, borderRadius: 30, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
       <FontAwesome5 name={"siren"} color={"#FFF"} size={26} />
      </View>
        
    </TouchableOpacity>
  );
};

export default CallButton;