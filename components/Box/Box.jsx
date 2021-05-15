import { forwardRef } from "react";
import { StyledBox } from "./Box.styles";

const Box = forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledBox {...rest} ref={ref}>
      {children}
    </StyledBox>
  );
});

export default Box;
