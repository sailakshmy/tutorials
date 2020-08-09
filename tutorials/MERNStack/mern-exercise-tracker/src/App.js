import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route exact path='/' component={ExercisesList}/>
        <Route path='/edit/:id' component={EditExercise}/>
        <Route path='/create' component={CreateExercise} />
        <Route path='/user'  component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
