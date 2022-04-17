import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() projectId: any;
  @Input() projectDeleted: any;
  @Output() closeModal = new EventEmitter();

  deleteModal = false;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  // Function to Delete Project
  async deleteProject(projectId: number) {

    await this.projectsService.deleteProject(projectId);

    this.projectDeleted = true; 
  }


  // FUNCTION TO HIDE POPUPS
  cancel(value: boolean) {
    this.projectDeleted = false;
    this.closeModal.emit(value);
    
  }

}
