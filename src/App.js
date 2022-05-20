import { Home } from "./pages/Home";
import { SignUp } from "./pages/Sign-up";
import {Routes,Route} from 'react-router-dom'
import { BookMarks } from "./components/bookmarks";
import { UserProfile } from "./pages/user-profile";
import { Following } from "./pages/following";
import { Explore } from "./pages/explore";
import { OtherUserProfile } from "./pages/otherUserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='bookmarks' element={<BookMarks/>} />
        <Route path='profile' element={<UserProfile/>} />
        <Route path='following' element={<Following/>} />
        <Route path='explore' element={<Explore/>} />
        <Route path=':username' element={<OtherUserProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
