import React from "react";
import {
  AttractionCard,
  AttractionCardCover,
  CardTitle,
} from "../../infrastracture/styles/attractions-info-style";

export const AttractionInfoCard = ({ attraction = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = attraction;

  return (
    <AttractionCard>
      <AttractionCardCover source={{ uri: photos[0] }} />
      <CardTitle>{name}</CardTitle>
    </AttractionCard>
  );
};
