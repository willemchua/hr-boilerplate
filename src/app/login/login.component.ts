import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PATH } from './../core/constant/path.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigateByUrl(PATH.DASHBOARD);
  }

}
