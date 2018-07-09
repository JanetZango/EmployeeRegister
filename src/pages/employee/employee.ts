import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import EmpArr, { Employee } from '../array';
import { AlertController } from 'ionic-angular';
import { EmployeeDetailsPage } from '../employee-details/employee-details';


/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  url ="";
  EmployeeArr = EmpArr;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }


  employeeID;
  employeeName: String;
  employeeSurname: String;
  employeeRole: string;


  addEmp(employeeID, employeeName, employeeSurname, employeeRole,url) {

    let emp = new Employee(employeeID, employeeName, employeeSurname, employeeRole,this.url)
    EmpArr.push(emp);


    console.log(EmpArr);

  }


  nextpage(){
    this.navCtrl.push(EmployeeDetailsPage);
  }
  
  addImage(event: any){
    /*basically what this method below does is that it takes
    an image file from the local machine or device
    and converts it to url*/
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();//creating an instance of the file reader class

      reader.onload = (event:any) => {//upon recieving data it will fire this event
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);//convert the image to a link(url)
    }
  }



}
