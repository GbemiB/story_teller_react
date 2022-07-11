import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StoryTellerNavBar from './StoryTellerNavBar';
import StoryTellerHeader from './StoryTellerHeader';
import StoryTellerHome from './StoryTellerHome';
import Onboarding from './pages/Onboarding';
import StoryTellerFooter from './StoryTellerFooter';
import Tracking from './pages/Tracking';
import Upload from './pages/Upload'; 
import Performance from './pages/Performace';

function StoryTeller() {
  return (
    <Router>
      <div>
      <StoryTellerHeader />
      <StoryTellerNavBar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <StoryTellerHome />
              </>
            }
          ></Route>
          <Route path='/onboard' element={<Onboarding />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/track' element={<Tracking />} />
          <Route path='/performance' element={<Performance />} />
        </Routes>
        <StoryTellerFooter />
      </div>
    </Router>
  )

}
export default StoryTeller;