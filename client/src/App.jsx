import { BrowserRouter, Routes, Route } from "react-router-dom";
 import "./App.css";
import {LoginPage,Signup} from './routes/Routes.js'
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App
