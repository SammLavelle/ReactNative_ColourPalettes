import { View, Text, StyleSheet } from "react-native";
const ColorBox = ({ colorCode }) => {
  const backgroundColor = {
    backgroundColor: colorCode,
  };
  const dynamicColor = {
    color:
      parseInt(colorCode.replace("#", ""), 16) > 0xffffff / 1.5
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.panel, backgroundColor]}>
      <Text style={[styles.text, dynamicColor]}>{colorCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    padding: 10,
    justifyContent: "center",
    marginBottom: 1,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    textTransform: "lowercase",
  },
});
export default ColorBox;
