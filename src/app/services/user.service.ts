import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string = "EvansMutwiri"
  created_at!: string;
   bio!: string;
  url!: string;
  repos_url!: string;


  constructor(private http:HttpClient) {
    this.username = 'EvansMutwiri'
  }

  getUser ()
  {

    return this.http.get('https://api.github.com/users/' + this.username);
  }
}
