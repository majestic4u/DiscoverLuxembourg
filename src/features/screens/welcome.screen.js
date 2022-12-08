import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components";
import {
  StyledImage,
  StyledView,
} from "../../infrastracture/styles/view.style";
import {
  StyledTouchableOpacity,
  StyledButton,
  StyledButtonView,
} from "../../infrastracture/styles/button.style";
import {
  StyledTitle,
  StyledText,
} from "../../infrastracture/styles/text.style";

export const WelcomeScreen = ({ navigation }) => (
  <>
    <ExpoStatusBar style="auto" />
    <Swiper loop dotColor="grey" activeDotColor="#fff">
      <StyledImage
        source={{
          uri: "https://images.unsplash.com/photo-1564591419939-c067a954ec9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <StyledImage
        source={{
          uri: "https://images.unsplash.com/photo-1611745843519-2e03872876cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <StyledImage
        source={{
          uri: "https://images.unsplash.com/photo-1590337318156-73e24cd1e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80://images.unsplash.com/photo-1611745843519-2e03872876cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <StyledImage
        source={{
          uri: "https://images.unsplash.com/photo-1588336899284-950764f07147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }}
      />
      <StyledImage
        source={{
          uri: "https://images.unsplash.com/photo-1611745843661-7308e5263c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <StyledImage
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg/800px-G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg",
        }}
      />
    </Swiper>
    <StyledTitle>Discover Luxembourg City</StyledTitle>
    <StyledText>
      Discover the Culture and Attractions of the city through interesting
      routes and more...
    </StyledText>
    <StyledButtonView>
      <StyledTouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
        <StyledButton> Get Started</StyledButton>
      </StyledTouchableOpacity>
    </StyledButtonView>
  </>
);
