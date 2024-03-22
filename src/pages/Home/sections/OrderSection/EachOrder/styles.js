import { styled } from "styled-components";

export const OrderCard = styled.div`
  width: 314px;
  height: 99px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSpace = styled.div`
  width: 304px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Acronym = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background: #f37272;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
`;

export const OrderInfos = styled.div`
  width: 136px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
  gap: 4px;

  .CustomerName {
    font-size: 12px;
    font-weight: 700;
    color: #1f2024;
  }

  .amount {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Price = styled.div`
  width: 64px;
  height: 17px;

  .text {
    font-size: 14px;
    font-weight: 800px;
    color: #1f2024;
  }
`;
