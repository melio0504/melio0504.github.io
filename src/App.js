import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import CursorLight from './components/CursorLight';

function App() {
  return (
    <div className="relative min-h-screen">
      <CursorLight />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
