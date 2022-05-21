import { Home } from "./pages/Home";
import { SignUp } from "./pages/Sign-up";
import {Routes,Route} from 'react-router-dom'
import { BookMarks } from "./components/bookmarks";
import { UserProfile } from "./pages/user-profile";
import { Following } from "./pages/following";
import { Explore } from "./pages/explore";
import { OtherUserProfile } from "./pages/otherUserProfile";
import { Followers } from "./pages/followers";
import { FourOfour } from "./pages/fourOfour";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='/' element={<SignUp/>} />
        <Route path='bookmarks' element={<BookMarks/>} />
        <Route path='profile' element={<UserProfile/>} />
        <Route path='following' element={<Following/>} />
        <Route path='explore' element={<Explore/>} />
        <Route path='home/:username' element={<OtherUserProfile/>} />
        <Route path='followers' element={<Followers/>} />
        <Route path='*' element={<FourOfour/>} />
        {/* <Fo */}
      </Routes>
    </div>
  );
}

export default App;
