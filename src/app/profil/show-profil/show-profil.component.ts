import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-show-profil',
  templateUrl: './show-profil.component.html',
  styleUrls: ['./show-profil.component.css']
})
export class ShowProfilComponent implements OnInit {
  uid=localStorage.getItem("userConnect");

  dataProfil={

    firstName:'',
    lastName:'',
    uid:'',
    tel:'',
    dateBirth: new Date(),
    classe:'',
   
    clubName:'',
      image:'',
      contact:'',
      fiscalId:'',
      rib:'',
      phone:'',
      presidentName:'',
      category:'',
      email:'',
      adresse:'',
      gmail:''
};
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {

    this.fs.collection("user").ref.doc(this.uid).get().then((data)=>
{
 this.dataProfil.clubName=data.data()['clubName']
 this.dataProfil.contact=data.data()['contact']
 this.dataProfil.image=data.data()['image']
 this.dataProfil.fiscalId=data.data()['fiscalId']
 this.dataProfil.dateBirth=data.data()['dateBirth'].toDate()
 this.dataProfil.classe=data.data()['classe']
 this.dataProfil.rib=data.data()['rib']
 this.dataProfil.presidentName=data.data()['presidentName']
 this.dataProfil.category=data.data()['category']
 this.dataProfil.email=data.data()['email']
 this.dataProfil.phone=data.data()['phone']
 this.dataProfil.adresse=data.data()['adresse']
 this.dataProfil.firstName=data.data()['firstName']
 this.dataProfil.lastName=data.data()['lastName']
 this.dataProfil.tel=data.data()['tel']
 this.dataProfil.gmail=data.data()['gmail']

    }
  );
  }

}
