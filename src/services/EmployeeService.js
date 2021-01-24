import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_CREATE_URL="http://localhost:8080/api/v1/createEmployee";
const EMPLOYEE_API_UPDATE_URL="http://localhost:8080/api/v1/updateEmployee";
const EMPLOYEE_API_GETBYID_URL="http://localhost:8080/api/v1/getEmployeeById";
const EMPLOYEE_API_DELETEBYID_URL="http://localhost:8080/api/v1/deleteEmployee";

class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployees(employee){
        return axios.post(EMPLOYEE_API_CREATE_URL,employee);
    }
    updateEmployees(id,employee){
        return axios.put(EMPLOYEE_API_UPDATE_URL+`/${id}`,employee);
    }
    getEmployeesById(id){
        return axios.get(EMPLOYEE_API_GETBYID_URL +'/'+ id);
    }
    deleteEmployeesById(id){
        return axios.delete(EMPLOYEE_API_DELETEBYID_URL +'/'+ id);
    }
}
export default new EmployeeService()