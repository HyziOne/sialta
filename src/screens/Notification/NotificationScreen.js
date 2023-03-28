import React from "react";
import { View, Image, Pressable, Text, StyleSheet, ImageBackground } from "react-native";
// import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../../assets/images/notification/HeaderNotification.png")}
          style={styles.headerImg}
        />
      </View>
       <Text style={styles.heading} h1>
        Vos activiés
      </Text>
      <View>
        
      </View>
      <Text style={styles.load}>En cours de developpement</Text>
       <View style={{height: "47%"}}>
        <ImageBackground
          source={require("../../../assets/images/notification/BottomNotification.png")}
          style={styles.btm_img}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    height: "100%",
    flex: 1,
  },
  // container: {
  //   backgroundColor: "#E5E5E5",
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  heading: {
    textAlign: "center",
    padding: 20,
    marginTop: 30,
    fontSize: 35,
    color: "#1F2859",
    fontWeight: "700",
  },
  containerLoad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  load: {
    textAlign: "center",
    padding: 20,
    marginTop: 200,
    fontSize: 25,
    color: "#1F2859",
    fontWeight: "700",
    alignContent: "center"
  },
  headerImg: {
    width: "100%",
    height: 200,
    // resizeMode: "contain",
    position: "absolute",
  },
  btm_img : {
    width: 100,
    height: 100,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    marginBottom: 0,
  },
});
export default NotificationScreen;
