import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#FFF",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 15,
  },
  bedroom: {
    marginVertical: 10,
    color: "#5B5B5B",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
  },
  oldPrice: {
    color: "#5B5B5B",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5B5B5B",
    // textDecorationLine:
  },
});

export default styles;
