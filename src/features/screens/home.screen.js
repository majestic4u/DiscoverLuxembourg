import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchBar}>
      <Searchbar />
    </View>
    <View style={styles.listStyle}>
      <Text>List</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
