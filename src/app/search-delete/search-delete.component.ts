import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
employees:any;
employeeId:any;
// message:any;

// employeeDetails = null as any;
//   employeeToUpdate = {
//     employeeId:"",
//     name:"",
//     emailId:"",
//     designation:""
//   };



  constructor(private service:UserRegistrationService) { }
  
  public getEmployee(employeeId){
    let resp=this.service.getEmployeebyId(this.employeeId);
    resp.subscribe((data)=>this.employees=data);
  }
public deleteEmployee(employeeId){
let resp=this.service.deleteemployeebyId(employeeId);
resp.subscribe((data)=>this.employees=data);
// this.service.addEmployee(employee).subscribe((data)=>this.message=data);
}
// constructor(private service:UserRegistrationService) { }
// public getEmployee(){
//   let resp=this.service.getEmployeebyId(this.employeeId);
//   resp.subscribe((data)=>this.employees=data);
// }



// edit(employee: any){
//   this.employeeToUpdate = employee;
// }

// updateEmployees(){
//   this.service.updateEmployee(this.employeeToUpdate).subscribe(
//     (resp) => {
//       console.log(resp);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// }

  ngOnInit(): void {
    let resp=this.service.getemployees();
    resp.subscribe((data)=>this.employees=data)
  }

}
