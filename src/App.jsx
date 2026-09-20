import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import BusinessDetail from "./pages/BusinessDetail.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses/:slug" element={<BusinessDetail />} />
      </Routes>
    </>
  )
}

export default App
