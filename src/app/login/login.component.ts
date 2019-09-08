import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import {  Router, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router ) { }
    Users : user[] = [
    {username: 'amisha', password:'amisha123'}
];
  ngOnInit() {

  }

  login(event){
    event.preventDefault();
    const target =event.target;
    const username=event.target.querySelector('#uname').value;
    const pass=event.target.querySelector('#psw').value;
    console.log("Username: "+username+" pass: "+pass);
    this.Users.forEach(user => {
      if(user.username==username&&user.password==pass){
        this.router.navigate(['/home']);
      }else{
        alert("Invalid username or password.");
      }
    });
  }

}
