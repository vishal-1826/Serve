import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidemoService {
 url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

 public get(){
    return this.http.get(this.url);
  }
}
