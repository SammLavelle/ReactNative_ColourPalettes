import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import ColorPaletteThumbnails from "../components/ColorPaletteThumbnails";
import rooms from "../data/rooms";
const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        data={rooms}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              navigation.navigate("ColorPalette", { roomName: item.name })
            }
          >
            <Text>{item.name}</Text>
            <ColorPaletteThumbnails roomName={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  listItem: {
    marginBottom: 10,
  },
});
