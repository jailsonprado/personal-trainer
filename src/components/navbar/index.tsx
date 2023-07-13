import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  Box,
} from "@mui/material";
import { Link } from "./styles";

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

const Navbar: React.FC = ({ props }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIconRotated, setMenuIconRotated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIconRotated(!menuIconRotated);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TransparentAppBar position="absolute">
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
            <Link href="#home" className="page-scroll" onClick={toggleMenu}>
              <ListItemText
                color="#fff"
                primary="Home"
                primaryTypographyProps={{ color: "#fff" }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#about" className="page-scroll" onClick={toggleMenu}>
              <ListItemText
                primary="Sobre mim"
                primaryTypographyProps={{ color: "#fff" }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#photos" className="page-scroll" onClick={toggleMenu}>
              <ListItemText
                primary="Fotos"
                primaryTypographyProps={{ color: "#fff" }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contact" className="page-scroll" onClick={toggleMenu}>
              <ListItemText
                primary="Contato"
                primaryTypographyProps={{ color: "#fff" }}
              />
            </Link>
          </ListItem>
        </List>
      </MenuDrawer>
    </Box>
  );
};

export default Navbar;
