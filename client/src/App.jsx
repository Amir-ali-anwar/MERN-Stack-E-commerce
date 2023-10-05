import { BrowserRouter, Routes, Route } from "react-router-dom";
 import "./App.css";
import {LoginPage} from './routes/Routes.js'
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App
