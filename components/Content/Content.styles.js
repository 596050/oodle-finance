import styled from "styled-components";

export const StyledContent = styled.main`
  position: relative;
  padding: 80px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  overflow: auto;
  flex: 1 1 auto;
`;
