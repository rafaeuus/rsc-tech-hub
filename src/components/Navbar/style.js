import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 29px 0;
  position: fixed;
  background: ${({ theme }) => theme.color.grey4};
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  top: 0%;

  > div {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`;
