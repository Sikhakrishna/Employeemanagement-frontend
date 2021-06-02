import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

// employeeDetails : any;
//   employeeToUpdate = {
//     employeeId:"",
//     name:"",
//     emailId:"",
//     designation:""
//   };



  constructor(private service:UserRegistrationService, private router: Router,) { }

  ngOnInit(): void {
    let resp=this.service.getemployees();
    resp.subscribe((data)=>this.employees=data)
  }  
  
  public getEmployee(employeeId){
    let resp=this.service.getEmployeebyId(this.employeeId);
    resp.subscribe((data)=>this.employees=data);
  }
public deleteEmployee(employeeId){
let resp=this.service.deleteemployeebyId(employeeId);
resp.subscribe((data)=>this.employees=data);

}

public updatedetails(employeeId){
  const extras={queryParams:{employeeId:employeeId}};
  this.router.navigate(["/register"],extras);
}


// getSelectedRow():an
// }
}










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
// constructor(private service:UserRegistrationService) { }
// public getEmployee(){
//   let resp=this.service.getEmployeebyId(this.employeeId);
//   resp.subscribe((data)=>this.employees=data);
// }



// edit(employee: any){
//   this.employeeToUpdate = employee;
// }




