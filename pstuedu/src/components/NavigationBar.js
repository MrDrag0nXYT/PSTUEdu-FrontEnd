import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "@material/web/all";
import "./NavigationBar.css";
import "../index.css";
import { useLocation } from "react-router-dom";

function NavigationBar() {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="sticky"
      className="nav"
      color="inherit"
      style={{ backgroundColor: "var(--md-sys-color-background)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <div className="left">
            {pathname === "/home" ? (
              <md-filled-tonal-button href="/home">
                Главная
              </md-filled-tonal-button>
            ) : (
              <md-text-button href="/home">Главная</md-text-button>
            )}

            {pathname === "/lessons" ? (
              <md-filled-tonal-button href="/lessons">
                Уроки
              </md-filled-tonal-button>
            ) : (
              <md-text-button href="/lessons">Уроки</md-text-button>
            )}

            {pathname === "/group" ? (
              <md-filled-tonal-button href="/group">
                Группы
              </md-filled-tonal-button>
            ) : (
              <md-text-button href="/group">Группы</md-text-button>
            )}
          </div>

          <div className="right">
            {pathname === "/account" ? (
              <md-filled-tonal-button href="/account">
                Личный кабинет
              </md-filled-tonal-button>
            ) : (
              <md-text-button href="/account">Личный кабинет</md-text-button>
            )}
            <md-outlined-icon-button>
              <md-icon>light_mode</md-icon>
            </md-outlined-icon-button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
