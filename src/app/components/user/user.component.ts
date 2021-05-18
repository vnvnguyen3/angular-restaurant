import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = 
  {
    id: 1,
    firstName: "Vincent",
    lastName: "Nguyen",
    userName: "vincenerator",
    password: "pass",
    email: "vnvnguyen3@yahoo.com",
    role: "ADMIN"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
