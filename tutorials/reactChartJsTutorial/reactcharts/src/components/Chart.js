import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        //console.log(props.chartData);
        this.state={
            chartData: props.chartData
           }
        }
        static defaultProps={
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'right'
        }
    render(){
        return(
            <div className="chart">
              <Line
                data={this.state.chartData}
                //width={100}
                //height={50}
                options={{ 
                    //maintainAspectRatio: false 
                    
                        title:{
                            display: this.props.displayTitle,
                            text:'Technical Skillset',
                            fontSize: 20
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            /*labels:{
                                display:false
                            }*/
                        },
                        tooltips:{
                            enabled: true
                        }
                    
                }}
                />
              <Bar
                data={this.state.chartData}
                //width={100}
                //height={50}
                options={{ 
                    //maintainAspectRatio: false 
                    
                        title:{
                            display: this.props.displayTitle,
                            text:'Technical Skillset',
                            fontSize: 20
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            /*labels:{
                                display:false
                            }*/
                        },
                        tooltips:{
                            enabled: true
                        }
                    
                }}
                />
                <Pie
                data={this.state.chartData}
                //width={100}
                //height={50}
                options={{ 
                    //maintainAspectRatio: false 
                    
                        title:{
                            display: this.props.displayTitle,
                            text:'Technical Skillset',
                            fontSize: 20
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            /*labels:{
                                display:false
                            }*/
                        },
                        tooltips:{
                            enabled: true
                        }
                    
                }}
                />
            </div>
        )
    }
}

export default Chart;