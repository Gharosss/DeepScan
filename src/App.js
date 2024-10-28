import React from 'react';
import './assets/styles/App.css';
import Home from './pages/Home';
import { ContextProvider } from './components/Context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;