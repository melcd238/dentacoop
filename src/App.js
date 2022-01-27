//Librairies
import React from 'react'
import './App.css';
import { Route , Switch} from 'react-router-dom'

//Composants
import Layout from './Containers/Layout/Layout'
import Home from './Containers/Home'
import Informations from './Containers/Informations/Informations'
import Equipe from './Containers/Equipe/Equipe'
import Shop from './Containers/Shop/Shop'
import Contact from './Containers/Contact/Contact'
import NotFound from './Containers/NotFound/NotFound'
import Adhesion from './Containers/Adhesion/Adhesion'


function App() {
  return (
    <div className="App">
      <Layout>
       <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/adhesion' component={Adhesion}></Route>
        <Route exact path='/informations' component={Informations}></Route>
        <Route exact path='/equipe' component={Equipe}></Route>
        <Route exact path='/shop' component={Shop}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route  component={NotFound}></Route>
        </Switch>
      </Layout>  
    </div>
  );
}

export default App;
