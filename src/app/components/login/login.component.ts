import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  submitted = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSubmit() { 
    this.submitted = true; 
    this.user = this.users.filter(user => user.userName === this.user.userName && user.password === this.user.password)[0]
  }

}
