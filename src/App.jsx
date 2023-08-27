import "./App.css";
import Contact from "./Pages/ContactPage/Contact";
import Home from "./Pages/Home";
import Accomodation from "./Pages/Accomodation/Accomdation";
import Dining from "./Pages/Dining/Dining";
import Conference from "./Pages/Conference/Conference";
import SharedLayout from "./Components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="dining" element={<Dining />} />
            <Route path="accomodation" element={<Accomodation />} />
            <Route path="conferences" element={<Conference />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
    
    </>
  );
}

export default App;
