import styled from "styled-components";

export const StyledLoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.grey3};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .icon-dots {
    filter: invert(100%);
  }
`;
