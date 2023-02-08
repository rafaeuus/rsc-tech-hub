import styled from "styled-components";

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  > label {
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey0};
  }

  > select {
    border: 2px solid ${({ theme }) => theme.color.grey2};
    background: ${({ theme }) => theme.color.grey2};
    padding: 10.5px 16.25px;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    outline: none;
    color: ${({ theme }) => theme.color.grey1};
    width: 100%;
  }

  > p {
    color: ${({ theme }) => theme.color.negative};
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
