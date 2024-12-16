import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import TutorPage from './Pages/TutorPage/TutorPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Profile from './Pages/Profile/Profile';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import HomeContainer from './Components/MainContainer/HomeContainer'
import Authentication from './Components/MainContainer/Authentication'
import privacypolicy from './Components/privacypolicy/privacypolicy'




function App() {


const jwtToken = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
       
        <div className='layout'>
        <Routes>

          <Route path='/*' element={ jwtToken? <HomeContainer />:<Authentication/>} />
       
          
        </Routes>
        </div>
        
       
      </BrowserRouter>
    </div>
  )
}

export default App
