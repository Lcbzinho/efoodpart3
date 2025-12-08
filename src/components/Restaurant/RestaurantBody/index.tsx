import { RestaurantCard } from '../RestaurantCard'
import { RestaurantBodyContainer, RestaurantContainer } from './styles'

type Props = {
  Clicked: (data: boolean, id: number) => void
  Cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

export const RestaurantBody = ({ Cardapio, Clicked }: Props) => {
  return (
    <RestaurantBodyContainer>
      <RestaurantContainer>
        {Cardapio.map((item, index) => (
          <RestaurantCard
            key={item.id}
            id={index}
            CardImg={item.foto}
            CardDesc={item.descricao}
            CardTitle={item.nome}
            Clicked={Clicked}
          />
        ))}
      </RestaurantContainer>
    </RestaurantBodyContainer>
  )
}
