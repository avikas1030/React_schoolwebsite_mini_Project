import { 
        BrowserRouter, 
        Routes, 
        Route } 
        from "react-router-dom"

import Home from './components/Home'
import Teachers from './components/Teachers'
import NotFound from "./components/NotFound"
import Holidays from "./components/Holidays"
import ContactUs from "./components/ContactUs"
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/holidays" element={<Holidays/>}/> 
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App