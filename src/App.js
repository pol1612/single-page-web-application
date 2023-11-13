import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home}  from "./pages/Home";
import {Products}  from "./pages/Products";
import {Contact}  from "./pages/Contact";
import {PageNotFound} from "./pages/PageNotFound"
import {Navbar} from "./pages/Navbar";
import {Footer} from "./pages/Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/single-page-web-application/" element = {<Home />} />
        <Route path="/single-page-web-application/products" element = {<Products />}  />
        <Route path="/single-page-web-application/contact" element = {<Contact />} />
        <Route path="/single-page-web-application/*" element = { <PageNotFound /> } />
      </Routes>
      <Footer/>
    </Router>
  );
}	
export default App;