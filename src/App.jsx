import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/nav"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


import HomePage from "./pages/Home/Home"
import TrajectoryPage from "./pages/Trajectory/Trajectory"
import ProductsPage from "./pages/Products/Products"
import SessionPage from "./pages/Sessions/Sessions"
import { CartContextProvider } from "./context/cartContext"
import CartView from "./components/CartView/CartView"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm"
import { exportData } from "./services/helpers"
import { AuthProvider } from "./context/authContext"

function App() {

  return (
    <AuthProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<TrajectoryPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/session" element={<SessionPage/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ProductsPage />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirm />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<h4>Error 404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </AuthProvider>
  )
}

export default App
