// import "./App.css";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/Sign-up";
import {Routes,Route} from 'react-router-dom'
import { BookMarks } from "./components/bookmarks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='bookmarks' element={<BookMarks/>} />
      </Routes>
    </div>
  );
}

export default App;
