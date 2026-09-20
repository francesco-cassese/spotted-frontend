import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import BusinessDetail from "./pages/BusinessDetail.jsx";

function App() {
  return (
    <>
      {/* Ogni Route collega un indirizzo a una pagina. :slug è la parte che cambia
          (come {slug} in routes/api.php) e nella pagina la leggo con useParams */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses/:slug" element={<BusinessDetail />} />
      </Routes>
    </>
  )
}

export default App
