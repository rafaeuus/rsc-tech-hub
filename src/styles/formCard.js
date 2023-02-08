import styled from "styled-components";

export const FormCard = styled.div`
  background: ${({ theme }) => theme.color.grey3};
  padding: 42px 22.5px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: ${({ theme }) => theme.color.grey0};
  max-width: 369px;
  width: 100%;

  > h2 {
    font-size: ${({ theme }) => theme.fontSize.title1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.grey1};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.grey1};
    width: 100%;
    padding: 10.5px 22.33px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.grey0};
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  a:hover {
    background: ${({ theme }) => theme.color.grey2};
  }
`;
