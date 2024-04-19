import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Alert, Button, Grid, TextField, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginWhitEmailPassword } from "../../store/auth";

const formInitial = {
  email: [
    (value) => value.includes("@"),
    "Favor de proporcionar un correo valido",
  ],
  password: [
    (value) => value.length >= 6,
    "El password debe tener mas de seis letras",
  ],
};

export const LoginPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const formValidations = formInitial;

  const {
    formState,
    email,
    password,
    onInputChange,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(
    {
      email: "",
      password: "",
    },
    formValidations
  );

  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startLoginWhitEmailPassword(formState));
  };

  return (
    <AuthLayout title="Iniciar sesión">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1 }}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
