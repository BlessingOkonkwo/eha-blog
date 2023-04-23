import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Layout from './components/layout/Layout';

function App() {
  const user = false;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/login" element={user ? <Home/> : <Login/>} />
          <Route path="/register" element={user ? <Home/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings/> : <Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route path="/write" element={user ? <Write/> : <Register/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
