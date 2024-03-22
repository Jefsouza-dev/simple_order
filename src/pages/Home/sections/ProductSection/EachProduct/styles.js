import { styled } from "styled-components";

export const productCard = styled.button`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 13px 13px 0 0;
`;

export const imgArea = styled.div`
  background-color: #eaf2ff;
  width: 250px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px 13px 0 0;

  img {
    border-radius: 4px;
    width: 32px;
    height: 32px;
  }
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
  text-align: left;

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
