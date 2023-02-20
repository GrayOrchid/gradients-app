import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GradientPage from './pages/gradientPage/GradientPage';
import Homepage from './pages/homepage/Homepage';
import FavoritePage from './pages/favoritePage/FavoritePage';
const RoutesComponent = () => {
    return (
        <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='favorite' element={<FavoritePage/>}/>
  <Route path='/gradient/:name' element={<GradientPage/>}/>
  
</Routes>

    );
}

export default RoutesComponent;
