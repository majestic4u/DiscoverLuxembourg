import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components";

const SwipedImage = styled(Image)`
  flex: 1;
`;
const Header = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-top: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.text.primary};
  align-self: center;
  text-align: center;
`;
const GetStartedTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.sizes[3]};
  align-items: center;
  flex: 1;
`;
const GetStartedButtonText = styled(Text)`
  padding-top: ${(props) => props.theme.sizes[2]};
  padding-bottom: ${(props) => props.theme.sizes[2]};
  font-size: ${(props) => props.theme.sizes[2]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.inverse};
`;
const GetStartedButtonView = styled(View)`
  padding: ${(props) => props.theme.sizes[3]};
  padding-left: ${(props) => props.theme.sizes[4]};
  padding-right: ${(props) => props.theme.sizes[4]};
  padding-bottom: ${(props) => props.theme.sizes[4]};
  flex-direction: row;
`;
const DescriptionText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.button};
  padding-top: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.text.secondary};
  width: 300px;
  align-self: center;
  text-align: center;
`;

export const WelcomeScreen = ({ navigation }) => (
  <>
    <ExpoStatusBar style="auto" />
    <Swiper loop dotColor="grey" activeDotColor="#fff">
      <SwipedImage
        source={{
          uri: "https://images.unsplash.com/photo-1564591419939-c067a954ec9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <SwipedImage
        source={{
          uri: "https://images.unsplash.com/photo-1611745843519-2e03872876cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <SwipedImage
        source={{
          uri: "https://images.unsplash.com/photo-1590337318156-73e24cd1e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80://images.unsplash.com/photo-1611745843519-2e03872876cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <SwipedImage
        source={{
          uri: "https://images.unsplash.com/photo-1588336899284-950764f07147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }}
      />
      <SwipedImage
        source={{
          uri: "https://images.unsplash.com/photo-1611745843661-7308e5263c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <SwipedImage
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg/800px-G%C3%ABlle_Fra_World_War_I_Memorial_Luxembourg_City_13_04_2008.jpg",
        }}
      />
    </Swiper>
    <Header>Discover Luxembourg City</Header>
    <DescriptionText>
      Discover the Culture and Attractions of the city through interesting
      routes and more...
    </DescriptionText>
    <GetStartedButtonView>
      <GetStartedTouchableOpacity
        onPress={() => navigation.navigate("MainScreen")}
      >
        <GetStartedButtonText> Get Started</GetStartedButtonText>
      </GetStartedTouchableOpacity>
    </GetStartedButtonView>
  </>
);
