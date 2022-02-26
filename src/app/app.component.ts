import { Component, VERSION } from '@angular/core';
import { UsersDataService } from '../users-data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:'API Call Get Data From API and display'
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }
}
