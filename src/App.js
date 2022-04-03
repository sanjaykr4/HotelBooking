import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Searchbar />

        <Routes>
          <Route exact path='/' element={<Carousel/>}/>
          <Route exact path='/about' element={<Footer />}/>
          </Routes>

      </Router>
    </>
  );
}

export default App;
