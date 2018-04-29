import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { MazeResolverService } from './service/maze-resolver.service';

@Component({
  selector: 'app-maze-resolver',
  templateUrl: './maze-resolver.component.html',
  styleUrls: ['./maze-resolver.component.css']
})
export class MazeResolverComponent implements OnInit {

  solvedMaze;
  count;

  constructor(private service: AppDataService, private mazeResolver: MazeResolverService) { }

  ngOnInit() {
    this.mazeResolver.resolveMaze(this.service.maze).subscribe(
                                  data => {
                                  this.solvedMaze = data['maze'];
                                  this.count = data['count'];
                                  this.service.setSolvedStatus(true);
                                },
                                error => {
                                  console.log('Back end returned an error');
                                  this.service.setSolvedStatus(false);
                                });
  }

}
