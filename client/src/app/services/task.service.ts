import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  private taskUrl = 'http://localhost:4000/api';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl + '/tasks');
  }

  getTaskById(_id: number): Observable<Task> {
    const idUrl = `${this.taskUrl}/task/${_id}`;
    return this.http.get<Task>(idUrl);
  }

  createTask(title, description) {
    const task = {
      title: title,
      description: description,
      completed: false,
      dateAdded: new Date(),
      dateCompleted: undefined,
    };
    console.log(task);
    return this.http.post<Task>(this.taskUrl + '/task/create', task)
  }
}
