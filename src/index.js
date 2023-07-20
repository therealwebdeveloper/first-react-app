import React from 'react';
import ReactDOM from 'react-dom/client';
import Student from './components/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student name="Mike" age={44} />
    <Student name="John" age={23} />

  </React.StrictMode>
);