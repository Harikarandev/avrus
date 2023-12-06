import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}
  loadpost(): Promise<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
