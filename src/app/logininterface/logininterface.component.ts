import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logininterface',
  templateUrl: './logininterface.component.html',
  styleUrls: ['./logininterface.component.css']
})
export class LogininterfaceComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  loginclub()
  {
    this.route.navigate(["/loginclub"])

  }
  loginuser()
  {
    this.route.navigate(["/register"])

  }
}
