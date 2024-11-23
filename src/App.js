import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router';   // Import Router component for routing

function App() {
  return (
    <Router>
      <div className="app">
        <RouterComponent />  {/* Use Router component to handle routes */}
      </div>
    </Router>
  );
}

export default App;
