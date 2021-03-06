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
        //  public updateEmployee(employee:any){ 
        //   return this.http.put<string>("http://localhost:8080/employee/employees",employee,{responseType: 'text' as 'json'});  
        // }  
        public updateEmployee(employee: any) {
          const url =  "http://localhost:8080/employee/employees/"+employee.employeeId;
          return this.http.put<any>(url,employee,{responseType: 'text' as 'json'});
        }
}
