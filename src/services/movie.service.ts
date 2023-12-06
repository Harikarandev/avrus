import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://movieapp-91125-default-rtdb.firebaseio.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  loadmovies(): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/movies.json`).toPromise();
  }
  
}