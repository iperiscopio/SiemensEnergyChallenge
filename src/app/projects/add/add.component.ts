import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProjectsService } from 'src/app/service/projects.service';
import { Projects } from 'src/app/shared/projects-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  projects!: Projects[]

  project: Projects = {
    project_id: 0,
    title: '',
    start_date: '',
    end_date: '',
    status: 0,
    user_id: 0
  }

  projectCreated = false;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
  }

  projectCreate(f: NgForm) {

    this.projectService.createProject(f);

    this.projectCreated = true;
    f.reset();
  }

}
