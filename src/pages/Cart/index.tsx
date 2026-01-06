import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/indext'
import { ItemsList } from '../../components/SubComponents/CartListItems'
import { CartEntrega } from '../../components/SubComponents/StepsCart/Adress'
import { PaymentCart } from '../../components/SubComponents/StepsCart/Payment'
import { FinishedCart } from '../../components/SubComponents/StepsCart/Finished'

export const Cart = () => {
  const step = useSelector((state: RootState) => state.cart.step)

  const Processos = [
    <ItemsList />,
    <CartEntrega />,
    <PaymentCart />,
    <FinishedCart />
  ]

  return (
    <div style={{ padding: '48px 16px', maxWidth: 1200, margin: '0 auto' }}>
      {Processos[step]}
    </div>
  )
}

export default Cart
