import { Component, computed, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { TaskService } from './services/task';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskService = inject(TaskService);
  private tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((t) => t.status === 'Todo');
  });

  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((t) => t.status === 'InProgress');
  });

  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((t) => t.status === 'Completed');
  });
}
