import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/routes/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Posts from './routes/Posts/Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
