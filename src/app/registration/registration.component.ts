import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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

  constructor(
    private fb:FormBuilder,
    private service:UserRegistrationService
  ) { }

  ngOnInit() {
    this.sampleForm=this.fb.group({
      employeeId: new FormControl(''),
      name: new FormControl(''),
      emailId: new FormControl(''),
      designation: new FormControl('')
    });
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
