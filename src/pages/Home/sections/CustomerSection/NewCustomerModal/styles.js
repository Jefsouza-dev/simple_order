import styled from "styled-components";

export const ModalContent = styled.div`
  background-color: white;
  width: 1068px;
  height: 441px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .title {
    size: 14px;
    font-weight: 800;
    padding: 20px 20px 0 20px;
  }

  .closeButton {
    width: 13px;
    height: 13px;
    padding: 20px 20px 0 20px;
  }
`;

export const inputArea = styled.div`
  margin: 0 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Separator = styled.div`
  border: 1px solid #d9d9d9;
  margin: 27px 0 19px 0;
`;

export const ButtonContainer = styled.div`
  margin-top: -19px;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.button`
  width: 101px;
  height: 30px;
  border-radius: 4px;
  background: #006ffd;

  .text {
    color: #ffffff;
    font-weight: 500;
    size: 14px;
  }
`;
