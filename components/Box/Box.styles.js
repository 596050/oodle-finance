import styled from "styled-components";
import { compose, flexbox, space, layout } from "styled-system";

export const StyledBox = styled("div")(compose(flexbox, layout, space));
