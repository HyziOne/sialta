// import { StyleSheet } from "react-native";
// import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
// import { Dimensions } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   inputContainer: {
//     width: "80%",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width: "60%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonOutline: {
//     backgroundColor: "white",
//     marginTop: 5,
//     borderColor: "#0782F9",
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: "#0782F9",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });
import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#1F2859",
    color: "#FFF",
    height: "100%",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titre: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  txt: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10,
  },
  txt_add: {
    color: "#000",
    padding: 15,
    borderRadius: 15,
    // borderTopLeftRadius: "15",
    // borderBottomLeftRadius: "15",
    // borderBottomRightRadius: "15",
    backgroundColor: "#FFF",
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
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
