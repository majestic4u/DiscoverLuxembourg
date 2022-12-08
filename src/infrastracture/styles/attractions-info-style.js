import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const AttractionCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const AttractionCardCover = styled(Card.Cover)`
  margin-top: ${(props) => props.theme.sizes[2]};
  padding: ${(props) => props.theme.sizes[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardTitle = styled.Text`
  padding: ${(props) => props.theme.sizes[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
