import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent {
  taskService = inject(TaskService);

  taskForm = new FormGroup({
    task: new FormControl('', { nonNullable: true }),
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    // this method is called when form is submitted

    // console.log(this.taskForm.getRawValue()); //log values

    const values = this.taskForm.getRawValue();
    this.taskService.addTask(values.task, values.status);
    this.taskForm.reset(); //to reset the form
  }
}
