import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {

  childMessage : string = "Hello from child component";
  postCount : number = 0
  parentMessage : string = "Message from the child using click event"
  @Input() appPostListTitle : string ='';
  @Output() messageEvent = new EventEmitter()
  

  buttonClicked(){
    console.log("button clicked");
    this.messageEvent.emit(this.parentMessage);
  }
}
