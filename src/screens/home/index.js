import React from "react";
import { View, ImageBackground, Pressable, Text} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            {/* <Pressable style={styles.Searchbutton}onPress={() => console.warn('Search Btn clicked')}> */}
            <Pressable style={styles.Searchbutton}onPress={() => console.warn('Search Btn clicked')}>
                    <Fontisto name="search" size={25} color={"#000"}></Fontisto>
                    <Text style={styles.SearchbuttonText}>Recherche</Text>
                </Pressable>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpeg')} style={styles.image}>
                <Text style={styles.title}>Sialta</Text>
                <Pressable style={styles.button}onPress={() => navigation.navigate('MapScreen')}>
                    <Text style={styles.buttonText}>Continuer sur l'app</Text>
                </Pressable>            
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;

