// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <h1>hi this is saranya....</h1>
//     </>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Movies from './components/pages/Movies';
import Book from './components/pages/Book';
import Bookings from './components/pages/Bookings';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import AdminMovies from './components/pages/admin/AdminMovies';
import AdminTheatres from './components/pages/admin/AdminTheatres';
import { AuthProvider, useAuth } from './components/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/movies" />;
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path="/book/:id" element={<ProtectedRoute><Book /></ProtectedRoute>} />
          <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/movies" element={<ProtectedRoute role="admin"><AdminMovies /></ProtectedRoute>} />
          <Route path="/admin/theatres" element={<ProtectedRoute role="admin"><AdminTheatres /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

