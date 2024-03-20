import { styled } from "styled-components";

export const Customer = styled.button`
  width: 317px;
  height: 64px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const CustomerAcronym = styled.section`
  width: 40px;
  height: 40px;
  margin: 0 0 0 16px;
  background: #72adf3;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #ffffff;
  }
`;

export const CustomerData = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 16px;

  .customerName {
    width: 141px;
    height: 15px;
    font-size: 12px;
    font-weight: 700;
    color: #1f2024;
    margin-bottom: 5px;
  }

  .customerCNPJ {
    width: 141px;
    height: 16px;
    font-size: 12px;
    font-weight: 400px;
    color: #71727a;
  }
`;
