import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MazeResolverService {

  private basePath = '/resolve';

  result: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  resolveMaze(maze: any) {
    const uri = environment.apiUrl + this.basePath;
    return this.http.post(uri, maze, this.httpOptions);
  }

}
