import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchBar}>
      <Searchbar />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    backgroundColor: "white",
    padding: 16,
  },
  listStyle: {
    flex: 5,
    backgroundColor: "blue",
    padding: 16,
  },
});
