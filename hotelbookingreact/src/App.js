import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Carousel from './Components/Carousel';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <Carousel/>
    <Feedback/>
    <Footer/>
    </>
  );
}

export default App;
