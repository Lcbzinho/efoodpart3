import { ButtonContainer, ButtonTitle } from "./styles"

type Props = {
    value: number
}

export const BuyButton = ({value}: Props) => {

    const ContarDecimal = (value: number) => {
        const decimal = String(value).split(".")[1]

        if (decimal) {
            return (decimal.length)
        } else {
            return 0
        }
        
    }

    return (
        <ButtonContainer>
            <ButtonTitle>Adicionar ao Carrinho - R$ {value}</ButtonTitle>
        </ButtonContainer>
    )
}