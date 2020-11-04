import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewComponent extends Component{
   /* constructor(props){
        super(props);

        this.state={
            message: "This is the initial message"
        }
    }*/// This is done as a part of Step 7. The initial state will be set in the reducer as part of Step-14
    styles={
        fontStyle:'italic',
        color:'purple'
    }

    /*ButtonChange = () =>{
        this.setState({
            message:"This is the new message after the button was clicked"
        });
    }*///This is done as a part of Step 7

    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.props.message}</h3> {/** This was this.state.message, but has been changed as part of Step-11 */}
                <button onClick={this.props.ButtonChange}>Please Click Me!</button> {/**This was this.ButtonChange, but has been changed as part of Step-12 */}
            </div>
        )
    }
}
//Step 8:-
const mapStateToProps = state => {
    return {
        message: state.message
    }
}

//Step 9:-
const mapDispatchToProps = dispatch => {
    return {
        ButtonChange: () => dispatch({type:'Message Change'})
    }
}

//Step 10:- Convert this into a HOC using connect
export default connect(mapStateToProps,mapDispatchToProps)(NewComponent);