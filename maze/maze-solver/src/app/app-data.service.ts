import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppDataService {

  constructor() { }

  private _maze: BehaviorSubject<{}> = new BehaviorSubject<{}>(null);

  set maze(maze: any) {
    this._maze.next(maze);
  }

  get maze(): any {
    return this._maze.getValue();
  }

}
