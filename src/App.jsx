import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/nav"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


import HomePage from "./pages/Home/Home"
import BrandPage from "./pages/Brands/Brands"
import TrajectoryPage from "./pages/Trajectory/Trajectory"
import PartnerPage from "./pages/Partner/Partner"
import ContactPage from "./pages/Contact/Contact"


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/brands" element={<BrandPage/>} />
        <Route path="/trajectory" element={<TrajectoryPage/>} />
        <Route path="/parther" element={<PartnerPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product/:SKU" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryid" element={<PartnerPage />} />
        <Route path="*" element={<h4>Error 404: Page not found</h4>} />



      </Routes>


    </BrowserRouter>

  )
}

export default App
