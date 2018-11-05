import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import loginArr, { login } from '../../app/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  password: any;
  username: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
  assignUsername(event){
    this.username = event.target.value;
  }
  
  assignPassword(event){
    this.password = event.target.value;
  }

  nextpage1(){
    if(this.username != null &&
        this.username != '' &&
        this.password != null &&
        this.password != ''){
          let registration = new login(this.username, this.password)
          loginArr.push(registration);
          console.log(registration);
          this.navCtrl.push(LoginPage);
    }else{
      alert("wrong data boss");
    }
  }
 close(){
   this.navCtrl.pop();
 }

}
