import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Signup from "./Components/Signup"


function App() {


  return (
   <BrowserRouter basename="/">
   <Routes>
    <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
