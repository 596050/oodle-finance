import styled from "styled-components";
import { Box } from "@components";

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  overflow: hidden;
  &:hover {
    box-shadow: 2px 2px ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
