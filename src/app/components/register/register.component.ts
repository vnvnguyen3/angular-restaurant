import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[];
  user = {
    id: 0,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    role: 'USER'
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
    this.userService.addUser(this.user as User).subscribe(user => this.user = user);
  }

}