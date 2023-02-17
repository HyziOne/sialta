import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Image, Pressable, StyleSheet, TextInput, Text, View, ImageBackground } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Component } from 'react/cjs/react.production.min';
import HomeTabNavigator from '../../navigation/HomeTabNavigator';
const auth = getAuth();

function SignUpScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    samePassword: '',
    error: ''
  })

  const checkPasswordMatch = (password, samePassword) => {
    if (password !== samePassword) {
      console.error('Les mots de passe ne correspondent pas');
      // console.log(password);
      // console.log(samePassword);
      return false;
    }else{
      console.log('Ok');
    }
    return true;
  };

  async function signUp() {
    if (value.email === '' || value.password === '' || value.samePassword === '' ) {
      // if (value.password === value.samePassword){
      //   console.log('bonjour')
      // }
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      // console.log('Ok');
      return;
    }
    // else{
    //   // console.log('pb erreur pwd');
    // }

    try {
      if (value.password === value.samePassword){
        console.log('same password')
        await createUserWithEmailAndPassword(auth, value.email, value.password, value.samePassword);
        navigation.navigate('LoginScreen');    
      }else{
        console.log('different password');
        alert('Mot de passe differents')
      }
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/login/Header_login.png")}
        style={styles.headerImg}
      />
      <View style={styles.subView}>
        <Text style={styles.title}>Inscription</Text>
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
            <View  style={{marginTop: 15}}>
              <Text style={styles.txtColor}>Confirmation</Text>
              <TextInput
                onChangeText={(text) => setValue({ ...value, samePassword: text })}
                secureTextEntry={true}
                style={styles.txtInputPwd}

              />
            </View>
          </View>
          <View  style={{marginTop: 15}}>
            <Pressable style={styles.input}>
              <Text style={styles.btnInsc} onPress={signUp}>Inscription</Text>
              {/* <Text style={styles.connexion} onPress={checkPasswordMatch}>Inscription</Text> */}
            </Pressable>
          </View>
        </View>
        <Text style={styles.changeScreen}  onPress={() => navigation.navigate('LoginScreen')}>Connexion</Text>
      </View>
      <ImageBackground
        source={require("../../../assets/images/login/Bottom_login.png")}
        style={styles.btm_img}
      />
    </View>
  );
}

export default SignUpScreen;

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
    borderRadius: 20
  },
  btnInsc : {
    color: '#FFF',
    paddingBottom: 10, 
    paddingTop: 10, 
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
    textAlign:'right'
  },
  btm_img : {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  }
});
