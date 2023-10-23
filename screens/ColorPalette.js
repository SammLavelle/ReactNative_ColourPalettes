import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";
import rooms from "../data/rooms";

const ColorPalette = ({ route }) => {
  const roomName = route.params.roomName;
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{roomName}</Text>
      <FlatList
        data={rooms.find((room) => room.name === roomName).colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ColorBox colorCode={item.hexCode} />}
      />
    </View>
  );
};
export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 10,
    flex: 1,
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },
});
