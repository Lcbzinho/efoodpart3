import { useDispatch } from "react-redux"
import { EntregaDiv, EntregaInfoDiv, EntregaInput, EntregaLabel, EntregaTitle } from "../styles"
import { ContinueButton } from "../../ContinueButton"
import { NextFunction, PrevFunction } from "../../../../store/slices/CartSlice"
import { EntregaInfoDivGrid, EntregaInfoDivGridMesAno } from "./styles"

export const PaymentCart = () => {
    const Dispatch = useDispatch()
    return (
        <EntregaDiv>
            <EntregaTitle>Entrega</EntregaTitle>
            <EntregaInfoDiv>
                <EntregaLabel>Nome</EntregaLabel>
                <EntregaInput placeholder="Nome" />
            </EntregaInfoDiv>
            <EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>Numero do Cartao</EntregaLabel>
                    <EntregaInput placeholder="Numero" />
                </EntregaInfoDiv>
                <EntregaInfoDiv>
                    <EntregaLabel>CVV</EntregaLabel>
                    <EntregaInput placeholder="CVV" />
                </EntregaInfoDiv>
            </EntregaInfoDivGrid>
            <EntregaInfoDivGridMesAno>
                <EntregaInfoDiv>
                    <EntregaLabel>Mês de Vencimento</EntregaLabel>
                    <EntregaInput placeholder="Mês" />
                </EntregaInfoDiv>
                <EntregaInfoDiv>
                    <EntregaLabel>Ano de Vencimento</EntregaLabel>
                    <EntregaInput placeholder="Ano" />
                </EntregaInfoDiv>
            </EntregaInfoDivGridMesAno>
                <div className="buttons">
                    <ContinueButton onClick={() => Dispatch(NextFunction())}>Finalizar Compra</ContinueButton>
                    <div className="buttons2">
                        <ContinueButton onClick={() => Dispatch(PrevFunction())}>Voltar para o Endereço</ContinueButton>
                    </div>
                </div>
        </EntregaDiv>   
    )
}