import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  taskInput = '';
  tasks: string[] = [];
  editIndex: number | null = null;

  addTask() {
    if (this.taskInput.trim()) {
      if (this.editIndex !== null) {
        this.tasks[this.editIndex] = this.taskInput;
        this.editIndex = null;
      } else {
        this.tasks.push(this.taskInput);
      }
      this.taskInput = '';
    }
  }

  editTask(index: number) {
    this.taskInput = this.tasks[index];
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editIndex === index) {
      this.taskInput = '';
      this.editIndex = null;
    }
  }
}
