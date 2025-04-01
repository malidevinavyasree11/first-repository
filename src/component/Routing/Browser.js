import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Routing/Layout";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import NoPage from "./Routing/NoPage";
function Browser (){
    return(
     <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     </div>
    )
}
export default Browser;