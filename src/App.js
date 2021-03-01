import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SaveGame from './SaveGame/SaveGame';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Game from './Game/Game';
import PageNotFound from './PageNotFound/PageNotFound';

class App extends React.Component {
  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path='/savegame' component={SaveGame} />
        <Route exact path='/' component={Game} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <main>{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
