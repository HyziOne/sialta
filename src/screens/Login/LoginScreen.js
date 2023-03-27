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
  Button, 
  KeyboardAvoidingView, 
  Platform
} from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';

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
      console.log(auth.currentUser.uid);
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
    // <KeyboardAvoidingView 
    //   style={{flex: 1}}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   // behavior={'height'}
    // >
    <View style={styles.container}>
      <View style={{position: 'relative', zIndex: 99999999, height: '100%'}}>
      <ImageBackground
        source={require("../../../assets/images/login/Header_login.png")}
        style={styles.headerImg}
      />
      <View style={styles.subView}>
        <Text style={styles.title}>Connexion</Text>
        <View>
          <View>
            <View>
              <Text style={styles.txtColor}>Adresse mail</Text>
              <TextInput
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
                style={styles.txtInputMail}
              />
            </View>

            <View>
              <Text style={styles.txtColor}>Mot de passe</Text>
              <TextInput
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
                style={styles.txtInputPwd}
              />
            </View>
          </View>
            <View style={{display: 'flex', position: 'relative'}}>
              <View>
                <Pressable style={styles.input}>
                  <Text style={styles.connexion} onPress={signIn}>Connexion</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.changeScreen} onPress={() => navigation.navigate("SignUpScreen")}>Inscription</Text>
                </Pressable>
              </View>
          </View>
        </View>

      </View>
      </View>
      <View>
        <ImageBackground
          source={require("../../../assets/images/login/Bottom_login.png")}
          style={styles.btm_img}
        />
      </View>

    </View>
    // </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "#FFF9F0", 
    height: "100%" 
  },
  headerImg: {
    width: "100%",
    height: 700,
    resizeMode: "cover",
    position: "absolute",
  },
  subView: {
    position: "relative",
    marginTop: 350,
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
    color: "#1F2859", 
    fontSize: 30, 
    fontWeight: "600",
  },
  txtColor:{
    color: '#1F2859'
  },
  input: {
    backgroundColor: '#1F2859', 
    color: '#FFF',  
    borderRadius: 20,
    marginBottom: 10,
  },
  connexion : {
    color: '#FFF',
    // paddingBottom: 5, 
    // paddingTop: 5, 
    fontSize: 18, 
    textAlign: 'center'
  },
  txtInputMail:{ 
    padding: 5,
    borderColor: '#1F2859',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 15
  },
  txtInputPwd: { 
    padding: 5,
    borderColor: '#1F2859',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    // marginTop: 5
  },
  changeScreen: {
    color: '#1F2859', 
    fontSize: 18, 
    // textAlign:'right',
    // padding: 15,
  },
  btm_img : {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
  }
});
