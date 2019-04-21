import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'https://jsonplaceholder.typicode.com/';
const endpoints = {
  posts: 'posts/',
  comments:	'comments/',
  albums:	'albums/',
  photos:	'photos/',
  todos: 'todos/',
  users: 'users/'
}

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get(api + endpoints['posts']);
  }
  getPost(id: number) {
    return this.http.get(api + endpoints['posts'] + id);
  }
}