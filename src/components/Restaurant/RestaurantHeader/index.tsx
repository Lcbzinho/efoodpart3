import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { useState } from 'react'
import { CartBody } from '../../SubComponents/Cart'
import { ItemsList } from '../../SubComponents/CartListItems'
import { CartEntrega } from '../../SubComponents/CartEntrega'

export const RestaurantHeader = () => {
  //Processos cart
  const Processos = [
    <ItemsList />,
    <CartEntrega />
  ]
  const ite = useSelector((state: RootState) => state.cart)
  const [clicked, setClicked] = useState(false)

  //Close
  const HandleClose = () => {
    setClicked(!clicked)
  }
  return (
    <Background>
      {clicked ? (
        <CartBody CloseFunction={HandleClose}>
          {Processos[ite.step]}
        </CartBody>
      ): null}
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurants</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant onClick={() => setClicked(!clicked)}>{ite.items.length} Product(s) in cart</Restaurant>
      </HeaderContainer>
    </Background>
  )
}
