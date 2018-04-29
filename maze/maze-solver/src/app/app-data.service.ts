import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppDataService {

  constructor() { }

  private _maze: BehaviorSubject<String[]> = new BehaviorSubject<String[]>(null);

  private _solved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  $solved = this._solved.asObservable();

  setSolvedStatus(solved: boolean){
    this._solved.next(solved);
  }

  set maze(maze: String[]) {
    this._maze.next(maze);
  }

  get maze(): String[] {
    return this._maze.getValue();
  }

}
