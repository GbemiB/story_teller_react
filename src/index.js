import React from 'react';
import ReactDOM from 'react-dom/client';
//stylesheet
import "./components/StoryTeller.css"
import StoryTeller from './components/StoryTeller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoryTeller />
  </React.StrictMode>
);