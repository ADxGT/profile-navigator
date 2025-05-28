import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded shadow">
          <div className="container">
            <Link className="navbar-brand" to="/">Profile Explorer</Link>
            <div>
              <Link className="btn btn-outline-light me-2" to="/">Home</Link>
              <Link className="btn btn-outline-light" to="/admin">Admin</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

