import { forwardRef } from "react";
import { StyledCard, StyledCardContainer } from "./Card.styles";

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

export const CardContainer = forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledCardContainer ref={ref} {...rest}>
      {children}
    </StyledCardContainer>
  );
});
