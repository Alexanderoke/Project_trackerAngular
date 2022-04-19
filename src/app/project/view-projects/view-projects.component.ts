import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/tracker.service';
// import { Apireceive } from '../../apireceive'

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  proj:any;

  constructor(private service:TrackerService) { }

  ProjectList:any=[];
  ModalTitle!: String;
  ActivateAddEditPrjComp: boolean=false;
  

  ngOnInit(): void {
    this.refreshProjectList();
    // console.log(this.ProjectList)

    // this.ProjectList = this.service.getProjectList().subscribe(res=>{
      // this.ProjectList = res.data

      // console.log(this.ProjectList)
    
  }
  uplodProject(){
    this.proj={
      ProjectId:'',
      project_name:'',
      project_type:'',
      project_landingpage:'',
      project_description:'',
      project_owner:'',
      project_member1:'',
      project_member2:'',
      project_member3:'',
      project_member4:'',
      project_member5:'',
      project_member6:'',
      github_link :''
    }
    this.ModalTitle="upload Project";
    this.ActivateAddEditPrjComp=true;
  }


  updateProject(project:any){
    this.proj=project;
    this.ModalTitle="Update Project";
    this.ActivateAddEditPrjComp=true;

  }

  deleteProject(project:any){
    if (confirm('Are you sure You want to Delete?')){
      this.service.deleteProject(project.ProjectId).subscribe(data=>{
        alert(data.toString());
        this.refreshProjectList();
      });
    }

  }


  closeClick(){
    this.ActivateAddEditPrjComp=false;
    this.refreshProjectList();
  }


  refreshProjectList(){
    this.service.getProjectList().subscribe(data=>{
      this.ProjectList=data;

    // this.ProjectList = this.service.getProjectList().subscribe(res=>{
      // this.ProjectList = res.data

      // console.log(this.ProjectList)
    });
  }
}
