import { BuyButton } from "../BuyButton"
import { ModalContainer, ModalDesc, ModalImage, ModalItem } from "./styles"

export const Modal = () => {
    return (
        <>
            <ModalContainer>
                <ModalItem>
                    <ModalImage src="https://placehold.co/280x280" />
                    <div>
                        <ModalDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem facere asperiores optio cum atque vitae modi vel temporibus. Enim magni assumenda id error sed eius magnam laborum placeat. Ducimus.</ModalDesc>
                        <ModalDesc>Serve: <span>2 a 3 Pessoas</span></ModalDesc>
                        <BuyButton value={89.9} />
                    </div>
                </ModalItem>
            </ModalContainer>
        </>
    )
}