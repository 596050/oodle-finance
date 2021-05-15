import styled from "styled-components";

export const StyledHeader = styled.header`
  z-index: 1;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrey};
  flex: 0 1 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;
