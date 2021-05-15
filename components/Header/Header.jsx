import Link from "next/link";

import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link
        href={{
          pathname: "/",
        }}
      >
        PUNK API
      </Link>
    </StyledHeader>
  );
};
export default Header;
