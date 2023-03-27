import { StyleSheet } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  MapView: {
    position: "relative",
    zIndex: 0,
  },
  //Search
  container: { width: "100%", zIndex: 1 },
  listView: {
    position: "absolute",
    backgroundColor: "#FFF",
    zIndex: 10,
  },
  GooglePlacesAutocomplete: {
    position: "absolute",
    zIndex: 999,
  },
  input: {
    color: "#000",
    padding: 15,
    // borderTopRightRadius: "15",
    // borderTopLeftRadius: "15",
    // borderBottomLeftRadius: "15",
    // borderBottomRightRadius: "15",
    borderRadius: 15,
    backgroundColor: "#FFF",
  },
  textInputContainer: {
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#FFFFFF",
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  poweredContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#c8c7cc",
    borderTopWidth: 0.5,
  },
  powered: {},
  // listView:{
  //     position: 'absolute',
  //     backgroundColor: '#FFF',
  //     zIndex: 10,//Forcing it to front
  // },
  row: {
    backgroundColor: "#FFFFFF",
    padding: 13,
    height: 44,
    flexDirection: "row",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c7cc",
  },
  description: {},
  loader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 20,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 5,
  },
  row: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  button_modal: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#EF4124",
    borderRadius: 15,
    backgroundColor: "#EF4124",
    alignSelf: "center",
  },
  title_modal: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  txt_modal: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
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
  search: {
    position: "absolute",
    top: 75,
    left: 20,
    right: 20,
    backgroundColor: "#FFF",
    width: "90%",
    padding: 15,
    borderRadius: 15,
    // borderTopRightRadius: "15",
    // borderTopLeftRadius: "15",
    // borderBottomLeftRadius: "15",
    // borderBottomRightRadius: "15",
    display: "flex",
    flexDirection: "row",
  },
  backgroundModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content_modal: {
    backgroundColor: "#4AA5B0",
    padding: 20,
    color: "#FFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default styles;
