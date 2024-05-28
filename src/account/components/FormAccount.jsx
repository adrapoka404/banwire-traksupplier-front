import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { Autocomplete, Button, Grid, TextField, Box } from "@mui/material";

import { startAccountEdit, startSaveAccount } from "../../store/account";

import { fetchUsers } from "../../firebase/provider";

const formInitial = {
  conceptAccount: [
    (value) => value?.length >= 3,
    "Favor de proporcionar un concepto para la cuenta",
  ],
  amountAccount: [
    (value) => value >= 0,
    "El monto de la cuenta debe ser mayor a 0",
  ],
  userAccount: [
    (value) => value?.length > 0,
    "Favor de proporcionar un usuario para la cuenta",
  ],
};

export const FormAccount = () => {
  const { isWorking, active } = useSelector((state) => state.account);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const formValidations = formInitial;

  const {
    formState,
    conceptAccount,
    amountAccount,
    userAccount,
    onInputChange,
    conceptAccountValid,
    amountAccountValid,
    userAccountValid,
    isFormValid,
    onResetForm,
  } = useForm(
    {
      conceptAccount: active ? active.conceptAccount : "",
      amountAccount: active ? active.amountAccount : "",
      userAccount: active ? active.userAccount : "",
    },
    formValidations
  );

  useEffect(() => {
    const loadUsers = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };
    loadUsers();
  }, []);

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
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Autocomplete
            options={users}
            getOptionLabel={(option) =>
              `${option.displayName} (${option.email})`
            }
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.displayName} ({option.email})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Cliente"
                placeholder="tester@mail.com"
                fullWidth
                name="userAccount"
                error={!!userAccountValid && formSubmitted}
                helperText={userAccountValid}
              />
            )}
            value={users.find((user) => user.email === userAccount) || null}
            onChange={(event, newValue) => {
              onInputChange({
                target: {
                  name: "userAccount",
                  value: newValue ? newValue.id : "",
                },
              });
            }}
          />
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
              {active?.id ? "Editar" : "Guardar"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
