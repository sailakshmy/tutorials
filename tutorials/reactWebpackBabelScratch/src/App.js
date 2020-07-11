import React,{Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            counter:0
        }
    }
    handleClick= (e)=>{
        this.setState({
            name:'Groot',
            });
        //console.log(this.state.name);
    }
    render(){
        return(
            <div>
                <h1>My App Component</h1>
                <button onClick={this.handleClick}>Click Me!</button>
                {this.state.name && <p>{this.state.name}</p>}
            </div>
        )
    }
}

export default App;