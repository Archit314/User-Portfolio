import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./Components/Common/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Main/Home';
import Footer from './Components/Common/Footer';
import Skill from "./Components/Main/Skill";
import About from "./Components/Main/About";
import Project from "./Components/Main/Project";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Blog from "./Components/Main/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skill/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/blogs" element={<Blog/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
