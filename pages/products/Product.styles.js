import styled from "styled-components";
import { Box } from "@components";
import { mediaQueries } from "@styles";

export const ProductContainer = styled(Box)`
  margin: 0 auto;
  max-width: 70%;
  display: flex;
  justify-content: center;
  align-content: center;
  ${mediaQueries("sm")`
    flex-direction: column;
  `}
`;

export const ProductImg = styled.img`
  max-height: 400px;
  ${mediaQueries("sm")`
    max-height: 200px;
    margin: 0 auto;
    width: 100%:
  `}
`;

export const ProductText = styled(Box)`
  width: 100%;
  padding-left: 80px;
  max-width: 500px;
  ${mediaQueries("sm")`
    padding-top: 20px;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `}
`;

export const ProductHeading = styled.h1`
  margin: 0;
  font-size: 20px;
  text-align: start;
`;

export const ProductUl = styled.ul`
  padding: 0;
`;

export const ProductLi = styled.li`
  list-style: none;
`;

export const ProductDescription = styled.p``;
