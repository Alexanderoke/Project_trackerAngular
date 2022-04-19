import { Component, OnInit } from '@angular/core';
import { Emmiters } from '../emmiters/emmiters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Emmiters.authEmmiter.emit()
  }

}
