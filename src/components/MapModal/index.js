import React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import Localisation from "react-native-geocoding";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

const MapModal = (props) => {
  // const post = props.post;
  // const navigation = useNavigation();
  //   const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <Marker
      coordinate={{
        latitude: 48.1113385,
        longitude: -1.6800198,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      // onPress={showModal}
    >
      <FontAwesome5 name={"running"} size={26} />
    </Marker>
  );
};

export default MapModal;
