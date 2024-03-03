import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "@material/web/all";
import "./NavigationBar.css";
import "../index.css";


function NavigationBar() {
    return (
            <AppBar position="static" color="inherit" style={{ backgroundColor: "var(--md-sys-color-background)"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="toolbar">
                        <div>
                            <md-filled-tonal-button href="/home">Главная</md-filled-tonal-button>
                            <md-text-button href="/lessons">Уроки</md-text-button>
                            <md-text-button href="/group">Группы</md-text-button>
                        </div>

                        <div>
                            <md-text-button href="#account">Личный кабинет</md-text-button>
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
