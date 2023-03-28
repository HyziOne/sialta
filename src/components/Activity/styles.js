import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  image_side: {
    width: "20%",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  data_side: {
    marginLeft: "10%",
    width: "40%",
  },
  date_side: {
    marginTop: 30,
    marginLeft: "5%",
    width: "25%",
  },
  container: {
    margin: 20,
    backgroundColor: "#4AA5B0",
    borderRadius: 15,
    // borderTopRightRadius: "15",
    // borderTopLeftRadius: "15",
    // borderBottomLeftRadius: "15",
    // borderBottomRightRadius: "15",
    flexDirection: "row",
  },
  type: {
    color: "#FFF",
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "cover",
    color: "#FFF",
    borderRadius: 15,
    padding: 30,
  },
  date: {
    color: "#FFF",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: "#FFF",
  },
  // text_side: {
  //     display: 'flex',
  // }
});

export default styles;
