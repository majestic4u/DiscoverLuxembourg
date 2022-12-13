import React from "react";
import { FlatList } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";

export const HomeScreen = () => (
  <>
    <FlatList
      data={[{ name: 1 }]}
      renderItem={() => <AttractionInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </>
);
