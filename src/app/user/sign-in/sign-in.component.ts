import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private api: ApiService ) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    this.api.login({
      email:this.email,
      password:this.password
    }).subscribe( response => {

    })
  }

}
