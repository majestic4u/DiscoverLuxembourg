import styled from "styled-components/native";
import { StatusBar, View } from "expo-status-bar";

export const StyledImage = styled.Image`
  flex: 1;
`;

export const StyledView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;
