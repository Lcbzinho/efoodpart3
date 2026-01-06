import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Restaurant } from './pages/Restaurant'
import { Cart } from './pages/Cart'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Restaurant />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
)
export default Rout
