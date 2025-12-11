import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type CartState = {
  items: Prato[],
  step: number
}

const initialState: CartState = {
  items: [],
  step: 0
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
    }
  },
})

export const { addItem, RemoveItem, NextFunction, PrevFunction } = cartSlice.actions
export default cartSlice.reducer
