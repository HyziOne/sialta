import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import styles from "./styles";
import search from "../../../assets/data/search";
import Entype from "react-native-vector-icons/Entypo";

const DestinationSearch = ({ navigation }) => {
  const [inputText, setInputText] = useState(DestinationSearch.initialState);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Quelle destination ?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entype name={"location-pin"} size={30}></Entype>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
// const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };
export default DestinationSearch;
