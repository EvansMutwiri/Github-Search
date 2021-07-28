import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  title = 'Github-Search';
  username = environment.username;
}
