import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  nome: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  treinouAntes: string;
  tempoTreino: string;
  problemaSaude: string;
  objetivo: string;
}

interface InitialState {
  contact: Contact;
  activeStep: number;
  completedSteps: Set<number>;
}

const initialState: InitialState = {
  contact: {
    nome: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    treinouAntes: "",
    tempoTreino: "",
    problemaSaude: "",
    objetivo: "",
  },
  activeStep: 0,
  completedSteps: new Set<number>(),
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    addType: (state, action: PayloadAction<Contact>) => {
      state.contact = action.payload;
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
    setCompletedSteps: (state, action: PayloadAction<Set<number>>) => {
      state.completedSteps = action.payload;
    },
  },
});

export const { addType, setActiveStep, setCompletedSteps } = typeSlice.actions;
export default typeSlice.reducer;
