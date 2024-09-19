
import Profile from "./pages/profile"
import Project from "./pages/Project"
import Contact from "./pages/contact"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import WebLayout from "./Layouts/WebLayout" 


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />}>
         <Route path="/" element={<Profile />}/>
         <Route path="/project" element={<Project />}/>
         <Route path="/contact" element={<Contact />}/>
       </Route>

       </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
