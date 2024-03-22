import { styled } from "styled-components";

export const MainHeader = styled.header`
  width: 100vw;
  height: 58px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const ButtonWrapping = styled.div`
  width: 306px;
  height: 24px;
  background: #ffffff;
  display: flex;
  gap: 22px;
`;

export const Button = styled.button`
  width: 98px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) =>
    props.className && props.className.includes("active") ? "#007bff" : "#000"};
`;

export const TitleButton = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
`;

export const ItemButton = styled.img``;
