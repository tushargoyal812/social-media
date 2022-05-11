// import "./App.css";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/Sign-up";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
