import { styled } from "styled-components";
import ArrowDropDown from "../../../../../assets/arrowDropDown.svg";

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 1068px;
  height: 546px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 16px;

  .text {
    font-size: 14px;
    font-weight: 800;
  }
`;

export const CustomerSelect = styled.select`
  width: 366px;
  height: 40px;
  padding: 10px;
  background-image: url(${ArrowDropDown});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 5px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #c5c6cc;
  cursor: pointer;
  box-sizing: border-box;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SearchInput = styled.input`
  width: 366px;
  height: 40px;
  padding: 10px;
  margin-top: 16px;
  border: 1px solid #c5c6cc;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
`;

export const ProductsArea = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  flex-grow: 1;
  max-height: 280px;
  overflow-y: auto;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

export const SeparatorBaseboard = styled.footer`
  border: 1px solid #d9d9d9;
  margin-top: auto;
  margin-bottom: 1px;
`;

export const infoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0px 20px;
  margin-bottom: 10px;

  .totalPrice {
    font-size: 16px;
    font-weight: 900;
    color: #1f2024;

    span {
      font-size: 14px;
      font-weight: 700;
      color: #1abc00;
    }
  }
`;
