import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
    public addEmployee(employee){
return this.http.post<string>("http://localhost:8080/employee/employees",employee,{responseType: 'text' as 'json'});
    }
  
    public getemployees(){
   return this.http.get("http://localhost:8080/employee/employees");
    }
    public getEmployeebyId(employeeId){
      return this.http.get("http://localhost:8080/employee/employees/"+employeeId);
       }
       public deleteemployeebyId(employeeId){
        return this.http.delete("http://localhost:8080/employee/employees/"+employeeId);
         }
        //  public updateEmployee(employeeId){ 
        //   return this.http.put<string>("http://localhost:8080/employee/employees/"+employeeId,{responseType: 'text' as 'json'});  
        // }  
}
