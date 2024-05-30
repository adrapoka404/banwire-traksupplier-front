import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { Alert, Button, Grid, TextField, Link } from "@mui/material";

// import { ErrorMessage, Field, Form, Formik } from "formik";
import { startSaveProfile } from "../../store/profile";

const formInitial = {
  fname: [
    (value) => value?.length >= 3,
    "Favor de proporcionar nombre valido para el perfil",
  ],
  mname: [
    (value) => value?.length >= 3,
    "Favor de proporcionar apellido paterno valido para el perfil",
  ],
  lname: [
    (value) => value?.length >= 3,
    "Favor de proporcionar apellido materno valido para el perfil",
  ],
  email: [
    (value) => value?.length >= 3,
    "Favor de proporcionar email valido para el perfil",
  ],
  phone: [
    (value) => value?.length >= 3,
    "Favor de proporcionar teléfono valido para el perfil",
  ],
  addr: [
    (value) => value?.length >= 3,
    "Favor de proporcionar direccion valida para el perfil",
  ],
  city: [
    (value) => value?.length >= 3,
    "Favor de proporcionar una ciudad valida para el perfil",
  ],
  state: [
    (value) => value?.length >= 3,
    "Favor de proporcionar un estado valido para el perfil",
  ],
  country: [
    (value) => value?.length >= 2,
    "Favor de proporcionar país valido para el perfil",
  ],
  zip: [
    (value) => value?.length >= 3,
    "Favor de proporcionar codigo postal valido para el perfil",
  ],
};

export const FormProfile = () => {
  const { isWorking, profile } = useSelector((state) => state.profile);
  const { email: emailAuth } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const formValidations = formInitial;

  const {
    formState,
    fname,
    mname,
    lname,
    email,
    phone,
    addr,
    city,
    state,
    country,
    zip,
    onInputChange,
    fnameValid,
    mnameValid,
    lnameValid,
    emailValid,
    phoneValid,
    addrValid,
    cityValid,
    stateValid,
    countryValid,
    zipValid,
    isFormValid,
    onResetForm,
  } = useForm(
    {
      fname: profile?.fname ? profile.fname : "",
      mname: profile?.mname ? profile.mname : "",
      lname: profile?.lname ? profile.lname : "",
      email: emailAuth ? emailAuth : profile?.email ? profile.email : "",
      phone: profile?.phone ? profile.phone : "",
      addr: profile?.addr ? profile.addr : "",
      city: profile?.city ? profile.city : "",
      state: profile?.city ? profile.state : "",
      country: profile?.country ? profile.country : "",
      zip: profile?.zip ? profile.zip : "",
    },
    formValidations
  );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startSaveProfile(formState));

    onResetForm();
  };

  return (
    <Grid container>
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre(s)"
              type="text"
              placeholder="Raymundo"
              fullWidth
              name="fname"
              value={fname}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={fnameValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Apellido paterno"
              type="text"
              placeholder="Rivera"
              fullWidth
              name="mname"
              value={mname}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={mnameValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Apellido materno"
              type="text"
              placeholder="González"
              fullWidth
              name="lname"
              value={lname}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={lnameValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mi.correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Teléfono"
              type="text"
              placeholder="5566778899"
              fullWidth
              name="phone"
              value={phone}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={phoneValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Direción de facturación"
              type="text"
              placeholder="Lope de Vega 107"
              fullWidth
              name="addr"
              value={addr}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={addrValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Ciudad"
              type="text"
              placeholder="Miguel Hidalgo"
              fullWidth
              name="city"
              value={city}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={cityValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Estado"
              type="text"
              placeholder="CDMX"
              fullWidth
              name="state"
              value={state}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={stateValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="País"
              type="text"
              placeholder="MX"
              fullWidth
              name="country"
              value={country}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={countryValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <TextField
              label="Código postal"
              type="text"
              placeholder="11560"
              fullWidth
              name="zip"
              value={zip}
              onChange={onInputChange}
              error={formSubmitted}
              helperText={zipValid}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isWorking}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#ff8b00" }}
            >
              {profile?.id ? "Editar" : "Guardar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
