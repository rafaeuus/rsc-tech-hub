import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title0};
  color: ${({ theme }) => theme.color.grey0};
  text-align: center;

  > span {
    font-size: ${({ theme }) => theme.fontSize.title1};
    color: ${({ theme }) => theme.color.colorPrimary};
  }
`;
