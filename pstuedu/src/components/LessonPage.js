import React from 'react'
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "./Card";
import "../css/lessonpage.css";
import "@material/web/all";

export default function LessonPage() {
    return (
        <div>
            <Container>
                <h1>Название домашки</h1>

                <div>
                    <h2>Вложения</h2>

                    <Paper className="cards" elevation={0}
                           sx={{bgcolor: 'var(--md-sys-color-background)', height: '100%', padding: "1rem", display: "flex", flexDirection: "column"}}>
                        <Card title="123" href="/home"></Card>
                        <Card title="123" href="/home"></Card>
                        <Card title="123" href="/home"></Card>
                        <Card title="123" href="/home"></Card>
                    </Paper>
                </div>
            </Container>
        </div>
    )
}
