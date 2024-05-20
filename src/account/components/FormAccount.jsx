import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { Alert, Button, Grid, TextField, Link } from "@mui/material";

import { startAccountEdit, startSaveAccount } from "../../store/account";

const formInitial = {
  conceptAccount: [
    (value) => value?.length >= 3,
    "Favor de proporcionar un concepto para la cuenta",
  ],
  amountAccount: [
    (value) => value >= 0,
    "El monto de la cuenta debe ser mayor a 0",
  ],
};

export const FormAccount = () => {
  const { isWorking, active } = useSelector((state) => state.account);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const formValidations = formInitial;

  const {
    formState,
    conceptAccount,
    amountAccount,
    onInputChange,
    conceptAccountValid,
    amountAccountValid,
    isFormValid,
    onResetForm,
  } = useForm(
    {
      conceptAccount: active ? active.conceptAccount : "",
      amountAccount: active ? active.amountAccount : "",
    },
    formValidations
  );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    if (active?.id) {
      dispatch(startAccountEdit(formState));
    } else {
      dispatch(startSaveAccount(formState));
    }

    onResetForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Concepto de cuenta"
            type="text"
            placeholder="Membresia GYM"
            fullWidth
            name="conceptAccount"
            value={conceptAccount}
            onChange={onInputChange}
            error={formSubmitted}
            helperText={conceptAccountValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Monto"
            type="text"
            placeholder="100.00"
            fullWidth
            name="amountAccount"
            value={amountAccount}
            onChange={onInputChange}
            error={formSubmitted}
            helperText={amountAccountValid}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isWorking}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#ff8b00",}}
            >
              {active?.id ? "Editar" : "Guardar"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
