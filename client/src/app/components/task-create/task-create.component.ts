import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {
  createTaskForm: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder, private router: Router) {
    this.createTaskForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  addTask(title, description) {
    this.taskService.createTask(title, description).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  ngOnInit() {};
}
