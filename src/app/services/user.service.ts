import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = 'environment.username'


  constructor(private http: HttpClient) {

  }

public getUser(): Observable<User> {
return this.http.get<User>(`${environment.apiUrl}/
users/${environment.username}`);
}
}
