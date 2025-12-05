import {
  RestaurantCardAddButton,
  RestaurantCardDesc,
  RestaurantCardDiv,
  RestaurantCardImage,
  RestaurantCardTitle,
} from './styles'

type Props = {
  Clicked: (data: boolean, id: number) => void
  id: number
  CardImg: string
  CardTitle: string
  CardDesc: string
}

export const RestaurantCard = ({ CardDesc, CardImg, CardTitle, Clicked, id }: Props) => {
  return (
    <RestaurantCardDiv>
      <div>
        <RestaurantCardImage src={CardImg} />
        <RestaurantCardTitle>{CardTitle}</RestaurantCardTitle>
        <RestaurantCardDesc>{CardDesc}</RestaurantCardDesc>
      </div>
      <RestaurantCardAddButton onClick={() => Clicked(true, id)}>Add to Cart</RestaurantCardAddButton>
    </RestaurantCardDiv>
  )
}
