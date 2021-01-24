import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
        };
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLasttNameHandler=this.changeLasttNameHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
        this.cancel=this.cancel.bind(this);
        
    }
    
    saveEmployee=(e) =>{
       e.preventDefault();
       let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
    
            EmployeeService.createEmployees(employee).then(res =>{
                this.props.history.push('/');
           });
    
     
    }

    changeFirstNameHandler=(event) =>{
        this.setState({firstName:event.target.value});
    }

    changeLasttNameHandler=(event) =>{
        this.setState({lastName:event.target.value});
    }

    changeemailIdHandler=(event) =>{
        this.setState({emailId:event.target.value});
    }

    cancel=(e)=>{
        this.props.history.push('/');
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        
                        <h3 className="text-center">Add</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control" 
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLasttNameHandler.bind(this)}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Email Id:</label>
                                    <input placeholder="Email" name="emailId" className="form-control" 
                                    value={this.state.emailId} onChange={this.changeemailIdHandler.bind(this)}>
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10%"}}>Cancel</button>
                            </form>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CreateEmployeeComponent;