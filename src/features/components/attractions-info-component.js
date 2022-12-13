import React from "react";
import {
  StyledAttractionCard,
  StyledAttractionCardCover,
  StyledCardTitle,
  StyledCardAddress,
  StyledCardIcon,
} from "../../infrastracture/styles/attractions-info-style";

import { useNavigation } from "@react-navigation/native";

import { Fontisto, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const AttractionInfoCard = ({ attraction = {} }) => {
  const navigation = useNavigation();
  const {
    name = ["Gelle Fra", "Grand Ducal Palace"],
    icon = <Fontisto name="heart" size={26} color="#DB070A" />,
    photos = [
      "https://cdn.pixabay.com/photo/2020/01/04/22/50/luxembourg-4741924_960_720.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ducal_Palace_%283753695748%29.jpg/800px-Ducal_Palace_%283753695748%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Luxembourg_Bock_cliff.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/041102-abteineumuenster-luxemburg-hof.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Place_d%27Armes_Luxembourg.jpg/1280px-Place_d%27Armes_Luxembourg.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg/1920px-Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/LUXGARE8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/LuxCenterCityScape.jpg/1920px-LuxCenterCityScape.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Luxembourg_Grund_from_Verlorenkost_01.jpg/1280px-Luxembourg_Grund_from_Verlorenkost_01.jpg",
    ],
    address = [
      "17 Rue du Marché-aux-Herbes, 1728 Luxembourg",
      "Monument of Remembrance, 1143 Luxembourg",
    ],
    addressIcon = <Ionicons name="location-sharp" size={24} color="black" />,
  } = attraction;

  return (
    <>
      {/* First Card Grand Ducal Palace */}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("GrandDucalPalace")}
        >
          <StyledAttractionCardCover source={{ uri: photos[1] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[1]}</StyledCardTitle>
        <StyledCardAddress>
          {address[0]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 2nd Card Gelle Fra (Golden Lady) */}
      <StyledAttractionCard>
        <TouchableOpacity onPress={() => navigation.navigate("GelleFra")}>
          <StyledAttractionCardCover source={{ uri: photos[0] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[0]}</StyledCardTitle>
        <StyledCardAddress>
          {address[1]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
    </>
  );
};
