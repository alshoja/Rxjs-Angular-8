import { Comments } from './Model/comments';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './Model/post';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    const head = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+token
    })

    return this.http.get<Post[]>(this.url + 'posts', { headers: head })
  }

  public comments(): Observable<Comments[]> {
    const head = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+token
    })

    return this.http.get<Comments[]>(this.url + 'comments', { headers: head })
  }

  public getpost(id): Observable<Post[]>{
    const head = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+token
    })

    return this.http.get<Post[]>(this.url + 'posts/'+id, { headers: head }).pipe(
      catchError(err => of(null))
    )
  }
 
}