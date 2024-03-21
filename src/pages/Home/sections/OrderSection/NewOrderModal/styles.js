import { styled } from "styled-components";
import ArrowDropDown from "../../../../../assets/arrowDropDown.svg";

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 1068px;
  height: 526px;
  border-radius: 8px;
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
  margin: 0 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const SeparatorBaseboard = styled.div`
  border: 1px solid #d9d9d9;
  margin-bottom: 50px;
`;
