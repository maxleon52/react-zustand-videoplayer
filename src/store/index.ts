import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// Cada SLICE representa um pedaço do STATE que compoe toda a STORE
// Esses 3 Parâmetros são obrigatórios!
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux"],
  // Quais ações a interface pode fazer dentro do STATE
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

// STORE: É o estado global da APP
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

// getState: Retorna TODO o ESTADO
export type RootState = ReturnType<typeof store.getState>;

// Recriando o useSelector para "useAppSelector", porém, com toda Tipagem
// Quando for usar o "useAppSelector" para buscar as informações, o mesmo vai
// reconhecer a tipagem do Estador (STORE)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
