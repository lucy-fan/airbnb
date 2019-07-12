import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder
    ) { 
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]))
    });
  }

  ngOnInit() {
  }

  navToHome() {
    this.navCtrl.navigateForward("tabs/tabs/tab1");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }
}
