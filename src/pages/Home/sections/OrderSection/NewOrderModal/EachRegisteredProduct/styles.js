import { styled } from "styled-components";

export const Product = styled.div`
  width: 327px;
  height: 100px;
  border: 1px solid #d4d6dd;
  border-radius: 16px;
  display: flex;
`;

export const img = styled.div`
  width: 90px;
  height: 100%;
  border-radius: 16px;
  border: 1px solid blue;
`;

export const DetailsArea = styled.div`
  padding: 15px 0 20px 20px;
`;

export const TitleArea = styled.div`
  .title {
    font-size: 12px;
    font-weight: 700;
    color: #1f2024;
  }
`;

export const AmountAndPriceArea = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .amountButtons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .price {
    font-size: 14px;
    font-weight: 800px;
    color: #1f2024;
    margin-left: 70px;
  }
`;

export const HandleAmount = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 26px;
  background: #eaf2ff;

  .text {
    color: #006ffd;
  }

  .amount {
    font-size: 14px;
    font-weight: 400;
  }
`;
