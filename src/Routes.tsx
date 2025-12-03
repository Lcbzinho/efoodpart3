import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { ItalianRestaurant } from './pages/Restaurant'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/1" element={<ItalianRestaurant />} />
  </Routes>
)
export default Rout
