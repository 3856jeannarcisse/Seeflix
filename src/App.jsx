import React from "react"
import{Routes,Route}from"react-router-dom";
import Home from "./pages/Home";
import About from"./pages/About";
import Contact from"./Pages/Contact";
import Media from"./Pages/Media";
import Header from"./Component/Header";



function App() {
return(
<div>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Media" element={<Media/>}/>
</Routes>
</div>

);
}
export default App;






