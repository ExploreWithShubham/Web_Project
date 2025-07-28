import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar";
import Todo from "./pages/todo";
import Footer from "./components/footer";
import Search from "./Components/search";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
        <Search />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
