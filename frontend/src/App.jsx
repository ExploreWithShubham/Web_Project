import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar";
import Todo from "./pages/todo";
import Footer from "./components/footer";
import './App.css';
import UpdateTodo from './pages/todo/edit';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo/edit/:id" element={<UpdateTodo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
