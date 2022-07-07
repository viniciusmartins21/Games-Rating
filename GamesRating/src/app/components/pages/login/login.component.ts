import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin = new RequestLogin();

  constructor(
    private loginService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.alertService.info('', 'Funcionalida em implementação');
      },
      (httpError) => {
        this.alertService.error(
          httpError.error.message,
          'Incorrect username or passwords'
        );
      }
    );
  }
}
