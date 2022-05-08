import React from 'react';
import './App.css';
import NoPage from "./modules/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './modules/about/About';
import HomeLayout from './modules/HomeLayout';
import Contact from './modules/contact/Contact';

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomeLayout />} >
            {/*} {(state === "home") && (<Route index element={<Home />} />)}
            <Route path="about" element={<About />} />*/}
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
