import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCategoryPage from "./pages/ByCategoryPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCategory/:id" element={<ByCategoryPage />}  />
        <Route path="/detail/:id" element={<DetailPage />}  />        
      </Routes>
    </BrowserRouter>
  );
};

export default App;