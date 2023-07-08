import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  width: "100%",
}));

const MenuDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "50%",
    background:
      "linear-gradient(312deg, hsl(0, 96%, 28%) 0%, hsl(0, 0%, 0%) 100%)",
  },
}));

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIconRotated, setMenuIconRotated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIconRotated(!menuIconRotated);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TransparentAppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <img
              src={require("../../assets/logo-1.png")}
              alt="Imagem"
              style={{
                maxWidth: "100px",
                maxHeight: "100%",
              }}
            />
          </Box>
          <Box>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{
                transform: menuIconRotated ? "rotate(90deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
                border: "none",
              }}
            >
              <img
                src={require("../../assets/icon-academia.png")}
                alt="Logo"
                style={{ height: "50px", width: "auto" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </TransparentAppBar>
      <MenuDrawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <img
          src={require("../../assets/logo.png")}
          alt="Imagem"
          style={{
            maxWidth: "150px",
            maxHeight: "100%",
            margin: 20,
          }}
        />
        <List>
          <ListItem>
            <ListItemText
              color="#fff"
              primary="Home"
              primaryTypographyProps={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Sobre mim"
              primaryTypographyProps={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Fotos"
              primaryTypographyProps={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Contato"
              primaryTypographyProps={{ color: "#fff" }}
            />
          </ListItem>
        </List>
      </MenuDrawer>
    </Box>
  );
};

export default Navbar;
