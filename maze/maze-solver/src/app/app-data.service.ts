import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppDataService {

  constructor() { }

  private _maze: BehaviorSubject<String[]> = new BehaviorSubject<String[]>(null);

  set maze(maze: String[]) {
    this._maze.next(maze);
  }

  get maze(): String[] {
    return this._maze.getValue();
  }

}
