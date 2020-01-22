import { Component, OnInit } from '@angular/core';
import { CheckFormService } from "../check-form.service"

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

  constructor(private checkForm: CheckFormService) { }

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
      console.log("Username not entered");
      return false;
    } else if (!this.checkForm.checkLogin(user.login)) {
      console.log("Login not entered");
      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      console.log("Email not entered");
      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      console.log("Password not entered");
      return false;
    }

  }
}
