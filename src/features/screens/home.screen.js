import React from "react";
import { FlatList } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";

const HomeScreen = () => (
  <>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => <AttractionInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </>
);

export default HomeScreen;
