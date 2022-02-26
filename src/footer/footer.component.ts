import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }

  ngOnInit() {
  }

}