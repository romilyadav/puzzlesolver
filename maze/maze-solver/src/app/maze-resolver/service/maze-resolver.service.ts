import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MazeResolverService {

  private basePath = '/resolve';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  resolveMaze(maze: String[]) {
    const uri = environment.apiUrl + this.basePath;
    return this.http.post(uri, maze, this.httpOptions);
  }

}
