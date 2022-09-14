import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import './App.css';

/**
 *
 * @returns
 * TODO: implement pagination functionality
 * TODO: implement absolute imports
 * TODO: update README.md file to describe endpoint additional params (not clear now)
 */
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: ComponentToRender }, index) => (
          <Route key={index} path={path} element={<ComponentToRender />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
