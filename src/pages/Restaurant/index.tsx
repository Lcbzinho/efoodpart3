import { useParams } from 'react-router'
import { RestaurantBanner } from '../../components/Restaurant/RestaurantBanner'
import { RestaurantBody } from '../../components/Restaurant/RestaurantBody'
import { RestaurantHeader } from '../../components/Restaurant/RestaurantHeader'
import { Footer } from '../../components/SubComponents/Footer'
import { useEffect, useState } from 'react'
import Erro from '../../assets/images/404.jpg'
import { ErrorDiv } from './styles'

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
      <RestaurantHeader itens={0} />
      <RestaurantBanner desc={Restaurant.titulo} title={Restaurant.tipo} img={Restaurant.capa} />
      <RestaurantBody Cardapio={Restaurant.cardapio} />
      <Footer />
    </>
  )
}
