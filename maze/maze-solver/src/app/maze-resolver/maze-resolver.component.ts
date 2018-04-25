import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { MazeResolverService } from './service/maze-resolver.service';

@Component({
  selector: 'app-maze-resolver',
  templateUrl: './maze-resolver.component.html',
  styleUrls: ['./maze-resolver.component.css']
})
export class MazeResolverComponent implements OnInit {

  private maze;

  solvedMaze;
  count;

  constructor(private service: AppDataService, private mazeResolver: MazeResolverService) { }

  ngOnInit() {
    this.maze = this.service.maze;
    this.mazeResolver.resolveMaze(this.maze).subscribe(data => {
                                  this.solvedMaze = data['maze'];
                                  this.count = data['count'];
                                });
  }

}
