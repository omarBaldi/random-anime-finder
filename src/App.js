import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: ComponentToRender }, index) => (
          <Route
            key={`${path}-${index}`}
            path={path}
            element={<ComponentToRender />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
