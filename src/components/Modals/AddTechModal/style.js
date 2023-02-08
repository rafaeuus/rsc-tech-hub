import styled from "styled-components";

export const StyledModalAddTech = styled.div`
  max-width: 369px;
  width: 100%;
  background: ${({ theme }) => theme.color.grey3};
  border-radius: 4px;
  margin: 13px;

  > div {
    background: ${({ theme }) => theme.color.grey2};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
  }

  > div > h2 {
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: ${({ theme }) => theme.fontSize.bold};
  }

  > div > button {
    background: transparent;
    border: none;
  }

  > div > button > .close-icon {
    width: 20px;
    height: 20px;
    filter: invert(50%);
    transition: 0.3s ease;
  }

  > div > button > .close-icon:hover {
    filter: invert(100%);
  }

  > form {
    padding: 23px 22px 32px 22px;
  }
`;
