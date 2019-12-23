import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService:AlertService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
      // switch (message && message.type) {
      //   case 'success':
      //       message.cssClass = 'alert alert-success';
      //       break;
      //   case 'error':
      //       message.cssClass = 'alert alert-danger';
      //       break;
      // }
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSnackBar() {
    this._snackBar.open(this.message.txt);
  }
}
