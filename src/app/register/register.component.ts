import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(public sa:AuthService,private fs:AngularFirestore,private route:Router,private f:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.f.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      //image:["",Validators.required],
      tel:["",Validators.required],
      dateBirth:["",Validators.required],
      gmail:["",Validators.required],
      sexe:[null],

      });
  }
  
  register(f){
    let data=f.value;
    let dateBirth=new Date(data.dateBirth);

    this.sa.signUp(data.gmail,data.passwordd).then((user)=>{
     this.fs.collection("user").doc(user.user.uid).set({
       firstName:data.firstName,
       lastName:data.lastName,
       gmail:data.gmail,
       dateBirth:dateBirth,
       //image:'',
       sexe:data.sexe,
       tel:data.tel,
       uid:user.user.uid
     }).then(()=>{

       this.route.navigate(["/login"])
     })
    }).catch(()=>{
      console.log("error !")
    })
  }

  login()
{
  this.route.navigate(["/login"])

}

}