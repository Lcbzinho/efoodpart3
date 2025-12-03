import { RestaurantBanner } from "../../components/Restaurant/RestaurantBanner"
import { RestaurantBody } from "../../components/Restaurant/RestaurantBody"
import { RestaurantHeader } from "../../components/Restaurant/RestaurantHeader"
import { Footer } from "../../components/SubComponents/Footer"
import { Modal } from "../../components/SubComponents/Modal"

export const ItalianRestaurant = () => {
  return (
    <>
      <Modal />
      <RestaurantHeader itens={0} />
      <RestaurantBanner />
      <RestaurantBody />
      <Footer />
    </>
  )
}
