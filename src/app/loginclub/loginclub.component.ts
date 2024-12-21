import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-loginclub',
  templateUrl: './loginclub.component.html',
  styleUrls: ['./loginclub.component.css']
})
export class LoginclubComponent implements OnInit {

  constructor(private sa:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f){
    let data=f.value;

    this.sa.signUp(data.email,data.password).then((user)=>{
     this.fs.collection("user").doc(user.user.uid).set({
       clubName:data.clubName,
       category:data.category,
       email:data.email,
       phone:data.phone,
       classe:data.classe,
       presidentName:data.presidentName,
       image:'',
       rib:data.rib,
       fiscalId:data.fiscalId,
       contact:data.contact,
       adresse:data.adresse,
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
club()
  {
    this.route.navigate(["/club"])

  }

}
