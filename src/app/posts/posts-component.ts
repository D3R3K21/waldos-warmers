import { Component } from '@angular/core';
import { Page as Post } from './post';
@Component({
  selector: 'app-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
posts: Post[] = [
{
  message: 'This is not the message',
  pageId: '123456'
},
{
  message: 'This is the message',
  pageId: '246810'
},
{
  message: 'This is not the message either',
  pageId: '98765'
}];

}
