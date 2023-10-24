import { FlatList, StyleSheet } from "react-native";
import ColorThumbnail from "./ColorThumbnail";
import rooms from "../data/rooms";

const ColorPaletteThumbnails = ({ roomName }) => {
  return (
    <FlatList
      style={styles.thumbnailContainer}
      horizontal
      data={rooms.find((room) => room.name === roomName).colors}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <ColorThumbnail colorCode={item.hexCode} />}
    />
  );
};
export default ColorPaletteThumbnails;

const styles = StyleSheet.create({
  thumbnailContainer: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 2,
    width: 254,
  },
});
