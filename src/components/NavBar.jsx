import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import {
  LoginOutlined,
  MenuOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={
        {
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
        }
      }
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? " secondary" : " primary"}`
              }
              to="/account/null"
            >
              Por pagar
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? " secondary" : " primary"}`
              }
              to="/account/pending"
            >
              Pendientes de pago
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? " secondary" : " primary"}`
              }
              to="/account/pay"
            >
              Pagadas
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? " secondary" : " primary"}`
              }
              to="/account/cancel"
            >
              Canceladas
            </NavLink>
          </div>
          <div>
            <IconButton onClick={onLogout} color="error">
              <LoginOutlined />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
