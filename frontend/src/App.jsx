import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar";
import Todo from "./pages/todo";
import Footer from "./components/footer";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
