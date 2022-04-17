import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() project: any;
  @Input() projectUpdated: any;
  @Output() closeModal = new EventEmitter();

  editModal = false;
  

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {

  }

  // Function to Update Project
  async projectUpdate(f: NgForm, id: number) {
    
    await this.projectsService.updateProject(f, id);
    
    this.projectUpdated = true;
  }

  // FUNCTION TO HIDE POPUPS
  cancel(value: boolean) {
    this.projectUpdated = false;
    this.closeModal.emit(value);
    
  }

}
