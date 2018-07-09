import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import EmpArr, { Employee } from '../array';



/**
 * Generated class for the EmployeeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html',
})
export class EmployeeDetailsPage {
  EmployeeArr = EmpArr;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailsPage');
  }

  employeeID;
  employeeName: String;
  employeeSurname: String;
  employeeRole: string;

  addEmp(employeeID, employeeName, employeeSurname, employeeRole ,url) {

    let emp = new Employee(employeeID, employeeName, employeeSurname, employeeRole ,url)
    EmpArr.push(emp);


    console.log(EmpArr);

  }

  delEmp(i) {
    EmpArr.splice(i, 1);
  }


  delete() {
    const prompt = this.alertCtrl.create({
      title: 'Delete',
      message: 'Your profile has been deleted!',

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('data deleted!');
          }
        },
    

      ]
    });

    prompt.present();

  }



  updateEmp(i) {
    const prompt = this.alertCtrl.create({
      title: 'update',
      inputs: [
        {
          name: 'EmployeeID',
          placeholder: EmpArr[i].employeeID,
        },
        {
          name: 'EmployeeName',
          placeholder: EmpArr[i].employeeName,
        },
        {
          name: 'EmployeeSurname',
          placeholder: EmpArr[i].employeeSurname,
        },
        {
          name: 'EmployeeRole',
          placeholder: EmpArr[i].employeeRole,
        },
      ],

      buttons: [
        {
          text: 'update Employee',
          handler: data => {

            let empid = EmpArr[i].employeeID;
            let empname = EmpArr[i].employeeName;
            let empsurname = EmpArr[i].employeeSurname;
            let emprole = EmpArr[i].employeeRole;
            let url = EmpArr[i].url;

            if (data.EmployeeID != "") {
              let emp = new Employee(data.EmployeeID, empname, empsurname, emprole ,url)
              EmpArr[i] = emp;
            }
            else if (data.EmployeeName != "") {
              let emp = new Employee(empid, data.EmployeeName, empsurname, emprole ,url)
              EmpArr[i] = emp;
            }
            else if (data.EmployeeSurname != "") {
              let emp = new Employee(empid, empname, data.EmployeeSurname, emprole ,url)
              EmpArr[i] = emp;
            }
            else if (data.EmployeeRole != "") {
              let emp = new Employee(empid, empname, empsurname, data.EmployeeRole ,url)
              EmpArr[i] = emp;
            }
            else if (data.EmployeeID != "" && data.EmployeeName != "" && data.EmployeeSurname != "" && data.EmployeeRole != "") {
              let emp = new Employee(data.EmployeeID, data.EmployeeName, data.EmployeeSurname, data.EmployeeRole, url)
              EmpArr[i] = emp;
            }
            console.log('profile updated')
          }
        },
        {
          text: 'cancel',
          handler: data => {
            console.log('cancelled!');
          }
        },
      ]
    });
    prompt.present();

  }




}
