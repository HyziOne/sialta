import React, { useState } from "react";
import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import Lightbox from "react-native-lightbox";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MoreInformation = (props) => {
  // const MoreInformation = ({ navigation }) => {
  const navigation = useNavigation();

  const [isImageVisible, setIsImageVisible] = useState(false);
  const participants = [
    { key: "Lupin malin" },
    { key: "Lupin têtu" },
    { key: "Ours malin" },
    { key: "Coq furtif" },
  ];
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", color: "#1F2859", marginLeft: 30 }}>
      <Entypo name="dot-single" size={18} color="#1F2859" />
      <Text style={{ fontSize: 14, color: "#1F2859" }}>{item.key}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/informations/Wave.png")}
        style={{
          width: "80%",
          height: "100%",
          resizeMode: "contain",
          position: "absolute",
          right: -110,
          top: 100,
          zIndex: "-1",
        }}
      />

      <Text style={styles.heading}>Information</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Lightbox
          renderContent={() => (
            <Image
              source={require("../../../assets/images/informations/Activité_image.png")}
              style={{ width: 400, height: 300 }}
            />
          )}
        >
          <Image
            source={require("../../../assets/images/informations/Activité_image.png")}
            style={{
              width: 150,
              height: 200,
              resizeMode: "cover",
              marginLeft: 30,
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
            }}
          />
        </Lightbox>
        <Lightbox
          renderContent={() => (
            <Image
              source={require("../../../assets/images/informations/Parc.png")}
              style={{ width: 400, height: 300 }}
            />
          )}
        >
          <Image
            source={require("../../../assets/images/informations/Parc.png")}
            style={{
              width: 150,
              height: 200,
              resizeMode: "cover",
              marginRight: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        </Lightbox>
      </View>
      <View>
        <Text style={styles.subtitle}>Participants:</Text>
        <FlatList
          style={{ color: "#1F2859" }}
          data={participants}
          renderItem={renderItem}
        />
      </View>
      <Image
        style={styles.run_img}
        source={require("../../../assets/images/activites/runing_1.png")}
      />
      <Text style={styles.subtitle}>Description :</Text>
      <Text style={styles.txt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque
        molestie lectus diam. Sed luctus mi est, at tincidunt lorem lobortis sit
        amet. In dapibus odio at turpis tempus ultrices. Proin.
      </Text>

      <Text
        style={{
          color: "#FFF",
          fontWeight: "600",
          fontSize: 18,
          top: "50%",
          position: "absolute",
          right: 60,
        }}
      >
        Niveau
      </Text>
      <Text
        style={{
          color: "#FFF",
          fontWeight: "600",
          fontSize: 18,
          top: "53%",
          position: "absolute",
          right: 30,
        }}
      >
        Intermediaire
      </Text>
    </View>
  );
};
export default MoreInformation;
