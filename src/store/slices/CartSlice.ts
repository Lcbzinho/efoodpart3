import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

type Delivery = {
  receiver: string
  address: Address
}

type Payment = {
  card: {
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type CartState = {
  items: Prato[]
  step: number
  clicked: boolean
  delivery: Delivery | null
  payment: Payment | null
}
const initialState: CartState = {
  items: [],
  step: 0,
  clicked: false,
  delivery: null,
  payment: null,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    RemoveItem: (state, action: PayloadAction<Prato>) => {
      state.items = state.items.filter((item) => item.nome !== action.payload.nome)
    },
    NextFunction: (state) => {
      state.step += 1
    },
    PrevFunction: (state) => {
      state.step -= 1
    },
    FinishingFunction: (state) => {
      state.delivery = null
      state.payment = null
      state.items = []
      state.step = 0
    },
    Clicked: (state) => {
      state.clicked = !state.clicked
    },
    SaveDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
    },
    SavePayment: (state, action: PayloadAction<Payment>) => {
      state.payment = action.payload
    },
  },
})

export const {
  Clicked,
  FinishingFunction,
  addItem,
  RemoveItem,
  NextFunction,
  PrevFunction,
  SaveDelivery,
  SavePayment,
} = cartSlice.actions
export default cartSlice.reducer
