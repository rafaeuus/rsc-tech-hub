import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  ${({ styleType }) => {
    if (styleType === "small") {
      return css`
        padding: 13px 20px;
      `;
    }
    return css`
      padding: 12px 22.33px;
    `;
  }}
  color: ${({ theme }) => theme.color.grey0};
  font-size: ${({ styleType, theme }) =>
    styleType === "small" ? theme.fontSize.headline : theme.fontSize.title2};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  ${({ styleType }) => {
    switch (styleType) {
      case "primary":
        return css`
          background: ${({ theme }) => theme.color.colorPrimary};
        `;
      case "disable":
        return css`
          background: ${({ theme }) => theme.color.grey1};
        `;
      case "small":
        return css`
          background: ${({ theme }) => theme.color.grey3};
        `;
      default:
    }
  }};
  transition: 0.3s ease;

  :hover {
    ${({ styleType }) => {
      switch (styleType) {
        case "primary":
          return css`
            background: ${({ theme }) => theme.color.colorPrimaryFocus};
          `;
        case "disable":
          return css`
            background: ${({ theme }) => theme.color.grey2};
          `;
        case "small":
          return css`
            background: ${({ theme }) => theme.color.grey2};
          `;
        default:
      }
    }};
  }

  :disabled {
    background-color: ${({ theme }) => theme.color.colorPrimaryNegative};
  }
`;

export default StyledButton;
