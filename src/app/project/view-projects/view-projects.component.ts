import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/tracker.service';
import { Apireceive } from '../../apireceive'

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  constructor(private service:TrackerService) { }

  ProjectList:any=[];

  ngOnInit(): void {
    // this.refreshProjectList();
    // console.log(this.ProjectList)

    this.ProjectList = this.service.getProjectList().subscribe(res=>{
      this.ProjectList = res.data

      console.log(this.ProjectList)
    });
  }


  refreshProjectList(){
    this.ProjectList = this.service.getProjectList().subscribe(res=>{
      this.ProjectList = res.data

      // console.log(this.ProjectList)
    });
  }
}
