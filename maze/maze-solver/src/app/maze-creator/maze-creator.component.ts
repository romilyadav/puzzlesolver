import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-maze-creator',
  templateUrl: './maze-creator.component.html',
  styleUrls: ['./maze-creator.component.css']
})
export class MazeCreatorComponent implements OnInit {


  constructor(private router: Router, private service: AppDataService) { }


  maze  = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'A', '.', '.', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '#', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '.', '.', '.', '#', 'B', '#'],
    ['#', '.', '#', '.', '#', '#', '.', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

  ngOnInit() {
  }

  solveMaze() {
    this.service.maze = {maze: this.maze};
    this.router.navigate([{outlets: {mazeresolver: ['mazeresolver']}}]);
  }

}
