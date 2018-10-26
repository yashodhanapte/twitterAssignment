import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private api: ApiService) { }
  notificationInfoObject: any;
  ngOnInit() {
    this.notificationData();
  }

  /**
  * @description - method to call data from api for Notification tab main section
  */
  notificationData() {
    this.api.getNotificationData().subscribe((res) => {
      this.notificationInfoObject = res;
      console.log(`notification data`, this.notificationInfoObject);
    }, (err) => {
      console.log(`error occured`, err);
    })
  }

}
