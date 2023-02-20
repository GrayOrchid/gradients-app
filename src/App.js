import React  from 'react';
import Header from './components/header/Header';
import { GlobaProvider } from './context/GlobalState';
import { useLocation } from 'react-router-dom';
import './index.css'
import Routes from './RoutesComponent';
import Copy from './components/copy/Copy';


const App = () => {

let location = useLocation()

  return (
<GlobaProvider>
  <div className='App'>
    <Routes/>
    <Copy/>
    <Header location={location}/>
  </div>
</GlobaProvider>
  );
}

export default App;
