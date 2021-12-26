import React  from 'react';
import {Route, BrowserRouter as Router, Routes  } from 'react-router-dom'

import './App.css';
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <Router>
      <MainNavigation/>
        <main>
        <Routes>
          <Route path='/home' element={<User />} />
          <Route path='/places/new' element={<NewPlace />} />
          <Route path='/:userId/places'  element={<UserPlaces />} exct />
        </Routes>
        </main>
        
   
    </Router>
    
    

  );
}

export default App;
