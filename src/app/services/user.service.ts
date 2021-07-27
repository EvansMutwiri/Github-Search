import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url_user_search: string = "https://api.github.com/users/"
  // private userInput: string = "evansmutwiri"


  constructor(private http:HttpClient) { }

  searchUser (username: string) {
    var reqUrl: string = this.base_url_user_search + username
    console.log(this.http.get(reqUrl))
  }
}
