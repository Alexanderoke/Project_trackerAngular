import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[TrackerService]
})
export class LoginComponent implements OnInit {
  login!: { username: string; password: string; };

  constructor(private userService:TrackerService) { }

  ngOnInit(): void {
    this.login = {
      username:'',
      password: '',
    };
  }

  loginUser(){
    this.userService.loginUser(this.login).subscribe(
      response =>{
        alert('User'+this.login.username +'succesfully logged in!')
      },
      error =>alert('hakuna User kama huyo hapa hebu toka hapa')
      
    );
  }

}
