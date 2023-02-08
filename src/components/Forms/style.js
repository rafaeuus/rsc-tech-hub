import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;

  > .buttons-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    > .buttons-div {
      flex-direction: column;
      gap: 10px;
    }

    > .buttons-div > button {
      width: 100%;
    }
  }

  .toast {
    background: ${({ theme }) => theme.color.grey2};
    color: ${({ theme }) => theme.color.grey0};
  }
`;

export default StyledForm;
