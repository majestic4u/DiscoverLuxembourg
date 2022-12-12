import styled from "styled-components/native";

export const StyledAttractionImage = styled.Image`
  margin-bottom: 10px;
  padding: 100px;
  border-radius: 70px;
`;
export const StyledImage = styled.Image`
  flex: 1;
`;

export const StyledView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;
