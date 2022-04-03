import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  viewProjects(){
    this.router.navigate(['view'],{relativeTo: this.route});
  }

  uplodProject(){
    this.router.navigate(['uplod'],{relativeTo: this.route});
  }
}
