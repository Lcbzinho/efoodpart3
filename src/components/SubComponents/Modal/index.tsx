import { BuyButton } from '../BuyButton'
import {
  ModalCloseButton,
  ModalContainer,
  ModalDesc,
  ModalImage,
  ModalItem,
  ModalTitle,
} from './styles'
import Close from '../../../assets/images/Icons/close.png'

type Props = {
  cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }
  Clicked: (data: boolean) => void
}

export const Modal = ({cardapio, Clicked}: Props) => {
  return (
    <>
      <ModalContainer>
        <div>
          <ModalItem>
            <ModalCloseButton onClick={() => Clicked(false)} src={Close} />
            <ModalImage src={cardapio.foto} />
            <div>
              <ModalTitle>{cardapio.nome}</ModalTitle>
              <ModalDesc className="principalDesc">
                {cardapio.descricao}
              </ModalDesc>
              <ModalDesc>
                Serve: <span>{cardapio.porcao}</span>
              </ModalDesc>
              <BuyButton value={cardapio.preco} />
            </div>
          </ModalItem>
        </div>
      </ModalContainer>
    </>
  )
}
