import './css/dark.css';

import NavigationBar from './components/NavigationBar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Main} from "./components/Main";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Routes>
            <Route path={"/home"} element={<Main/>}></Route>
            <Route path={"/main"} element={<Main/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
