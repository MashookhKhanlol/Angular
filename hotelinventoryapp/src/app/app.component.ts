import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppHeader } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, AppHeader, FormsModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  // title = 'hotelinventoryapp';
  // isActive : boolean = true
  // username : string = "John Doe"

  // userObj : Array<any> = [
  //   {id : 1 , name : "John" , email : "john@gmail.com"},
  //   {id : 2 , name : "Ritik" , email : "ritik@gmail.com"},
  //   {id : 3 , name : "Roshan" , email : "roshan@gmail.com"},
  //   {id : 4 , name : "Rahul" , email : "rahul@gmail.com"},
    
  // ]

  // addNewUser(){
  //   let newUser = {id:5 , name : "User new" , email: "newUser@gmail.com"}
  //   this.userObj.push(newUser);
  // }

  // deleteUser(user : object){
  //   let index = this.userObj.indexOf(user);
  //   this.userObj.splice(index,1);
  // }
  // deleteUser(index : number){
  //   this.userObj.splice(index,1);
  // }

  message : string = '';
  @ViewChild(PostsListComponent) childMessage : any; 

  constructor(){
    console.log(this.childMessage);
  }

  ngAfterViewInit(){
      console.log(this.childMessage)
      this.message = this.childMessage.childMessage;
  }

  recieveMessage(message : string){
    console.log(message)
  }

    isLoggedIn : boolean = true;

    postTitle : string = "Post 1";
}
