import { useDispatch } from "react-redux"
import { ContinueButton } from "../../ContinueButton"
import { EntregaDiv, EntregaInfoDiv, EntregaInfoDivGrid, EntregaInput, EntregaLabel, EntregaTitle } from "../styles"
import { NextFunction, PrevFunction } from "../../../../store/slices/CartSlice"
import { ErrorMessage } from "formik"

export const CartEntrega = () => {
    const Dispatch = useDispatch()
    return (
        <EntregaDiv>
            <EntregaTitle>Entrega</EntregaTitle>
            <EntregaInfoDiv>
                <EntregaLabel>Quem irá receber</EntregaLabel>
                <EntregaInput name="Nome" placeholder="Nome" />
                <ErrorMessage name="Nome" component="span" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Endereço</EntregaLabel>
                <EntregaInput name="Rua" placeholder="Rua" />
                <ErrorMessage name="Rua" component="span" />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
                <EntregaLabel>Cidade</EntregaLabel>
                <EntregaInput name="Cidade" placeholder="Cidade" />
                <ErrorMessage name="Cidade" component="span" />
            </EntregaInfoDiv>
            <EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>CEP</EntregaLabel>
                    <EntregaInput name="CEP" placeholder="CEP" />
                    <ErrorMessage name="CEP" component="span" />
                </EntregaInfoDiv>
                <EntregaInfoDiv>
                    <EntregaLabel>Número</EntregaLabel>
                    <EntregaInput name="Número" placeholder="Número" />
                    <ErrorMessage name="Número" component="span" />
                </EntregaInfoDiv>
            </EntregaInfoDivGrid>
                <EntregaInfoDiv>
                    <EntregaLabel>Complemento (Opcional)</EntregaLabel>
                    <EntregaInput name="Complemento" placeholder="Complemento" />
                    <ErrorMessage name="Complemento" component="span" />
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