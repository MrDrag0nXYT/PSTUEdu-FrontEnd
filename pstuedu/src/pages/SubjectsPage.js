import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import "./SubjectsPage.css";
import { Container } from "@mui/material";

function LessonListPage() {
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
    <Container maxWidth="sm">
      <div className="container">
        {lessons.map((lesson) => {
          return <md-text-button href={`/subjects/${lesson.id}/lessons`}>{lesson.name}</md-text-button>;
        })}
      </div>
    </Container>
  );
}

export default LessonListPage;
