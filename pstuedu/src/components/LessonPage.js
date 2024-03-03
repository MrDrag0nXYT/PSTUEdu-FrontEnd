import React from 'react'
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "./Card";
import "../css/lessonpage.css";

export default function LessonPage() {
    return (
        <div>
            <Container>
                <h1>Название домашки</h1>

                <div>
                    <h2>Приложения</h2>

                    <Paper className="cards" elevation={6}
                           sx={{bgcolor: '#cfe8fc', height: '100%', padding: 1}}>
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
