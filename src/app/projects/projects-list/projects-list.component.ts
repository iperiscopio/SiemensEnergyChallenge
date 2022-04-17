import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/service/projects.service';
import { Projects } from 'src/app/shared/projects-model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects!: Projects[]

  selectedProject: Projects = {
    project_id: 0,
    title: '',
    start_date: '',
    end_date: '',
    status: 0,
    user_id: 0
  }

  editModal = false;
  projectUpdated = false;

  deleteModal = false;
  projectDeleted = false;

  projectId: number = 0;
  projectTitle: string = "";
  projectStartDate: string = "";
  projectEndDate: string = "";
  projectStatus: number = 0;


  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getprojects();
  }

  // FETCH PROJECTS
  getprojects() {
    this.projects = this.projectsService.getProjects();
  }


  // UPDATE MODAL:
  // Function to open modal to update project
  openEditionModal(project: Projects) {
    this.editModal = true;
    this.deleteModal = false;
    this.projectUpdated = false;
    

    this.selectedProject.project_id = project.project_id!;
    this.selectedProject.title = project.title;
    this.selectedProject.start_date = project.start_date;
    this.selectedProject.end_date = project.end_date;
    this.selectedProject.status = project.status;

  }


  // DELETE MODAL:
  // Function to open modal to delete project
  openDeletionModal(project: Projects) {
    this.deleteModal = true;
    this.editModal = false;
    this.projectDeleted = false;

    this.projectId = project.project_id;
  }

  


  // FUNCTION TO HIDE POPUPS
  cancel(event: boolean) {

    this.editModal = event;
    // this.projectUpdated = event;
    // console.log(this.projectUpdated);
    

    this.deleteModal = event;

  }

}
