import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { UplodProjectComponent } from './project/uplod-project/uplod-project.component';
import { ViewProjectsComponent } from './project/view-projects/view-projects.component';
import { TrackerService } from './tracker.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UplodProjectComponent,
    ViewProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
