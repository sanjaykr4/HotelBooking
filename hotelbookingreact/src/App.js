
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/User/UserLogin';
import UserSignUp from './Components/User/UserSignUp';
import CurdHotel from './Components/CurdHotel';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<> <Searchbar /> <Carousel /> <Footer /> </> } />
          <Route exact path='/about' element={<Footer />} />
          <Route exact path='/adminlogin' element={<AdminLogin/>} />
          <Route exact path='/userlogin' element={<UserLogin/>} />
          <Route exact path='/userregister' element={<UserSignUp/>} />
          <Route exact path='/curdhotel' element={<CurdHotel/>} />
          


        </Routes>

      </Router>
    </>
  );
}

export default App;
