import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee : Employee={
"id":1,
"name":"Rajasekhar reddy",
"email":"talk2rajasekhar@gmail.com",
"mobile":8888888888
}
  constructor() { }

  ngOnInit() {
  }

}
