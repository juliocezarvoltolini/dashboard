import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ExpandableSidebar from './components/ExpandableSidebar/ExpandableSidebar';
import Home from './components/Home/home';
import Profile from './components/Profile/profile';
import Settings from './components/Settings/settings';

function App() {
  return (
    <Router>
      <div className="App">
        <ExpandableSidebar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" Component={<Settings/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
