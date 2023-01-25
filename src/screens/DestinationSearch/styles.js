import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  iconContainer: {
    backgroundColor: "#D4D4D4",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

// const styles = StyleSheet.create({
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: 22
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: "white",
//       borderRadius: 20,
//       padding: 35,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2
//     },
//     buttonOpen: {
//       backgroundColor: "#F194FF",
//     },
//     buttonClose: {
//       backgroundColor: "#2196F3",
//     },
//     textStyle: {
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: "center"
//     }
//   });

export default styles;
