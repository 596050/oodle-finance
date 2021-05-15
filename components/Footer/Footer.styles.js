import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-top: solid 1px ${({ theme }) => theme.colors.lightGrey};
  padding: 20px;
  flex: 0 1 80px;
`;
