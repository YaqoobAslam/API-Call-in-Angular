import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UsersDataService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
