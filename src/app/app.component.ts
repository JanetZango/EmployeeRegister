import { Component } from '@angular/core';
import { Employee } from './Emp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

EmpArr = new Array();
identification;
name:string;
surname:string;
role:string;

  constructor(){

  }

  AddEmp(identification,name,surname,role){

    let Emp = new Employee(identification,name,surname,role)

    this.EmpArr.push(Emp);

    alert(this.EmpArr);
    console.log(this.EmpArr);

  }

}
