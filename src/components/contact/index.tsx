import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InputMask from "react-input-mask";

import { useAppDispatch, useAppSelector } from "redux/redux";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import {
  addName,
  addBirthday,
  addCellPhone,
  addEmail,
} from "redux/contact/type-contact";
import { InputForm, StyledButton } from "./styles";

const FormStepper: React.FC = () => {
  const dispatch = useAppDispatch();
  const { contact } = useAppSelector(
    (rootReducer) => rootReducer?.typeSlice || null
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { nome, dataNascimento, email, telefone } = contact;

    const url = `https://api.whatsapp.com/send?phone=5528999636120&text=Olá Lucas%0AMe chamo%0A${nome}. email:%0A${email}%0ATelefone:%0A${telefone}%0AE Data de nascimento:%0A${dataNascimento}`;

    window.open(url);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      id="contact"
    >
      <Grid item xs={10} md={8} lg={6} xl={4}>
        <Box bgcolor="#000000" p={3} borderRadius={3}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Typography variant="h4" color="#fff">
              Contato
            </Typography>
            <MailOutlineIcon
              sx={{
                color: "red",
                width: "100px",
                height: "40px",
                marginTop: "5px",
              }}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputForm
                label="Nome"
                fullWidth
                value={contact.nome}
                onChange={(e) => dispatch(addName(e.target.value))}
                autoComplete="off"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="99/99/9999"
                placeholder="Data de Nascimento"
                value={contact.dataNascimento}
                onChange={(e) => dispatch(addBirthday(e.target.value))}
              >
                <InputForm
                  label="Data de Nascimento"
                  fullWidth
                  InputProps={{
                    style: { color: "white" },
                    autoComplete: "off",
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <InputForm
                label="Email"
                fullWidth
                autoComplete="none"
                value={contact.email}
                onChange={(e) => dispatch(addEmail(e.target.value))}
                InputProps={{
                  style: { color: "white" },
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="(99) 99999-9999"
                placeholder="Telefone"
                value={contact.telefone}
                onChange={(e) => dispatch(addCellPhone(e.target.value))}
              >
                <InputForm
                  label="Telefone"
                  fullWidth
                  InputProps={{
                    style: { color: "white" },
                    autoComplete: "off",
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </InputMask>
            </Grid>
            <Grid item mt={2} mb={4}>
              <StyledButton
                variant="contained"
                endIcon={<WhatsAppIcon sx={{ width: "50px", color: "#fff" }} />}
                onClick={handleSubmit}
              >
                <Typography color="#fff">Enviar</Typography>
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormStepper;
