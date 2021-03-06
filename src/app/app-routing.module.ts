import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { UplodProjectComponent } from './project/uplod-project/uplod-project.component';
import { ViewProjectsComponent } from './project/view-projects/view-projects.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'project', component:ProjectComponent,
// children: [
  // {path: 'view',component: ViewProjectsComponent },
  // {path: 'uplod' , component: UplodProjectComponent }
// ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [
  ProjectComponent,
  ViewProjectsComponent,
  UplodProjectComponent]
