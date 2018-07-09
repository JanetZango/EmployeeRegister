import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { EmployeePage } from '../employee/employee';
import { EmployeeDetailsPage } from '../employee-details/employee-details';
import loginArr from '../../app/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password;
  username;
  loginArr = loginArr;

  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  nextpage() {
    this.navCtrl.push(EmployeePage)
  }

  
  assignUsername(event){
    this.username = event.target.value;
  }

  assignPassword(event){
    this.password = event.target.value;
  }


  alert() {
    const prompt = this.navAlert.create({
      title: 'Login',
      message: 'you have succesfully logged in',


      buttons: [
        {
          text: 'Okay',
          handler: data => {
            console.log('succesfully logged in');
          }
        },
      ]
    });
    prompt.present();
  }

  incorrect(){
    const prompt = this.navAlert.create({
      title: 'Wrong information',
      message: 'alert!',


      buttons: [
        {
          text: 'Okay',
          handler: data => {
            console.log('incorrect password or username');
          }
        },
      ]
    });
 
  }

  signInUser() {
    console.log(this.username, this.password);
    for (let i = 0; i < loginArr.length;
      i++) {
      if (this.username == loginArr[i].username && this.password == loginArr[i].password) {
        this.navCtrl.push(EmployeePage);
        this.alert();
      }
      else  if (this.username !== loginArr[i].username && this.password !== loginArr[i].password) {
       this.incorrect();
      }
    }
  }
}
