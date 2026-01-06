import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Restaurant } from './pages/Restaurant'
import { Cart } from './pages/Cart'
import DeliveryPage from './pages/Delivery'
import ConfirmationPage from './pages/Confirmation'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Restaurant />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/entrega" element={<DeliveryPage />} />
    <Route path="/confirmacao" element={<ConfirmationPage />} />
  </Routes>
)
export default Rout
