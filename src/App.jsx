import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from './Components/Country';
import Main from "./Components/Main"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
