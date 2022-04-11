import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[TrackerService]
})
export class RegisterComponent implements OnInit {
  register!: { username: string; password: string; email: string; };

  constructor(private userService:TrackerService) { }

  ngOnInit() {
    this.register = {
      username:'',
      password: '',
      email: '',
    };
  }
  registerUser(){
    this.userService.registerUser(this.register).subscribe(
      response =>{
        alert('User'+this.register.username +'succesfully created!')
      },
      error =>console.log('error',error)
      
    );
  }

}
