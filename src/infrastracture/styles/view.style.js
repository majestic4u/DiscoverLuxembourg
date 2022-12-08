import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export const StyledImage = styled.Image`
  flex: 1;
`;

export const StyledView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const ParentView = styled.View`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;
