import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { UpdateComponent } from '../update/update.component';
import { User } from '../user';

import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
// employee: User = new User(0,"","","");
 public message:any;
 public sampleForm:any;
 employee:any;
public empId;
public employeeDetails:User=new User();
  constructor(
    private fb:FormBuilder,
    private service:UserRegistrationService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.sampleForm=this.fb.group({
      employeeId: new FormControl(''),
      name: new FormControl(''),
      emailId: new FormControl(''),
      designation: new FormControl('')
    });
    if(this.route.snapshot.queryParams.employeeId){
      this.empId=this.route.snapshot.queryParams.employeeId;
      this.fetchEmployeeById()
    this.sampleForm.controls['employeeId'].setValue(this.empId);
    }
  }
 register(){ 

  // let resp=this.service.addEmployee(this.employee);
  // resp.subscribe((data)=>this.message=data);
const employee=new User();
employee.employeeId=this.sampleForm.get('employeeId').value;
employee.name=this.sampleForm.get('name').value;
employee.emailId=this.sampleForm.get('emailId').value;
employee.designation=this.sampleForm.get('designation').value;
// this.service.addEmployee(employee).subscribe((data)=>this.message=data);
this.service.addEmployee(employee).subscribe(res=>{
  if(res){
    alert("registered successfully");
  }

})

}

fetchEmployeeById(){
 this.service.getEmployeebyId(this.empId).subscribe((response:any)=>{
   if(response){
this.selectEmployee(response);
   }
 });
}

selectEmployee(employee:User){
  this.sampleForm.controls['employeeId'].setValue(this.empId)
this.sampleForm.controls['name'].setValue(employee.name);
this.sampleForm.controls['emailId'].setValue(employee.emailId);
this.sampleForm.controls['designation'].setValue(employee.designation);
}
update(){
  // Object.keys(this.sampleForm.value).forEach(propName =>
  //   this.employeeDetails[propName] = this.sampleForm.value[propName]);
  //   console.log(this.sampleForm.value+"details")
  //   let value=this.sampleForm.value;
  this.service.updateEmployee(this.sampleForm.value).subscribe((response)=>{
    if(response){
      alert("employee details updated successfully")
    }
  })
}
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

}
