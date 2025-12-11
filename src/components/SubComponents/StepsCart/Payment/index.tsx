import { useDispatch } from "react-redux"
import { EntregaDiv, EntregaInfoDiv, EntregaInput, EntregaLabel, EntregaTitle } from "../styles"
import { ContinueButton } from "../../ContinueButton"
import { NextFunction, PrevFunction } from "../../../../store/slices/CartSlice"
import { EntregaInfoDivGrid, EntregaInfoDivGridMesAno } from "./styles"
import { Form, Formik } from "formik"

export const PaymentCart = () => {
    const Dispatch = useDispatch()
    return (
        <Formik initialValues={{
                    Rua: '',
                    Numero: '',
                    CVV: '',
                    Mês: '',
                    Ano: '',
                }}
                onSubmit={(value) => {
                    console.log(value)
                    Dispatch(NextFunction())
                }}>
                <Form>
                    <EntregaDiv>
                        <EntregaTitle>Entrega</EntregaTitle>
                        <EntregaInfoDiv>
                            <EntregaLabel>Nome</EntregaLabel>
                            <EntregaInput name='Rua' placeholder="Nome" />
                        </EntregaInfoDiv>
                    <EntregaInfoDivGrid>
                        <EntregaInfoDiv>
                            <EntregaLabel>Numero do Cartao</EntregaLabel>
                            <EntregaInput name='Numero' placeholder="Numero" />
                        </EntregaInfoDiv>
                        <EntregaInfoDiv>
                            <EntregaLabel>CVV</EntregaLabel>
                            <EntregaInput name='CVV' placeholder="CVV" />
                        </EntregaInfoDiv>
                    </EntregaInfoDivGrid>
                    <EntregaInfoDivGridMesAno>
                        <EntregaInfoDiv>
                            <EntregaLabel>Mês de Vencimento</EntregaLabel>
                            <EntregaInput name='Mês' placeholder="Mês" />
                        </EntregaInfoDiv>
                        <EntregaInfoDiv>
                            <EntregaLabel>Ano de Vencimento</EntregaLabel>
                            <EntregaInput name='Ano' placeholder="Ano" />
                        </EntregaInfoDiv>
                    </EntregaInfoDivGridMesAno>
                        <div className="buttons">
                            <ContinueButton onClick={() => Dispatch(NextFunction())}>Finalizar Compra</ContinueButton>
                            <div className="buttons2">
                                <ContinueButton onClick={() => Dispatch(PrevFunction())}>Voltar para o Endereço</ContinueButton>
                            </div>
                        </div>
                </EntregaDiv>   
            </Form>
        </Formik>
    )
}