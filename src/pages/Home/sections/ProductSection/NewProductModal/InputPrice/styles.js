import { styled } from "styled-components";

export const InputPrice = styled.label`
  width: 327px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  .title {
    color: #2f3036;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  height: 48px;
  padding: 12px 16px 12px 16px;
  border: 1px solid #c5c6cc;
  border-radius: 12px;
  outline-color: #006ffd;
`;

export const errorMessageArea = styled.div`
  display: flex;
  justify-content: center;

  .error {
    font-size: 10px;
    color: red;
    margin-top: -5px;
  }
`;
