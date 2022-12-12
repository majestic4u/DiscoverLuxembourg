import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StyledAttractionImage } from "../../infrastracture/styles/view.style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GelleFra } from "./home.screen.components.js/gellefra.screen";
import LuxembourgCity from "./home.screen.components.js/luxembourgcity.screen";

const HomeStackNavigator = createNativeStackNavigator();
export const HomeScreen = ({ navigation }) => (
  <>
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        options={{ headerShown: false }}
        name="GelleFra"
        component={GelleFra}
      />
      <HomeStackNavigator.Screen
        options={{ headerShown: false }}
        name="LuxembourgCity"
        component={LuxembourgCity}
      />
    </HomeStackNavigator.Navigator>
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("GelleFra")}>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg/800px-G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LuxembourgCity")}>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Luxembourg_-_panoramio_%2820%29.jpg/800px-Luxembourg_-_panoramio_%2820%29.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/13/Luxembourg_Bock_cliff.JPG",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/b/b3/041102-abteineumuenster-luxemburg-hof.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Place_d%27Armes_Luxembourg.jpg/1280px-Place_d%27Armes_Luxembourg.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg/1920px-Adolphe_Bridge_post_2017_renovation_works_-_7_August_2018.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/e/ea/LUXGARE8.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/LuxCenterCityScape.jpg/1920px-LuxCenterCityScape.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <StyledAttractionImage
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Luxembourg_Grund_from_Verlorenkost_01.jpg/1280px-Luxembourg_Grund_from_Verlorenkost_01.jpg",
          }}
        />
      </TouchableOpacity>
    </ScrollView>
  </>
);
