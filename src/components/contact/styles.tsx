import { TextField } from "@mui/material";
import styled from "styled-components";

import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  display: inline-block;
  padding: 12px 32px;
  border-radius: 3px;
  transform: skew(-10deg);
  text-transform: uppercase;
  background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30%;
    height: 70%;
    opacity: 0;
    border-radius: 3px;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 30%;
    height: 70%;
    opacity: 0;
    transition: 0.7s ease;
    border-radius: 3px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
  }

  &:hover {
    transform: skew(-10deg) scale(1.05);
    transition: 0.7s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const InputForm = styled(TextField)`
  border: 2px solid #a30000;
  border-radius: 5px;
  background-color: "transparent";
  color: #ffffff;
  padding: 10px;

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #a80000;
    background-color: "transparent";
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #b60000;
  }

  & .MuiFormLabel-root {
    color: #ffffff;
    font-size: 14px;
    @media (max-width: 800px) {
      font-size: 12px;
    }
    & .MuiInputAdornment-root {
      font-size: 10px;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  &:hover {
    & .MuiOutlinedInput-root {
      border-color: #a30000 !important;
    }
  }
`;
