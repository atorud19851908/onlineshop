import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import {Header} from './components/Header'
import { NotFaund } from './components/notFaund';
import ProducDetails from './components/productDetails';
import ProductList from './components/productList';



function App() {
  return (
  
      <div className="App">
        <Router>
     <Header/>
     <Switch>
     <Route path ="/" exact component = {ProductList}/>
     <Route path ="/product/:productId" exact component = { ProducDetails}/>
     <Route component ={NotFaund} />
      
    </Switch>
       </Router>
      </div>
    
    
  );
}

export default App;
