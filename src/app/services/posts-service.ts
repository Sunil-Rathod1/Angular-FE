import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl: string = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts/me`);
  }
  createPost(postData: any) {
    return this.http.post(`${this.baseUrl}/posts`, postData);
  }
}
