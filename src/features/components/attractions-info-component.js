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
    name = ["Gelle Fra", "LuxembourgCity"],
    icon = <Fontisto name="heart" size={26} color="#DB070A" />,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg/800px-G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Luxembourg_-_panoramio_%2820%29.jpg/800px-Luxembourg_-_panoramio_%2820%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Luxembourg_Bock_cliff.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/041102-abteineumuenster-luxemburg-hof.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Place_d%27Armes_Luxembourg.jpg/1280px-Place_d%27Armes_Luxembourg.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg/1920px-Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/LUXGARE8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/LuxCenterCityScape.jpg/1920px-LuxCenterCityScape.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Luxembourg_Grund_from_Verlorenkost_01.jpg/1280px-Luxembourg_Grund_from_Verlorenkost_01.jpg",
    ],
    address = "100 some random street",
    addressIcon = <Ionicons name="location-sharp" size={24} color="black" />,
  } = attraction;

  return (
    <>
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("AttractionDetails")}
        >
          <StyledAttractionCardCover source={{ uri: photos[0] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[0]}</StyledCardTitle>
        <StyledCardAddress>
          {address}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
    </>
  );
};
