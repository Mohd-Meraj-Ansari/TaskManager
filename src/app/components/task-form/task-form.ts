import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    task: new FormControl('', { nonNullable: true }),
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    // this method is called when form is submitted

    console.log(this.taskForm.getRawValue()); //log values

    this.taskForm.reset(); //to reset the form
  }
}
