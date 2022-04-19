import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerService } from '../tracker.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[TrackerService]
})
export class LoginComponent implements OnInit {
  login!: { username: string; password: string; };

  constructor(private userService:TrackerService, private router:Router) { }

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
        this.router.navigate(['/project'])
      },
      error =>alert('hakuna User kama huyo hapa hebu toka hapa')
      
    );
  }

}
