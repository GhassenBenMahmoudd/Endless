import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-detailclub',
  templateUrl: './detailclub.component.html',
  styleUrls: ['./detailclub.component.css']
})
export class DetailclubComponent implements OnInit {
  uid=localStorage.getItem("userConnect");
  dataAll

  dataProfil:any={
    uid:'',
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
    adresse:''
};
user: any;

  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {

    this.user=this.fs.collection("user").snapshotChanges().subscribe((data)=>{
      this.dataProfil=data.map(element=>{
        return{
          id:element.payload.doc.id,
          image:element.payload.doc.data()['image'],
          clubName:element.payload.doc.data()['clubName'],
          adresse:element.payload.doc.data()['adresse'],
          category:element.payload.doc.data()['category'],
          classe:element.payload.doc.data()['classe'],
          phone:element.payload.doc.data()['phone'],
          rib:element.payload.doc.data()['rib'],
        }
      })
    })

   /* this.fs.collection("user").ref.doc(this.uid).get().then((data)=>
{
 this.dataProfil.clubName=data.data()['clubName']
 this.dataProfil.contact=data.data()['contact']
 this.dataProfil.image=data.data()['image']
 this.dataProfil.fiscalId=data.data()['fiscalId']
 this.dataProfil.classe=data.data()['classe']
 this.dataProfil.rib=data.data()['rib']
 this.dataProfil.presidentName=data.data()['presidentName']
 this.dataProfil.category=data.data()['category']
 this.dataProfil.email=data.data()['email']
 this.dataProfil.phone=data.data()['phone']
 this.dataProfil.adresse=data.data()['adresse']

    }
  );*/
  }
}
