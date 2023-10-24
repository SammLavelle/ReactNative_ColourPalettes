import { View, StyleSheet } from "react-native";
const ColorThumbnail = ({ colorCode }) => {
  const backgroundColor = {
    backgroundColor: colorCode,
  };
  return <View style={[styles.thumbnail, backgroundColor]}></View>;
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    aspectRatio: "1/1",
  },
});
export default ColorThumbnail;
