import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Star Wars App</Text>
      <Button title="Go to Planets" onPress={() => navigation.navigate("Planets")} />
      <Button title="Go to Films" onPress={() => navigation.navigate("Films")} />
      <Button title="Go to Spaceships" onPress={() => navigation.navigate("Spaceships")} />
    </View>
  );
}