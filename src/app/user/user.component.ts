import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user: any;

  constructor(private userService: UserService) {


   }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  getUser(){
    this.userService.getUser().subscribe((user) => {
      this.user =user;
      console.log (this.user)
    });
  }

}
