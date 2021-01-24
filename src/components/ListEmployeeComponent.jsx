import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees: [],
            id:0,
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.deleteEmployeeById=this.deleteEmployeeById.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/create-Employee');
    }

    updateEmployee(id){
        this.props.history.push(`/detail-employee/${id}`);
    }
 

    deleteEmployeeById=(id)=>{     
        EmployeeService.deleteEmployeesById(id).then(res=>{
            this.setState({employees:this.state.employees.filter(employee=>employee.id !== id)})
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employees first name</th>
                                <th>Employees last name</th>
                                <th>Employees email name</th>
                                <th>Actions</th>
                            </tr>
                           
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees=>
                                    <tr key={employees.id} >
                                        <td>{employees.firstName}</td>
                                        <td>{employees.lastName}</td>
                                        <td>{employees.emailId}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>this.deleteEmployeeById(employees.id)}>Delete</button>
                                            <button style={{marginLeft:"10px"}} className="btn btn-primary" onClick={()=>this.updateEmployee(employees.id)}>Details</button>   
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

