import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { useState } from 'react'

export const RestaurantHeader = () => {
  const items = useSelector((state: RootState) => state.cart)
  const [clicked, setClicked] = useState(false)

  return (
    <Background>
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurants</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant>{items.length} Product(s) in cart</Restaurant>
      </HeaderContainer>
    </Background>
  )
}
