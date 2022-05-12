import logo from './logo.svg';
import './App.css';
import Header from './pages/SharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Components/Home/Home/Home';
import Blogs from './pages/Components/Blogs/Blogs';
import NotFound from './pages/SharedComponents/NotFound/NotFound';
import Login from './pages/Components/User/Login/Login';
import Register from './pages/Components/User/Register/Register';
import ContactUs from './pages/Components/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
