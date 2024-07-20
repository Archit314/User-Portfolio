// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Common/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Main/Home';
import Footer from './Components/Common/Footer';

function App() {
  return (<>
    <NavBar />
    <Home />
    <Footer/>
    </>
  );
}

export default App;
