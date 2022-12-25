import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";
import { CarSalesService } from "../app.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerData: any={ }

  constructor(private service: CarSalesService) { }

  ngOnInit(): void {
  }
  register(){
    console.log("data recieved:", this.registerData)
    let input = {
    "userId": 2334,
     "userName": this.registerData.userName, 
    "age": this.registerData.age,
    "gender": this.registerData.gender,
    "password": this.registerData.password
    } 
    this.service.registerService(input).subscribe((result:any)=> {
      console.log('response:', result)
    })
  }
}
