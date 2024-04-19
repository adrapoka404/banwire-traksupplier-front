import { Toolbar, Box } from "@mui/material";
import { NavBar } from "../../components/NavBar";

const drawerWidth = 280;

export const AccountLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} />
      {/* <SideBar drawerWidth={{ drawerWidth }} /> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
