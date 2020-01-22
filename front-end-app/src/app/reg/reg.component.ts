import { Component, OnInit } from '@angular/core';
import { CheckFormService } from "../check-form.service"
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;

  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  userRegisterClick() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    
    if(!this.checkForm.checkName(user.name)) {
      this.flashMessages.show("Username not entered", {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    } else if (!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Login not entered", {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("Email not entered", {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Password not entered", {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }

  }
}
