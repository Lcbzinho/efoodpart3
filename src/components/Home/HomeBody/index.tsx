import { Card } from '../../SubComponents/Card'
import { HomeBodyContainer, BodyContainer } from './styles'

import spaghetti from '../../../assets/images/Restaurants/Spaghetti.png'
import sushi from '../../../assets/images/Restaurants/sushi.png'

export const Body = () => {
  return (
    <BodyContainer>
      <div className="container">
        <HomeBodyContainer>
          <Card
            image={spaghetti}
            title="Italian Spaghetti"
            rating={4.8}
            desc="La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas, and incredible risottos, all in the comfort of your home. Fast delivery, beautifully packaged dishes, and unforgettable flavor. Order now!"
            link='restaurant/1'
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Order the best of Japanese cuisine from the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving home with our delivery service!"
            link="restaurant/1"
          />
          <Card
            image={spaghetti}
            title="Italian Spaghetti"
            rating={4.8}
            desc="La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas, and incredible risottos, all in the comfort of your home. Fast delivery, beautifully packaged dishes, and unforgettable flavor. Order now!"
            link="restaurant/1"          
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Order the best of Japanese cuisine from the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving home with our delivery service!"
            link="restaurant/1"
          />
          <Card
            image={spaghetti}
            title="Italian Spaghetti"
            rating={4.8}
            desc="La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas, and incredible risottos, all in the comfort of your home. Fast delivery, beautifully packaged dishes, and unforgettable flavor. Order now!"
            link="restaurant/1"          
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Order the best of Japanese cuisine from the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving home with our delivery service!"
            link="restaurant/1"
          />
        </HomeBodyContainer>
      </div>
    </BodyContainer>
  )
}
