import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .title {
    font-size: 14px;
    font-weight: 800;
    padding: 20px 20px 0 20px;
  }

  .closeButton {
    width: 13px;
    height: 13px;
    padding: 20px 20px 0 20px;
  }
`;
