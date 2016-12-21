import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {WorkoutService} from '../../app/services/workout.service';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController, private workoutService: WorkoutService) {

  }

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => { console.log(workouts);});
  }

}
