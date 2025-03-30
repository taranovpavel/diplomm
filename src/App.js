import classes from "./App.sass";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import BishkekPage from "./pages/BishkekPage";
import IssykKulPage from "./pages/IssykKulPage";
import NarynPage from "./pages/NarynPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/Bishkek" element={<BishkekPage/>}/>
        <Route path="/Issyk-Kul" element={<IssykKulPage/>}/>
        <Route path="/Naryn" element={<NarynPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
