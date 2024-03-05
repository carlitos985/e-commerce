
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ProductIdPage from './pages/ProductIdPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import CartPage from './pages/CartPage.jsx'
import HeaderNav from './components/shared/HeaderNav.jsx'
import ProtectedRoutes from './pages/ProtectedRoutes.jsx'
import PurchasePage from './pages/PurchasePage.jsx'




function App() {
  

  return (
    <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product/:id' element={<ProductIdPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/purchases' element={<PurchasePage/>}/>
        </Route>
        
      </Routes>
      </div>
  )
}

export default App
