import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>

      <div id="content">
        <Routes>
          <Route path="/" exact element={<Products />}/>
          <Route path="/product/:product_id" element={<ProductDetail/>}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
