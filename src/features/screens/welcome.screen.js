import React from "react";
import { SafeAreaView } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  background-color: white;
  flex: 0.4;
`;
const SwipedImage = styled.Image`
  flex: 1;
`;
const Header = styled.Text`
  font-size: 28px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  padding-top: 20px;
  color: black;
`;
const GetStartedTouchableOpacity = styled.TouchableOpacity`
  padding: 16px;
  background-color: black;
  justify-content: center;
  border-radius: 50px;
  align-items: center;
  flex: 1px;
`;
const GetStartedButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const GetStartedButtonView = styled.View`
  flex-direction: row;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 30px;
`;
const DescriptionText = styled.Text`
  font-size: 14px;
  width: 300px;
  align-self: center;
  text-align: center;
  padding-top: 20px;
  color: grey;
`;

export const WelcomeScreen = (props) => (
  <>
    <Swiper loop autoplay dotColor="grey" activeDotColor="#fff">
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
    <SafeArea>
      <Header>Discover Luxembourg City</Header>
      <DescriptionText>
        Discover the Culture and Attractions of the city through interesting
        routes and more...
      </DescriptionText>
      <GetStartedButtonView>
        <GetStartedTouchableOpacity
          onPress={() => {
            props.navigation.navigate("HomeScreen");
          }}
        >
          <GetStartedButtonText> Get Started</GetStartedButtonText>
        </GetStartedTouchableOpacity>
      </GetStartedButtonView>
    </SafeArea>
  </>
);
