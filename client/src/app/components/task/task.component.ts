import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  tasks: Task[];
  displayedColumns = ['title', 'dateAdded', 'dateCompleted', 'completed'];

  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => { this.tasks = tasks });
  }

  ngOnInit() {
    this.getTasks();
    console.log(this.tasks);
  }
}
