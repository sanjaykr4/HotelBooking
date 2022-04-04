
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import AdminLogin from './Components/Admin/AdminLogin';
import AdminSignUp from './Components/Admin/AdminSignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<> <Searchbar /> <Carousel /> <Footer /> </> } />
          <Route exact path='/about' element={<Footer />} />
          <Route exact path='/adminlogin' element={<AdminLogin/>} />
          <Route exact path='/adminregister' element={<AdminSignUp/>} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
