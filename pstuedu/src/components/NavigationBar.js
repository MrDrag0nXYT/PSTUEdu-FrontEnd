import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "@material/web/all";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <md-filled-tonal-button href="#main">Главная</md-filled-tonal-button>
          <md-text-button href="#lessons">Уроки</md-text-button>
          <md-text-button href="#account">Личный кабинет</md-text-button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
