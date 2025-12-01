import { Background, HeaderContainer, HeaderImg, Restaurant } from "./styles"
import Logo from '../../../assets/images/logo.png'

type Props = {
    itens: number
}

export const RestaurantHeader = ({ itens }: Props) => {
    return(
        <Background>
            <HeaderContainer>
                <Restaurant>Restaurants</Restaurant>
                <HeaderImg src={Logo}/>
                <Restaurant>{itens} Product(s) in cart</Restaurant>
            </HeaderContainer>
        </Background>
    )
}