import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import ServiceBuilder from "./pages/serviceBuilder/ServiceBuilder";
import { ROUTE_PATHS } from "./config";
import ServiceArchitect from "./pages/serviceArchitect/ServiceArchitect";
import ServiceOwner from "./pages/serviceOwner/ServiceOwner";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
        <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
        <Route path={ROUTE_PATHS.GALLERY} element={<Gallery />} />
        <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
        <Route
          path={ROUTE_PATHS.SERVICE_ARCHITECT}
          element={<ServiceArchitect />}
        />
        <Route path={ROUTE_PATHS.SERVICE_OWNER} element={<ServiceOwner />} />
        <Route
          path={ROUTE_PATHS.SERVICE_BUILDER}
          element={<ServiceBuilder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
