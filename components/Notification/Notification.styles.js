import styled from "styled-components";

export const StyledNotification = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  opacity: 1;
  animation: fade 1.5s linear;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
