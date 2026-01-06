import { useSelector } from 'react-redux'
import type { RootState } from '../../store/indext'

const ConfirmationPage = () => {
  const orderId = useSelector((state: RootState) => state.cart.orderId)
  const delivery = useSelector((state: RootState) => state.cart.delivery)

  return (
    <div style={{ padding: '48px 16px', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ fontSize: 24, marginBottom: 16 }}>Pedido Realizado</h2>
      <p style={{ marginBottom: 12 }}>Código do pedido: <strong>{orderId}</strong></p>
      <h3 style={{ fontSize: 18, margin: '16px 0 8px' }}>Entrega</h3>
      <p><strong>Recebedor:</strong> {delivery?.receiver}</p>
      <p>
        <strong>Endereço:</strong> {delivery?.address?.description}, Nº {delivery?.address?.number}
      </p>
      <p>
        <strong>Complemento:</strong> {delivery?.address?.complement || '—'}
      </p>
      <p>
        <strong>Cidade:</strong> {delivery?.address?.city} — <strong>CEP:</strong> {delivery?.address?.zipCode}
      </p>
      <p style={{ marginTop: 16 }}>
        Estamos preparando seu pedido. Em breve será entregue no endereço informado.
      </p>
    </div>
  )
}

export default ConfirmationPage
