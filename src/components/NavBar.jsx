import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/auth";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo-dark.png";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

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
      <Toolbar sx={{ backgroundColor: "#FCEA10" }}>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" alignItems="center">
          <a
            href="/"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{ width: 300, alignSelf: "center" }}
              src={logo}
              alt="logo"
            />
          </a>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
            }}
          >
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
            {profile.admin === true ? (
              <NavLink
                className={({ isActive }) =>
                  `btn ${isActive ? " secondary" : " primary"}`
                }
                to="/account/cancel"
              >
                Canceladas
              </NavLink>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              width: "10%",
            }}
          >
            <IconButton onClick={onLogout}>
              <LoginOutlined className="iconColor" />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
