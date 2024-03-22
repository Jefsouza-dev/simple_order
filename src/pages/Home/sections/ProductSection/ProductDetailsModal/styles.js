import { styled } from "styled-components";

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 791px;
  height: 306px;
  border-radius: 8px;
`;

export const ContainerInfo = styled.div`
  height: 204px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ImageArea = styled.div`
  width: 313px;
  height: 100%;
  border-radius: 7px;
  background: #eaf2ff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
    width: 32px;
    height: 32px;
  }
`;

export const ProductInfo = styled.div`
  width: 408px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;

  .title {
    font-size: 18px;
    font-weight: 900px;
    font-weight: bold;
  }

  .price {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const DescriptionArea = styled.div`
  height: 128px;

  .descriptionText {
    margin: 0;
    font-size: 12px;
    font-weight: 400px;
    color: #71727a;
  }
`;
