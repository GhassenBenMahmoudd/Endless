import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-showprofil',
  templateUrl: './showprofil.component.html',
  styleUrls: ['./showprofil.component.css']
})
export class ShowprofilComponent implements OnInit {

  uid=localStorage.getItem("userConnect");

  dataProfil={

    firstName:'',
    lastName:'',
    uid:'',
    tel:'',
    dateBirth: new Date(),
    sexe:'',
    image:'',
    gmail:'',
};
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {

    this.fs.collection("user").ref.doc(this.uid).get().then((data)=>
{
 this.dataProfil.firstName=data.data()['firstName']
 this.dataProfil.lastName=data.data()['lastName']
 this.dataProfil.image=data.data()['image']
 this.dataProfil.tel=data.data()['tel']
 this.dataProfil.dateBirth=data.data()['dateBirth'].toDate()
 this.dataProfil.sexe=data.data()['sexe']
 this.dataProfil.gmail=data.data()['gmail']

    }
  );
  }

}
