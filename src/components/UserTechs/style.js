import styled from "styled-components";

export const StyledUserTechs = styled.div`
  color: ${({ theme }) => theme.color.grey0};
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 18px 0;

  > .add-techs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  > .add-techs > button {
    padding: 10px 15px;
  }

  .add-icon {
    width: 12px;
    height: 12px;
    filter: invert(100%);
  }

  > .techs-list {
    background: ${({ theme }) => theme.color.grey3};
    padding: 23px 22px;
    border-radius: 4px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  > .techs-list > div {
  }

  > .techs-list > ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  > .techs-list > ul > li {
    cursor: pointer;
    background: ${({ theme }) => theme.color.grey4};
    padding: 13px 22px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s ease;
  }

  > .techs-list > ul > li:hover {
    background: ${({ theme }) => theme.color.grey2};
  }

  > .techs-list > ul > li > h3 {
    font-size: ${({ theme }) => theme.fontSize.title2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > .techs-list > ul > li > div {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
  }

  > .techs-list > ul > li > div > p {
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey1};
  }

  > .techs-list > ul > li > div > button {
    background: transparent;
    border: none;
  }

  .icon-trash {
    filter: invert(100%);
    width: 15px;
    height: 15px;
    transition: 0.3s ease;
  }

  .icon-trash:hover {
    filter: invert(70%);
  }

  .toast {
    background: ${({ theme }) => theme.color.grey2};
    color: ${({ theme }) => theme.color.grey0};
  }
`;
