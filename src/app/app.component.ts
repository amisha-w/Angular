import { Component } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  public static Users : user[] = [
    {username: 'amisha', password:'amisha123'},
    {username: 'gayatri', password:'gayatri123'},
    {username: 'girish', password:'girish123'},
    {username: 'rahul', password:'rahul123'},

    ];

    // public getUsers() {
    //   return this.Users;
    // }

    // public setUsers(users: any): void {
    //   this.Users = users;
    // }
}
