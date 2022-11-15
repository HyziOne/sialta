import React, {useState} from "react";
import {View, Text, TextInput, FlatList } from "react-native";
import styles from "./styles";
import search from "../../../assets/data/search";
import Entype from 'react-native-vector-icons/Entypo';

const DestinationSearch = ({ navigation }) => {

    const [inputText, setInputText] = useState(DestinationSearch.initialState);

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Quelle destination ?"
            value={inputText} onChangeText={setInputText}/>
        
            <FlatList
            data={search}
            renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entype name={"location-pin"} size={30}></Entype>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
            
            )}/>
        
        </View>
        
    );
};

export default DestinationSearch;

