import styled from "styled-components";
import { Colors } from "../../../styles";

export const CartContainer = styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: end;
`

export const CartCon = styled.div`
    padding: 8px;
    width: 328px;
    height: 100%;
    background-color: ${Colors.TitleColor};
    color: ${Colors.BackgroundColor};

    & > div {
        margin-top: 40px;
    }
    `