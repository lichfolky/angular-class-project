import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css'],
})
export class PayFormComponent {
  isChecked = false;

  task = {
    color: 'primary',
    subtasks: [
      { name: '5 euri', completed: false, color: 'primary' },
      { name: '10 euri', completed: false, color: 'accent' },
      { name: '15 euri', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }
}
