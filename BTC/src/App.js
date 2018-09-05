import React, { Component } from 'react';
import './App.css';
import btc from './component/btc';
import RptoBit from './component/RptoBit';
import Bitop from './component/Bitop';

import { Route } from 'react-router-dom';
 class App extends Component {
    
  render()
  {
    return (
  
      <div>
        
        <Route exact path="/" component={btc}/>
        <Route path="/RptoBit" component={RptoBit}/>
        <Route path="/Bitop" component={Bitop}/>
       
      </div>
    );
      
    }
  }

 export default App;
