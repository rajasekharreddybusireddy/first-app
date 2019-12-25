import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
getStudentS(){
  return [
    {
      "rollNo":101,
      "name":"Rajasekhar Reddy",
      "marks":89.5
    },
    {
      "rollNo":102,
      "name":"Hemanth Reddy",
      "marks":70.5
    },
    {
      "rollNo":103,
      "name":"Narender",
      "marks":95.5
    },
    {
      "rollNo":104,
      "name":"Manikanta",
      "marks":65.2 
     },
     {
      "rollNo":105,
      "name":"Linga rao",
      "marks":45.8 
     }
  ]
}
  constructor() { }
}
