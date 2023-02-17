import React, { Component } from "react";
import {
  Text,
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";


// class SettingsScreen extends Component {
const SettingsScreen = () => {
  const auth = getAuth();
  const [text, onChangeOldPassword] = React.useState(null);
  const [textbis, onChangeNewPassword] = React.useState(null);
  const [textcheck, onChangeNewPasswordCheck] = React.useState(null);
  const navigation = useNavigation();
  const mail = auth.currentUser.email;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        style={[
          styles.profileImgContainer,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Image
          style={styles.profil_img}
          source={require("../../../assets/images/wallpaper.jpeg")}
        />
      </TouchableHighlight>

      <Text style={styles.profil}>Profil</Text>
      <Text style={styles.container_txt}>Email :</Text>
      <Text style={styles.container_txt}>{mail}</Text>
      {/* <Text style={styles.container_txt}>Sofiane56240@gmail.com</Text> */}
      <Text style={styles.container_txt}>Reinitialiser mot de passe</Text>

      <Text style={styles.container_txt}>Ancien mot de passe</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOldPassword}
        value={text}
        placeholder="Ancien mot de passe"
        secureTextEntry={true}
      />

      <Text style={styles.container_txt}>Nouveau mot de passe</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNewPassword}
        value={textbis}
        placeholder="Nouveau mot de passe"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNewPasswordCheck}
        value={textcheck}
        placeholder="Nouveau mot de passe"
        secureTextEntry={true}
      />
      {/* <Pressable style={styles.input}onPress={() => navigation.navigate('SettingsScreen')}> */}
      <Pressable style={styles.input}>
        <Text style={styles.input_txt}>Reinitialiser</Text>
      </Pressable>
      <Pressable style={styles.input}>
        <Text style={styles.input_txt} >Logout</Text>
      </Pressable>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#1F2859",
    color: "#FFF",
    height: "100%",
  },
  profil_img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
  profil: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF",
  },
  container_txt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFF",
  },
  input: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  reset_password_txt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFF",
  },
  input_txt: {
    textAlign: "center",
  },
});

export default SettingsScreen;
