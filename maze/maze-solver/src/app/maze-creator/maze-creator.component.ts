import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-maze-creator',
  templateUrl: './maze-creator.component.html',
  styleUrls: ['./maze-creator.component.css']
})
export class MazeCreatorComponent implements OnInit {

  private maze = [];

  constructor(private router: Router,
    private service: AppDataService
  ) { }


  // maze  = [
  //   ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  //   ['#', 'A', '.', '.', '.', '#', '.', '#', '.', '#'],
  //   ['#', '.', '#', '.', '#', '#', '.', '#', '.', '#'],
  //   ['#', '.', '#', '.', '.', '.', '.', '#', 'B', '#'],
  //   ['#', '.', '#', '.', '#', '#', '.', '#', '.', '#'],
  //   ['#', '.', '.', '.', '.', '#', '.', '.', '.', '#'],
  //   ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  // ];

  ngOnInit() {

  }

  solveMaze() {
    this.service.maze = this.maze;
    this.router.navigate([{outlets: {mazeresolver: ['mazeresolver']}}]);
  }

  createMaze(name) {
    this.processFile(name, this.setMaze.bind(this));
  }

  processFile(name, setMaze) {
    const fileReader =  new FileReader();
    const fileName = name.srcElement.files[0];
    fileReader.onload =  function(thefile) {
          const maze = [];
          const allrows = fileReader.result.split(/\r?\n|\r/);
          for (let i = 0; i < allrows.length; i++) {
            const rowCell = allrows[i].split(',');
            maze.push(rowCell);
          }
          setMaze(maze);
        };
    fileReader.readAsText(fileName);
  }

  setMaze(maze) {
    this.maze = maze;
  }
}
