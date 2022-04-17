import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  addProject = false;
  openProject = false;
  
  openProjects() {
    this.openProject = true;
    this.addProject = false;
  }
  
  openCreateProject() {
    this.addProject = true;
    this.openProject = false;
  }
}
