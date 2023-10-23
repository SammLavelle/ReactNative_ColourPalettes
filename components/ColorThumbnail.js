import { View, StyleSheet } from "react-native";
const ColorThumbnail = ({ colorCode }) => {
  const backgroundColor = {
    backgroundColor: colorCode,
  };
  return <View style={[styles.thumbnail, backgroundColor]}></View>;
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 50,
    width: 50,
  },
});
export default ColorThumbnail;
