import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 45px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div > h2 {
    color: ${({ theme }) => theme.color.grey0};
    font-size: ${({ theme }) => theme.fontSize.title1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > div > p {
    color: ${({ theme }) => theme.color.grey1};
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
