import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(
    private http: HttpClient
  ) {}

  fetchAll(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
