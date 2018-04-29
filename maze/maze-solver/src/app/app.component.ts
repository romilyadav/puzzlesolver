import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Maze Solver';

  step = 0;
  constructor(private router: Router, private appDataService: AppDataService) {}

  ngOnInit(): void {
    this.appDataService.$solved.subscribe(solved => this.step = solved ? 1 : 0);
    this.router.navigate([{outlets: {mazecreator: ['mazecreator']}}]);
  }

  setStep(index: number) {
    this.step = index;
  }
}
