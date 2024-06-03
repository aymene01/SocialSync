import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.view}>
      <Text>Welcome to SocialSync</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
