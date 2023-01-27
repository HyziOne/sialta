import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from "react-native";
import { doc, setDoc, getDoc, onSnapshot, getFirestore, firestore, query, collection, where, getDocs } from "firebase/firestore"; 

// import { getFirestore } from 'firebase/firestore/lite'
import { db } from "../../lib/firebase";
// import "firebase/firestore";



const LoginScreen = (props) => {
  const randomstring = require("randomstring");
  const navigation = useNavigation();
  const rdm = randomstring.generate(12);
  const [username, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  const db = getFirestore();


  // const unsub = onSnapshot(doc(db, "map", "Moi"), (doc) => {
  //   console.log("Current data: ", doc.data());
  // });

  async function Search(){
    // const querySnapshot = await getDocs(collection(db, "user"));
    const querySnapshot = await getDocs(collection(db, "user"));
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      console.log(doc.data().username);
    });
  }

  useEffect(() => { //execute search function when screen load
    Search();
  }, [])
  
  function AddUser() {
    setDoc(doc(db, "user", rdm), {
      username: username,
      email: email,
    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  

    }).catch((error) => {
          // The write failed...
          console.log(error);
    });;
  }

  


  return (
    <View style={styles.container}>
     <TextInput placeholder={username} onChangeText={(username) =>setName(username)} style={styles.textBoxes}></TextInput>
      <TextInput placeholder={email} onChangeText={(email) =>setEmail(email)} style={styles.textBoxes}></TextInput>
      <Button title="Test" onPress={AddUser}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }   
});
