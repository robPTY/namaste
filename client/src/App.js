// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import GuidedMeditation from './components/GuidedMeditation';
import MindfulnessExercises from './components/MindfulnessExercises';
import Community from './components/Community';
import Profile from './components/Profile';
import Login from './components/Login'
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/guided-meditation" component={GuidedMeditation} />
        <Route path="/mindfulness-exercises" component={MindfulnessExercises} />
        <Route path="/community" component={Community} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
