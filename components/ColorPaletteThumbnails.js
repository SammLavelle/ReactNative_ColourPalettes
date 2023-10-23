import { FlatList } from "react-native";
import ColorThumbnail from "./ColorThumbnail";
import rooms from "../data/rooms";

const ColorPaletteThumbnails = ({ roomName }) => {
  return (
    <FlatList
      data={rooms.find((room) => room.name === roomName).colors}
      keyExtractor={(item) => item}
      horizontal
      renderItem={({ item }) => <ColorThumbnail colorCode={item.hexCode} />}
    />
  );
};
export default ColorPaletteThumbnails;
