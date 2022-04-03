import { Component, OnInit } from '@angular/core';
import {TrackerService} from 'src/app/tracker.service'
@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  constructor(private service:TrackerService) { }

  UsersList:any=[];

  ngOnInit(): void {
    this.refreshProjectList();
  }


  refreshProjectList(){
    this.service.getUsersList().subscribe(data=>{
      this.UsersList=data;
    });

  }
}
