import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {finalize} from 'rxjs/operators';
@Component({
  selector: 'app-edit-info-profil',
  templateUrl: './edit-info-profil.component.html',
  styleUrls: ['./edit-info-profil.component.css']
})
export class EditInfoProfilComponent implements OnInit {

  userForm!: FormGroup;
  imgSrc:String
  selectedImage: any = null;
uid=localStorage.getItem("userConnect");
dataProfil={

      //firstName:'',
      //lastName:'',
      clubName:'',
      image:'',
      uid:'',
      contact:'',
      fiscalId:'',
      rib:'',
      phone:'',
      presidentName:'',
      //tel:'',
      //dateBirth:new Date()
};
echecMess: string;

  constructor(private f:FormBuilder,private fs:AngularFirestore,private r:Router,private storage:AngularFireStorage) {


   }

  ngOnInit(): void {

    
this.fs.collection("user").ref.doc(this.uid).get().then((data)=>
{
  this.dataProfil.clubName=data.data()['clubName']
  this.dataProfil.phone=data.data()['phone']
  this.dataProfil.presidentName=data.data()['presidentName']
  this.dataProfil.rib=data.data()['rib']
  this.dataProfil.fiscalId=data.data()['fiscalId']
  this.dataProfil.contact=data.data()['contact']

 //this.dataProfil.firstName=data.data()['firstName']
 //this.dataProfil.lastName=data.data()['lastName']
 this.dataProfil.image=data.data()['image']
 //this.dataProfil.tel=data.data()['tel']
 //this.dataProfil.dateBirth=data.data()['dateBirth']


    }
  );

    this.userForm=this.f.group({
      //firstName:["",Validators.required],
      //lastName:["",Validators.required],
      image:["",Validators.required],
      //tel:["",Validators.required],
      //dateBirth:["",Validators.required],
      
      clubName:["",Validators.required],
      contact:["",Validators.required],
      rib:["",Validators.required],
      phone:["",Validators.required],
      presidentName:["",Validators.required],
      fiscalId:["",Validators.required],



      });
  }

  update()
  {



    this.imageUpdate()


this.fs.collection('user').doc(this.uid).update({
  //firstName:this.userForm.value.firstName,
  //lastName:this.userForm.value.lastName,
  image:this.userForm.value.image,


  clubName:this.userForm.value.clubName,
  //email:this.userForm.value.email,
  phone:this.userForm.value.phone,
  presidentName:this.userForm.value.presidentName,
  rib:this.userForm.value.rib,
  fiscalId:this.userForm.value.fiscalId,
  contact:this.userForm.value.contact,


}).then(()=>this.r.navigate(['/profil']))
.catch(
  ()=>{this.echecMess="Suppression a Echoué";}
)


}

imageUpdate()
{
  var filePath = `profil/user_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
return this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        this.fs.collection("user").doc(this.uid).update({
          image:url
        })
      })
    })
  ).subscribe();
}

uploadImage(event:any)
{
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => this.imgSrc = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImage = event.target.files[0];
  }
  else {
    this.imgSrc =  this.dataProfil.image;
    this.selectedImage = null;
  }
}

  
ngOnDestroy(): void {
  this.imageUpdate().unsubscribe()
 }

}


