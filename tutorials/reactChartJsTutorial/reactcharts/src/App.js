import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      chartData:{}
    }
  };
componentWillMount(){
  this.getChartData();
}

  getChartData(){
    //This is how it's done when we use a public API
    this.setState({
      chartData: {
        labels: ['JavaScript','React','Redux','HTML','CSS','SQL','Firebase','Java'],
        datasets:[{
            label:'Knowledge level',
            data: [70,45,35,30,30,20,15,15],
            backgroundColor:['purple','indigo','green','yellow','black','brown','grey','orange']

            }]
        }
 
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Chart chartData={this.state.chartData} legendPosition='bottom' />
    </div>
  );
}
} 

export default App;
