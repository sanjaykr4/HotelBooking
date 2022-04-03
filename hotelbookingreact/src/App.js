import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Carousel from './Components/Carousel';
<<<<<<< HEAD
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import Feedback from './Components/Feedback';
=======
>>>>>>> 624e33898e0941ee49efacc80ffbbc1b38eeda2e
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
