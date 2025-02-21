import './App.css'
import{BrowserRouter, Router, Route, Routes} from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
