import { Injectable } from '@angular/core';

import { Projects } from '../shared/projects-model';
import { Projects_Data } from '../shared/project_data';
import { UserInfo } from '../shared/userInfo-model';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects!: Projects[];
  private user!: UserInfo[];

  constructor(private userService: UserInfoService) { }

  getProjects(): Projects[] {
    return Projects_Data;
  }


  createProject(f: any) {
    this.user = this.userService.getUserInfo();
    let allProjects = Projects_Data;

    let projectId: number = Math.floor(Math.random() * 999) + 1;
    
    let newProject = {
      project_id: projectId,
      title: f.form.value.title,
      start_date: f.form.value.start_date,
      end_date: f.form.value.end_date,
      status: f.form.value.status,
      user_id: this.user[0].user_id
    }

    allProjects.unshift(newProject);
    
    
    return Projects_Data;
  }


  updateProject(f: any, id: number): Projects[] {
    let allProjects = Projects_Data;

    let projectId = allProjects.findIndex(object => {
      return object.project_id === id
    });
    
    allProjects[projectId].title = f.form.value.title
    allProjects[projectId].start_date = f.form.value.start_date
    allProjects[projectId].end_date = f.form.value.end_date
    allProjects[projectId].status = f.form.value.status

    return allProjects;
    
  }


  deleteProject(id: number) {
    let allProjects = Projects_Data;

    let index = allProjects.findIndex(object => {
      return object.project_id === id
    });

    allProjects.splice(index, 1);
  
    return allProjects;
  }
}
