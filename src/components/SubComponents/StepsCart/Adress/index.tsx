import { useDispatch } from "react-redux"
import { ContinueButton } from "../../ContinueButton"
import { EntregaDiv, EntregaInfoDiv, EntregaInfoDivGrid, EntregaInput, EntregaLabel, EntregaTitle } from "../styles"
import { NextFunction, PrevFunction } from "../../../../store/slices/CartSlice"

export const CartEntrega = () => {
    const Dispatch = useDispatch()
    return (
        <EntregaDiv>
            <EntregaTitle>Entrega</EntregaTitle>
            <EntregaInfoDiv>
                <EntregaLabel>Quem irá receber</EntregaLabel>
                <EntregaInput placeholder="Nome" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Endereço</EntregaLabel>
                <EntregaInput placeholder="Rua" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Cidade</EntregaLabel>
                <EntregaInput placeholder="Cidade" />
            </EntregaInfoDiv>
            <EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>CEP</EntregaLabel>
                    <EntregaInput placeholder="CEP" />
                </EntregaInfoDiv>
                <EntregaInfoDiv>
                    <EntregaLabel>Número</EntregaLabel>
                    <EntregaInput placeholder="Número" />
                </EntregaInfoDiv>
            </EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>Complemento (Opcional)</EntregaLabel>
                    <EntregaInput placeholder="Complemento" />
                </EntregaInfoDiv>
                <div className="buttons">
                    <ContinueButton onClick={() => Dispatch(NextFunction())}>Continuar para o Pagamento</ContinueButton>
                    <div className="buttons2">
                        <ContinueButton onClick={() => Dispatch(PrevFunction())}>Voltar para o Carrinho</ContinueButton>
                    </div>
                </div>
        </EntregaDiv>
    )
}