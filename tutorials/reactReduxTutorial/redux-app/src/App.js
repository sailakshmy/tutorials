import React,{Component} from 'react';
import NewComponent from './NewComponent';

class App extends Component{
  styles={
    fontStyle:'bold',
    color:'teal'
  }
  render(){
    return(
      <div className="App">
        <h1 style={this.styles}>Welcome!</h1>
        <NewComponent />
      </div>
    )
  }
}


export default App;
