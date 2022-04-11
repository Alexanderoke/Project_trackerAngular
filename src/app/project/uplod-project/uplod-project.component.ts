import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackerService } from 'src/app/tracker.service';
@Component({
  selector: 'app-uplod-project',
  templateUrl: './uplod-project.component.html',
  styleUrls: ['./uplod-project.component.css']
})
export class UplodProjectComponent implements OnInit {

  constructor(private service:TrackerService,
              private http:HttpClient) { }

  @Input() proj:any;
  project_type!: string;
  project_landingpage!:any
  project_description!:string
  project_owner!:string
  project_member1!:string
  project_member2!:string
  project_member3!:string
  project_member4!:string
  project_member5!:string
  project_member6!:string
  github_link! :string

  
  

  

  ngOnInit(): void {
    this.project_type=this.proj.project_type;
    this.project_landingpage=this.proj.project_landingpage;
    this.project_description=this.proj.project_description;
    this.project_owner=this.proj.project_owner;
    this.project_member1=this.proj.project_member1;
    this.project_member2=this.proj.project_member2;
    this.project_member3=this.proj.project_member3;
    this.project_member4= this.proj.project_member4;
    this.project_member5= this.proj.project_member5;
    this.project_member6=this.proj.project_member6;
    this.github_link=this.proj.github_link;
  }
  onSubmit(){
    let val= {
      project_type:this.project_type,
    project_landingpage:this.project_landingpage,
    project_description:this.project_description,
    project_owner:this.project_owner,
    project_member1:this.project_member1,
    project_member2:this.project_member2,
    project_member3:this.project_member3,
    project_member4: this.project_member4,
    project_member5: this.project_member5,
    project_member6:this.project_member6,
    github_link:this.github_link,
    };
    this.service.uploadProject(val).subscribe(res=>{alert(res.toString());
    })
    // this.http.post('https://trakadrf.herokuapp.com/project',val).subscribe((val)=>{
      // console.warn("val",val)

    
  }
    // console.warn(val);

}
