import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F0",
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
  subtitle: {
    color: "#1F2859",
    marginLeft: 30,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  image: {
    width: "50%",
    height: "100%",
    position: "absolute",
    left: "80%",
    right: "50%",
    top: 100,
    zIndex: -1,
    resizeMode: "contain",
  },
  run_img: {
    width: 125,
    height: 125,
    transform: [{ scaleX: -1 }],
    marginLeft: 30,
  },
  txt: {
    color: "#1F2859",
    fontSize: 14,
    marginLeft: 30,
    width: 200,
  },
  // container: {
  //     margin: 20,
  // },
  // textInput: {
  //     fontSize: 20,
  //     marginBottom: 20,
  // },
  // row: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginVertical: 10,
  //     borderBottomWidth: 1,
  //     borderColor: 'lightgrey',
  // },
  // iconContainer: {
  //     backgroundColor: '#D4D4D4',
  //     padding: 10,
  //     borderRadius: 10,
  //     marginRight: 15,
  // },
  // locationText: {
  //     marginBottom: 10,
  //     fontSize: 15,
  //     fontWeight: 'bold',

  // }
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
