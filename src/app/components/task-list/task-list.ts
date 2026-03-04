import { Component, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  heading = input.required<string>();
  tasks = input.required<TaskItem[]>();
}
