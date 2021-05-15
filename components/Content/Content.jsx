import { forwardRef } from "react";
import { StyledContent } from "./Content.styles";

const Content = forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledContent ref={ref} {...rest}>
      {children}
    </StyledContent>
  );
});

export default Content;
