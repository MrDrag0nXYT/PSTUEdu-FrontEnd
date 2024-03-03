import "./index.css";

import { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import LessonPage from "./components/LessonPage";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};



function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App" className={theme}>
      <NavigationBar />

      <Routes>
        <Route path={"/home"} element={<Main />}></Route>
        <Route path={"/lessons"} element={<LessonPage />}></Route>
      </Routes>

      {/* <div>
        <button onClick={toggleTheme}>Переключить тему</button>
        <p>Текущая тема: {theme}</p>
      </div> */}
    </div>
  );
}

export default App;
