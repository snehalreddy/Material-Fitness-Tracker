import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  // the next line is one of the changes when compared to the project online
  exercises: string[] = ['Squats', 'Deadlift', 'Benchpress', 'Rowing'];

  @Output() trainingStart = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onStartTraining() {
    this.trainingStart.emit();
  }
}
