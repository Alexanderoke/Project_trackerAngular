import { Component, OnInit } from '@angular/core';
import {TrackerService} from 'src/app/tracker.service'
@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  constructor(private service:TrackerService) { }

  ProjectList:any=[];

  ngOnInit(): void {
  }

}
