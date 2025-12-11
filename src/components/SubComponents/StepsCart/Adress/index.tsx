import { useDispatch } from "react-redux"
import { ContinueButton } from "../../ContinueButton"
import { EntregaDiv, EntregaInfoDiv, EntregaInfoDivGrid, EntregaInput, EntregaLabel, EntregaTitle } from "../styles"
import { NextFunction, PrevFunction } from "../../../../store/slices/CartSlice"
import { ErrorMessage, Formik, Form } from "formik"
import * as Yup from 'yup'
import { ErrorTooltip } from "../Payment/styles"

export const CartEntrega = () => {
    //Verification
    const EntregaSchema = Yup.object({
        Nome: Yup.string()
            .required("Digite o nome de quem irá receber"),
    
        Rua: Yup.string()
            .required("Digite o nome da rua"),
    
        Cidade: Yup.string()
            .required("Informe a cidade"),
    
        CEP: Yup.string()
            .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
            .required("Informe o CEP"),
    
        Numero: Yup.string()
            .required("Informe o numero"),
    
        Complemento: Yup.string()
            .notRequired(),
    });
    const Dispatch = useDispatch()
    return (
        <Formik initialValues={{
            Nome: '',
            Rua: '',
            Cidade: '',
            CEP: '',
            Numero: '',
            Complemento: ''
        }}
        validationSchema={EntregaSchema}
        onSubmit={(value) => {
            console.log(value)
            Dispatch(NextFunction())

        }}>
            <Form>
                <EntregaDiv>
                    <EntregaTitle>Entrega</EntregaTitle>
                    <EntregaInfoDiv>
                        <EntregaLabel>Quem irá receber</EntregaLabel>
                        <EntregaInput name="Nome" placeholder="Nome" />
                        <ErrorMessage name='Nome' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                    </EntregaInfoDiv>
                    <EntregaInfoDiv>
                        <EntregaLabel>Endereço</EntregaLabel>
                        <EntregaInput name="Rua" placeholder="Rua" />
                        <ErrorMessage name='Rua' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                    </EntregaInfoDiv>
                    <EntregaInfoDiv>
                        <EntregaLabel>Cidade</EntregaLabel>
                        <EntregaInput name="Cidade" placeholder="Cidade" />
                        <ErrorMessage name='Cidade' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                    </EntregaInfoDiv>
                    <EntregaInfoDivGrid>
                        <EntregaInfoDiv>
                            <EntregaLabel>CEP</EntregaLabel>
                            <EntregaInput name="CEP" placeholder="CEP" />
                            <ErrorMessage name='CEP' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                        </EntregaInfoDiv>
                        <EntregaInfoDiv>
                            <EntregaLabel>Número</EntregaLabel>
                            <EntregaInput name="Número" placeholder="Número" />
                            <ErrorMessage name='Numero' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                        </EntregaInfoDiv>
                    </EntregaInfoDivGrid>
                        <EntregaInfoDiv>
                            <EntregaLabel>Complemento (Opcional)</EntregaLabel>
                            <EntregaInput name="Complemento" placeholder="Complemento" />
                            <ErrorMessage name='Complemento' render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>}/>
                        </EntregaInfoDiv>
                        <div className="buttons">
                            <ContinueButton type="submit">Continuar para o Pagamento</ContinueButton>
                            <div className="buttons2">
                                <ContinueButton onClick={() => Dispatch(PrevFunction())}>Voltar para o Carrinho</ContinueButton>
                            </div>
                        </div>
                </EntregaDiv>
            </Form>
        </Formik>
    )
}