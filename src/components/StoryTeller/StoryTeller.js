import React from 'react';
import StoryTellerNavBar from './StoryTellerNavBar';
import StoryTellerHeader from './StoryTellerHeader';
import StoryTellerHome from './StoryTellerHome';
import StoryTellerFooter from './StoryTellerFooter';
function StoryTeller() {
    return (   
        <>
         <StoryTellerHeader />
          <StoryTellerNavBar />
          <StoryTellerHome />
          <StoryTellerFooter/>
        </>
      );
}
export default StoryTeller;