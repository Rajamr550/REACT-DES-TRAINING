import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'


export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}