/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Button,
  Grid,
  Step,
  StepButton,
  StepContent,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "redux/redux";
import {
  addType,
  setActiveStep,
  setCompletedSteps,
} from "redux/contact/type-contact";

const FormStepper: React.FC = () => {
  const dispach = useAppDispatch();
  const { contact, activeStep, completedSteps } = useAppSelector(
    (rootReducer) => rootReducer?.typeSlice || null
  );

  const steps = [
    {
      label: "Step 1",
      content: (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              fullWidth
              value={contact.nome}
              onChange={(e) =>
                dispach(
                  addType({
                    nome: e.target.value,
                    dataNascimento: "",
                    email: "",
                    telefone: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    problemaSaude: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Data de Nascimento"
              fullWidth
              value={contact.dataNascimento}
              onChange={(e) =>
                dispach(
                  addType({
                    dataNascimento: e.target.value,
                    nome: "",
                    email: "",
                    telefone: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    problemaSaude: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={contact.email}
              onChange={(e) =>
                dispach(
                  addType({
                    email: e.target.value,
                    nome: "",
                    dataNascimento: "",
                    telefone: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    problemaSaude: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Telefone"
              fullWidth
              value={contact.telefone}
              onChange={(e) =>
                dispach(
                  addType({
                    telefone: e.target.value,
                    nome: "",
                    dataNascimento: "",
                    email: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    problemaSaude: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Step 2",
      content: (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Já treinou antes? Se sim, quanto tempo?"
              fullWidth
              value={contact.treinouAntes}
              onChange={(e) =>
                dispach(
                  addType({
                    treinouAntes: e.target.value,
                    nome: "",
                    dataNascimento: "",
                    email: "",
                    telefone: "",
                    tempoTreino: "",
                    problemaSaude: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tem algum problema de saúde?"
              fullWidth
              value={contact.problemaSaude}
              onChange={(e) =>
                dispach(
                  addType({
                    problemaSaude: e.target.value,
                    nome: "",
                    dataNascimento: "",
                    email: "",
                    telefone: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    objetivo: "",
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Qual seu objetivo?"
              fullWidth
              value={contact.objetivo}
              onChange={(e) =>
                dispach(
                  addType({
                    objetivo: e.target.value,
                    nome: "",
                    dataNascimento: "",
                    email: "",
                    telefone: "",
                    treinouAntes: "",
                    tempoTreino: "",
                    problemaSaude: "",
                  })
                )
              }
            />
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Step 3",
      content: (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Resumo:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Nome: {contact.nome}
              <br />
              Data de Nascimento: {contact.dataNascimento}
              <br />
              Email: {contact.email}
              <br />
              Telefone: {contact.telefone}
              <br />
              Já treinou antes? Se sim, quanto tempo? {contact.tempoTreino}
              <br />
              Tem algum problema de saúde? {contact.problemaSaude}
              <br />
              Qual seu objetivo? {contact.objetivo}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
  ];

  const handleStepClick = (step: number) => {
    dispach(setActiveStep(step));
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      dispach(setActiveStep(activeStep + 1));
      dispach(setCompletedSteps(new Set([...completedSteps, activeStep])));
    }
  };

  const handleBack = () => {
    dispach(setActiveStep(activeStep - 1));
  };

  return (
    <Grid container justifyContent="center" mt={2} bgcolor={"#fff"}>
      <Grid item xs={12} md={8}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} completed={completedSteps.has(index)}>
              <StepButton onClick={() => handleStepClick(index)}>
                {step.label}
              </StepButton>
              <StepContent>
                {step.content}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Próximo
                </Button>
                {activeStep !== 0 && (
                  <Button variant="contained" onClick={handleBack}>
                    Voltar
                  </Button>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default FormStepper;
