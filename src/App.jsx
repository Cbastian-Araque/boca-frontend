import React, { Suspense } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import IndexRoot from './routers';

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Cargando...</div>}>
          <IndexRoot /> 
        </Suspense>
      </div>
    </Router>
    )
}

export default App
