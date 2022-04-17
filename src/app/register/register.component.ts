import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[TrackerService]
})
export class RegisterComponent implements OnInit {
  register!: { username: string; password: string; email: string; };

  constructor(private userService:TrackerService, private http:HttpClient, private router: Router ) { }

  ngOnInit() {
    this.register = {
      username:'',
      password: '',
      email: '',
    };
  }
  registerUser(){
    this.userService.registerUser(this.register).subscribe(
      res =>{
        alert('User'+' '+this.register.username +'succesfully created!')
        this.router.navigate(['/login'])
      },
      error =>console.log('error',error)
      
    );
  }

}
