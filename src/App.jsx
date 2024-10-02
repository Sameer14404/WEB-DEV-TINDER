import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"
import Feed from "./Components/Feed"
import { Provider } from "react-redux"
import store from "./Utils/appStore"


function App() {


  return (
    <Provider store={store}>
         <BrowserRouter basename="/">
   <Routes>
    <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/feed" element={<Feed/>}/>
    </Route>
   
   </Routes>
   </BrowserRouter>
    </Provider>
  
  )
}

export default App
