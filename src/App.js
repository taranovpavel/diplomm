import classes from "./App.sass";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import BishkekPage from "./pages/BishkekPage";
import IssykKulPage from "./pages/IssykKulPage";
import NarynPage from "./pages/NarynPage";
import BookPage from "./pages/BookPage";
import BookBishkekPage from "./pages/BookBishkekPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/bishkek" element={<BishkekPage/>}/>
        <Route path="/issyk-Kul" element={<IssykKulPage/>}/>
        <Route path="/naryn" element={<NarynPage/>}/>
        <Route path="/book" element={<BookPage/>}/>
        <Route path="/book/bishkek" element={<BookBishkekPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
