import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  taskItem = input.required<TaskItem>();
  statusValues = ['Todo', 'InProgress', 'Completed'];
  taskService = inject(TaskService);

  action = computed(() => {
    const taskItemValue = this.taskItem();

    return this.statusValues.filter((t) => taskItemValue.status !== t);
  });

  markAs(text: string, updatedStatus: string) {
    this.taskService.markAsStatus(text, updatedStatus);
  }
}
