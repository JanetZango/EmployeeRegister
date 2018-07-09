export class Employee{
    employeeID;
    employeeName:string;
    employeeSurname:string;
    employeeRole:string;
    url:string;


    constructor(employeeID,employeeName,employeeSurname,employeeRole,url){
       this.employeeID = employeeID;
       this.employeeName = employeeName;
       this.employeeSurname = employeeSurname;
       this.employeeRole =employeeRole;
       this.url = url;

    }

  
    
}

let EmpArr = [];
export default EmpArr;


