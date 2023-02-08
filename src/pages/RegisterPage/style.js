import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  background: ${({ theme }) => theme.color.grey4};
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: max-content;
  padding: 50px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 369px;
    width: 100%;
  }
`;
