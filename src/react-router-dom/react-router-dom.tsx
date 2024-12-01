import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/not-found";
const ReactRouterDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterDom;
