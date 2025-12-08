import { CartCloseButton, CartCon, CartContainer } from "./styles"
import Close from '../../../assets/images/Icons/close.png'

type Props = {
    children: React.ReactNode
    CloseFunction: () => void
}

export const CartBody = ({children, CloseFunction}: Props) => {
    return (
        <CartContainer>
            <div className="Close">
                <CartCloseButton onClick={() => CloseFunction()}><img src={Close} /></CartCloseButton>
            </div>
            <CartCon>
                <div>
                    {children}
                </div>
            </CartCon>
        </CartContainer>
    )
}