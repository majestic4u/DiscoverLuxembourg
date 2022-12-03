import React from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components-native";

const ParentView = styled.View`
  flex: 0.1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchBar = styled.SearchBar`
  background-color: white;
  padding: 16px;
`;

export const HomeScreen = () => (
  <ParentView>
    <View>
      <SearchBar />
    </View>
  </ParentView>
);
