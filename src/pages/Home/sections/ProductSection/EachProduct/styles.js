import { styled } from "styled-components";

export const productCard = styled.section`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const img = styled.div`
  background-color: #abbbcc;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px 13px 0 0;
`;

export const DetailsSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  background: #fff;
  padding: 4px 0 4px 0;

  .title {
    font-size: 12px;
    font-weight: 400;
    margin-left: 9px;
  }

  .price {
    font-size: 14px;
    font-weight: 800;
    color: #1f2024;
    margin-left: 9px;
  }
`;
