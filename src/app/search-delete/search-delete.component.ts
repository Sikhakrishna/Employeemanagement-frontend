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

// update(){
  
// const employee=new User();
// employee.employeeId=this.sampleForm.get('employeeId').value;
// employee.name=this.sampleForm.get('name').value;
// employee.emailId=this.sampleForm.get('emailId').value;
// employee.designation=this.sampleForm.get('designation').value;
// this.service.updateEmployee(employee).subscribe(res=>{
//   if(res){
//     alert("updated successfully");
//   }
// })
// }

  ngOnInit(): void {
    let resp=this.service.getemployees();
    resp.subscribe((data)=>this.employees=data)
  }

}
