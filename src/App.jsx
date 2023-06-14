import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/nav"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


import HomePage from "./pages/Home/Home"
import BrandPage from "./pages/Brands/Brands"
import TrajectoryPage from "./pages/Trajectory/Trajectory"
import PartnerPage from "./pages/Partner/Partner"
import ContactPage from "./pages/Contact/Contact"
import { CartContextProvider } from "./context/cartContext"
import CartView from "./components/CartView/CartView"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm"
import { exportData } from "./services/helpers"

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/brands" element={<BrandPage/>} />
          <Route path="/trajectory" element={<TrajectoryPage/>} />
          <Route path="/partner" element={<PartnerPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<PartnerPage />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirm />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<h4>Error 404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
