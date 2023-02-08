import styled from "styled-components";

export const StyledDashboard = styled.div`
  background: ${({ theme }) => theme.color.grey4};
  height: 100vh;

  > header {
    margin-top: 100px;
  }
`;
