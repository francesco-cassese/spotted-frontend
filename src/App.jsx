import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import BusinessDetail from "./pages/BusinessDetail.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses/:slug" element={<BusinessDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
