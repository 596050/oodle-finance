import styled from "styled-components";

import { Box, Card, CardContainer } from "@components";
import { mediaQueries } from "@styles";

export const ProductCard = styled(Card)`
  cursor: pointer;
  max-height: 140px;
  height: 140px;
  overflow: hidden;
`;

export const ProductCardContent = styled(Box)`
  width: 80%;
  padding-left: 40px;
`;

export const ProductImg = styled.img`
  max-height: 100px;
`;

export const ProductCardContainer = styled(CardContainer)`
  margin: 0 auto;
  max-width: 1024px;
  ${mediaQueries("sm")`
    grid-template-columns: repeat(1, 1fr);
  `}
  ${mediaQueries("md")`
    max-width: 100%;
  `}
`;

export const ProductCardContentHeader = styled.h6`
  margin: 0;
  font-size: 20px;
  text-align: start;
`;

export const ProductCardContentText = styled.p`
  text-align: start;
  width: 100%;
  font-size: 15px;
  padding-top: 10px;
`;

export const ProductCardInner = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
