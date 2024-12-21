import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUser
  pages: number = 1;
dataArray
searchTerm: string;

  
  
  constructor(private af:AngularFireAuth,private route:Router,private as:AuthService,private fs:AngularFirestore) {
    this.as.user.subscribe(user=>{
      if(user){
        this.isUser=true
      } else {
        this.isUser=false 
      }
    })
  }

  ngOnInit(): void {
    this.fs.collection("magazines").snapshotChanges().subscribe((data)=>{
      this.dataArray=data.map(element=>{
        return{
          id:element.payload.doc.id,
          image:element.payload.doc.data()['image'],
          titre:element.payload.doc.data()['titre'],
        }

      })

    })
  }
  detail(id){
    this.route.navigate(['/magazines/'+id])
  }
  login()
  {
    this.route.navigate(["/login"])

  }
  register()
  {
    this.route.navigate(["/register"])

  }
Logout(){
this.af.signOut().then(()=>{
  this.route.navigate(["/login"])
}).catch(()=>{
  console.log("error")
})
localStorage.setItem('userConnect','') 

}

admin()
  {
    this.route.navigate(["/loginAdmin"])

  }
  magazine()
  {
    this.route.navigate(["/magazines"])

  }
}
