import styled from "styled-components";
import { Colors } from "../../../styles";

type Props = {
    title: string;
    price: number;
    image: string;
    desc: string;
    portion: string;
    id: number;
}

export const ModalContainer = styled.div`
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalItem = styled.div`
    width: 1024px;
    height: 344px;
    background-color: ${Colors.TitleColor};
    color: ${Colors.BackgroundColor};
`

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
`

export const ModalTitle = styled.h2`
    font-size: 18px;
    font-weight: 900;
`

export const ModalDesc = styled.p`
    font-size: 14px;
    font-weight: 400;
`