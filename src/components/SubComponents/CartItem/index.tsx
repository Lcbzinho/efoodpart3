import { CartItem, CartItemContainer, CartItemImage, CartItemLogo, CartItemPrice, CartItemTitle } from "./styles"
import Logo from '../../../assets/images/Icons/lixeira-de-reciclagem 1.png'

type Props = {
    img: string
    title: string
    price: number
}

export const CartItems = ({img, title, price}: Props) => {
    return (
    <CartItem>
        <CartItemContainer>
            <CartItemImage src={img} />
            <div>
                <CartItemTitle>{title}</CartItemTitle>
                <CartItemPrice>R$ {price}</CartItemPrice>
                <CartItemLogo src={Logo} />
            </div>
        </CartItemContainer>
    </CartItem>
    )
    }