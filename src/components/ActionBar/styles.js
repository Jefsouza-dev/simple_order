import { styled } from "styled-components";

export const ActionBarContainer = styled.div`
  height: 68px;
  margin: 24px 28px 24px 28px;
  padding: 0 16px 0 16px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 364px;
  height: 40px;
  border: 1px solid #5d6570;
  border-radius: 8px;
  padding-left: 26px;
  outline: none;

  &::placeholder {
    width: 61px;
    height: 16px;
  }
`;

export const Button = styled.button`
  width: 147px;
  height: 40px;
  background: #006ffd;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;
