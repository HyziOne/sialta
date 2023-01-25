import React from "react";
import { View, Image, Pressable, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../../screens/Settings/SettingsScreen";

const Activity = (props) => {
  const post = props.post;
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}> */}
      <View style={styles.container}>
        {/* <Image style={styles.image} source={require('../../../assets/images/wallpaper.jpeg')}></Image> */}
        <View style={styles.image_side}>
          <Image style={styles.image} source={{ uri: post.image }}></Image>
        </View>
        <View style={styles.data_side}>
          <Text style={styles.type}>{post.type}</Text>
          <Text style={styles.date}>{post.rue}</Text>
          <Text style={styles.date}>{post.ville}</Text>
        </View>
        <View style={styles.date_side}>
          <Text style={styles.date}>{post.date}</Text>
          <Text style={styles.date}>{post.heure}</Text>
          <Text style={styles.date} numberOfLines={2}>
            {post.description}
          </Text>
        </View>
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Activity;
