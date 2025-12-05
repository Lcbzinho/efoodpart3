import { useParams } from 'react-router'
import { RestaurantBanner } from '../../components/Restaurant/RestaurantBanner'
import { RestaurantBody } from '../../components/Restaurant/RestaurantBody'
import { RestaurantHeader } from '../../components/Restaurant/RestaurantHeader'
import { Footer } from '../../components/SubComponents/Footer'
import { useEffect, useState } from 'react'
import Erro from '../../assets/images/404.jpg'
import { ErrorDiv } from './styles'
import { Modal } from '../../components/SubComponents/Modal'

type RestaurantType = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

export const Restaurant = () => {
  const { id } = useParams()
  const [Restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [Carregando, setCarregando] = useState(true)

  const [clicked, setClicked] = useState(false)
  const [ClickedRestaurant, setClickedRestaurant] = useState<RestaurantType["cardapio"][0] | null>(null)

  useEffect(() => {
    async function load() {
      const request = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      const data = await request.json()

      const RightRestaurant = data.find((item: RestaurantType) => item.id === Number(id))

      setRestaurant(RightRestaurant || null)
      setCarregando(false)
    }

    load()
  }, [id])



  const HandleCloseClicked = (data:boolean) => {
    setClicked(data)
  }

  const HandleChangeClicked = (data:boolean, id: number) => {
    setClicked(data)
    if (!Restaurant) return

    const item = Restaurant.cardapio.find(item => item.id === id)

    if (item) {
      setClickedRestaurant(item)
    }
  }


  if (Carregando)
    return (
      <ErrorDiv>
        <span>Loading...</span>
      </ErrorDiv>
    )


  if (!Restaurant)
    return (
      <ErrorDiv>
        <img src={Erro} alt="Erro 404, 404, error, error 404" />
      </ErrorDiv>
    )



  return (
    <>
      {clicked && ClickedRestaurant && <Modal cardapio={ClickedRestaurant} Clicked={HandleCloseClicked} />}
      <RestaurantHeader itens={0} />
      <RestaurantBanner desc={Restaurant.titulo} title={Restaurant.tipo} img={Restaurant.capa} />
      <RestaurantBody Clicked={HandleChangeClicked} Cardapio={Restaurant.cardapio} />
      <Footer />
    </>
  )
}
