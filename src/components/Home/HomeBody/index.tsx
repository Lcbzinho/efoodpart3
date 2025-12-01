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
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
          <Card
            image={spaghetti}
            title="Italian Spaghetti"
            rating={4.8}
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
          <Card
            image={spaghetti}
            title="Italian Spaghetti"
            rating={4.8}
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
          <Card
            image={sushi}
            title="Japanese Sushi"
            rating={4.7}
            desc="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          />
        </HomeBodyContainer>
      </div>
    </BodyContainer>
  )
}
