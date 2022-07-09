import React from 'react';
import ReactDOM from 'react-dom/client';
//stylesheet
import "./components/StoryTeller/StoryTeller.css"
import StoryTeller from './components/StoryTeller/StoryTeller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoryTeller />
  </React.StrictMode>
);