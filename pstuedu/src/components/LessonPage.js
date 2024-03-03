import React from 'react'
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "./Card";

export default function LessonPage() {
    return (
        <div>
            <Container>
                <h1>Название курса</h1>

                <div>
                    <h2>Уроки</h2>

                    <Card></Card>
                </div>
            </Container>
        </div>
    )
}
