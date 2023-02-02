import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import SignUpScreen from "../Signup";

import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
} from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function LoginScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log("good");
      navigation.navigate("MapScreen");
    } catch (error) {
      alert("Veuillez réessayer");
      console.log("not good");
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={{ backgroundColor: "#FFF9F0", height: "100%" }}>
      <ImageBackground
        source={require("../../../assets/images/login/Header_login.png")}
        style={{
          width: "100%",
          height: 700,
          resizeMode: "cover",
          position: "absolute",
        }}
      />
      <View
        style={{
          position: "relative",
          marginTop: 350,
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Text style={{ color: "#1F2859", fontSize: 30, fontWeight: "600" }}>
          Connexion
        </Text>
        <View>
          <View>
            <View>
              <Text style={{color: '#1F2859'}}>Adresse mail</Text>
              <TextInput
                // placeholder="Email"
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
                style={{ padding: 5,
                  borderColor: '#1F2859',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 15,
                  marginTop: 5,
                  marginBottom: 15}}
              />
            </View>

            <View>
              <Text style={{color: '#1F2859'}}>Mot de passe</Text>
              <TextInput
                // placeholder="Password"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
                style={{ padding: 5,
                  borderColor: '#1F2859',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 15,
                  marginTop: 5}}
              />
            </View>
          </View>
          <Pressable style={{ backgroundColor: '#1F2859', color: '#FFF',  borderRadius: 20 }}>
            <Text style={{color: '#FFF',paddingBottom: 5, paddingTop: 5, fontSize: 18, textAlign: 'center'}} onPress={signIn}>Connexion</Text>
          </Pressable>
        </View>
        <Text style={{color: '#1F2859', fontSize: 18, textAlign:'right'}} onPress={() => navigation.navigate("SignUp")}>Inscription</Text>
      </View>
      <ImageBackground
        source={require("../../../assets/images/login/Bottom_login.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
