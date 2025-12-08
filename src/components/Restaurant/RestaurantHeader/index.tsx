import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { useState } from 'react'
import { CartBody } from '../../SubComponents/Cart'
import { CartItems } from '../../SubComponents/CartItem'

export const RestaurantHeader = () => {
  const items = useSelector((state: RootState) => state.cart)
  const [clicked, setClicked] = useState(false)

  //Close
  const HandleClose = () => {
    setClicked(!clicked)
  }

  return (
    <Background>
      {clicked ? (
        <CartBody CloseFunction={HandleClose}>
          {items.map((item) => (
            <CartItems img={item.foto} price={item.preco} title={item.nome}/>
          ))}
        </CartBody>
      ): null}
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurants</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant onClick={() => setClicked(!clicked)}>{items.length} Product(s) in cart</Restaurant>
      </HeaderContainer>
    </Background>
  )
}
