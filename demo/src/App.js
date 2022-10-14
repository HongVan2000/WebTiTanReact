
import './App.css';

import Header from './component/header';
import Weprovide from './component/Weprovide';
import Slider from './component/slider';
import React from 'react';
import Domain from './component/Domain';
import Innovations from './component/Innovations';
import Engagement from './component/Engagement';
import Client from './component/Client';
import Customer from './component/Customer';
import Recognized from './component/Recognized';
import Jobs from './component/Jobs';
import News from './component/News';
import Bogs from './component/Bogs';




        
  function App() {
    
    
 return(
    <div>
        
         <Header />
        <Slider/>
        <Weprovide/>
        <Domain/>
        <Innovations/>
        <Engagement/>
        <Client/>
        <Customer/>
        <Recognized/>
        <Jobs/>
        <News/>
        <Bogs/>

        
    </div>
 );
}



export default App;
