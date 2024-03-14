import React from 'react'
import {Paper} from "@mui/material";
import Card from "../components/Card";
import "../css/lessonpage.css";
import "@material/web/all";

import { useState, useEffect } from "react";
import axios from "axios";

import "./SubjectsPage.css";
import { Container } from "@mui/material";
import {useParams} from "react-router-dom";



export default function LessonPage() {
    const {subjectId} = useParams();

    const [lessons, setLessons] = useState([]);
  
    function getLessons() {
      axios
        .get("http://localhost:8080/api/subjects/get-all")
  
        .then((resp) => {
          setLessons(resp.data);
        })
  
        .catch((error) => {
          setLessons([]);
          console.log(error.message);
        });
    }
  
    useEffect(() => {
      getLessons();
    }, []);
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
