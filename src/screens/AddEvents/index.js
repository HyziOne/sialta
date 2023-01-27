import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Button } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../lib/firebase";

// import DatePicker from "react-native-date-picker";

const AddEvents = (props) => {
  const [selected, setSelected] = React.useState("");
  const randomstring = require("randomstring");
  const navigation = useNavigation();
  const rdm = randomstring.generate(12);
  const [long, setLong] = useState(''); 
  const [lat, setLat] = useState(''); 
  const [name, setName] = useState(''); 

  function CoordinateEvent () {
    setDoc(doc(db, "map", rdm), {
      long: long,
      lat: lat,
      name: name,
    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  

    }).catch((error) => {
          // The write failed...
          console.log(error);
    });;
    }
  const data = [
    { key: "1", value: "Course" },
    { key: "2", value: "Musculation" },
    { key: "3", value: "Football" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Créer ton evenement</Text>

      <Text style={styles.txt}>Ton sport</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />

      <Text style={styles.txt}>Date et horaire</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.txt_add}>
          <Text style={{ width: 80, textAlign: "center" }}>02/04/22</Text>
        </View>
        <View style={styles.txt_add}>
          <Text style={{ width: 80, textAlign: "center" }}>15 : 30</Text>
        </View>
      </View>
      <Text style={styles.txt}>Lieu</Text>
      <View style={styles.txt_add}>
        {/* <Text>12 rue de la Source, RENNES 35000</Text> */}
        <TextInput placeholder={long} onChangeText={(long) =>setLong(long)} style={styles.textBoxes}></TextInput>
        <TextInput placeholder={lat} onChangeText={(lat) =>setLat(lat)} style={styles.textBoxes}></TextInput>
        <TextInput placeholder={name} onChangeText={(name) =>setName(data={value})} style={styles.textBoxes}></TextInput>
        <Button title="Publier" onPress={CoordinateEvent}/>
      </View>
      <Text style={styles.txt}>Nombre de participants</Text>
    </View>
  );
};

export default AddEvents;
