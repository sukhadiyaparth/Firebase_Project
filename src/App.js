import './App.css';
import { Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './pages/Register';
import Login from './pages/Login';
import MyNavbar from './components/MyNavbar';
import List from './pages/List';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <MyNavbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/list' element={<List/>}/>

</Routes>
</div>
  );
}

export default App;
