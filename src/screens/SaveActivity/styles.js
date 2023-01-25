import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  heading: {
    textAlign: "center",
    padding: 20,
    marginTop: 30,
    fontSize: 35,
    color: "#1F2859",
    fontWeight: "700",
  },
  bottom_img: {
    width: 200,
    height: 200,
    bottom: 70,
    right: 20,
    position: "absolute",
    zIndex: -1,
  },
});

export default styles;
