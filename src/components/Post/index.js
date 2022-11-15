import React from "react";
import { 
    View, 
    Image, 
    Pressable,
    Text 
} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const Post = (props) => {
    const post = props.post;
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require('../../../assets/images/wallpaper.jpeg')}></Image> */}
            <Image style={styles.image} source={{uri : post.image}}></Image>
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text style={styles.bedroom} numberOfLines={2}>{post.description}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>${post.newPrice}</Text>
            </Text>
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    );
};

export default Post;
