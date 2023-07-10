import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  nome: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

interface InitialState {
  contact: Contact;
}

const initialState: InitialState = {
  contact: {
    nome: "",
    dataNascimento: "",
    email: "",
    telefone: "",
  },
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.contact.nome = action.payload;
    },
    addBirthday: (state, action) => {
      state.contact.dataNascimento = action.payload;
    },
    addEmail: (state, action) => {
      state.contact.email = action.payload;
    },
    addCellPhone: (state, action) => {
      state.contact.telefone = action.payload;
    },
  },
});

export const { addName, addBirthday, addCellPhone, addEmail } =
  typeSlice.actions;
export default typeSlice.reducer;
