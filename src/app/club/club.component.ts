import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  pages: number = 1;
dataArray
searchTerm: string;
  constructor(private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("user").snapshotChanges().subscribe((data)=>{
      this.dataArray=data.map(element=>{
        return{
          id:element.payload.doc.id,
          image:element.payload.doc.data()['image'],
          clubName:element.payload.doc.data()['clubName'],
        }

      })

    })
  }
  detail(id){
    this.route.navigate(['/user/'+id])
  }

}
