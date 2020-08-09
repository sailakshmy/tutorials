import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class CreateExercise extends Component{
    constructor(props){
        super(props);

        this.state={
            username : "",
            description:'',
            duration: 0,
            date: new Date(),
            users: []
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
       /* this.setState({
            users:['ABC'],
            username: 'ABC'
        });*/ //This was hardcoded data for testing purposes.
        axios.get('http://localhost:5000/users/') //This is to get the data from the DB
        .then(res =>{
            if(res.data.length > 0){
                this.setState({
                    users: res.data.map(user => user.username),
                    username: res.data[0].username//This is to prepopulate the field with the first username in the response
                })
            }
        } )
        .catch(err=> console.log(err));
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
     onSubmit(e){
         e.preventDefault();
        const exercise = {
            username : this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then(res => console.log(res.data))
        .catch(err=> console.log(err));

        window.location='/';
     }

    render(){
        return(
            <div>
               <h3>Create New Exercise Log!</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username:</label>
                       <select ref="userInput"
                        required 
                        value={this.state.username}
                         className="form-control" 
                         onChange={this.onChangeUsername}>
                             {
                             this.state.users.map((user) =>
                                 <option key={user} value={user}>{user}</option>
                                )
                             }
                         </select>
                   </div>
                   <div className="form-group">
                       <label>Description: </label>
                       <input type="text" className="form-control"
                       value={this.state.description}
                       onChange={this.onChangeDescription}/>
                   </div>
                   <div className="form-group">
                       <label>Duration: </label>
                       <input type="text" className="form-control"
                       value={this.state.duration}
                       onChange={this.onChangeDuration}/>
                   </div>
                   <div className="form-group">
                       <label>Date: </label>
                       <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                   </div>
               </form>
            </div>
        );
    }
}

export default CreateExercise;