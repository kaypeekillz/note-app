import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../core/notifications/notifications.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  notification: any

  constructor(private alert: NotificationsService) { }

  ngOnInit() {
    this.alert.alertStatus.subscribe(res =>{
      this.notification = res
    });
  }

  dismiss() {
    this.alert.dismissMessage()
  }

}
