import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/SharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Components/Home/Home/Home';
import Blogs from './pages/Components/Blogs/Blogs';
import NotFound from './pages/SharedComponents/NotFound/NotFound';
import Login from './pages/Components/User/Login/Login';
import Register from './pages/Components/User/Register/Register';
import ContactUs from './pages/Components/ContactUs/ContactUs';
import AboutUs from './pages/Components/AboutUs/AboutUs';
import RequireAuth from './pages/Components/User/RequireAuth/RequireAuth'
import InventoryDetail from './pages/Components/Home/InventoryDetail/InventoryDetail';
import ManageInventories from './pages/Components/Home/ManageInventories/ManageInventories';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
