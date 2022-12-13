import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const StyledAttractionCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const StyledAttractionCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StyledCardTitle = styled.Text`
  margin-top: ${(props) => props.theme.sizes[0]};
  padding: ${(props) => props.theme.sizes[0]};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;
export const StyledCardAddress = styled.Text`
  padding: ${(props) => props.theme.sizes[0]};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const StyledCardIcon = styled.View`
  position: relative;
  left: 350px;
  bottom: 40px;
`;
