import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  > label {
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey0};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  > div > div {
    position: relative;
  }

  > div > div > input {
    border: 2px solid ${({ theme }) => theme.color.grey2};
    background: ${({ theme }) => theme.color.grey2};
    padding: 10.5px 16.25px;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    outline: none;
    color: ${({ theme }) => theme.color.grey0};
    width: 100%;
  }

  > div > div > input::placeholder {
    color: ${({ theme }) => theme.color.grey1};
  }

  > div > div > input:focus {
    border-color: ${({ theme }) => theme.color.grey0};
  }

  > div > div > button {
    position: absolute;
    right: 5%;
    top: 34%;
    background: transparent;
    border: none;
    width: 15px;
    height: 15px;
  }

  > div > div > button > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div > p {
    color: ${({ theme }) => theme.color.negative};
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export default StyledInput;
